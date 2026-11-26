import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { glowTex } from './fx.js';

// "Mars Base Alpha": a fan-made, SpaceX-inspired easter egg. Generic stainless Starship-style lander (no logos), two domes, a six-wheel rover, waving astronauts.
const V3 = THREE.Vector3, PI = Math.PI;
const hash = (x, z) => { let h = Math.sin(x * 127.1 + z * 311.7) * 43758.5453; return h - Math.floor(h); };
const sm = t => t * t * (3 - 2 * t);
const vnoise = (x, z) => { const xi = Math.floor(x), zi = Math.floor(z), xf = sm(x - xi), zf = sm(z - zi); const a = hash(xi, zi), b = hash(xi + 1, zi), c = hash(xi, zi + 1), d = hash(xi + 1, zi + 1); return a + (b - a) * xf + (c - a) * zf + (a - b - c + d) * xf * zf; };
const sstep = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
export const terrainH = (x, z) => {
  const r = Math.hypot(x, z), pad = sstep(46, 120, r);
  let y = (vnoise(x * .011, z * .011) * 2 - 1) * 13 + (vnoise(x * .037 + 9, z * .037) * 2 - 1) * 3.4 + (vnoise(x * .11, z * .11 + 5) * 2 - 1) * .5;
  return y * pad + sstep(240, 470, r) * (26 + vnoise(x * .02, z * .02) * 46);
};
const lin = (hex) => new THREE.Color(hex);
// bake a flat colour into a geometry so several parts can merge into one mesh (fewer draw calls)
const vcol = (g, hex) => { const c = new THREE.Color(hex), n = g.attributes.position.count, a = new Float32Array(n * 3); for (let i = 0; i < n; i++) a.set([c.r, c.g, c.b], i * 3); g.setAttribute('color', new THREE.BufferAttribute(a, 3)); return g; };
const place = (g, x, y, z, rx = 0, rz = 0) => { if (rx) g.rotateX(rx); if (rz) g.rotateZ(rz); g.translate(x, y, z); return g; };

export class MarsBase {
  constructor(renderer, canvas, mobile) {
    this.r = renderer; this.mobile = mobile; this.t = 0; this.fr = 0; renderer.shadowMap.autoUpdate = false; this.intro = null; this.reduced = false;
    const s = this.scene = new THREE.Scene();
    const HOR = lin(0xdca58e);
    s.fog = new THREE.Fog(HOR, 90, 560);
    this.cam = new THREE.PerspectiveCamera(mobile ? 52 : 38, 1, 0.3, 3000);
    const pm = new THREE.PMREMGenerator(renderer); s.environment = pm.fromScene(new RoomEnvironment(), 0.04).texture; pm.dispose(); s.environmentIntensity = .7;
    const sunDir = this.sunDir = new V3(-.78, .46, .2).normalize();

    // butterscotch-pink sky with the faint blue halo Mars shows around the Sun
    s.add(new THREE.Mesh(new THREE.SphereGeometry(1800, 48, 24), new THREE.ShaderMaterial({
      side: THREE.BackSide, depthWrite: false, fog: false,
      uniforms: { top: { value: lin(0x74506a) }, mid: { value: lin(0xcf8e86) }, hor: { value: lin(0xf0c0a4) }, sun: { value: sunDir } },
      vertexShader: 'varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }',
      fragmentShader: `uniform vec3 top,mid,hor,sun; varying vec3 vD; void main(){ vec3 d = normalize(vD); float y = max(d.y, 0.);
        vec3 c = mix(hor, mid, smoothstep(0., .16, y)); c = mix(c, top, smoothstep(.12, .85, y));
        float s = max(dot(d, sun), 0.); c += vec3(1., .86, .7) * pow(s, 260.) * 4. + vec3(1., .72, .56) * pow(s, 9.) * .32 + vec3(.55, .7, 1.) * pow(s, 70.) * .22;
        c *= 1. - .35 * smoothstep(0., -.4, d.y); gl_FragColor = vec4(c, 1.); }`
    })));

    // ground: red dust with a grainy detail map, flat around the base, rising to distant mesas
    const N = mobile ? 120 : 170, gg = new THREE.PlaneGeometry(1100, 1100, N, N); gg.rotateX(-PI / 2);
    { const p = gg.attributes.position, col = new Float32Array(p.count * 3), c0 = lin(0xb4573a), c1 = lin(0x7d3b2a), c2 = lin(0xd89868), tmp = new THREE.Color();
      for (let i = 0; i < p.count; i++) { const x = p.getX(i), z = p.getZ(i), h = terrainH(x, z); p.setY(i, h); const n = vnoise(x * .02 + 3, z * .02), m = vnoise(x * .07, z * .07 + 4);
        tmp.copy(c0).lerp(c1, sstep(.35, .8, n) * .7).lerp(c2, sstep(.5, .9, m) * .45 * (1 - sstep(.8, 1, n))); col.set([tmp.r, tmp.g, tmp.b], i * 3); }
      gg.setAttribute('color', new THREE.BufferAttribute(col, 3)); gg.computeVertexNormals(); }
    const tc = document.createElement('canvas'); tc.width = tc.height = 512; const cx = tc.getContext('2d'); cx.fillStyle = '#d8d8d8'; cx.fillRect(0, 0, 512, 512);
    const id = cx.getImageData(0, 0, 512, 512); for (let i = 0; i < id.data.length; i += 4) { const v = 200 + Math.random() * 55 | 0; id.data[i] = id.data[i + 1] = id.data[i + 2] = v; } cx.putImageData(id, 0, 0);
    cx.globalAlpha = .12; cx.strokeStyle = '#000'; for (let k = 0; k < 26; k++) { cx.beginPath(); const y0 = k * 20 + Math.random() * 6; cx.moveTo(0, y0); for (let x = 0; x <= 512; x += 32) cx.lineTo(x, y0 + Math.sin(x * .03 + k) * 5); cx.stroke(); }
    const dtex = new THREE.CanvasTexture(tc); dtex.wrapS = dtex.wrapT = THREE.RepeatWrapping; dtex.repeat.set(70, 70); dtex.colorSpace = THREE.SRGBColorSpace; dtex.anisotropy = 4;
    const ground = new THREE.Mesh(gg, new THREE.MeshStandardMaterial({ vertexColors: true, map: dtex, roughness: 1, metalness: 0, envMapIntensity: .25 })); ground.receiveShadow = true; s.add(ground);
    // scorched landing pad
    const pad = new THREE.Mesh(new THREE.CircleGeometry(11, 64), new THREE.MeshBasicMaterial({ map: glowTex([[0, 'rgba(30,14,10,.78)'], [.62, 'rgba(34,16,12,.6)'], [.9, 'rgba(40,20,14,.2)'], [1, 'rgba(40,20,14,0)']]), transparent: true, depthWrite: false }));
    pad.rotation.x = -PI / 2; pad.position.set(-6, .04, -10); pad.renderOrder = 1; s.add(pad);

    // rocks
    { const n = mobile ? 150 : 260, geo = new THREE.IcosahedronGeometry(1, 1), im = new THREE.InstancedMesh(geo, new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 1, flatShading: true, envMapIntensity: .2 }), n), m = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), sc = new V3(), pp = new V3(), c = new THREE.Color();
      for (let i = 0; i < n; i++) { let a = Math.random() * PI * 2, r = 14 + Math.pow(Math.random(), 1.6) * 230; let x = Math.cos(a) * r, z = Math.sin(a) * r;
        if (Math.hypot(x + 6, z + 10) < 12 || Math.hypot(x - 3, z - 11) < 8) { x += 30; }
        const k = .25 + Math.pow(Math.random(), 3) * (1.2 + r * .012); sc.set(k * (1 + Math.random() * .6), k * (.5 + Math.random() * .5), k * (1 + Math.random() * .6)); e.set(Math.random() * .4, Math.random() * 6, Math.random() * .4); q.setFromEuler(e);
        pp.set(x, terrainH(x, z) + sc.y * .3, z); m.compose(pp, q, sc); im.setMatrixAt(i, m); c.setHex(0x8a4630).lerp(new THREE.Color(0x4b2a22), Math.random() * .7); im.setColorAt(i, c); }
      im.castShadow = false; im.receiveShadow = true; s.add(im); }

    // lights: low golden sun with soft shadows, pink fill
    s.add(new THREE.HemisphereLight(0xffd2c0, 0x7a3a2c, .55));
    const key = this.key = new THREE.DirectionalLight(0xffe2c4, 2.5); key.position.copy(sunDir).multiplyScalar(120); key.target.position.set(4, 4, 0);
    key.castShadow = true; key.shadow.mapSize.set(mobile ? 1024 : 2048, mobile ? 1024 : 2048); const sc = key.shadow.camera; sc.left = -46; sc.right = 46; sc.top = 46; sc.bottom = -46; sc.near = 20; sc.far = 260; key.shadow.bias = -.0004; key.shadow.normalBias = .06; key.shadow.radius = 3;
    s.add(key, key.target);

    const steel = this.steel = new THREE.MeshStandardMaterial({ color: 0xe3e6e8, metalness: 1, roughness: .26, envMapIntensity: 1.25 });
    const steel2 = new THREE.MeshStandardMaterial({ color: 0xb9bec3, metalness: 1, roughness: .42, envMapIntensity: 1 });
    const dark = new THREE.MeshStandardMaterial({ color: 0x131518, metalness: .35, roughness: .6, envMapIntensity: .6 });
    const white = new THREE.MeshStandardMaterial({ color: 0xf3f1ee, roughness: .55, metalness: .05, envMapIntensity: .5 });
    const pickables = this.base = [];

    // ---- the lander: stylised stainless Starship-class ship (fan art, no logos)
    const ship = this.ship = new THREE.Group(); ship.position.set(-6, 0, -10); s.add(ship);
    { const R = 2.8, y0 = 2.1, yb = y0 + 24, L = 10.6, rho = (R * R + L * L) / (2 * R), pts = [new THREE.Vector2(.001, y0), new THREE.Vector2(R * .82, y0), new THREE.Vector2(R, y0 + .25), new THREE.Vector2(R, yb)];
      for (let i = 1; i <= 18; i++) { const x = L * (i / 18), r = Math.sqrt(Math.max(rho * rho - (L - x) * (L - x), 0)) + R - rho; pts.push(new THREE.Vector2(Math.max(r, .001), yb + L - x)); }
      const body = new THREE.Mesh(new THREE.LatheGeometry(pts.reverse(), mobile ? 56 : 80), steel); body.castShadow = true; body.receiveShadow = true; ship.add(body); pickables.push(body);
      const rings = []; for (let y = y0 + 2.4; y < yb + 6; y += 2.4) { const rr = y < yb ? R : Math.sqrt(Math.max(rho * rho - (L - (yb + L - y)) * (L - (yb + L - y)), 0)) + R - rho; rings.push(new THREE.CylinderGeometry(rr + .018, rr + .018, .07, 48, 1, true).translate(0, y, 0)); }
      const rm = new THREE.Mesh(mergeGeometries(rings), steel2); ship.add(rm);
      // dark heat-shield strip on the windward side
      const strip = new THREE.Mesh(new THREE.CylinderGeometry(R + .03, R + .03, 24, 32, 1, true, 0.2, 1.05), dark); strip.position.y = y0 + 12; ship.add(strip);
      // flaps
      const fl = []; const flap = (w, h, y, side, ang) => { const g = new THREE.BoxGeometry(w, h, .22); g.translate(w / 2, 0, 0); g.rotateZ(ang); g.translate(R - .1, y, 0); if (side) g.rotateY(PI); return g; };
      [0, 1].forEach(sd => { fl.push(flap(2.9, 6.8, y0 + 4.8, sd, -.2)); fl.push(flap(1.8, 4.0, yb - 2.4, sd, -.1)); });
      const fm = new THREE.Mesh(mergeGeometries(fl), dark); fm.castShadow = true; ship.add(fm);
      // engines
      const en = []; for (let i = 0; i < 6; i++) { const a = i < 3 ? i * PI * 2 / 3 : i * PI * 2 / 3 + PI / 3, rr = i < 3 ? .62 : 1.62; en.push(new THREE.CylinderGeometry(.38, .74, 1.5, 20, 1, true).translate(Math.cos(a) * rr, y0 - .4, Math.sin(a) * rr)); }
      const em = new THREE.Mesh(mergeGeometries(en), new THREE.MeshStandardMaterial({ color: 0x4b4743, metalness: .9, roughness: .45, side: THREE.DoubleSide })); em.castShadow = true; ship.add(em);
      // landing legs
      const lg = [];
      for (let i = 0; i < 3; i++) { const a = i * PI * 2 / 3 + .5, ca = Math.cos(a), sa = Math.sin(a), top = new V3(ca * R * .9, y0 + 5.5, sa * R * .9), foot = new V3(ca * (R + 4), .3, sa * (R + 4)), mid = new V3(ca * (R + 1), y0 + .5, sa * (R + 1));
        const gA = new THREE.CylinderGeometry(.16, .22, top.distanceTo(foot), 8); const dirv = foot.clone().sub(top).normalize(); gA.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(new V3(0, 1, 0), dirv)); gA.translate((top.x + foot.x) / 2, (top.y + foot.y) / 2, (top.z + foot.z) / 2); lg.push(gA);
        lg.push(new THREE.CylinderGeometry(.7, .8, .22, 16).translate(foot.x, .12, foot.z));
        const gB = new THREE.CylinderGeometry(.09, .09, mid.distanceTo(top), 6); const d2 = top.clone().sub(mid).normalize(); gB.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(new V3(0, 1, 0), d2)); gB.translate((top.x + mid.x) / 2, (top.y + mid.y) / 2, (top.z + mid.z) / 2); lg.push(gB); }
      const lm = new THREE.Mesh(mergeGeometries(lg), steel2); lm.castShadow = true; ship.add(lm);
      // a faint vent of cold vapour near the nose (living vehicle)
      this.shipH = yb + L;
    }
    // aviation-red beacon on the nose
    const beacon = this.beacon = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex([[0, 'rgba(255,80,60,1)'], [.3, 'rgba(255,60,40,.5)'], [1, 'rgba(255,40,20,0)']]), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }));
    beacon.scale.setScalar(2.6); beacon.position.set(0, this.shipH + .4, 0); ship.add(beacon);

    // ---- habitat domes (geodesic ribs, glass, warm interior); the second is a greenhouse
    const domes = this.domes = []; const ribMat = new THREE.LineBasicMaterial({ color: 0xf1f1ef, transparent: true, opacity: .85, fog: true });
    const glass = new THREE.MeshPhysicalMaterial({ color: 0xd6e8f2, transparent: true, opacity: .2, roughness: .06, metalness: 0, clearcoat: 1, clearcoatRoughness: .05, side: THREE.DoubleSide, depthWrite: false, envMapIntensity: 1.4 });
    const mkDome = (x, z, r, green) => {
      const g = new THREE.Group(); g.position.set(x, 0, z); s.add(g);
      const hemi = new THREE.Mesh(new THREE.SphereGeometry(r, 40, 20, 0, PI * 2, 0, PI / 2), glass); g.add(hemi); pickables.push(hemi);
      const ico = new THREE.IcosahedronGeometry(r * 1.004, 2), pos = ico.attributes.position, keep = [];
      for (let i = 0; i < pos.count; i += 3) { if (pos.getY(i) > -.01 * r && pos.getY(i + 1) > -.01 * r && pos.getY(i + 2) > -.01 * r) for (let k = 0; k < 3; k++) keep.push(pos.getX(i + k), pos.getY(i + k), pos.getZ(i + k)); }
      const hg = new THREE.BufferGeometry(); hg.setAttribute('position', new THREE.Float32BufferAttribute(keep, 3)); g.add(new THREE.LineSegments(new THREE.EdgesGeometry(hg, 1), ribMat));
      const ring = new THREE.Mesh(new THREE.TorusGeometry(r, .22, 8, 64), steel2); ring.rotation.x = PI / 2; ring.position.y = .1; g.add(ring);
      const floor = new THREE.Mesh(new THREE.CircleGeometry(r, 48), new THREE.MeshBasicMaterial({ map: glowTex(green ? [[0, 'rgba(255,90,200,.7)'], [.6, 'rgba(255,70,170,.35)'], [1, 'rgba(255,60,150,0)']] : [[0, 'rgba(255,190,110,.75)'], [.6, 'rgba(255,160,80,.35)'], [1, 'rgba(255,150,60,0)']]), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }));
      floor.rotation.x = -PI / 2; floor.position.y = .3; g.add(floor);
      if (green) { const gm = new THREE.MeshStandardMaterial({ color: 0x3ddc84, emissive: 0x1d8a4c, emissiveIntensity: .8, roughness: .7 }); for (let i = 0; i < 9; i++) { const a = i * 2.4, rr = (i % 3 + .3) * r * .22, m = new THREE.Mesh(new THREE.SphereGeometry(.55 + (i % 4) * .13, 12, 8), gm); m.position.set(Math.cos(a) * rr, .45, Math.sin(a) * rr); m.scale.y = .75; g.add(m); } }
      else { const lm = new THREE.Mesh(new THREE.BoxGeometry(r * .7, .7, r * .35), new THREE.MeshStandardMaterial({ color: 0xcfd3d6, roughness: .5, metalness: .4 })); lm.position.set(0, .4, 0); lm.castShadow = true; g.add(lm); }
      domes.push(g); return g;
    };
    mkDome(14, -6, 6.6, false); mkDome(25, -14, 4.9, true);
    { const tube = new THREE.Mesh(new THREE.CylinderGeometry(1.05, 1.05, 11.5, 20, 1), white); tube.rotation.z = PI / 2; tube.rotation.y = -.55; tube.position.set(19.5, 1.05, -10); tube.castShadow = true; s.add(tube); pickables.push(tube);
      const tube2 = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 12, 20, 1), white); tube2.rotation.z = PI / 2; tube2.rotation.y = .1; tube2.position.set(2.3, 1, -8.2); tube2.castShadow = true; s.add(tube2); }
    // solar field
    { const pg = []; for (let i = 0; i < 6; i++) { const g = new THREE.BoxGeometry(3.9, .14, 2.7); g.rotateX(-.55); g.translate(-6 + i * 4.3, 1.8, -21); pg.push(g); const leg = new THREE.CylinderGeometry(.09, .09, 1.8, 6); leg.translate(-6 + i * 4.3, .9, -20.3); pg.push(leg); }
      const sp = new THREE.Mesh(mergeGeometries(pg), new THREE.MeshStandardMaterial({ color: 0x182a4a, metalness: .7, roughness: .3, envMapIntensity: 1.1 })); sp.castShadow = true; sp.receiveShadow = true; s.add(sp); }
    // comms mast + dish
    { const mast = new THREE.Mesh(new THREE.CylinderGeometry(.12, .16, 7, 8), steel2); mast.position.set(-18, 3.5, -6); mast.castShadow = true; s.add(mast);
      const dish = new THREE.Mesh(new THREE.SphereGeometry(1.6, 24, 12, 0, PI * 2, 0, .8), new THREE.MeshStandardMaterial({ color: 0xf3f1ee, roughness: .4, metalness: .3, side: THREE.DoubleSide })); dish.position.set(-18, 7.2, -6); dish.rotation.set(-1.0, .6, 0); dish.castShadow = true; s.add(dish); this.dish = dish; }
    // crates
    { const cm = new THREE.MeshStandardMaterial({ color: 0xd9d6cf, roughness: .6, metalness: .2 }); [[8.6, .6, 12.1, 1.1, .3], [11, .4, 13.6, .8, -.4], [-9, .5, 9.5, 1, .6]].forEach(([x, y, z, k, r]) => { const b = new THREE.Mesh(new THREE.BoxGeometry(1.6 * k, 1.1 * k, 1.6 * k), cm); b.position.set(x, y, z); b.rotation.y = r; b.castShadow = b.receiveShadow = true; s.add(b); pickables.push(b); }); }

    // ---- rover: six wheels, rocker-bogie arms, mast and dish; drives a slow loop
    const rover = this.rover = new THREE.Group(); s.add(rover);
    { const body = new THREE.Mesh(new THREE.BoxGeometry(2.1, .55, 3.1), white); body.position.y = 1.05; body.castShadow = true; rover.add(body); pickables.push(body);
      const deck = new THREE.Mesh(new THREE.BoxGeometry(2.0, .08, 1.7), new THREE.MeshStandardMaterial({ color: 0x182a4a, metalness: .7, roughness: .3 })); deck.position.set(0, 1.36, -.55); deck.castShadow = true; rover.add(deck);
      const cab = new THREE.Mesh(new THREE.BoxGeometry(1.5, .5, 1.0), white); cab.position.set(0, 1.55, .9); cab.castShadow = true; rover.add(cab);
      const win = new THREE.Mesh(new THREE.BoxGeometry(1.2, .22, .06), new THREE.MeshStandardMaterial({ color: 0x1d2a33, metalness: .9, roughness: .12 })); win.position.set(0, 1.6, 1.42); rover.add(win);
      const mast = new THREE.Mesh(new THREE.CylinderGeometry(.05, .05, 1.5, 6), steel2); mast.position.set(.7, 2.2, -.3); rover.add(mast);
      const head = new THREE.Mesh(new THREE.BoxGeometry(.4, .22, .22), dark); head.position.set(.7, 3, -.3); rover.add(head);
      const rd = new THREE.Mesh(new THREE.SphereGeometry(.45, 18, 8, 0, PI * 2, 0, .9), white); rd.position.set(-.65, 2.0, -.7); rd.rotation.set(-.9, 0, .3); rover.add(rd);
      const arms = []; [-1, 1].forEach(sd => { const a = new THREE.BoxGeometry(.1, .1, 2.8); a.translate(sd * 1.2, .72, 0); arms.push(a); const b = new THREE.BoxGeometry(.1, .6, .1); b.translate(sd * 1.2, .85, .1); arms.push(b); });
      rover.add(new THREE.Mesh(mergeGeometries(arms), steel2));
      const tire = new THREE.MeshStandardMaterial({ color: 0x17191b, roughness: .85, metalness: .1 }); const hubM = new THREE.MeshStandardMaterial({ color: 0xcfd3d6, metalness: 1, roughness: .35 });
      const wm = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: .7, metalness: .4 });
      this.wheels = []; [-1.25, 0, 1.25].forEach(z => [-1, 1].forEach(sd => { const parts = [vcol(new THREE.CylinderGeometry(.55, .55, .5, 24), 0x17191b).rotateZ(PI / 2), vcol(new THREE.CylinderGeometry(.28, .28, .54, 12), 0xcfd3d6).rotateZ(PI / 2),
          vcol(new THREE.BoxGeometry(.56, .1, .5), 0xcfd3d6), vcol(new THREE.BoxGeometry(.56, .1, .5), 0xcfd3d6).rotateX(PI / 2)];
        const w = new THREE.Mesh(mergeGeometries(parts), wm); w.position.set(sd * 1.28, .55, z); w.castShadow = true; rover.add(w); this.wheels.push(w); })); }
    rover.scale.setScalar(1.25); this.roverA = 1.2; this.roverR = 30; this.roverC = new V3(5, 0, -3);

    // ---- astronauts
    this.astros = [];
    const suitCols = [0xff7a35, 0x6fe3c9, 0x7fb4ff];
    const mkAstro = (x, z, yaw, accent, seated) => {
      const A = new THREE.Group(); A.position.set(x, seated ? .1 : 0, z); A.rotation.y = yaw; s.add(A);
      const body = new THREE.Group(); A.add(body);
      const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: .55, metalness: .05, envMapIntensity: .6 });
      const gold = new THREE.MeshPhysicalMaterial({ color: 0xffc766, metalness: 1, roughness: .08, clearcoat: 1, envMapIntensity: 2 });
      const SUIT = 0xf4f2ef, GLV = 0xcfcdca, BOOT = 0x555a60;
      const mesh = (geo, m, par, cast = true) => { const o = new THREE.Mesh(geo, m); o.castShadow = cast; par.add(o); return o; };
      // torso + belt ring + chest panel + life-support pack: one mesh
      const torso = mesh(mergeGeometries([vcol(new THREE.CapsuleGeometry(.27, .36, 6, 14), SUIT).translate(0, 1.12, 0), vcol(new THREE.TorusGeometry(.275, .035, 8, 24), accent).rotateX(PI / 2).translate(0, .86, 0),
        vcol(new THREE.BoxGeometry(.2, .15, .06), accent).translate(0, 1.2, .26), vcol(new THREE.BoxGeometry(.4, .52, .22), 0xdedcd8).translate(0, 1.15, -.3)]), mat, body);
      const head = new THREE.Group(); head.position.set(0, 1.72, 0); body.add(head);
      mesh(new THREE.SphereGeometry(.23, 24, 16), new THREE.MeshStandardMaterial({ color: SUIT, roughness: .45, metalness: .05 }), head); const visor = mesh(new THREE.SphereGeometry(.19, 24, 16), gold, head, false); visor.position.set(0, .01, .1); visor.scale.set(1.04, .82, .8);
      // legs pivot at the hip so a seated pose is a simple rotation
      const legs = []; [-1, 1].forEach(sd => { const hip = new THREE.Group(); hip.position.set(sd * .13, .76, 0); body.add(hip);
        mesh(mergeGeometries([vcol(new THREE.CapsuleGeometry(.115, .42, 5, 10), SUIT).translate(0, -.3, 0), vcol(new THREE.BoxGeometry(.2, .13, .34), BOOT).translate(0, -.66, .06)]), mat, hip); legs.push(hip); if (seated) hip.rotation.x = -1.4; });
      // arms: shoulder + elbow pivots
      const arms = []; [-1, 1].forEach(sd => { const sh = new THREE.Group(); sh.position.set(sd * .34, 1.4, 0); body.add(sh);
        mesh(vcol(new THREE.CapsuleGeometry(.09, .22, 4, 8), SUIT).translate(0, -.19, 0), mat, sh); const el = new THREE.Group(); el.position.set(0, -.36, 0); sh.add(el);
        mesh(mergeGeometries([vcol(new THREE.CapsuleGeometry(.085, .2, 4, 8), SUIT).translate(0, -.17, 0), vcol(new THREE.SphereGeometry(.1, 12, 8), GLV).translate(0, -.34, 0)]), mat, el); arms.push({ sh, el }); });
      const hit = new THREE.Mesh(new THREE.CapsuleGeometry(.55, 1.2, 4, 8), new THREE.MeshBasicMaterial({ visible: false })); hit.position.set(0, 1.05, 0); A.add(hit); hit.userData.astro = this.astros.length;
      A.scale.setScalar(1.85);
      const o = { g: A, body, head, legs, arms, torso, hit, wt: 0, wd: 0, seated, yaw, base: yaw, ph: Math.random() * 6, y0: A.position.y };
      this.astros.push(o); return o;
    };
    mkAstro(-2.4, 14.2, .1, suitCols[0], false); mkAstro(2.8, 15.4, -.25, suitCols[1], false); mkAstro(8.4, 11.6, -.85, suitCols[2], true);

    // ---- dust: ambient drift + rover puffs in one soft-point cloud
    { const nA = mobile ? 180 : 320, nP = 36, n = nA + nP; this.nA = nA; this.nP = nP;
      const pos = new Float32Array(n * 3), size = new Float32Array(n), al = new Float32Array(n); this.puffAge = new Float32Array(nP).fill(9);
      for (let i = 0; i < nA; i++) { pos.set([(Math.random() - .5) * 220, .5 + Math.random() * 16, (Math.random() - .5) * 220], i * 3); size[i] = 1.2 + Math.random() * 2.2; al[i] = .05 + Math.random() * .1; }
      const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('aSize', new THREE.BufferAttribute(size, 1)); g.setAttribute('aAlpha', new THREE.BufferAttribute(al, 1)); this.dust = g;
      this.dustMat = new THREE.ShaderMaterial({ transparent: true, depthWrite: false, fog: false, uniforms: { dpr: { value: 1 }, col: { value: lin(0xe3a98a) } },
        vertexShader: 'attribute float aSize; attribute float aAlpha; uniform float dpr; varying float vA; void main(){ vA = aAlpha; vec4 mv = modelViewMatrix * vec4(position,1.); gl_PointSize = clamp(aSize * dpr * 220. / -mv.z, 1., 90. * dpr); gl_Position = projectionMatrix * mv; }',
        fragmentShader: 'uniform vec3 col; varying float vA; void main(){ float d = length(gl_PointCoord - .5); gl_FragColor = vec4(col, smoothstep(.5, .0, d) * vA); }' });
      const pts = new THREE.Points(g, this.dustMat); pts.frustumCulled = false; s.add(pts); this.puffI = 0; this.puffT = 0; }

    this.controls = new OrbitControls(this.cam, canvas);
    Object.assign(this.controls, { enableDamping: true, dampingFactor: .06, enablePan: false, minDistance: 11, maxDistance: 130, maxPolarAngle: 1.5, minPolarAngle: .25, zoomSpeed: .6, autoRotate: false, autoRotateSpeed: -.2 });
    this.controls.target.set(0, 10, 2); this.controls.enabled = false;
    this.controls.addEventListener('start', () => { this.controls.autoRotate = false; clearTimeout(this._ar); });
    this.controls.addEventListener('end', () => { clearTimeout(this._ar); this._ar = setTimeout(() => { if (!this.reduced) this.controls.autoRotate = true; }, 9000); });
    this.ray = new THREE.Raycaster(); this.boxes = null; this._v = new V3();
    this.hitList = this.astros.map(a => a.hit);
  }
  resize(w, h, dpr) { this.controls.rotateSpeed = h / (1.2 * Math.min(w, 900)); this.cam.aspect = w / h; this.cam.fov = w / h < .8 ? 52 : 38; this.cam.updateProjectionMatrix(); this.dustMat.uniforms.dpr.value = dpr; this.portrait = w / h < .8; if (!this.intro) this.controls.target.y = this.portrait ? 13 : 17; }
  enter(reduced) {
    this.reduced = reduced; this.controls.autoRotate = false; clearTimeout(this._ar); this._ar = setTimeout(() => { if (!reduced) this.controls.autoRotate = true; }, 11000);
    const far = this.portrait ? 46 : 80;
    this.end = new V3(14, this.portrait ? 6 : 11, far); this.start = new V3(-40, 150, 190); this.controls.target.set(0, this.portrait ? 13 : 17, 2);
    this.intro = { t: 0, d: reduced ? 1.2 : 4.2, w: false }; this.cam.position.copy(this.start); this.controls.enabled = false; this.astros.forEach(a => { a.wt = 0; });
  }
  wave(i, delay = 0, dur = 3.6) { const a = this.astros[i]; if (a) { a.wd = delay; a.wt = dur; } }
  waveAll(dur = 3.8) { this.astros.forEach((a, i) => this.wave(i, i * .35, dur)); }
  headWorld(i, out) { const a = this.astros[i]; return a.head.getWorldPosition(out).add(this._v.set(0, .6, 0)); }
  update(dt) {
    this.t += dt; const t = this.t; if (!(this.mobile && (++this.fr & 1))) this.r.shadowMap.needsUpdate = true;
    // rover loop
    this.roverA += dt * (1.55 / this.roverR); const a = this.roverA, R = this.roverR, C = this.roverC;
    const px = C.x + Math.cos(a) * R, pz = C.z + Math.sin(a) * R; this.rover.position.set(px, 0, pz); this.rover.rotation.y = -a;
    this.rover.position.y = Math.sin(t * 3.1) * .015; this.rover.rotation.z = Math.sin(t * 1.7) * .012;
    const spin = 1.55 * dt / (.55 * 1.25); this.wheels.forEach((w, i) => { w.rotation.x += spin; });
    // dust puffs from the rear wheels
    this.puffT -= dt; const pos = this.dust.attributes.position, size = this.dust.attributes.aSize, al = this.dust.attributes.aAlpha, nA = this.nA;
    if (this.puffT <= 0) { this.puffT = .16; const k = this.puffI++ % this.nP; this.puffAge[k] = 0; const bx = px + Math.sin(a) * 2.2, bz = pz - Math.cos(a) * 2.2; pos.setXYZ(nA + k, bx + (Math.random() - .5), .5, bz + (Math.random() - .5)); }
    for (let k = 0; k < this.nP; k++) { const age = this.puffAge[k] += dt, i = nA + k; if (age > 2.6) { al.setX(i, 0); continue; } pos.setY(i, pos.getY(i) + dt * .5); size.setX(i, 1.4 + age * 2.4); al.setX(i, (1 - age / 2.6) * .22 * Math.min(1, age * 5)); }
    // ambient wind
    for (let i = 0; i < nA; i++) { let x = pos.getX(i) + dt * (2.2 + (i % 5) * .35), y = pos.getY(i) + Math.sin(t * .4 + i) * dt * .25, z = pos.getZ(i) + dt * .4; if (x > 110) x -= 220; if (z > 110) z -= 220; pos.setXYZ(i, x, y, z); }
    pos.needsUpdate = size.needsUpdate = al.needsUpdate = true;
    this.beacon.material.opacity = .35 + .65 * (Math.sin(t * 2.2) > .55 ? 1 : .08); this.dish.rotation.y = .6 + Math.sin(t * .25) * .35;
    // astronauts
    const cp = this.cam.position;
    this.astros.forEach((A, i) => {
      const wave = A.wt > 0 && A.wd <= 0; if (A.wd > 0) A.wd -= dt; else if (A.wt > 0) A.wt -= dt;
      const want = wave ? Math.atan2(cp.x - A.g.position.x, cp.z - A.g.position.z) : A.base + Math.sin(t * .2 + A.ph) * .25;
      let d = want - A.g.rotation.y; d = Math.atan2(Math.sin(d), Math.cos(d)); A.g.rotation.y += d * (1 - Math.exp(-dt * (wave ? 4 : 1.5)));
      const k = wave ? 1 : 0; A.k = (A.k || 0) + (k - (A.k || 0)) * (1 - Math.exp(-dt * 7));
      const [L, Rr] = A.arms; // right arm (+x) waves
      Rr.sh.rotation.z = (2.6 + Math.sin(t * 5.5 + i) * .1) * A.k + .08 * (1 - A.k); Rr.el.rotation.z = Math.sin(t * 9 + i) * .55 * A.k + .15 * (1 - A.k);
      L.sh.rotation.z = -.08 - Math.sin(t * .9 + A.ph) * .03 + (A.k * .12); L.el.rotation.z = -.12;
      A.body.position.y = Math.sin(t * 1.4 + A.ph) * .008 + A.k * Math.abs(Math.sin(t * 5.5 + i)) * .02; A.head.rotation.y = wave ? Math.sin(t * 2 + i) * .12 : Math.sin(t * .5 + A.ph) * .4; A.head.rotation.x = wave ? -.05 : Math.sin(t * .37 + A.ph) * .05;
    });
    if (this.intro) {
      const I = this.intro; I.t += dt; const k = Math.min(1, I.t / I.d), e = 1 - Math.pow(1 - k, 3.2);
      this.cam.position.lerpVectors(this.start, this.end, e); this.cam.lookAt(this.controls.target);
      if (!I.w && k > .8) { I.w = true; this.waveAll(); if (this.onWave) this.onWave(); }
      if (k >= 1) { this.intro = null; this.controls.enabled = true; this.controls.update(); }
    } else { this.controls.dampingFactor = 1 - Math.exp(-dt * 6.5); this.controls.update(dt); if (this.cam.position.y < 1.2) this.cam.position.y = 1.2; }
  }
  // returns { astro: i } or { base: true } or null
  pick(ndc) {
    this.ray.setFromCamera(ndc, this.cam);
    const h = this.ray.intersectObjects(this.hitList, false); if (h.length) return { astro: h[0].object.userData.astro };
    // generous capsule fallback: a near-miss around an astronaut still counts
    let best = -1, bd = .09; const v = this._v;
    this.astros.forEach((A, i) => { A.g.getWorldPosition(v); v.y += 1.6; const p = v.clone().project(this.cam); const d = Math.hypot((p.x - ndc.x) * this.cam.aspect, p.y - ndc.y); if (p.z < 1 && d < bd) { bd = d; best = i; } });
    if (best >= 0) return { astro: best };
    if (this.ray.intersectObjects(this.base, false).length) return { base: true };
    if (!this.boxes) { this.boxes = [new THREE.Box3(new V3(-12, 0, -16), new V3(30, 38, -4)), new THREE.Box3(new V3(-12, 0, 6), new V3(12, 4, 16))]; }
    return this.boxes.some(b => this.ray.ray.intersectsBox(b)) ? { base: true } : null;
  }
}
