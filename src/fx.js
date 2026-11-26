import * as THREE from 'three';

// ---------- procedural textures (no image downloads, crisp at any DPR) ----------
function canvasTex(size, draw, w) {
  const c = document.createElement('canvas'); c.width = w || size; c.height = size;
  const g = c.getContext('2d'); draw(g, c.width, c.height);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
export function glowTex(stops) {
  return canvasTex(256, (g, w, h) => {
    const r = g.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2);
    stops.forEach(s => r.addColorStop(s[0], s[1])); g.fillStyle = r; g.fillRect(0, 0, w, h);
  });
}
// soft radial streaks for the sun's god rays
export function raysTex(seed = 1) {
  let s = seed; const rnd = () => (s = (s * 16807) % 2147483647) / 2147483647;
  return canvasTex(512, (g, w, h) => {
    g.translate(w / 2, h / 2); g.globalCompositeOperation = 'lighter';
    for (let i = 0; i < 140; i++) {
      const a = rnd() * Math.PI * 2, len = w * (0.18 + Math.pow(rnd(), 2.2) * 0.32), wd = 0.004 + rnd() * 0.02, al = 0.03 + rnd() * 0.1;
      const gr = g.createLinearGradient(0, 0, Math.cos(a) * len, Math.sin(a) * len);
      gr.addColorStop(0, `rgba(255,236,205,${al})`); gr.addColorStop(1, 'rgba(255,200,150,0)');
      g.fillStyle = gr; g.beginPath(); g.moveTo(0, 0);
      g.lineTo(Math.cos(a - wd) * len, Math.sin(a - wd) * len); g.lineTo(Math.cos(a + wd) * len, Math.sin(a + wd) * len); g.closePath(); g.fill();
    }
    const r = g.createRadialGradient(0, 0, 0, 0, 0, w / 2); r.addColorStop(0, 'rgba(0,0,0,0)'); r.addColorStop(.6, 'rgba(0,0,0,0)'); r.addColorStop(1, 'rgba(0,0,0,1)');
    g.globalCompositeOperation = 'destination-out'; g.fillStyle = r; g.fillRect(-w / 2, -h / 2, w, h);
  });
}
function ringTex() {
  return canvasTex(256, (g, w, h) => {
    const r = g.createRadialGradient(w / 2, h / 2, w * .3, w / 2, h / 2, w / 2);
    r.addColorStop(0, 'rgba(255,255,255,0)'); r.addColorStop(.75, 'rgba(255,255,255,.55)'); r.addColorStop(.86, 'rgba(255,255,255,.12)'); r.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = r; g.fillRect(0, 0, w, h);
  });
}
function hexTex() {
  return canvasTex(256, (g, w, h) => {
    g.translate(w / 2, h / 2); g.beginPath();
    for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI * 2 + Math.PI / 6; g.lineTo(Math.cos(a) * w * .46, Math.sin(a) * w * .46); }
    g.closePath(); const r = g.createRadialGradient(0, 0, 0, 0, 0, w * .46); r.addColorStop(0, 'rgba(255,255,255,.18)'); r.addColorStop(.85, 'rgba(255,255,255,.32)'); r.addColorStop(1, 'rgba(255,255,255,.06)');
    g.fillStyle = r; g.filter = 'blur(2px)'; g.fill();
  });
}
function starburstTex() {
  return canvasTex(512, (g, w, h) => {
    g.translate(w / 2, h / 2); g.globalCompositeOperation = 'lighter';
    const core = g.createRadialGradient(0, 0, 0, 0, 0, w / 2); core.addColorStop(0, 'rgba(255,250,240,1)'); core.addColorStop(.05, 'rgba(255,235,200,.75)'); core.addColorStop(.22, 'rgba(255,190,130,.12)'); core.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = core; g.fillRect(-w / 2, -h / 2, w, h);
    for (let i = 0; i < 6; i++) { // diffraction spikes
      g.save(); g.rotate(i / 6 * Math.PI); const gr = g.createLinearGradient(-w / 2, 0, w / 2, 0);
      gr.addColorStop(0, 'rgba(255,255,255,0)'); gr.addColorStop(.5, 'rgba(255,245,230,.5)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
      g.fillStyle = gr; g.fillRect(-w / 2, -1.2, w, 2.4); g.restore();
    }
  });
}
function streakTex() {
  return canvasTex(64, (g, w, h) => {
    const gr = g.createLinearGradient(0, 0, w, 0); gr.addColorStop(0, 'rgba(120,170,255,0)'); gr.addColorStop(.5, 'rgba(190,220,255,1)'); gr.addColorStop(1, 'rgba(120,170,255,0)');
    g.fillStyle = gr; g.fillRect(0, 0, w, h);
    const v = g.createLinearGradient(0, 0, 0, h); v.addColorStop(0, 'rgba(0,0,0,1)'); v.addColorStop(.5, 'rgba(0,0,0,0)'); v.addColorStop(1, 'rgba(0,0,0,1)');
    g.globalCompositeOperation = 'destination-out'; g.fillStyle = v; g.fillRect(0, 0, w, h);
  }, 512);
}
// smudges and specks on the visor, only visible when the sun is in frame
function dirtTex() {
  let s = 7; const rnd = () => (s = (s * 16807) % 2147483647) / 2147483647;
  return canvasTex(512, (g, w, h) => {
    g.fillStyle = '#000'; g.fillRect(0, 0, w, h); g.globalCompositeOperation = 'lighter';
    for (let i = 0; i < 70; i++) {
      const x = rnd() * w, y = rnd() * h, r = 6 + Math.pow(rnd(), 3) * 70, a = .015 + rnd() * .05;
      const gr = g.createRadialGradient(x, y, 0, x, y, r); gr.addColorStop(0, `rgba(255,255,255,${a})`); gr.addColorStop(.7, `rgba(255,255,255,${a * .6})`); gr.addColorStop(1, 'rgba(255,255,255,0)');
      g.fillStyle = gr; g.beginPath(); g.arc(x, y, r, 0, 7); g.fill();
    }
    for (let i = 0; i < 260; i++) { g.fillStyle = `rgba(255,255,255,${.04 + rnd() * .12})`; g.beginPath(); g.arc(rnd() * w, rnd() * h, .4 + rnd() * 1.4, 0, 7); g.fill(); }
    g.strokeStyle = 'rgba(255,255,255,.035)'; g.lineWidth = 8; g.filter = 'blur(6px)';
    for (let i = 0; i < 5; i++) { g.beginPath(); const x = rnd() * w, y = rnd() * h; g.moveTo(x, y); g.bezierCurveTo(x + 80, y - 40, x + 150, y + 40, x + 220, y - 10); g.stroke(); }
  });
}

// ---------- screen-space lens flare, drawn after the composer ----------
export class Flare {
  constructor() {
    this.scene = new THREE.Scene();
    this.cam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 2);
    const mk = (tex, color, opacity = 1) => {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: tex, color, transparent: true, blending: THREE.AdditiveBlending, depthTest: false, depthWrite: false, opacity, toneMapped: false }));
      this.scene.add(m); return m;
    };
    const ring = ringTex(), hex = hexTex(), glow = glowTex([[0, 'rgba(255,255,255,.9)'], [.4, 'rgba(255,255,255,.18)'], [1, 'rgba(255,255,255,0)']]);
    this.dirt = mk(dirtTex(), 0xfff1dc, 0);
    this.burst = mk(starburstTex(), 0xffffff);
    this.streak = mk(streakTex(), 0x9fc4ff);
    this.ghosts = [
      [.32, .07, hex, 0x6fd6c6], [.55, .13, ring, 0xffb37a], [.78, .05, glow, 0xb48cff], [1.18, .2, hex, 0x7aa8ff],
      [1.42, .09, glow, 0x97fce4], [1.75, .34, ring, 0xff9f6b], [2.1, .12, hex, 0x8cc8ff]
    ].map(([t, s, tex, c]) => ({ t, s, m: mk(tex, c) }));
    this.v = 0;
  }
  // sun: NDC x,y; vis 0..1 (occlusion & frustum); aspect = w/h
  update(sun, vis, aspect, dt, scale = 1) {
    this.v += (vis - this.v) * Math.min(1, dt * 10);
    const v = this.v * scale, len = Math.hypot(sun.x, sun.y);
    this.scene.visible = v > 0.003;
    if (!this.scene.visible) return;
    const sx = 1 / aspect; // keep elements round
    this.burst.position.set(sun.x, sun.y, 0); this.burst.scale.set(.9 * sx, .9, 1); this.burst.material.opacity = v * .9; this.burst.rotation.z = sun.x * .4;
    this.streak.position.set(sun.x, sun.y, 0); this.streak.scale.set(2.6, .045, 1); this.streak.material.opacity = v * .55;
    const gk = v * THREE.MathUtils.smoothstep(len, .05, .45) * .55;
    for (const g of this.ghosts) {
      g.m.position.set(sun.x * (1 - g.t * 2) * 1, sun.y * (1 - g.t * 2), 0);
      g.m.scale.set(g.s * sx, g.s, 1); g.m.material.opacity = gk;
    }
    this.dirt.scale.set(2, 2, 1); this.dirt.material.opacity = v * (.55 - Math.min(.35, len * .25));
  }
  render(renderer) {
    if (!this.scene.visible) return;
    const ac = renderer.autoClear; renderer.autoClear = false; renderer.render(this.scene, this.cam); renderer.autoClear = ac;
  }
}
