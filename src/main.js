import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { MARS, MARS_SITE,STOPS, CONTINENTS, CITIES, SIGNAL, HYPER } from './data.js';
import { Flare, glowTex, raysTex } from './fx.js';
import { Hyper, MINT } from './hyper.js';
import { MarsBase } from './mars.js';
import { Sound } from './audio.js';

const $ = s => document.querySelector(s), V3 = THREE.Vector3, PI = Math.PI;
const UA = navigator.userAgent, VER = window.__V || '1';
const MOBILE = matchMedia('(pointer: coarse)').matches || /Mobi|Android|iPhone|iPad/.test(UA);
const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;
const AP = window.__ap = { ready: false, mode: 'boot', stop: 0, fps: 0, env: { mobile: MOBILE, reduced: REDUCED, inX: /Twitter/i.test(UA) } };
const clamp = THREE.MathUtils.clamp, lerp = THREE.MathUtils.lerp, sstep = THREE.MathUtils.smoothstep;
const ease = k => k < .5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2;
const wrapPI = a => { a = (a + PI) % (2 * PI); if (a < 0) a += 2 * PI; return a - PI; };

// ---------------------------------------------------------------- renderer
const canvas = $('#gl');
let renderer;
try {
  renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance', stencil: false });
  if (!renderer.capabilities.isWebGL2) throw new Error('webgl2');
} catch (e) { document.body.classList.add('nogl'); AP.mode = 'nogl'; throw e; }
renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05;
renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap; // only the Mars base casts shadows; every other scene is unaffected
const ANISO = Math.min(8, renderer.capabilities.getMaxAnisotropy());
const DPR_MAX = Math.min(window.devicePixelRatio || 1, MOBILE ? 1.5 : 1.75), DPR_MIN = MOBILE ? .9 : 1;
let dpr = DPR_MAX, W = 1, H = 1;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(42, 1, 0.02, 12000);
const sound = new Sound();

// ---------------------------------------------------------------- progressive textures
const RANK = { none: 0, lo: 1, hi: 2, xl: 3 };
const texSlots = {};
function use(name, apply, srgb = true) {
  const s = texSlots[name] || (texSlots[name] = { name, srgb, lvl: 'none', tex: null, fns: [] });
  s.fns.push(apply); if (s.tex) apply(s.tex); return s;
}
function loadImg(src) {
  return new Promise((res, rej) => {
    const img = new Image(); img.crossOrigin = 'anonymous';
    img.onload = () => (img.decode ? img.decode().catch(() => { }) : Promise.resolve()).then(() => res(img));
    img.onerror = () => rej(new Error('img ' + src)); img.src = src;
  });
}
// Decoding happens off-thread at any time, but the GPU upload (initTexture + mipmaps) is held until the camera is idle
// and spaced out, so a flight or a drag never shares a frame with a big texture upload.
const pendingTex = []; let lastUp = 0;
function applyTex(j) {
  const { s, lvl, t } = j; s.pend = null;
  if (RANK[s.lvl] >= RANK[lvl]) { t.dispose(); return; }
  renderer.initTexture(t);
  const old = s.tex; s.tex = t; s.lvl = lvl; s.fns.forEach(f => f(t));
  if (old) setTimeout(() => old.dispose(), 1500);
}
async function upgrade(name, lvl) {
  const s = texSlots[name]; if (!s || RANK[s.lvl] >= RANK[lvl] || s.loading === lvl || s.pend === lvl) return;
  s.loading = lvl;
  try {
    const img = await loadImg(`tex/${name}_${lvl}.jpg?v=${VER}`);
    if (RANK[s.lvl] >= RANK[lvl]) return;
    const t = new THREE.Texture(img); t.colorSpace = s.srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace; t.anisotropy = ANISO;
    t.wrapS = s.wrap || THREE.ClampToEdgeWrapping; if (s.wrap) t.wrapT = s.wrap; t.needsUpdate = true;
    const job = { s, lvl, t };
    if (!AP.loLoaded) applyTex(job); else { s.pend = lvl; pendingTex.push(job); }
  } catch (e) { console.warn(e.message); } finally { if (s.loading === lvl) s.loading = null; }
}
const hiQueue = []; let hiBusy = 0;
function queueHi(names, front) { names.forEach(n => { const i = hiQueue.indexOf(n); if (i >= 0) hiQueue.splice(i, 1); front ? hiQueue.unshift(n) : hiQueue.push(n); }); pumpHi(); }
function pumpHi() {
  if (!AP.loLoaded) return;
  while (hiBusy < 2 && hiQueue.length) {
    const n = hiQueue.shift(), [name, lvl] = n.split(':'); hiBusy++;
    upgrade(name, lvl || 'hi').finally(() => { hiBusy--; pumpHi(); });
  }
}

// ---------------------------------------------------------------- sky
const sky = new THREE.Group(); scene.add(sky);
const milky = new THREE.Mesh(new THREE.SphereGeometry(5000, 64, 32), new THREE.MeshBasicMaterial({ side: THREE.BackSide, color: new THREE.Color(.42, .42, .48), depthWrite: false, fog: false }));
milky.rotation.set(1.05, .2, .55); milky.visible = false; milky.renderOrder = -2; sky.add(milky);
use('stars', t => { milky.material.map = t; milky.material.needsUpdate = true; milky.visible = true; });
let starMat;
{
  const n = MOBILE ? 5000 : 9000, pos = new Float32Array(n * 3), col = new Float32Array(n * 3), siz = new Float32Array(n), ph = new Float32Array(n);
  const tints = [[.75, .85, 1], [.9, .95, 1], [1, 1, 1], [1, .95, .85], [1, .85, .7]];
  for (let i = 0; i < n; i++) {
    const u = Math.random() * 2 - 1, th = Math.random() * PI * 2, rr = Math.sqrt(1 - u * u);
    pos.set([Math.cos(th) * rr * 4000, u * 4000, Math.sin(th) * rr * 4000], i * 3);
    const t = tints[Math.floor(Math.random() * tints.length)], b = .55 + Math.random() * .45; col.set([t[0] * b, t[1] * b, t[2] * b], i * 3);
    siz[i] = .7 + Math.pow(Math.random(), 7) * 3.6; ph[i] = Math.random();
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  g.setAttribute('size', new THREE.BufferAttribute(siz, 1)); g.setAttribute('ph', new THREE.BufferAttribute(ph, 1));
  starMat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, uniforms: { t: { value: 0 }, dpr: { value: 1 } },
    vertexShader: `attribute float size; attribute float ph; attribute vec3 color; uniform float t, dpr; varying vec3 vC; varying float vA;
      void main(){ vC = color; vA = mix(1., .65 + .35 * sin(t * (.6 + ph * 2.2) + ph * 60.), step(1.6, size));
        gl_PointSize = size * dpr; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }`,
    fragmentShader: `varying vec3 vC; varying float vA; void main(){ float d = length(gl_PointCoord - .5); float a = smoothstep(.5, .0, d); gl_FragColor = vec4(vC * a * a * vA * 1.25, 1.); }`
  });
  const stars = new THREE.Points(g, starMat); stars.renderOrder = -1; sky.add(stars);
}

// ---------------------------------------------------------------- sun
const SUN_R = 6;
const sunGroup = new THREE.Group(); scene.add(sunGroup);
const sunMat = new THREE.ShaderMaterial({
  uniforms: { map: { value: null }, t: { value: 0 }, fade: { value: 1 } },
  vertexShader: 'varying vec2 vUv; varying vec3 vN; varying vec3 vV; void main(){ vUv = uv; vec4 mv = modelViewMatrix * vec4(position,1.); vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }',
  fragmentShader: `uniform sampler2D map; uniform float t, fade; varying vec2 vUv; varying vec3 vN; varying vec3 vV;
    void main(){ float mu = clamp(dot(normalize(vN), normalize(vV)), 0., 1.);
      vec3 c = texture2D(map, vUv + vec2(t * .0035, 0.)).rgb; vec3 c2 = texture2D(map, vUv * vec2(2., 1.6) + vec2(-t * .005, t * .0015)).rgb;
      c = mix(c, c2, .38); float limb = pow(mu, .5);
      vec3 col = c * (.45 + .9 * limb) * 3.4 + vec3(1., .5, .18) * pow(1. - mu, 2.5) * 2.2;
      gl_FragColor = vec4(col * fade, 1.); }`
});
const sun = new THREE.Mesh(new THREE.SphereGeometry(SUN_R, 96, 64), sunMat); sunGroup.add(sun);
{ const s = use('sun', t => { sunMat.uniforms.map.value = t; }); s.wrap = THREE.RepeatWrapping; }
const spr = (tex, size, op, col = 0xffffff) => { const m = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: op, color: new THREE.Color(col) })); m.scale.setScalar(size); sunGroup.add(m); return m; };
const corona = spr(glowTex([[0, 'rgba(255,245,225,1)'], [.14, 'rgba(255,214,160,.7)'], [.3, 'rgba(255,150,70,.16)'], [.6, 'rgba(255,110,40,.04)'], [1, 'rgba(0,0,0,0)']]), SUN_R * 6, 1, 0xffffff);
corona.material.color.multiplyScalar(1.4);
const rays1 = spr(raysTex(3), SUN_R * 10, .5), rays2 = spr(raysTex(19), SUN_R * 7.5, .4);
const halo = spr(glowTex([[0, 'rgba(255,190,120,.10)'], [.5, 'rgba(255,150,80,.03)'], [1, 'rgba(0,0,0,0)']]), SUN_R * 20, 1);
const sunLight = new THREE.PointLight(0xfff2e2, 3.4, 0, 0); scene.add(sunLight);
scene.add(new THREE.AmbientLight(0x8fa6c8, .07));
scene.matrixWorldAutoUpdate = false; // updated once per frame in tick()

// ---------------------------------------------------------------- shared shaders
function atmosphere(R, color, k, thick = .07) {
  const m = new THREE.ShaderMaterial({
    side: THREE.BackSide, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    uniforms: { center: { value: new V3() }, R: { value: R }, Rs: { value: R * (1 + thick) }, color: { value: new THREE.Color(color) }, k: { value: k }, L: { value: new V3(1, 0, 0) } },
    vertexShader: 'varying vec3 vP; void main(){ vec4 w = modelMatrix * vec4(position,1.); vP = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }',
    fragmentShader: `uniform vec3 center, color, L; uniform float R, Rs, k; varying vec3 vP;
      void main(){ vec3 d = normalize(vP - cameraPosition); float tt = dot(center - cameraPosition, d); vec3 q = cameraPosition + d * tt;
        float b = length(q - center); float i = pow(clamp(1. - (b - R) / (Rs - R), 0., 1.), 3.2);
        vec3 qc = q - center; float ql = length(qc); float lit = ql > 1e-4 ? smoothstep(-.45, .6, dot(qc / ql, L)) : .5; gl_FragColor = vec4(max(color * i * lit * k, vec3(0.)), 1.); }`
  });
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(R * (1 + thick), 64, 32), m); mesh.renderOrder = 3; return mesh;
}

// ---------------------------------------------------------------- planets
const PL = [
  { id: 'mercury', r: .42, a: 14, T: .24, day: 1408, tilt: .03, a0: 2.1, tint: 0x9a9590 },
  { id: 'venus', r: .88, a: 19, T: .62, day: -5832, tilt: 177.4, a0: 4.4, atm: [0xffd6a0, .9], tint: 0xd8b98a },
  { id: 'earth', r: 1, a: 25, T: 1, day: 23.93, tilt: 23.44, a0: .7, tint: 0x3a6aa0 },
  { id: 'mars', r: .6, a: 31.5, T: 1.88, day: 24.6, tilt: 25.2, a0: 3.2, atm: [0xff9a70, .35], tint: 0xb4603a },
  { id: 'jupiter', r: 3, a: 54, T: 11.86, day: 9.93, tilt: 3.1, a0: 5.5, atm: [0xffe2c0, .35], tint: 0xc9a988 },
  { id: 'saturn', r: 2.5, a: 68, T: 29.4, day: 10.7, tilt: 26.7, a0: 1.6, ring: 1, atm: [0xffe7c0, .3], tint: 0xd6c08f },
  { id: 'uranus', r: 1.65, a: 81, T: 84, day: -17.2, tilt: 97.8, a0: 4.0, atm: [0xaef2ff, .8], tint: 0x9fd8e0 },
  { id: 'neptune', r: 1.6, a: 93, T: 164.8, day: 16.1, tilt: 28.3, a0: 2.6, atm: [0x6f9dff, .9], tint: 0x4f73d8 }
];
const MOONS = {
  earth: [['Moon', .27, 2.75, 27.3, 0xffffff]],
  mars: [['Phobos', .07, 1.7, .32, 0x9a8a7a], ['Deimos', .05, 2.5, 1.26, 0x8c8072]],
  jupiter: [['Io', .2, 1.7, 1.77, 0xf1d98a], ['Europa', .17, 2.15, 3.55, 0xe9dfcc], ['Ganymede', .26, 2.75, 7.15, 0xc6bcae], ['Callisto', .24, 3.55, 16.7, 0x8c8275]],
  saturn: [['Enceladus', .07, 2.5, 1.37, 0xffffff], ['Rhea', .1, 2.85, 4.5, 0xddd9d1], ['Titan', .25, 3.6, 15.9, 0xd9a85b]],
  uranus: [['Miranda', .07, 1.7, 1.41, 0xc9c9c9], ['Ariel', .1, 2.1, 2.52, 0xd7d2cc], ['Titania', .13, 2.7, 8.7, 0xc8bdb4], ['Oberon', .12, 3.3, 13.5, 0xb9aea3]],
  neptune: [['Triton', .2, 2.7, -5.88, 0xefd9cf]]
};
const bodies = []; // for picking & occlusion: {obj, r, stop}
const placeholder = c => { const t = new THREE.DataTexture(new Uint8Array([(c >> 16) & 255, (c >> 8) & 255, c & 255, 255]), 1, 1); t.colorSpace = THREE.SRGBColorSpace; t.needsUpdate = true; return t; };
const DEG = PI / 180;
const orbitMat = new THREE.LineBasicMaterial({ color: 0xa9bed4, transparent: true, opacity: .13, depthWrite: false });
PL.forEach((p, i) => {
  p.stop = STOPS.findIndex(s => s.id === p.id);
  p.root = new THREE.Group(); scene.add(p.root);
  p.tiltG = new THREE.Group(); p.tiltG.rotation.z = -p.tilt * DEG; p.root.add(p.tiltG);
  p.spin = new THREE.Group(); p.tiltG.add(p.spin);
  p.w = .02 / Math.sqrt(p.T); p.ws = Math.sign(p.day) * .12 * Math.pow(24 / Math.abs(p.day), .35); p.ang = p.a0;
  const seg = MOBILE ? 72 : 96;
  if (p.id !== 'earth') {
    p.mat = new THREE.MeshStandardMaterial({ map: placeholder(p.tint), roughness: 1, metalness: 0 });
    p.mesh = new THREE.Mesh(new THREE.SphereGeometry(p.r, seg, seg / 2 | 0), p.mat); p.spin.add(p.mesh);
    use(p.id, t => { p.mat.map = t; p.mat.needsUpdate = true; });
  }
  if (p.atm) { p.atmo = atmosphere(p.r, p.atm[0], p.atm[1], p.id === 'venus' ? .09 : .06); p.root.add(p.atmo); }
  // orbit line
  const pts = []; for (let k = 0; k <= 360; k++) { const a = k / 360 * PI * 2; pts.push(new V3(Math.cos(a) * p.a, 0, -Math.sin(a) * p.a)); }
  p.orbit = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), orbitMat.clone()); scene.add(p.orbit);
  // moons orbit in the planet's equatorial plane
  p.moons = (MOONS[p.id] || []).map(([name, r, orb, per, tint], j) => {
    const piv = new THREE.Group(); piv.rotation.y = j * 2.1 + i; p.tiltG.add(piv);
    if (name === 'Triton') piv.rotation.x = .4;
    const mat = new THREE.MeshStandardMaterial({ map: placeholder(0x888888), color: tint, roughness: 1 });
    const m = new THREE.Mesh(new THREE.SphereGeometry(r, 48, 24), mat); m.position.x = orb * p.r; piv.add(m);
    use('moon', t => { mat.map = t; mat.needsUpdate = true; });
    const ring = new THREE.Line(new THREE.BufferGeometry().setFromPoints(Array.from({ length: 129 }, (_, k) => new V3(Math.cos(k / 128 * PI * 2) * orb * p.r, 0, Math.sin(k / 128 * PI * 2) * orb * p.r))), new THREE.LineBasicMaterial({ color: 0xa9bed4, transparent: true, opacity: 0, depthWrite: false }));
    piv.parent.add(ring); ring.rotation.copy(piv.rotation); ring.rotation.y = 0;
    const mo = { name, piv, mesh: m, r, w: Math.sign(per) * .35 / Math.sqrt(Math.abs(per)), ring };
    if (name === 'Titan') { mo.atmo = atmosphere(r, 0xe8b060, .9, .12); m.add(mo.atmo); }
    bodies.push({ obj: m, r, stop: p.stop, moon: true }); return mo;
  });
  bodies.push({ obj: p.root, r: p.r, stop: p.stop, p });
});
const P = Object.fromEntries(PL.map(p => [p.id, p]));

// Saturn's rings, with the planet's shadow cast across them
{
  const p = P.saturn, inner = p.r * 1.24, outer = p.r * 2.27, g = new THREE.RingGeometry(inner, outer, MOBILE ? 160 : 256, 1);
  const pos = g.attributes.position, uv = g.attributes.uv;
  for (let i = 0; i < pos.count; i++) { const l = Math.hypot(pos.getX(i), pos.getY(i)); uv.setXY(i, (l - inner) / (outer - inner), .5); }
  p.ringMat = new THREE.ShaderMaterial({
    side: THREE.DoubleSide, transparent: true, depthWrite: false,
    uniforms: { map: { value: null }, center: { value: new V3() }, R: { value: p.r } },
    vertexShader: 'varying vec2 vUv; varying vec3 vP; void main(){ vUv = uv; vec4 w = modelMatrix * vec4(position,1.); vP = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }',
    fragmentShader: `uniform sampler2D map; uniform vec3 center; uniform float R; varying vec2 vUv; varying vec3 vP;
      void main(){ vec4 c = texture2D(map, vUv); vec3 L = normalize(-vP); vec3 oc = vP - center; float b = dot(oc, L); float h = b * b - (dot(oc, oc) - R * R);
        float sh = (b < 0.) ? smoothstep(0., R * R * .08, h) : 0.; vec3 col = c.rgb * (1. - sh * .92) * 1.05; gl_FragColor = vec4(col, c.a * .95);
        #include <colorspace_fragment>
      }`
  });
  const ring = new THREE.Mesh(g, p.ringMat); ring.rotation.x = -PI / 2; p.tiltG.add(ring); p.ringMesh = ring;
  const loadRing = () => loadImg(`tex/ring.png?v=${VER}`).then(img => { const t = new THREE.Texture(img); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = ANISO; t.needsUpdate = true; p.ringMat.uniforms.map.value = t; });
  p.loadRing = loadRing;
}

// ---------------------------------------------------------------- Earth
const E = P.earth;
const earthU = {
  dayMap: { value: placeholder(0x2a4a70) }, nightMap: { value: placeholder(0x000000) }, specMap: { value: placeholder(0x000000) },
  cloudMap: { value: placeholder(0x000000) }, normalMap: { value: placeholder(0x8080ff) }, L: { value: new V3(1, 0, 0) }, cloudShift: { value: 0 }, nightK: { value: 1 }, normalK: { value: 2.2 }
};
const earthMat = new THREE.ShaderMaterial({
  uniforms: earthU,
  vertexShader: 'varying vec2 vUv; varying vec3 vN; varying vec3 vP; void main(){ vUv = uv; vec4 w = modelMatrix * vec4(position,1.); vP = w.xyz; vN = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * viewMatrix * w; }',
  fragmentShader: `uniform sampler2D dayMap, nightMap, specMap, cloudMap, normalMap; uniform vec3 L; uniform float cloudShift, nightK, normalK;
    varying vec2 vUv; varying vec3 vN; varying vec3 vP;
    vec3 perturb(vec3 p, vec3 n, vec2 uv, vec3 mn){ vec3 q0 = dFdx(p), q1 = dFdy(p); vec2 s0 = dFdx(uv), s1 = dFdy(uv);
      if (abs(s0.x) > .25 || abs(s1.x) > .25) return n;
      vec3 q1p = cross(q1, n), q0p = cross(n, q0); vec3 T = q1p * s0.x + q0p * s1.x, B = q1p * s0.y + q0p * s1.y;
      float det = max(dot(T, T), dot(B, B)); if (det < 1e-20) return n; float sc = inversesqrt(det); vec3 r = T * (mn.x * sc) + B * (mn.y * sc) + n * mn.z; return dot(r, r) > 1e-12 ? normalize(r) : n; }
    void main(){
      vec3 N = normalize(vN), V = normalize(cameraPosition - vP), Ld = normalize(L);
      vec3 mn = texture2D(normalMap, vUv).xyz * 2. - 1.; mn.xy *= normalK; vec3 Np = perturb(vP, N, vUv, normalize(mn));
      float ndl = dot(N, Ld), dayK = smoothstep(-.12, .28, ndl);
      vec3 day = texture2D(dayMap, vUv).rgb; float cl = texture2D(cloudMap, vUv + vec2(cloudShift, 0.)).r;
      vec3 col = day * max(dot(Np, Ld), 0.) * 1.3 * (1. - cl * .3) + day * .012;
      float spec = texture2D(specMap, vUv).r; vec3 Hh = normalize(Ld + V);
      col += vec3(1., .93, .82) * pow(max(dot(N, Hh), 0.), 60.) * spec * smoothstep(0., .25, ndl) * .9;
      col += vec3(.2, .35, .55) * pow(max(dot(N, Hh), 0.), 8.) * spec * smoothstep(0., .25, ndl) * .08;
      vec3 night = texture2D(nightMap, vUv).rgb; col += night * night * vec3(1.6, 1.25, .85) * 2.6 * (1. - dayK) * nightK * (1. - cl * .7);
      float fr = pow(1. - max(dot(N, V), 0.), 2.6); col += vec3(.3, .58, 1.) * fr * smoothstep(-.35, .55, ndl) * .85;
      gl_FragColor = vec4(clamp(col, 0., 64.), 1.);
      #include <colorspace_fragment>
    }`
});
E.mesh = new THREE.Mesh(new THREE.SphereGeometry(1, MOBILE ? 128 : 192, MOBILE ? 64 : 96), earthMat); E.spin.add(E.mesh);
const cloudMat = new THREE.ShaderMaterial({
  transparent: true, depthWrite: false, uniforms: { map: { value: placeholder(0) }, L: earthU.L, op: { value: .95 } },
  vertexShader: 'varying vec2 vUv; varying vec3 vN; void main(){ vUv = uv; vN = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }',
  fragmentShader: 'uniform sampler2D map; uniform vec3 L; uniform float op; varying vec2 vUv; varying vec3 vN; void main(){ float c = texture2D(map, vUv).r; float ndl = dot(normalize(vN), normalize(L)); float lit = smoothstep(-.18, .55, ndl); gl_FragColor = vec4(vec3(.015 + lit * 1.02), c * op * (.15 + .85 * smoothstep(-.35, .25, ndl))); }'
});
E.clouds = new THREE.Mesh(new THREE.SphereGeometry(1.008, MOBILE ? 96 : 128, MOBILE ? 48 : 64), cloudMat); E.spin.add(E.clouds);
E.atmo = atmosphere(1, 0x5a9cff, 1.35, .055); E.root.add(E.atmo);
use('earth', t => { earthU.dayMap.value = t; });
use('night', t => { earthU.nightMap.value = t; });
use('spec', t => { earthU.specMap.value = t; }, false);
use('normal', t => { earthU.normalMap.value = t; }, false);
use('clouds', t => { cloudMat.uniforms.map.value = t; earthU.cloudMap.value = t; }, false);

// lat/lon on the unit sphere, matching SphereGeometry's UV layout
const ll = (lat, lon, r = 1) => { const phi = (lon + 180) / 360 * PI * 2, th = (90 - lat) / 180 * PI; return new V3(-Math.cos(phi) * Math.sin(th) * r, Math.cos(th) * r, Math.sin(phi) * Math.sin(th) * r); };

// the green signal
const signal = new THREE.Group(); E.spin.add(signal);
{
  const p = ll(SIGNAL.lat, SIGNAL.lon, 1.002); signal.position.copy(p); signal.lookAt(p.clone().multiplyScalar(2));
  const mintHDR = new THREE.Color(MINT).multiplyScalar(2.6);
  const core = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex([[0, 'rgba(255,255,255,1)'], [.18, 'rgba(151,252,228,.9)'], [.45, 'rgba(151,252,228,.18)'], [1, 'rgba(151,252,228,0)']]), color: mintHDR, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
  core.scale.setScalar(.075); signal.add(core); signal.userData.core = core;
  const ringM = new THREE.MeshBasicMaterial({ color: mintHDR, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide });
  signal.userData.rings = [0, 1].map(k => { const r = new THREE.Mesh(new THREE.RingGeometry(.92, 1, 64), ringM.clone()); r.scale.setScalar(.02); signal.add(r); return r; });
  const beam = new THREE.Mesh(new THREE.CylinderGeometry(.0025, .006, .22, 12, 1, true), new THREE.ShaderMaterial({ transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, uniforms: { c: { value: mintHDR } },
    vertexShader: 'varying float vY; void main(){ vY = uv.y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }', fragmentShader: 'uniform vec3 c; varying float vY; void main(){ gl_FragColor = vec4(c * pow(1. - vY, 1.5) * .9, 1.); }' }));
  beam.rotation.x = -PI / 2; beam.position.z = .11; signal.add(beam);
}

// ---------------------------------------------------------------- asteroid belt
const belt = new THREE.Group(); scene.add(belt);
const BELT_FOCUS = .55, CL = MOBILE ? 110 : 180;
let beltMesh, clusterData = [];
{
  const n = (MOBILE ? 1500 : 2800) + CL;
  const geo = new THREE.IcosahedronGeometry(1, 1), pa = geo.attributes.position;
  const hash = (x, y, z) => { const s = Math.sin(x * 12.9898 + y * 78.233 + z * 37.719) * 43758.5453; return s - Math.floor(s); };
  for (let i = 0; i < pa.count; i++) { const v = new V3().fromBufferAttribute(pa, i), k = .72 + hash(v.x, v.y, v.z) * .5; v.multiplyScalar(k); v.y *= .82; pa.setXYZ(i, v.x, v.y, v.z); }
  geo.computeVertexNormals();
  beltMesh = new THREE.InstancedMesh(geo, new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: .95, metalness: 0, flatShading: true }), n);
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), s = new V3(), pp = new V3(), c = new THREE.Color();
  for (let i = 0; i < n; i++) {
    let a, r, y, sc;
    if (i < CL) { a = BELT_FOCUS + (Math.random() - .5) * .3; r = 41 + (Math.random() - .5) * 6; y = (Math.random() - .5) * 2.2; sc = .02 + Math.pow(Math.random(), 4) * .24; }
    else { a = Math.random() * PI * 2; r = 41 + (Math.random() + Math.random() + Math.random() - 1.5) * 3.2; y = (Math.random() + Math.random() - 1) * .9; sc = .02 + Math.pow(Math.random(), 7) * .16; }
    pp.set(Math.cos(a) * r, y, -Math.sin(a) * r); e.set(Math.random() * 6, Math.random() * 6, Math.random() * 6); q.setFromEuler(e); s.set(sc, sc * (.7 + Math.random() * .5), sc);
    m.compose(pp, q, s); beltMesh.setMatrixAt(i, m);
    const g = .16 + Math.random() * .2; c.setRGB(g * 1.1, g, g * .88); beltMesh.setColorAt(i, c);
    if (i < CL) clusterData.push({ p: pp.clone(), e: e.clone(), s: s.clone(), w: (Math.random() - .5) * .5 });
  }
  belt.add(beltMesh);
}
const beltFocus = v => v.set(Math.cos(BELT_FOCUS) * 41, 0, -Math.sin(BELT_FOCUS) * 41).applyAxisAngle(new V3(0, 1, 0), belt.rotation.y);

// ---------------------------------------------------------------- post
const rt = new THREE.WebGLRenderTarget(4, 4, { type: THREE.HalfFloatType, samples: MOBILE ? 2 : 4 });
const composer = new EffectComposer(renderer, rt);
const renderPass = new RenderPass(scene, camera); composer.addPass(renderPass);
const bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), .9, .55, .92); composer.addPass(bloom);
if (MOBILE) { bloom.nMips = 3; const ss = bloom.setSize.bind(bloom); bloom.setSize = (w, h) => ss(Math.round(w * .5), Math.round(h * .5)); }
composer.addPass(new OutputPass());
const flare = new Flare();
let mars = null, alt = null, altKind = null;
const getMars = () => { if (!mars) { mars = new MarsBase(renderer, canvas, MOBILE); mars.resize(W, H, dpr); try { renderer.compileAsync ? renderer.compileAsync(mars.scene, mars.cam).catch(() => { }) : renderer.compile(mars.scene, mars.cam); } catch (e) { } } return mars; };
let hyper = null; const getHyper = () => { if (!hyper) { hyper = new Hyper(renderer, canvas, MOBILE); hyper.resize(W, H, dpr); try { renderer.compileAsync ? renderer.compileAsync(hyper.scene, hyper.cam).catch(() => { }) : renderer.compile(hyper.scene, hyper.cam); } catch (e) { } } return hyper; };

// ---------------------------------------------------------------- camera rig
const _a0 = new V3(), _a1 = new V3();
const rig = { off: new V3(), ov: new V3(), ld: Math.log(2600), sc: 1, calm: false, arrived: true, target: new V3(), dist: 2600, pitch: .7, anchor: v => v.set(0, 0, 0), tr: null, vy: 0, vp: 0, yawT: .9, pitchT: .7, yB: .9, yBT: .9, yU: 0, yUT: 0, pB: .7, pBT: .7, pU: 0, pUT: 0, zoom: 1, zoomT: 1, base: 1, yaw: .9 };
const vo = { x: 0, y: 0, tx: 0, ty: 0 };
let FOV = 42;
function fovs() { const v = FOV * DEG, h = 2 * Math.atan(Math.tan(v / 2) * camera.aspect); return Math.min(v, h); }
const fitDist = (R, f) => R / Math.sin(Math.atan(Math.tan(fovs() / 2) * f));
const portrait = () => W / H < .8;
function overviewDist() { return fitDist(104, .92); }
function frame(i) {
  const s = STOPS[i], tmp = new V3();
  if (s.id === 'overview') return { anchor: v => v.set(0, 0, 0), dist: overviewDist(), yaw: rig.yaw, pitch: .72 };
  if (s.id === 'sun') return { anchor: v => v.set(0, 0, 0), dist: fitDist(SUN_R, portrait() ? .3 : .34), yaw: rig.yaw, pitch: .12 };
  if (s.id === 'belt') { beltFocus(tmp); const yaw = Math.atan2(tmp.x, tmp.z) + PI / 2 + .35; return { anchor: beltFocus, dist: 6.5, yaw, pitch: .1 }; }
  const p = P[s.id]; const pos = p.root.position, yaw0 = Math.atan2(-pos.x, -pos.z);
  const f = portrait() ? .5 : .4, R = p.ring ? p.r * 2.3 : p.r;
  const dist = fitDist(R, f);
  // pick the viewing angle with the clearest background: no other planet or the Sun sitting right behind this one
  let bestYaw = yaw0 + .95, bestScore = -1; const pitch = p.ring ? .3 : .12, cp = Math.cos(pitch);
  for (const off of [.95, -.95, .6, -.6, 1.15, -1.15, .3, -.3]) {
    const yw = yaw0 + off, cx = pos.x + dist * cp * Math.sin(yw), cy = pos.y + dist * Math.sin(pitch), cz = pos.z + dist * cp * Math.cos(yw);
    const dx = pos.x - cx, dy = pos.y - cy, dz = pos.z - cz, dl = Math.hypot(dx, dy, dz); let score = 9;
    for (const o of PL) { if (o === p) continue; const ox = o.root.position.x - cx, oy = o.root.position.y - cy, oz = o.root.position.z - cz, ol = Math.hypot(ox, oy, oz); if (ol < dl) continue;
      const ang = Math.acos(clamp((dx * ox + dy * oy + dz * oz) / (dl * ol), -1, 1)), need = Math.atan(R / dl) * 1.5 + Math.atan(o.r / ol); score = Math.min(score, ang / need); }
    { const ox = -cx, oy = -cy, oz = -cz, ol = Math.hypot(ox, oy, oz); if (ol > dl) { const ang = Math.acos(clamp((dx * ox + dy * oy + dz * oz) / (dl * ol), -1, 1)), need = Math.atan(R / dl) * 1.5 + Math.atan(SUN_R / ol); score = Math.min(score, ang / need); } }
    const sc = Math.min(score, 2.5) - Math.abs(Math.abs(off) - .95) * .35 - (off < 0 ? .1 : 0); if (sc > bestScore) { bestScore = sc; bestYaw = yw; }
  }
  return { anchor: v => v.copy(p.root.position), dist, yaw: bestYaw, pitch };
}
// One camera, always chasing one destination through critically damped springs (position offset, log-distance, yaw, pitch).
// Any new destination just retargets the springs, so velocity stays continuous: every transition is interruptible, nothing is ignored or queued.
function setDest(fr, sc = 1) {
  fr.anchor(_a0); rig.off.copy(rig.target).sub(_a0);
  rig.anchor = fr.anchor; rig.base = fr.dist; rig.zoomT = 1;
  rig.yB += rig.yU; rig.yU = rig.yUT = 0; rig.pB += rig.pU; rig.pU = rig.pUT = 0; sdv.yB += sdv.yU; sdv.pB += sdv.pU; sdv.yU = sdv.pU = 0; // fold the user's look into the flight, keeping velocity
  rig.yBT = rig.yB + wrapPI(fr.yaw - rig.yB); rig.pBT = fr.pitch; rig.vy = rig.vp = 0;
  rig.sc = sc; rig.tr = rig.tr || { t: 0 }; rig.calm = false; rig.arrived = false;
}

// ---------------------------------------------------------------- UI
const ui = {
  hud: $('#hud'), card: $('#card'), cardIn: $('#cardIn'), rail: $('#rail'), labels: $('#labels'), hint: $('#hint'), tele: $('#tele'),
  pop: $('#pop'), earthUI: $('#earthUI'), hyperUI: $('#hyperUI'), fade: $('#fade'), loader: $('#loader')
};
let stop = 0, mode = 'boot', cardOpen = false, cardFull = false;
// rail
STOPS.forEach((s, i) => {
  const b = document.createElement('button'); b.className = 'tick'; b.dataset.i = i; b.setAttribute('aria-label', s.name);
  b.innerHTML = `<i></i><span>${s.short}</span>`; b.onclick = () => { sound.blip(700); go(i, { force: true }); }; ui.rail.querySelector('.ticks').appendChild(b);
});
const stepStop = d => { const n = clamp(stop + d, 0, STOPS.length - 1); if (n === stop) return; sound.blip(d > 0 ? 760 : 600); go(n); try { navigator.vibrate && navigator.vibrate(5); } catch (_) { } };
$('#prev').onclick = () => stepStop(-1); $('#next').onclick = () => stepStop(1);
$('#sPrev').onclick = () => stepStop(-1); $('#sNext').onclick = () => stepStop(1);
// overview labels
const plabels = STOPS.map((s, i) => {
  if (s.id === 'overview') return null;
  const el = document.createElement('button'); el.className = 'plabel'; el.innerHTML = `<i></i><b>${s.idx}</b><span>${s.short}</span>`;
  el._sfx = ' translate(-6px,-50%)'; el.onclick = () => { sound.blip(760); go(i); }; ui.labels.appendChild(el); return el;
});
// earth labels
const eLabels = [];
CONTINENTS.forEach(c => { const el = document.createElement('button'); el.className = 'elabel cont'; el.textContent = c.name; el._sfx = ' translate(-50%,-50%)'; el.onclick = () => showPop(c.name, c.area, c.desc); ui.labels.appendChild(el); eLabels.push({ el, p: ll(c.lat, c.lon, 1.01), cont: 1 }); });
CITIES.forEach(c => { const el = document.createElement('button'); el.className = 'elabel city'; el.innerHTML = `<i></i><span>${c.name}</span>`; el._sfx = ' translate(-5px,-50%)'; el.onclick = () => showPop(c.name, `${Math.abs(c.lat).toFixed(1)}° ${c.lat >= 0 ? 'N' : 'S'} · ${Math.abs(c.lon).toFixed(1)}° ${c.lon >= 0 ? 'E' : 'W'}`, c.desc); ui.labels.appendChild(el); eLabels.push({ el, p: ll(c.lat, c.lon, 1.004) }); });
// Mars Base Alpha: a tiny glinting marker on Mars's surface (fan easter egg)
const marsMarker = new THREE.Group(); P.mars.spin.add(marsMarker); marsMarker.position.copy(ll(MARS_SITE.lat, MARS_SITE.lon, P.mars.r * 1.006)); marsMarker.visible = false;
{ const cv = document.createElement('canvas'); cv.width = cv.height = 128; const c = cv.getContext('2d'); const g = c.createRadialGradient(64, 64, 0, 64, 64, 64); g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(.12, 'rgba(255,236,200,.9)'); g.addColorStop(.4, 'rgba(255,190,130,.22)'); g.addColorStop(1, 'rgba(255,170,110,0)'); c.fillStyle = g; c.fillRect(0, 0, 128, 128);
  c.globalCompositeOperation = 'lighter'; [[0, 1], [1, 0]].forEach(([a, b]) => { const l = c.createLinearGradient(64 - 62 * a, 64 - 62 * b, 64 + 62 * a, 64 + 62 * b); l.addColorStop(0, 'rgba(255,255,255,0)'); l.addColorStop(.5, 'rgba(255,255,255,.95)'); l.addColorStop(1, 'rgba(255,255,255,0)'); c.fillStyle = l; c.fillRect(a ? 2 : 62, b ? 2 : 62, a ? 124 : 4, b ? 124 : 4); });
  const tex = new THREE.CanvasTexture(cv); tex.colorSpace = THREE.SRGBColorSpace;
  const gl = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false, depthTest: true, blending: THREE.AdditiveBlending, fog: false })); gl.scale.setScalar(.075); marsMarker.add(gl); marsMarker.userData.glint = gl; }
const marsLabel = document.createElement('button'); marsLabel.className = 'elabel sig mars'; marsLabel.innerHTML = '<span>Mars Base Alpha</span><em>Tap or zoom in to land</em>';
marsLabel._sfx = ' translate(-13px,-50%)'; marsLabel.onclick = () => dive('mars'); ui.labels.appendChild(marsLabel);
const sigLabel = document.createElement('button'); sigLabel.className = 'elabel sig'; sigLabel.innerHTML = '<span>Signal detected</span><em>Tap or zoom in to descend</em>';
sigLabel._sfx = ' translate(-13px,-50%)'; sigLabel.onclick = () => dive('hyper'); ui.labels.appendChild(sigLabel);
function showPop(t, sub, d) { sound.blip(900); ui.pop.innerHTML = `<button class="x" aria-label="Close">×</button><p class="k">${sub}</p><h3>${t}</h3><p>${d}</p>`; ui.pop.classList.add('on'); ui.pop.querySelector('.x').onclick = () => ui.pop.classList.remove('on'); }

function setHint(t) { if (ui.hint.dataset.t === t) return; ui.hint.dataset.t = t; ui.hint.classList.remove('on'); clearTimeout(setHint.k); setHint.k = setTimeout(() => { ui.hint.textContent = t; if (t) ui.hint.classList.add('on'); }, 350); }
function renderCard(i) {
  const s = STOPS[i];
  if (!s.desc) { closeCard(); return; }
  ui.cardIn.innerHTML = `<div class="c-top"><span class="c-idx">${s.idx}</span><span class="c-kind">${s.kind}</span></div>
    <h2>${s.name}</h2><p class="c-desc">${s.desc}</p>
    <button class="c-more" type="button">Details</button>
    <div class="c-body"><dl class="c-stats">${s.stats.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl>
    <ol class="c-facts">${s.facts.map(f => `<li>${f}</li>`).join('')}</ol></div>
    ${s.enter ? '<button class="c-cta" type="button" id="enterEarth"><span>Enter Earth</span><i></i></button>' : ''}`;
  ui.card.classList.remove('hl', 'open', 'mars'); cardFull = false;
  const ee = $('#enterEarth'); if (ee) ee.onclick = () => enterEarth();
  ui.cardIn.querySelector('.c-more').onclick = () => { cardFull = ui.card.classList.toggle('open'); sound.blip(820); };
  openCard();
}
function renderHyperCard() {
  const h = HYPER;
  ui.cardIn.innerHTML = `<div class="c-top"><span class="c-idx"><svg viewBox="20 40 160 125" width="22" height="16"><path fill="currentColor" d="M175.11589,99.27891c0,49.46366-30.3687,65.33789-46.47302,51.30413-13.11357-11.5031-17.02471-35.88989-36.81018-38.42055-25.07698-2.99085-27.37764,30.36839-43.94216,30.36839-19.3254,0-23.00642-27.83773-23.00642-42.33179,0-14.72405,4.14115-34.73961,20.47565-34.73961,19.09528,0,20.24566,28.75802,44.17226,27.14754,23.69661-1.61047,24.1567-31.51877,39.80103-44.17224,13.57335-11.27313,45.78283.69019,45.78283,50.84413Z"/></svg></span><span class="c-kind">${h.kicker}</span></div>
    <h2>${h.title}</h2><p class="c-desc">${h.desc}</p><button class="c-more" type="button">Details</button>
    <div class="c-body"><dl class="c-stats">${h.facts.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl>
    <div class="c-secs">${h.sections.map(([k, v]) => `<section><h4>${k}</h4><p>${v}</p></section>`).join('')}</div></div>
    <a class="c-cta" href="${h.url}" target="_blank" rel="noopener"><span>hyperliquid.xyz</span><i></i></a>`;
  ui.card.classList.add('hl'); ui.card.classList.remove('open'); cardFull = false;
  ui.cardIn.querySelector('.c-more').onclick = () => { cardFull = ui.card.classList.toggle('open'); sound.blip(820); };
  openCard(); sound.chime();
}
function renderMarsCard() {
  const m = MARS;
  ui.cardIn.innerHTML = `<div class="c-top"><span class="c-idx">★</span><span class="c-kind">${m.kicker}</span></div>
    <h2>${m.title}</h2><p class="c-desc">${m.desc}</p><button class="c-more" type="button">Details</button>
    <div class="c-body"><dl class="c-stats">${m.facts.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl>
    <div class="c-secs">${m.sections.map(([k, v]) => `<section><h4>${k}</h4><p>${v}</p></section>`).join('')}</div><p class="c-fine">${m.fine}</p></div>
    <button class="c-cta" type="button" id="waveBtn"><span>Wave hello</span><i></i></button>`;
  ui.card.classList.add('hl', 'mars'); ui.card.classList.remove('open'); cardFull = false;
  ui.cardIn.querySelector('.c-more').onclick = () => { cardFull = ui.card.classList.toggle('open'); sound.blip(820); };
  $('#waveBtn').onclick = () => { if (alt && alt.waveAll) { alt.waveAll(3.4); sayHi(1); sound.blip(900); } };
  openCard(); sound.chime();
}
function openCard() { cardOpen = true; document.body.classList.add('card-on'); ui.card.classList.add('on'); ui.cardIn.scrollTop = 0; }
function closeCard() { cardOpen = false; cardFull = false; document.body.classList.remove('card-on'); ui.card.classList.remove('on', 'open'); setTimeout(() => { if (!cardOpen) ui.card.classList.remove('mars'); }, 900); }
$('#cardX').onclick = () => { closeCard(); sound.blip(500); };

function setTele(i) {
  const s = STOPS[i];
  ui.tele.innerHTML = s.tele ? `<p><span>Target</span><b>${s.name}</b></p><p><span>Range</span><b>${s.tele[0]}</b></p><p><span>Note</span><b>${s.tele[1]}</b></p>`
    : `<p><span>Target</span><b>Solar System</b></p><p><span>Bodies</span><b>1 star · 8 planets</b></p><p><span>Span</span><b>≈ 60 AU</b></p>`;
}

// ---------------------------------------------------------------- navigation
function go(i, opts = {}) {
  i = clamp(i, 0, STOPS.length - 1);
  if (mode === 'hyper' || mode === 'dive') return;
  if ((mode === 'intro' || mode === 'boot') && !opts.force) return;
  if (mode === 'earth') exitEarth(true);
  if (i === stop && !opts.force) return;
  const was = stop; stop = i; AP.stop = i; mode = 'system'; AP.mode = mode;
  setDest(frame(i), clamp(1 - (opts.m || 0) * .6, .6, 1)); if (i !== was || !opts.noFly) sound.whoosh(2.2);
  closeCard(); ui.pop.classList.remove('on');
  document.querySelectorAll('.tick').forEach((b, k) => b.classList.toggle('on', k === i));
  $('#prev').disabled = $('#sPrev').disabled = i === 0; $('#next').disabled = $('#sNext').disabled = i === STOPS.length - 1;
  $('#sPrev').querySelector('span').textContent = i > 0 ? STOPS[i - 1].short : ''; $('#sNext').querySelector('span').textContent = i < STOPS.length - 1 ? STOPS[i + 1].short : '';
  document.body.dataset.stop = STOPS[i].id; setTele(i);
  const s = STOPS[i]; const pid = s.id;
  if (texSlots[pid]) queueHi([pid], true);
  [i - 1, i + 1].forEach(j => { const nid = STOPS[j] && STOPS[j].id; if (nid && texSlots[nid]) queueHi([nid]); }); // next/previous stop's imagery is ready before you swipe
  if (pid === 'earth') queueHi(['earth', 'night', 'clouds', 'spec', 'normal'], true);
  if (pid === 'mars' || pid === 'jupiter' || pid === 'saturn' || pid === 'earth' || pid === 'neptune' || pid === 'uranus') queueHi(['moon']);
  rig.onArrive = () => { if (stop === i && mode === 'system') { renderCard(i); try { navigator.vibrate && navigator.vibrate(6); } catch (_) { } if (pid === 'mars') { setTimeout(() => { if (stop === i && mode === 'system' && !ptr) faceObj(P.mars, marsMarker); }, 500); setTimeout(() => { if (stop === i && !mars && mode === 'system') getMars(); }, 1500); } } };
  setHint(i === 0 ? 'Use the arrows to travel  ·  Drag to look around' : (i === 1 || i === 2 ? 'Drag to spin' : ''));
}

const wrapA = a => Math.atan2(Math.sin(a), Math.cos(a));
function faceObj(b, obj) { // glide a body round (silky, interruptible) until the object on it faces the camera
  scene.updateMatrixWorld(); obj.getWorldPosition(_w).sub(b.root.position); _camDir.subVectors(camera.position, b.root.position);
  b.goal = wrapA(Math.atan2(_camDir.x, _camDir.z) - Math.atan2(_w.x, _w.z)); b.uv = 0;
}
function locateSignal() {
  if (mode !== 'earth') return; sound.blip(720); faceObj(E, signal);
  _w.copy(signal.getWorldPosition(_w)).sub(E.root.position); const lat = Math.asin(clamp(_w.y / _w.length(), -1, 1));
  rig.pUT = clamp(lat - rig.pBT, -1.42 - rig.pBT, 1.42 - rig.pBT); rig.vp = 0;
}
$('#locate').onclick = () => locateSignal();
function enterEarth() {
  if (mode !== 'system' || STOPS[stop].id !== 'earth') return;
  mode = 'earth'; AP.mode = mode; closeCard(); sound.whoosh(2.2); document.body.classList.add('in-earth');
  if (!MOBILE) queueHi(['earth:xl', 'night:xl'], true);
  E.frozen = true;
  // arrive above West Africa; the signal is on the other side of the globe
  scene.updateMatrixWorld(); const a = E.spin.localToWorld(ll(8, 8)).sub(E.root.position).normalize();
  const fr = { anchor: v => v.copy(E.root.position), dist: fitDist(1, portrait() ? .86 : .74), yaw: Math.atan2(a.x, a.z), pitch: clamp(Math.asin(a.y), -1, 1) };
  setDest(fr, REDUCED ? .4 : 1);
  rig.onArrive = () => { setTimeout(() => { if (mode === 'earth' && !hyper && !ptr) getHyper(); }, 1200); setHint(MOBILE ? 'Drag to turn the Earth  ·  Find the green signal' : 'Drag to turn the Earth  ·  Scroll to zoom  ·  Find the green signal'); };
  ui.earthUI.classList.add('on');
}
function exitEarth(silent) {
  mode = 'system'; AP.mode = mode; E.frozen = false; document.body.classList.remove('in-earth'); ui.earthUI.classList.remove('on'); ui.pop.classList.remove('on');
  if (!silent) { stop = STOPS.findIndex(s => s.id === 'earth'); go(stop, { force: true }); }
}
$('#earthBack').onclick = () => { sound.blip(500); exitEarth(false); };

let diveS = null;
const MARS_FADE = 'radial-gradient(circle at 50% 50%, #fff4ec 0%, #f4c6aa 32%, #c0654c 72%, #3b1b17 100%)', HYPER_FADE = '';
function dive(kind = 'hyper') {
  const mk = kind === 'mars';
  if (mk ? (mode !== 'system' || STOPS[stop].id !== 'mars') : mode !== 'earth') return;
  mode = 'dive'; AP.mode = mode; E.uv = 0; P.mars.uv = 0; P.mars.goal = E.goal = 0; ui.pop.classList.remove('on'); ui.earthUI.classList.remove('on'); closeCard(); setHint('');
  scene.updateMatrixWorld();
  const obj = mk ? marsMarker : signal, body = mk ? P.mars : E;
  const S = obj.getWorldPosition(new V3()), n = S.clone().sub(body.root.position).normalize();
  diveS = { t: 0, d: REDUCED ? 1.2 : (mk ? 2.3 : 2.6), p0: camera.position.clone(), q0: camera.quaternion.clone(), S, n, f0: camera.fov, obj, kind, off: mk ? .008 : .015 };
  ui.fade.style.background = mk ? MARS_FADE : HYPER_FADE;
  sound.whoosh(2.8, true); mk ? getMars() : getHyper();
}
function startAlt() {
  const kind = diveS.kind, mk = kind === 'mars'; mode = 'hyper'; AP.mode = mode; diveS = null; altKind = kind; const h = alt = mk ? getMars() : getHyper();
  renderPass.scene = h.scene; renderPass.camera = h.cam;
  if (mk) {
    renderer.toneMapping = THREE.NeutralToneMapping; renderer.toneMappingExposure = 1.0; bloom.strength = .22; bloom.threshold = 1.05; bloom.radius = .4;
    ui.tele.innerHTML = `<p><span>Target</span><b>Mars Base Alpha</b></p><p><span>Surface</span><b>${MARS_SITE.lat.toFixed(1)}° N · ${MARS_SITE.lon.toFixed(1)}° E</b></p><p><span>Status</span><b>Fan easter egg</b></p>`;
    h.onWave = () => { sayHi(0, 'Hello, Earth!'); };
    setHint(MOBILE ? 'Drag to look around  ·  Tap an astronaut or the base' : 'Drag to look around  ·  Scroll to zoom  ·  Click an astronaut or the base');
    setTimeout(() => { if (altKind === 'mars' && mode === 'hyper') setHint(''); }, 5600);
  } else {
    renderer.toneMapping = THREE.NeutralToneMapping; renderer.toneMappingExposure = .85; bloom.strength = .4; bloom.threshold = 1.1; bloom.radius = .35;
    ui.tele.innerHTML = `<p><span>Target</span><b>Hyperliquid</b></p><p><span>Surface</span><b>${SIGNAL.lat.toFixed(2)}° N · ${SIGNAL.lon.toFixed(2)}° E</b></p><p><span>Signal</span><b>Locked</b></p>`;
    setHint(MOBILE ? 'Drag to walk around it  ·  Tap the monument' : 'Drag to walk around it  ·  Scroll to zoom  ·  Click the monument');
  }
  h.resize(W, H, dpr); h.enter(REDUCED); document.body.classList.add('in-hyper'); document.body.dataset.alt = kind; ui.hyperUI.classList.add('on');
  ui.fade.style.transition = 'opacity 1.8s ease'; ui.fade.style.opacity = 0;
  sound.chime(); h.controls.enabled = false;
}
const sayEl = $('#say'), say = { t: 0, i: 0 }, SAYS = ['Hello, Earth!', 'Welcome to Mars!', 'Nice of you to drop by!', 'Mind the dust!', 'Ad astra!', 'Tell them we said hi!'];
let sayN = 0;
function sayHi(i, txt) { say.i = i; say.t = 2.8; sayEl.textContent = txt || SAYS[sayN++ % SAYS.length]; }
function exitHyper() {
  const kind = altKind; ui.fade.style.transition = 'opacity .7s ease'; ui.fade.style.opacity = 1; closeCard(); sound.whoosh(1.6); say.t = 0;
  setTimeout(() => {
    renderPass.scene = scene; renderPass.camera = camera; renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05;
    bloom.strength = .9; bloom.threshold = .92; bloom.radius = .55; if (alt) alt.controls.enabled = false; alt = null;
    document.body.classList.remove('in-hyper'); delete document.body.dataset.alt; ui.hyperUI.classList.remove('on'); setTele(stop);
    camera.fov = FOV; camera.updateProjectionMatrix();
    rig.zoomT = 1; rig.ld = Math.log(rig.base * 1.4); sdv.ld = 0; rig.tr = rig.tr || { t: 0 }; rig.calm = rig.arrived = false;
    if (kind === 'mars') { mode = 'system'; AP.mode = mode; setHint(''); } else { mode = 'earth'; AP.mode = mode; ui.earthUI.classList.add('on'); }
    ui.fade.style.transition = 'opacity 1.2s ease'; ui.fade.style.opacity = 0;
    setTimeout(() => { if (mode !== 'dive') ui.fade.style.background = ''; }, 1400);
  }, 750);
}
$('#hyperBack').onclick = () => { sound.blip(500); exitHyper(); };

// ---------------------------------------------------------------- input
let ptr = null, pinch = null, rel = null;
const PB = { passive: true };
// Pointer handlers only record; every move is applied once per frame inside tick() (coalesced), so input never fights rendering.
// A drag starts only after a small slop (so taps never rotate anything), then maps finger pixels to a consistent angle.
canvas.addEventListener('pointerdown', e => {
  if (mode === 'hyper') { ptr = { x: e.clientX, y: e.clientY, t: performance.now(), moved: 0 }; return; }
  if (pinch) return;
  try { canvas.setPointerCapture(e.pointerId); } catch (_) { }
  ptr = { id: e.pointerId, x: e.clientX, y: e.clientY, lx: e.clientX, ly: e.clientY, t: performance.now(), moved: 0, drag: false, type: e.pointerType, ax: 0, ay: 0 };
}, PB);
canvas.addEventListener('pointermove', e => {
  const p = ptr; if (!p || (p.id !== undefined && e.pointerId !== p.id) || pinch) return;
  if (p.ax === undefined) { p.moved = Math.max(p.moved, Math.hypot(e.clientX - p.x, e.clientY - p.y)); return; } // hyper mode: OrbitControls does the dragging
  p.moved = Math.max(p.moved, Math.hypot(e.clientX - p.x, e.clientY - p.y));
  if (mode === 'dive' || mode === 'boot' || mode === 'intro') return;
  if (!p.drag) { const slop = mode === 'earth' ? (p.type === 'touch' ? 5 : 3) : (p.type === 'touch' ? 9 : 4); if (p.moved > slop) { const dx = e.clientX - p.x, dy = e.clientY - p.y, k = 1 - slop / Math.hypot(dx, dy); p.drag = true; p.ax = dx * k; p.ay = dy * k; p.lx = e.clientX; p.ly = e.clientY; if (hoverOn) { hoverOn = false; canvas.style.cursor = ''; } } return; }
  p.ax += e.clientX - p.lx; p.ay += e.clientY - p.ly; p.lx = e.clientX; p.ly = e.clientY;
}, PB);
const endPtr = e => {
  if (!ptr) return; const p = ptr; ptr = null;
  const dt = performance.now() - p.t;
  if (p.drag && p.lx !== undefined && e.type === 'pointerup') { p.ax += e.clientX - p.lx; p.ay += e.clientY - p.ly; rel = p; } // keep the final delta so a quick flick loses nothing
  if (!p.drag && p.moved < 9 && dt < 600) tap(e.clientX, e.clientY);
};
let hoverQ = null, hoverOn = false;
canvas.addEventListener('pointermove', e => { if (e.pointerType === 'mouse' && !ptr) hoverQ = { x: e.clientX, y: e.clientY }; }, PB);
canvas.addEventListener('pointerleave', () => { hoverQ = null; if (hoverOn) { hoverOn = false; canvas.style.cursor = ''; } }, PB);
canvas.addEventListener('pointerup', endPtr, PB); canvas.addEventListener('pointercancel', () => { ptr = null; }, PB);
// pinch zoom (Earth view and overview)
canvas.addEventListener('touchstart', e => { if (e.touches.length === 2 && mode !== 'hyper') { ptr = null; pinch = { d: Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY), z: rig.zoomT }; } }, PB);
canvas.addEventListener('touchmove', e => { if (pinch && e.touches.length === 2) { const d = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY); setZoom(pinch.z * pinch.d / d); } }, PB);
canvas.addEventListener('touchend', e => { if (e.touches.length < 2) pinch = null; }, PB);
document.addEventListener('gesturestart', e => e.preventDefault(), { passive: false }); // iOS: no page pinch-zoom (the canvas is touch-action: none)
function setZoom(z) {
  const lo = mode === 'earth' ? (AP.sigNear ? .3 : .62) : (STOPS[stop].id === 'mars' ? .44 : .55);
  rig.zoomT = clamp(z, lo, mode === 'earth' ? 1.25 : 1.6);
}
addEventListener('wheel', e => {
  if (e.target.closest && e.target.closest('#card, #pop')) return;
  e.preventDefault(); if (mode === 'hyper' || mode === 'dive' || mode === 'boot' || mode === 'intro') return;
  const dy = e.deltaMode === 1 ? e.deltaY * 30 : e.deltaY;
  setZoom(rig.zoomT * Math.exp(dy * .0015));
}, { passive: false });
addEventListener('keydown', e => {
  if (mode === 'boot' || mode === 'intro') return;
  if (e.key === 'Escape') { if (ui.pop.classList.contains('on')) ui.pop.classList.remove('on'); else if (mode === 'hyper') exitHyper(); else if (mode === 'earth') exitEarth(false); else if (cardOpen) closeCard(); return; }
  if (mode !== 'system') return;
  if (['ArrowDown', 'ArrowRight', 'PageDown', ' '].includes(e.key)) { e.preventDefault(); go(stop + 1); }
  if (['ArrowUp', 'ArrowLeft', 'PageUp'].includes(e.key)) { e.preventDefault(); go(stop - 1); }
});
const tmpV = new V3(), tmpV2 = new V3();
const SO = { x: 0, y: 0, z: 0 }; // shared result: callers read it immediately
function screenOf(v) { tmpV.copy(v).project(camera); SO.x = (tmpV.x * .5 + .5) * W; SO.y = (-tmpV.y * .5 + .5) * H; SO.z = tmpV.z; return SO; }
const _toPos = new V3(), _right = new V3(), _up = new V3(), _camL = new V3(), _cs = new V3(), _camDir = new V3(), _w = new V3(), _n = new V3(), _ZERO = { x: 0, y: 0 };
const _bm = new THREE.Matrix4(), _bq = new THREE.Quaternion(), _be = new THREE.Euler(), _lookM = new THREE.Matrix4(), _qt = new THREE.Quaternion(), _up0 = new V3(0, 1, 0), _ndc = { x: 0, y: 0 }, _sv = { v: 0, ndc: _ndc };
const rip = $('#ripple');
function ripple(x, y) { // tap feedback: transform/opacity only
  if (!rip) return; rip.style.transform = `translate3d(${x - 22}px,${y - 22}px,0)`; rip.classList.remove('go'); void rip.offsetWidth; rip.classList.add('go');
}
const candBodies = [];
function pickBody(x, y) { // nearest planet/sun under a screen point
  if (!candBodies.length) { candBodies.push({ obj: sun, r: SUN_R, stop: 1 }); bodies.forEach(b => { if (!b.moon) candBodies.push(b); }); }
  let best = null, bd = 1e9; const tf = Math.tan(camera.fov * DEG / 2);
  for (const b of candBodies) {
    b.obj.getWorldPosition(tmpV2); const s = screenOf(tmpV2); if (s.z > 1) continue;
    const d = camera.position.distanceTo(tmpV2), pr = b.r / (d * tf) * H / 2, dd = Math.hypot(s.x - x, s.y - y);
    if (dd < Math.max(pr * 1.15, 26) && dd - pr < bd) { bd = dd - pr; best = b; }
  }
  return best;
}
function tap(x, y) {
  if (mode !== 'boot' && mode !== 'intro' && mode !== 'dive') ripple(x, y);
  if (mode === 'hyper') {
    if (!alt || alt.intro) return;
    const hit = alt.pick(new THREE.Vector2(x / W * 2 - 1, -(y / H) * 2 + 1));
    if (altKind === 'mars') {
      if (hit && hit.astro !== undefined) { alt.wave(hit.astro, 0, 3.4); sayHi(hit.astro); sound.blip(900); }
      else if (hit) { renderMarsCard(); }
      else if (cardOpen && MOBILE) closeCard();
    } else if (hit) renderHyperCard(); else if (cardOpen && MOBILE) closeCard();
    return;
  }
  if (mode === 'earth') {
    const s = screenOf(signal.getWorldPosition(tmpV2)); if (AP.sigVis > .1 && Math.hypot(s.x - x, s.y - y) < (MOBILE ? 68 : 54)) dive('hyper'); // one tap anywhere near the green spot goes straight in
    return;
  }
  if (mode !== 'system') return;
  if (STOPS[stop].id === 'mars' && AP.marsVis > .15) { const s = screenOf(marsMarker.getWorldPosition(tmpV2)); if (Math.hypot(s.x - x, s.y - y) < (MOBILE ? 66 : 52)) { dive('mars'); return; } }
  const best = pickBody(x, y);
  if (best) { if (best.stop === stop) { if (!cardOpen) renderCard(stop); else if (MOBILE) cardFull = ui.card.classList.toggle('open'); } else { sound.blip(760); go(best.stop); } }
}

// ---------------------------------------------------------------- resize
function resize(force) {
  let nw = innerWidth, nh = innerHeight;
  const vv = window.visualViewport; if (vv && MOBILE) { nw = Math.round(vv.width); nh = Math.round(vv.height); }
  if (!force && nw === W && nh === H) return; // ignore no-op viewport events (pinch, URL-bar wobble)
  W = nw; H = nh;
  FOV = W / H < .8 ? 54 : 42; camera.fov = FOV; camera.aspect = W / H;
  renderer.setPixelRatio(dpr); renderer.setSize(W, H, false); composer.setPixelRatio(dpr); composer.setSize(W, H);
  starMat.uniforms.dpr.value = dpr; camera.updateProjectionMatrix();
  if (hyper) hyper.resize(W, H, dpr); if (mars) mars.resize(W, H, dpr);
  if (mode === 'system') rig.base = frame(stop).dist;
}
addEventListener('resize', () => resize()); window.visualViewport?.addEventListener('resize', () => resize());

// ---------------------------------------------------------------- per-frame
const occl = (from, to, cs, r) => { // segment from->to intersects sphere?
  const d = tmpV.subVectors(to, from), len = d.length(); d.divideScalar(len);
  const oc = tmpV2.subVectors(from, cs), b = oc.dot(d), c = oc.lengthSq() - r * r, h = b * b - c;
  if (h < 0) return false; const t = -b - Math.sqrt(h); return t > 0 && t < len;
};
const bodyPos = [];
const sunPts = [new V3(), new V3(), new V3(), new V3(), new V3()];
function sunVisibility() {
  const s = screenOf(_n.set(0, 0, 0)); if (s.z > 1) { _sv.v = 0; _ndc.x = _ndc.y = 0; return _sv; }
  const ndc = _ndc; ndc.x = tmpV.x; ndc.y = tmpV.y; if (Math.abs(ndc.x) > 1.3 || Math.abs(ndc.y) > 1.3) { _sv.v = 0; return _sv; }
  const right = _right.setFromMatrixColumn(camera.matrixWorld, 0), up = _up.setFromMatrixColumn(camera.matrixWorld, 1);
  sunPts[0].set(0, 0, 0); sunPts[1].copy(right).multiplyScalar(SUN_R * .7); sunPts[2].copy(right).multiplyScalar(-SUN_R * .7); sunPts[3].copy(up).multiplyScalar(SUN_R * .7); sunPts[4].copy(up).multiplyScalar(-SUN_R * .7);
  let vis = 0; const cp = camera.position;
  for (let i = 0; i < bodies.length; i++) { (bodyPos[i] || (bodyPos[i] = new V3())).setFromMatrixPosition(bodies[i].obj.matrixWorld); }
  for (const sp of sunPts) {
    let hit = false;
    for (let i = 0; i < bodies.length; i++) { const b = bodies[i]; if (occl(cp, sp, bodyPos[i], b.r * (b.p && b.p.id === 'earth' ? 1.02 : 1))) { hit = true; break; } }
    if (!hit) vis += .2;
  }
  const edge = 1 - sstep(Math.max(Math.abs(ndc.x), Math.abs(ndc.y)), .95, 1.3);
  _sv.v = vis * edge; return _sv;
}

let rollS = 0, last = performance.now(), frames = 0, fpsT = 0, t = 0, perfT = 0, perfN = 0, perfSlow = 0, perfCool = 0, navT = 0, navS = 0;
const sdv = { yB: 0, pB: 0, yU: 0, pU: 0, ld: 0 };
// critically damped spring (smooth-damp): continuous velocity, no overshoot, frame-rate independent
function damp3(v, vel, st, dt, maxSpeed) { // spring a vector to zero, with a speed limit
  const o = 2 / st, x = o * dt, e = 1 / (1 + x + .48 * x * x + .235 * x * x * x), mc = maxSpeed * st, l = v.length(), k = l > mc ? mc / l : 1;
  const cx = v.x * k, cy = v.y * k, cz = v.z * k, tx = v.x - cx, ty = v.y - cy, tz = v.z - cz;
  const px = (vel.x + o * cx) * dt, py = (vel.y + o * cy) * dt, pz = (vel.z + o * cz) * dt;
  vel.set((vel.x - o * px) * e, (vel.y - o * py) * e, (vel.z - o * pz) * e); v.set(tx + (cx + px) * e, ty + (cy + py) * e, tz + (cz + pz) * e);
}
function damp(cur, tgt, key, st, dt) { const o = 2 / st, x = o * dt, e = 1 / (1 + x + .48 * x * x + .235 * x * x * x), ch = cur - tgt, tmp = (sdv[key] + o * ch) * dt; sdv[key] = (sdv[key] - o * tmp) * e; return tgt + (ch + tmp) * e; }
const earthLightTmp = new V3(), _qa = new THREE.Quaternion(), _qb = new THREE.Quaternion(), _Y = new V3(0, 1, 0);
let spinRdt = .016;
const SUNB = { id: 'sun', u: 0, uT: 0, uv: 0 };
PL.forEach(p => { p.u = p.uT = p.uv = 0; p.goal = 0; p.wsf = 1; p.own = p.spin.rotation.y; });
function inspBody() { // the object a drag spins right now (null = orbit the camera: overview, belt)
  if (mode === 'earth') return P.earth;
  if (mode !== 'system') return null;
  const id = STOPS[stop].id; return id === 'sun' ? SUNB : (P[id] || null);
}
// spin with inertia: while dragging the object follows the finger 1:1 (lightly filtered); on release the measured velocity decays smoothly,
// and the body's own slow rotation (or a gentle drift for the Sun and the frozen Earth) carries on underneath
function stepSpin(b, dt, drag, isCur) {
  const ea = b === E && mode === 'earth'; // the Earth globe: silkier filter, longer glide
  if (b.goal) { const m = b.goal * (1 - Math.exp(-dt * 2.4)); b.uT += m; b.goal -= m; b.uv = 0; if (Math.abs(b.goal) < 5e-4) b.goal = 0; }
  if (drag !== null) { b.goal = 0; b.uT += drag; const vdt = Math.max(Math.min(spinRdt, .25), .004); b.uv += (drag / vdt - b.uv) * (1 - Math.exp(-vdt * 40)); }
  else { b.uT += b.uv * dt; b.uv *= Math.exp(-dt * (ea ? 1.15 : 2.8)); if (Math.abs(b.uv) < 1e-4) b.uv = 0; if (isCur && !REDUCED && (b === SUNB || (b === E && E.frozen && AP.sigVis < .3))) b.uT += dt * (b === SUNB ? .03 : .02); }
  b.uv = clamp(b.uv, ea ? -8 : -9, ea ? 8 : 9);
  b.u += (b.uT - b.u) * (1 - Math.exp(-dt * (ea ? 15 : 24)));
  if (b.uT === 0 && Math.abs(b.u) < 1e-6) b.u = 0;
}
const _sp = new V3();
function updateSay(dt) {
  say.t -= dt; if (altKind !== 'mars' || !alt || !alt.astros) { sayEl.style.opacity = 0; return; }
  alt.headWorld(say.i, _sp).project(alt.cam); const x = (_sp.x * .5 + .5) * W, y = (-_sp.y * .5 + .5) * H;
  sayEl.style.transform = `translate3d(${x.toFixed(1)}px,${(y - 6).toFixed(1)}px,0) translate(-50%,-100%)`; sayEl.style.opacity = (_sp.z < 1 && !(cardOpen && MOBILE)) ? Math.min(1, say.t * 3, (2.8 - say.t) * 5) : 0;
}
function tick(now) {
  requestAnimationFrame(tick);
  let dt = (now - last) / 1000; last = now; const rdt = dt; if (dt > .1) dt = .1; if (dt <= 0) return; t += dt;
  frames++; fpsT += rdt; if (fpsT > 1) { AP.fps = Math.round(frames / fpsT); frames = 0; fpsT = 0; }
  // adaptive resolution: reacts within ~1.2 s; ignores tab-switch gaps and the cool-down right after a change
  if (AP.ready && mode !== 'boot' && rdt < .25) {
    if (perfCool > 0) perfCool -= rdt;
    else { perfT += rdt; perfN++; if (rdt > 1 / 40) perfSlow++; if (perfT > 1.2) { if (perfN >= 6 && perfSlow > perfN * .45 && dpr > DPR_MIN + .01) { dpr = Math.max(DPR_MIN, dpr - .15); resize(true); perfCool = 1; } perfT = perfN = perfSlow = 0; } }
  }
  // deferred texture uploads: one at a time, only while the camera is at rest
  if (pendingTex.length && now - lastUp > 160 && (!rig.tr || rig.calm) && !ptr && mode !== 'dive' && mode !== 'intro' && mode !== 'hyper') {
    let k = pendingTex.findIndex(j => j.s.name === STOPS[stop].id || (STOPS[stop].id === 'earth' && /^(night|clouds|spec|normal)$/.test(j.s.name))); if (k < 0) k = 0; // what you are looking at first
    applyTex(pendingTex.splice(k, 1)[0]); lastUp = now;
  }

  if (mode === 'hyper' || (mode === 'dive' && diveS && diveS.t >= diveS.d)) {
    if (mode === 'dive') startAlt();
    alt.update(dt); if (say.t > 0) updateSay(dt); renderer.info.autoReset = false; renderer.info.reset(); composer.render(dt); AP.calls = renderer.info.render.calls; AP.tris = renderer.info.render.triangles; return;
  }
  const sim = dt; spinRdt = rdt;
  const earthM = mode === 'earth', cur = inspBody(), dsrc = (ptr && ptr.drag && ptr.ax !== undefined) ? ptr : ((rel && (rel.ax || rel.ay)) ? rel : null), drag = !!dsrc && mode !== 'dive'; rel = null;
  const kx = earthM ? 4.4 / Math.min(W, 1000) * lerp(.5, 1, clamp(rig.zoom, 0, 1)) : 2 * PI / (1.2 * Math.min(W, 900)); // rad per pixel: a swipe of ~0.8 screen widths turns the object a full 360
  let ddx = 0, ddy = 0; if (drag) { ddx = dsrc.ax; ddy = dsrc.ay; dsrc.ax = dsrc.ay = 0; }
  stepSpin(SUNB, dt, cur === SUNB && drag ? ddx * kx : null, cur === SUNB);
  // orbits & spins
  sunMat.uniforms.t.value = t; rays1.material.rotation += dt * .012; rays2.material.rotation -= dt * .018;
  starMat.uniforms.t.value = t;
  for (const p of PL) {
    p.ang += p.w * sim; p.root.position.set(Math.cos(p.ang) * p.a, 0, -Math.sin(p.ang) * p.a);
    p.wsf += (((p.id === 'mars' && STOPS[stop].id === 'mars' && mode === 'system') ? .1 : 1) - p.wsf) * (1 - Math.exp(-dt * 1.4));
    if (!(p.id === 'earth' && E.frozen)) p.own += p.ws * p.wsf * sim;
    stepSpin(p, dt, cur === p && drag ? ddx * kx : null, cur === p);
    if (p.u !== 0 || p.uT !== 0) { _qa.copy(p.tiltG.quaternion).invert().multiply(_qb.setFromAxisAngle(_Y, p.u)).multiply(p.tiltG.quaternion).multiply(_qb.setFromAxisAngle(_Y, p.own)); p.spin.quaternion.copy(_qa); } else p.spin.rotation.y = p.own;
    p.moons.forEach(m => { m.piv.rotation.y += m.w * sim; m.mesh.rotation.y += m.w * sim; });
    const L = earthLightTmp.copy(p.root.position).negate().normalize();
    if (p.atmo) { p.atmo.material.uniforms.center.value.copy(p.root.position); p.atmo.material.uniforms.L.value.copy(L); }
  }
  sun.rotation.y = SUNB.u;
  E.clouds.rotation.y += dt * (E.frozen ? .002 : .006); earthU.cloudShift.value = -E.clouds.rotation.y / (2 * PI);
  belt.rotation.y += dt * .004;
  if (P.saturn.ringMat) P.saturn.ringMat.uniforms.center.value.copy(P.saturn.root.position);
  // spin the asteroid cluster you fly into
  if (STOPS[stop].id === 'belt' && beltMesh) {
    const m = _bm, q = _bq, e = _be;
    clusterData.forEach((c, i) => { e.set(c.e.x + t * c.w, c.e.y + t * c.w * .7, c.e.z); q.setFromEuler(e); m.compose(c.p, q, c.s); beltMesh.setMatrixAt(i, m); });
    beltMesh.instanceMatrix.clearUpdateRanges?.(); beltMesh.instanceMatrix.addUpdateRange?.(0, CL * 16); beltMesh.instanceMatrix.needsUpdate = true;
  }

  // ---- camera rig
  if (mode === 'dive' && diveS) {
    const D = diveS; D.t += dt; const k = Math.min(1, D.t / D.d), e = k * k * (3 - 2 * k), ein = k * k * k;
    D.S = D.obj.getWorldPosition(D.S || new V3());
    camera.position.lerpVectors(D.p0, tmpV.copy(D.S).addScaledVector(D.n, D.off), ein * .985 + e * .015);
    const qt = _qt.setFromRotationMatrix(_lookM.lookAt(camera.position, D.S, _up0));
    camera.quaternion.slerpQuaternions(D.q0, qt, Math.min(1, e * 1.6));
    camera.fov = D.f0 + 22 * ein; camera.updateProjectionMatrix();
    ui.fade.style.transition = 'none'; ui.fade.style.opacity = sstep(k, .6, .97);
    flare.update({ x: 0, y: 0 }, 0, W / H, dt);
  } else {
    const pmin = earthM ? -1.42 : (stop === 0 ? .05 : -1.3), pmax = earthM ? 1.42 : 1.35;
    // inspect / orbit: finger pixels -> angle (one consistent mapping). Planets, the Sun and the Earth globe spin in place with inertia;
    // the overview and the belt orbit the camera instead. Vertical drag tilts the view within limits.
    const kp = earthM ? kx * 1.05 : kx * .8;
    if (drag) { rig.pUT += ddy * kp; const vdt = Math.max(Math.min(rdt, .25), .004), kv = 1 - Math.exp(-vdt * 40); rig.vp += (ddy * kp / vdt - rig.vp) * kv; if (!cur) { rig.yUT -= ddx * kx; rig.vy += (-ddx * kx / vdt - rig.vy) * kv; } }
    else if (!ptr || !ptr.drag) {
      if (!cur) { rig.yUT += rig.vy * dt; rig.vy *= Math.exp(-dt * 2.6); } else rig.vy = 0;
      rig.pUT += rig.vp * dt; rig.vp *= Math.exp(-dt * (earthM ? 1.5 : 3.2));
      if (cur && !earthM && !ptr) { const r = Math.exp(-dt * .5); rig.pUT *= r; } // the tilt eases back to level
      if (!REDUCED && !cur && (mode === 'system' || mode === 'boot')) rig.yBT += dt * (stop === 0 ? .012 : .02); // gentle idle drift
    }
    rig.vy = clamp(rig.vy, -7, 7); rig.vp = clamp(rig.vp, earthM ? -5 : -7, earthM ? 5 : 7);
    { const lo = Math.max(pmin - rig.pBT, cur && !earthM ? -.6 : -9), hi = Math.min(pmax - rig.pBT, cur && !earthM ? .6 : 9); if (rig.pUT < lo) { rig.pUT = lo; rig.vp = 0; } else if (rig.pUT > hi) { rig.pUT = hi; rig.vp = 0; } }
    const fly = !!rig.tr, sc = rig.sc;
    // the chase: position offset (relative to the moving anchor, so orbiting planets never lag), distance, yaw, pitch
    rig.anchor(_a1); damp3(rig.off, rig.ov, .62 * sc, dt, Math.max(rig.dist * 2.4, 5)); rig.target.copy(_a1).add(rig.off);
    const dT = Math.max(rig.base * rig.zoomT, rig.off.length() * .55), lT = Math.log(dT); // pulls back while crossing space, then eases in
    rig.ld = damp(rig.ld, lT, 'ld', fly ? .5 * sc : .2, dt); rig.dist = Math.exp(rig.ld); rig.zoom = rig.dist / rig.base;
    rig.yB = damp(rig.yB, rig.yBT, 'yB', fly ? .55 * sc : .35, dt); rig.pB = damp(rig.pB, rig.pBT, 'pB', fly ? .55 * sc : .35, dt);
    rig.yU = damp(rig.yU, rig.yUT, 'yU', .085, dt); rig.pU = damp(rig.pU, rig.pUT, 'pU', .085, dt);
    rig.yaw = rig.yB + rig.yU; rig.pitch = rig.pB + rig.pU; rig.yawT = rig.yBT + rig.yUT; rig.pitchT = rig.pBT + rig.pUT;
    if (fly) {
      const eo = rig.off.length(), eL = Math.abs(rig.ld - lT), eY = Math.abs(rig.yBT - rig.yB), eP = Math.abs(rig.pBT - rig.pB);
      rig.calm = eo < rig.base * .15 + .05 && eL < .1 && eY < .15 && eP < .12;
      if (rig.calm && !rig.arrived) { rig.arrived = true; if (mode === 'intro') { mode = 'system'; AP.mode = mode; go(0, { force: true, noFly: true }); } else rig.onArrive && rig.onArrive(); }
      if (eo < rig.base * .01 + .005 && eL < .012 && eY < .008 && eP < .008) { rig.tr = null; rig.calm = false; }
    }
    const pull = 0;
    const ps = rig.pitch + pull * .05 + (REDUCED ? 0 : Math.sin(t * .17 + 2) * .008), cp = Math.cos(ps);
    const fl = REDUCED ? 0 : rig.dist * .0025, dd = rig.dist * (1 + pull * .07);
    camera.position.set(rig.target.x + dd * cp * Math.sin(rig.yaw) + Math.sin(t * .31) * fl, rig.target.y + dd * Math.sin(ps) + Math.sin(t * .23 + 1) * fl, rig.target.z + dd * cp * Math.cos(rig.yaw));
    camera.lookAt(rig.target);
    // banking with the turn (parallax feel) and a slightly slower star sphere for depth
    const rollT = clamp(-(sdv.yB + sdv.yU) * .011, -.04, .04); rollS += (rollT - rollS) * (1 - Math.exp(-dt * 6));
    if (Math.abs(rollS) > 1e-4 && !REDUCED) camera.rotateZ(rollS);
    sky.rotation.y = -rig.yaw * .02; sky.rotation.x = rig.pitch * .015;
  }
  // view offset keeps the planet clear of the card
  const wide = W > 820;
  vo.tx = cardOpen && mode === 'system' && wide ? Math.min(W * .17, 280) : 0;
  vo.ty = cardOpen && mode === 'system' && !wide ? H * (cardFull ? .26 : .14) : 0;
  const kvo = 1 - Math.exp(-dt * 3.2); vo.x += (vo.tx - vo.x) * kvo; vo.y += (vo.ty - vo.y) * kvo;
  if (Math.abs(vo.x) > .5 || Math.abs(vo.y) > .5) camera.setViewOffset(W, H, vo.x, vo.y, W, H); else camera.clearViewOffset();
  sky.position.copy(camera.position);

  // Earth lighting: true sunlight in space; inside Earth view, light follows you so every side can be read
  const sunDir = tmpV2.copy(E.root.position).negate().normalize();
  E.lmix = lerp(E.lmix || 0, (mode === 'earth' || mode === 'dive') ? 1 : 0, 1 - Math.exp(-dt * 1.6));
  const right = _right.setFromMatrixColumn(camera.matrixWorld, 0), up = _up.setFromMatrixColumn(camera.matrixWorld, 1);
  const camL = _camL.subVectors(camera.position, E.root.position).normalize().multiplyScalar(.8).addScaledVector(right, -.5).addScaledVector(up, .35).normalize();
  earthU.L.value.copy(sunDir).lerp(camL, E.lmix).normalize();
  E.atmo.material.uniforms.L.value.copy(earthU.L.value); E.atmo.material.uniforms.center.value.copy(E.root.position);
  cloudMat.uniforms.op.value = lerp(.95, .55, E.lmix);
  // moon steps aside in Earth view
  E.moons[0].mesh.visible = E.lmix < .5;

  // signal pulse
  const sc = (mode === 'earth' || mode === 'dive') ? 1 : (STOPS[stop].id === 'earth' ? .7 : 0);
  signal.visible = sc > 0;
  signal.userData.core.material.opacity = .75 + .25 * Math.sin(t * 3);
  signal.userData.rings.forEach((r, k) => { const ph = (t * .45 + k * .5) % 1; r.scale.setScalar(.012 + ph * .09); r.material.opacity = (1 - ph) * .8; });

  // highlight orbits
  const korb = 1 - Math.exp(-dt * 3);
  PL.forEach(p => { const on = STOPS[stop].id === p.id; p.orbit.visible = p.orbit.material.opacity > .004 || E.lmix < .3; p.orbit.material.opacity += ((E.lmix > .3 ? 0 : on ? .32 : stop === 0 ? .16 : .08) - p.orbit.material.opacity) * korb; p.moons.forEach(m => { m.ring.material.opacity += ((on && mode === 'system' ? .12 : 0) - m.ring.material.opacity) * korb; m.ring.visible = m.ring.material.opacity > .004; }); });

  // sun & flare (in Earth view the light follows you, so the Sun steps out of the way)
  const sunF = 1 - E.lmix; sun.visible = sunF > .02; sunMat.uniforms.fade.value = sunF;
  corona.material.opacity = sunF; rays1.material.opacity = .5 * sunF; rays2.material.opacity = .4 * sunF; halo.material.opacity = sunF;
  beltMesh.visible = E.lmix < .6;
  const sv = sunVisibility();
  flare.update(sv.ndc || _ZERO, mode === 'earth' ? 0 : sv.v, W / H, dt, stop === 0 || mode === 'intro' || mode === 'boot' ? .55 : 1);

  scene.updateMatrixWorld();
  if (hoverQ && mode === 'system' && (frames & 3) === 0) { const h = pickBody(hoverQ.x, hoverQ.y) !== null; if (h !== hoverOn) { hoverOn = h; canvas.style.cursor = h ? 'pointer' : ''; } }
  updateLabels(dt);
  renderer.info.autoReset = false; renderer.info.reset();
  composer.render(dt);
  flare.render(renderer);
  AP.calls = renderer.info.render.calls; AP.tris = renderer.info.render.triangles;
}

const labelState = new WeakMap();
function place(el, x, y, op) {
  const st = labelState.get(el) || {}; const o = Math.round(op * 100) / 100;
  if (o <= .01) { if (st.o !== 0) { el.style.opacity = 0; el.style.visibility = 'hidden'; st.o = 0; labelState.set(el, st); } return; }
  el.style.transform = `translate3d(${x.toFixed(1)}px,${y.toFixed(1)}px,0)${el._sfx || ''}`;
  if (st.o !== o) { el.style.opacity = o; el.style.visibility = 'visible'; st.o = o; labelState.set(el, st); }
}
function updateLabels() {
  // planet labels: overview only
  const showP = mode === 'system' && stop === 0 && (!rig.tr || rig.calm);
  plabels.forEach((el, i) => {
    if (!el) return;
    if (!showP) return place(el, 0, 0, 0);
    const id = STOPS[i].id; let pos;
    if (id === 'sun') pos = tmpV2.set(0, -SUN_R * 1.2, 0); else if (id === 'belt') pos = beltFocus(tmpV2); else pos = tmpV2.copy(P[id].root.position);
    const s = screenOf(pos); place(el, s.x, s.y, s.z < 1 ? 1 : 0);
  });
  // earth labels (anything near the green spot steps aside so it can never be blocked)
  const showE = mode === 'earth' && (!rig.tr || rig.calm);
  const camDir = _camDir.subVectors(camera.position, E.root.position).normalize();
  const w = _w, n = _n;
  AP.sigVis = 0; let sx = -999, sy = -999;
  if (showE || mode === 'dive') {
    signal.getWorldPosition(w); n.subVectors(w, E.root.position).normalize(); const f = n.dot(camDir), s = screenOf(w); sx = s.x; sy = s.y;
    AP.sigVis = sstep(f, .3, .55);
    const cdist = Math.hypot(s.x - W / 2, s.y - H / 2) / Math.min(W, H);
    AP.sigNear = AP.sigVis > .8 && cdist < .2;
  }
  eLabels.forEach(L => {
    if (!showE) return place(L.el, 0, 0, 0);
    w.copy(L.p).applyMatrix4(E.spin.matrixWorld); n.subVectors(w, E.root.position).normalize();
    const f = n.dot(camDir); const s = screenOf(w);
    const clear = AP.sigVis > .1 && Math.hypot(s.x - sx, s.y - sy) < (L.cont ? 150 : 96) ? 0 : 1;
    place(L.el, s.x, s.y, sstep(f, L.cont ? .35 : .45, L.cont ? .6 : .7) * clear);
  });
  if (showE || mode === 'dive') {
    place(sigLabel, sx, sy, mode === 'earth' ? AP.sigVis : 0);
    if (mode === 'earth' && AP.sigNear && rig.zoom < .42 && (!rig.tr || rig.calm)) dive('hyper');
    if (mode === 'earth' && !AP.sigNear && rig.zoomT < .62) rig.zoomT = .62;
  } else place(sigLabel, 0, 0, 0);
  // Mars Base Alpha marker + label (Mars stop only)
  const onMars = mode === 'system' && STOPS[stop].id === 'mars'; marsMarker.visible = onMars || (mode === 'dive' && diveS && diveS.kind === 'mars');
  AP.marsVis = 0;
  if (onMars) {
    marsMarker.getWorldPosition(w); n.subVectors(w, P.mars.root.position).normalize(); const cd = _camDir.subVectors(camera.position, P.mars.root.position).normalize(), f = n.dot(cd), s = screenOf(w);
    AP.marsVis = sstep(f, .3, .55); AP.marsNear = AP.marsVis > .8 && Math.hypot(s.x - (W / 2 - vo.x), s.y - (H / 2 - vo.y)) / Math.min(W, H) < .3;
    const gl = marsMarker.userData.glint; gl.scale.setScalar(.06 + .02 * (.5 + .5 * Math.sin(t * 3.1)) + (Math.sin(t * 9) > .93 ? .025 : 0));
    place(marsLabel, s.x, s.y, (!rig.tr || rig.calm) ? AP.marsVis : 0);
    if (AP.marsNear && rig.zoom < .6 && (!rig.tr || rig.calm) && !ptr) dive('mars');
    if (!AP.marsNear && rig.zoomT < .62) rig.zoomT = .62;
  } else { AP.marsNear = false; place(marsLabel, 0, 0, 0); }
}

// ---------------------------------------------------------------- boot
const loSet = ['sun', 'mercury', 'venus', 'earth', 'night', 'clouds', 'spec', 'normal', 'moon', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'stars'];
async function boot() {
  resize(true);
  let done = 0; const bar = $('#ldBar'), pct = $('#ldPct');
  const step = () => { done++; const k = done / (loSet.length + 1); bar.style.transform = `scaleX(${k})`; pct.textContent = String(Math.round(k * 100)).padStart(3, '0'); };
  await Promise.all([...loSet.map(n => upgrade(n, 'lo').then(step)), P.saturn.loadRing().then(step).catch(step), document.fonts ? document.fonts.ready : 0]);
  AP.loLoaded = true;
  // pre-compile shaders so the first moves don't hitch
  rig.target.set(0, 0, 0); rig.dist = overviewDist() * 2.6; rig.base = rig.dist; rig.ld = Math.log(rig.dist); rig.tr = null; rig.yaw = rig.yawT = rig.yB = rig.yBT = .9; rig.pitch = rig.pitchT = rig.pB = rig.pBT = .62; mode = 'boot';
  try { renderer.compile(scene, camera); } catch (e) { }
  requestAnimationFrame(tick);
  queueHi(['stars', 'sun', 'earth', 'night', 'clouds', 'jupiter', 'saturn', 'mars', 'venus', 'mercury', 'uranus', 'neptune', 'moon', 'spec', 'normal', ...(MOBILE ? [] : ['earth:xl', 'night:xl'])]);
  setTimeout(() => { AP.ready = true; document.body.classList.add('ready'); window.__apReady && window.__apReady(); }, 120);
}
function begin(withSound) {
  if (mode !== 'boot') return;
  sound.unlock(); sound.set(!!withSound); $('#snd').classList.toggle('on', !!withSound);
  ui.loader.classList.add('gone'); document.body.classList.add('began');
  mode = 'intro'; AP.mode = mode; stop = 0;
  setDest({ anchor: v => v.set(0, 0, 0), dist: overviewDist(), yaw: rig.yaw + .9, pitch: .72 }, REDUCED ? .4 : 2.4);
  sound.whoosh(4.5);
}
window.__apBegin = begin;
$('#snd').onclick = () => { sound.unlock(); sound.set(!sound.on); $('#snd').classList.toggle('on', sound.on); };
if (window.__apWant !== undefined) setTimeout(() => begin(window.__apWant), 0);
document.addEventListener('visibilitychange', () => { if (sound.ctx) { if (document.hidden) sound.ctx.suspend(); else if (sound.on) sound.ctx.resume(); } });
AP.go = i => go(i); AP.enterEarth = () => enterEarth(); AP.dive = k => dive(k); AP.locate = () => locateSignal(); AP.say = () => say; AP.astroScreen = i => { if (!alt || !alt.astros) return null; const a = alt.astros[i]; a.g.getWorldPosition(_sp); _sp.y += 1.8; _sp.project(alt.cam); return { x: (_sp.x * .5 + .5) * W, y: (-_sp.y * .5 + .5) * H, z: _sp.z }; }; AP.tapHyper = () => renderHyperCard(); AP.exitHyper = () => exitHyper();
AP.get = () => ({ alt: altKind, marsVis: AP.marsVis, marsNear: AP.marsNear, waving: alt && alt.astros ? alt.astros.map(a => (a.wt > 0 && a.wd <= 0) ? 1 : 0) : null,  hAz: alt ? alt.controls.getAzimuthalAngle() : 0, spinU: (inspBody() || {}).u,  tx: rig.target.x, ty: rig.target.y, tz: rig.target.z, cx: camera.position.x, cy: camera.position.y, cz: camera.position.z, calls: AP.calls, tris: AP.tris, yaw: rig.yaw, pitch: rig.pitch, yawT: rig.yawT, mode, stop, card: cardOpen, tr: !!rig.tr, calm: rig.calm, dist: rig.dist, zoom: rig.zoom, sigVis: AP.sigVis, dpr, fps: AP.fps, intro: alt && !!alt.intro });
AP.faceSignal = () => { scene.updateMatrixWorld(); const a = signal.getWorldPosition(new V3()).sub(E.root.position).normalize(); rig.yaw = rig.yawT = rig.yB = rig.yBT = Math.atan2(a.x, a.z); rig.pitch = rig.pitchT = rig.pB = rig.pBT = Math.asin(a.y); rig.yU = rig.yUT = rig.pU = rig.pUT = 0; rig.vy = rig.vp = 0; sdv.yB = sdv.pB = sdv.yU = sdv.pU = 0; };
boot();
