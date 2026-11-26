// Generated ambience: a slow, wide pad plus cabin hum. No audio files. Unlocked inside the first tap.
export class Sound {
  constructor() { this.ctx = null; this.on = false; this.state = 'off'; }
  unlock() {
    try {
      if (!this.ctx) {
        const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return;
        this.ctx = new AC(); this.build();
      }
      // a one-sample buffer inside the gesture wakes iOS / in-app browsers
      const b = this.ctx.createBuffer(1, 1, 22050), s = this.ctx.createBufferSource(); s.buffer = b; s.connect(this.ctx.destination); s.start(0);
      if (this.ctx.state !== 'running') this.ctx.resume();
      this.state = this.ctx.state;
    } catch (e) { this.state = 'error'; }
  }
  build() {
    const c = this.ctx; this.master = c.createGain(); this.master.gain.value = 0; this.master.connect(c.destination);
    const comp = c.createDynamicsCompressor(); comp.connect(this.master); this.bus = comp;
    // pad: detuned oscillators through a breathing low-pass
    const lp = c.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 520; lp.Q.value = .6; lp.connect(comp);
    const lfo = c.createOscillator(), lfoG = c.createGain(); lfo.frequency.value = .045; lfoG.gain.value = 260; lfo.connect(lfoG); lfoG.connect(lp.frequency); lfo.start();
    const padG = c.createGain(); padG.gain.value = .05; padG.connect(lp);
    [[55, 'sine', 1], [82.41, 'triangle', .5], [110.3, 'sine', .45], [164.6, 'sine', .2], [220.9, 'triangle', .08]].forEach(([f, type, g], i) => {
      const o = c.createOscillator(), og = c.createGain(); o.type = type; o.frequency.value = f; o.detune.value = (i % 2 ? 6 : -5);
      og.gain.value = g; o.connect(og); og.connect(padG); o.start();
      const l = c.createOscillator(), lg = c.createGain(); l.frequency.value = .03 + i * .017; lg.gain.value = g * .5; l.connect(lg); lg.connect(og.gain); l.start();
    });
    // cabin hum: brown noise, very low
    const len = c.sampleRate * 4, nb = c.createBuffer(1, len, c.sampleRate), d = nb.getChannelData(0); let last = 0;
    for (let i = 0; i < len; i++) { const w = Math.random() * 2 - 1; last = (last + .02 * w) / 1.02; d[i] = last * 3.2; }
    this.noise = nb;
    const n = c.createBufferSource(); n.buffer = nb; n.loop = true; const nf = c.createBiquadFilter(); nf.type = 'lowpass'; nf.frequency.value = 180;
    const ng = c.createGain(); ng.gain.value = .12; n.connect(nf); nf.connect(ng); ng.connect(comp); n.start();
  }
  set(on) {
    this.on = on; if (!this.ctx) return; const t = this.ctx.currentTime;
    if (on && this.ctx.state !== 'running') this.ctx.resume();
    this.master.gain.cancelScheduledValues(t); this.master.gain.setTargetAtTime(on ? .9 : 0, t, on ? 1.2 : .25);
  }
  whoosh(dur = 2.4, up = false) {
    if (!this.ctx || !this.on) return; const c = this.ctx, t = c.currentTime;
    const s = c.createBufferSource(); s.buffer = this.noise; s.loop = true;
    const f = c.createBiquadFilter(); f.type = 'bandpass'; f.Q.value = 1.4; const g = c.createGain();
    f.frequency.setValueAtTime(up ? 200 : 900, t); f.frequency.exponentialRampToValueAtTime(up ? 2400 : 160, t + dur);
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(up ? .5 : .32, t + dur * .55); g.gain.linearRampToValueAtTime(0, t + dur);
    s.connect(f); f.connect(g); g.connect(this.bus); s.start(t, Math.random() * 3); s.stop(t + dur + .1);
  }
  blip(freq = 880) {
    if (!this.ctx || !this.on) return; const c = this.ctx, t = c.currentTime, o = c.createOscillator(), g = c.createGain();
    o.type = 'sine'; o.frequency.setValueAtTime(freq, t); o.frequency.exponentialRampToValueAtTime(freq * 1.5, t + .08);
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(.05, t + .01); g.gain.exponentialRampToValueAtTime(.0001, t + .25);
    o.connect(g); g.connect(this.bus); o.start(t); o.stop(t + .3);
  }
  chime() {
    if (!this.ctx || !this.on) return; const c = this.ctx, t = c.currentTime;
    [523.25, 659.25, 987.77].forEach((f, i) => { const o = c.createOscillator(), g = c.createGain(); o.frequency.value = f; g.gain.setValueAtTime(0, t + i * .09); g.gain.linearRampToValueAtTime(.04, t + i * .09 + .02); g.gain.exponentialRampToValueAtTime(.0001, t + i * .09 + 2.2); o.connect(g); g.connect(this.bus); o.start(t + i * .09); o.stop(t + 2.6); });
  }
}
