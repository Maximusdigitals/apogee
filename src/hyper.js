import * as THREE from 'three';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { mergeVertices } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { glowTex } from './fx.js';

// Official Hyperliquid blob mark, verbatim from the Hyperliquid brand kit (Hyperliquid_Blob_Green.svg, fill #97fce4).
const BLOB = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><path d="M175.11589,99.27891c0,49.46366-30.3687,65.33789-46.47302,51.30413-13.11357-11.5031-17.02471-35.88989-36.81018-38.42055-25.07698-2.99085-27.37764,30.36839-43.94216,30.36839-19.3254,0-23.00642-27.83773-23.00642-42.33179,0-14.72405,4.14115-34.73961,20.47565-34.73961,19.09528,0,20.24566,28.75802,44.17226,27.14754,23.69661-1.61047,24.1567-31.51877,39.80103-44.17224,13.57335-11.27313,45.78283.69019,45.78283,50.84413Z"/></svg>';
export const MINT = 0x97fce4;

export class Hyper {
  constructor(renderer, canvas, mobile) {
    this.r = renderer; this.mobile = mobile;
    const s = this.scene = new THREE.Scene();
    const HORIZON = new THREE.Color(0x0a2422);
    s.fog = new THREE.Fog(HORIZON, 70, 330);
    this.cam = new THREE.PerspectiveCamera(mobile ? 48 : 38, 1, 0.5, 2000);
    const pm = new THREE.PMREMGenerator(renderer);
    s.environment = pm.fromScene(new RoomEnvironment(), 0.04).texture; pm.dispose();
    s.environmentIntensity = .62;

    // sky dome: near-black overhead to deep Hyperliquid teal at the horizon
    s.add(new THREE.Mesh(new THREE.SphereGeometry(900, 48, 24), new THREE.ShaderMaterial({
      side: THREE.BackSide, depthWrite: false, fog: false,
      uniforms: { top: { value: new THREE.Color(0x020409) }, mid: { value: new THREE.Color(0x041013) }, hor: { value: HORIZON } },
      vertexShader: 'varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }',
      fragmentShader: 'uniform vec3 top,mid,hor; varying vec3 vD; void main(){ float y = vD.y; vec3 c = mix(hor, mid, smoothstep(0.0, .18, y)); c = mix(c, top, smoothstep(.18, .7, y)); c += vec3(.012,.05,.045) * exp(-abs(y) * 22.); gl_FragColor = vec4(c,1.); }'
    })));
    // stars
    { const n = 1400, p = new Float32Array(n * 3), sz = new Float32Array(n);
      for (let i = 0; i < n; i++) { const u = Math.random(), v = Math.random() * .92 + .08, th = u * Math.PI * 2, y = v; const rr = Math.sqrt(1 - y * y); p.set([Math.cos(th) * rr * 800, y * 800, Math.sin(th) * rr * 800], i * 3); sz[i] = .6 + Math.pow(Math.random(), 6) * 2.4; }
      const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(p, 3)); g.setAttribute('size', new THREE.BufferAttribute(sz, 1));
      this.starMat = new THREE.ShaderMaterial({ transparent: true, depthWrite: false, fog: false, blending: THREE.AdditiveBlending, uniforms: { dpr: { value: 1 } },
        vertexShader: 'attribute float size; uniform float dpr; varying float vA; void main(){ vA = smoothstep(.0,.25,normalize(position).y); gl_PointSize = size * dpr * 1.6; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }',
        fragmentShader: 'varying float vA; void main(){ float d = length(gl_PointCoord-.5); gl_FragColor = vec4(vec3(.85,.95,1.), smoothstep(.5,.0,d) * vA * .9); }' });
      s.add(new THREE.Points(g, this.starMat)); }

    // ground: dark polished stone; the mirrored copy below shows through as a reflection
    const ground = new THREE.Mesh(new THREE.CircleGeometry(600, 96), new THREE.MeshStandardMaterial({ color: 0x020506, roughness: .28, metalness: .5, transparent: true, opacity: .93, envMapIntensity: .06 }));
    ground.rotation.x = -Math.PI / 2; ground.renderOrder = 1; s.add(ground);
    // engineered grid on the ground, fading out
    const grid = new THREE.Mesh(new THREE.PlaneGeometry(700, 700), new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, uniforms: { col: { value: new THREE.Color(MINT) }, t: { value: 0 } },
      vertexShader: 'varying vec3 vP; void main(){ vec4 w = modelMatrix * vec4(position,1.); vP = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }',
      fragmentShader: `uniform vec3 col; uniform float t; varying vec3 vP;
        float gl(vec2 p, float s){ vec2 g = abs(fract(p / s - .5) - .5) / fwidth(p / s); return 1. - min(min(g.x, g.y), 1.); }
        void main(){ float r = length(vP.xz); float a = gl(vP.xz, 6.) * .32 + gl(vP.xz, 30.) * .5;
          float ring = smoothstep(1.2, 0., abs(r - mod(t * 14., 240.) - 26.)) * smoothstep(240., 30., r) * .9;
          a *= smoothstep(220., 30., r) * smoothstep(24.5, 28., r); gl_FragColor = vec4(col, a * .11 + ring * .2 * smoothstep(25., 32., r)); }`
    }));
    grid.rotation.x = -Math.PI / 2; grid.position.y = .02; grid.renderOrder = 2; s.add(grid); this.gridMat = grid.material;

    const world = new THREE.Group(); s.add(world);
    // plinth
    const plinthMat = new THREE.MeshPhysicalMaterial({ color: 0x060b0d, roughness: .3, metalness: .6, clearcoat: .5, clearcoatRoughness: .25, envMapIntensity: .08 });
    const plinth = new THREE.Mesh(new THREE.CylinderGeometry(24, 24.6, 1.1, 160, 1), plinthMat); plinth.position.y = .55; world.add(plinth);
    const edge = new THREE.Mesh(new THREE.TorusGeometry(24.05, .06, 8, 280), new THREE.MeshBasicMaterial({ color: new THREE.Color(MINT).multiplyScalar(2.2), toneMapped: false }));
    edge.rotation.x = Math.PI / 2; edge.position.y = 1.1; world.add(edge);
    const edge2 = edge.clone(); edge2.scale.setScalar(29 / 24.05); edge2.position.y = .03; edge2.material = new THREE.MeshBasicMaterial({ color: new THREE.Color(MINT).multiplyScalar(.6), transparent: true, opacity: .5, toneMapped: false }); world.add(edge2);

    // the monument: the official blob, extruded with deep bevels
    const data = new SVGLoader().parse(BLOB), shapes = [];
    data.paths.forEach(p => SVGLoader.createShapes(p).forEach(sh => {
      const pts = sh.extractPoints(160), ns = new THREE.Shape(pts.shape.map(v => new THREE.Vector2(v.x, -v.y)));
      pts.holes.forEach(h => ns.holes.push(new THREE.Path(h.map(v => new THREE.Vector2(v.x, -v.y))))); shapes.push(ns);
    }));
    let geo = new THREE.ExtrudeGeometry(shapes, { depth: 12, steps: 1, curveSegments: 1, bevelEnabled: true, bevelThickness: 6, bevelSize: 5, bevelSegments: 14 });
    geo.deleteAttribute('normal'); geo.deleteAttribute('uv'); geo = mergeVertices(geo, 1e-3); geo.computeVertexNormals();
    geo.computeBoundingBox(); const bb = geo.boundingBox, c = bb.getCenter(new THREE.Vector3());
    const S = 0.22; geo.translate(-c.x, -bb.min.y, -c.z); geo.scale(S, S, S);
    this.size = new THREE.Vector3().subVectors(bb.max, bb.min).multiplyScalar(S);
    this.mat = new THREE.MeshPhysicalMaterial({ color: MINT, roughness: .17, metalness: 0, clearcoat: 1, clearcoatRoughness: .02, envMapIntensity: .5, specularIntensity: .7 });
    const bld = this.building = new THREE.Mesh(geo, this.mat); bld.position.y = 1.1 - .9; world.add(bld);
    // soft contact shadow + mint pool of light
    const shadow = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: glowTex([[0, 'rgba(0,0,0,.85)'], [.55, 'rgba(0,0,0,.35)'], [1, 'rgba(0,0,0,0)']]), transparent: true, depthWrite: false }));
    shadow.rotation.x = -Math.PI / 2; shadow.scale.set(this.size.x * 1.25, this.size.z * 3.2, 1); shadow.position.y = 1.115; world.add(shadow);
    const pool = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: glowTex([[0, 'rgba(151,252,228,.35)'], [.5, 'rgba(151,252,228,.08)'], [1, 'rgba(151,252,228,0)']]), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
    pool.rotation.x = -Math.PI / 2; pool.scale.set(110, 110, 1); pool.position.y = .05; world.add(pool);

    // the signal you saw from orbit: a faint shaft of light rising from the monument
    const beam = new THREE.Mesh(new THREE.CylinderGeometry(2.4, 7, 260, 48, 1, true), new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, fog: false, uniforms: { col: { value: new THREE.Color(MINT) }, t: { value: 0 } },
      vertexShader: 'varying vec2 vU; varying vec3 vN; varying vec3 vV; void main(){ vU = uv; vN = normalize(normalMatrix * normal); vec4 mv = modelViewMatrix * vec4(position,1.); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }',
      fragmentShader: 'uniform vec3 col; uniform float t; varying vec2 vU; varying vec3 vN; varying vec3 vV; void main(){ float f = pow(abs(dot(vN, vV)), 2.); float a = smoothstep(1., .0, vU.y) * smoothstep(0., .08, vU.y) * f * (.05 + .02 * sin(t * 1.3 + vU.y * 9.)); gl_FragColor = vec4(col, a); }'
    }));
    beam.position.y = 130 + 1.1; world.add(beam); this.beamMat = beam.material;

    // mirror world for the reflection
    const mirror = world.clone(); mirror.scale.y = -1; mirror.remove(mirror.children.find(o => o.material === beam.material)); s.add(mirror);
    mirror.traverse(o => { if (o.material && o.material.map) o.visible = false; });

    // drifting motes
    { const n = mobile ? 160 : 320, p = new Float32Array(n * 3);
      for (let i = 0; i < n; i++) { const a = Math.random() * 6.28, r = 8 + Math.random() * 70; p.set([Math.cos(a) * r, Math.random() * 40, Math.sin(a) * r], i * 3); }
      const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(p, 3));
      this.motes = new THREE.Points(g, new THREE.PointsMaterial({ color: MINT, size: .18, transparent: true, opacity: .55, blending: THREE.AdditiveBlending, depthWrite: false }));
      s.add(this.motes); }

    // lights
    s.add(new THREE.HemisphereLight(0xdffff8, 0x010405, .06));
    const key = new THREE.DirectionalLight(0xffffff, 1.15); key.position.set(-50, 70, 30); s.add(key);
    const rim = new THREE.DirectionalLight(0x8fdcff, 1.4); rim.position.set(40, 25, -60); s.add(rim);

    this.controls = new OrbitControls(this.cam, canvas);
    Object.assign(this.controls, { enableDamping: true, dampingFactor: .06, enablePan: false, minDistance: 42, maxDistance: 170, maxPolarAngle: 1.5, minPolarAngle: .2, rotateSpeed: mobile ? .7 : .5, zoomSpeed: .6, autoRotate: true, autoRotateSpeed: -.35 });
    this.controls.target.set(0, this.size.y * .42 + .6, 0); this.controls.enabled = false;
    this.controls.addEventListener('start', () => { this.controls.autoRotate = false; clearTimeout(this._ar); });
    this.controls.addEventListener('end', () => { clearTimeout(this._ar); this._ar = setTimeout(() => { if (!this.reduced) this.controls.autoRotate = true; }, 6000); });
    this.ray = new THREE.Raycaster(); this.t = 0; this.intro = null;
  }
  resize(w, h, dpr) { this.cam.aspect = w / h; this.cam.fov = w / h < .8 ? 52 : 38; this.cam.updateProjectionMatrix(); this.starMat.uniforms.dpr.value = dpr; if (!this.intro) this.controls.target.y = this.size.y * (w / h < .8 ? .6 : .42) + .6; }
  enter(reduced) {
    this.reduced = reduced; this.controls.autoRotate = !reduced;
    const far = this.cam.aspect < .8 ? 112 : 90;
    this.end = new THREE.Vector3(far * .3, far * .16, far * .95); this.start = new THREE.Vector3(6, 230, 30);
    this.intro = { t: 0, d: reduced ? 1.2 : 3.6 }; this.cam.position.copy(this.start); this.controls.enabled = false;
  }
  update(dt) {
    this.t += dt; this.gridMat.uniforms.t.value = this.t; this.beamMat.uniforms.t.value = this.t;
    this.motes.rotation.y += dt * .01; this.motes.position.y = Math.sin(this.t * .3) * .6;
    if (this.intro) {
      const I = this.intro; I.t += dt; const k = Math.min(1, I.t / I.d), e = 1 - Math.pow(1 - k, 4);
      this.cam.position.lerpVectors(this.start, this.end, e);
      const tgt = this.controls.target; this.cam.lookAt(tgt.x, tgt.y * e + 0 * (1 - e), tgt.z);
      if (k >= 1) { this.intro = null; this.controls.enabled = true; this.controls.update(); }
    } else this.controls.update(dt);
  }
  pick(ndc) {
    this.ray.setFromCamera(ndc, this.cam);
    if (this.ray.intersectObject(this.building, false).length) return true;
    // forgiving tap target: anywhere inside the monument's bounding box counts
    if (!this.box) { this.building.geometry.computeBoundingBox(); this.box = this.building.geometry.boundingBox.clone().applyMatrix4(this.building.matrixWorld).expandByScalar(1.5); }
    return this.ray.ray.intersectsBox(this.box);
  }
}
