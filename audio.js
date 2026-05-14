// ─── BGM (MP3ファイル) ＋ SFX (Web Audio API) ───
const Audio = (() => {
  // BGMファイル
  const BGM_SRC = {
    title:  'audio/bgm_title.mp3',   // At Rest - Kevin MacLeod (CC-BY 3.0)
    normal: 'audio/bgm_normal.mp3',  // Investigations - Kevin MacLeod (CC-BY 3.0)
    horror: 'audio/bgm_horror.mp3',  // Unseen Horrors - Kevin MacLeod (CC-BY 3.0)
  };
  const BGM_VOL = { title: 0.45, normal: 0.40, horror: 0.50 };

  const elems = {};
  let currentBGM = null;
  let fadeTimer = null;
  let blipCounter = 0;

  // Web Audio (SFX専用)
  let ctx = null, master = null;

  function init() {
    if (ctx) return;
    ctx = new (window.AudioContext || window.webkitAudioContext)();
    master = ctx.createGain(); master.gain.value = 0.5; master.connect(ctx.destination);
    // iOS: ユーザージェスチャー内でplay()を呼んでおくことで以降の再生をアンロック
    Object.keys(BGM_SRC).forEach(type => {
      const el = getEl(type);
      const p = el.play();
      if (p) p.then(() => { el.pause(); el.currentTime = 0; }).catch(() => {});
    });
  }

  function getEl(type) {
    if (!elems[type]) {
      const el = new window.Audio(BGM_SRC[type]);
      el.loop = true;
      el.volume = 0;
      elems[type] = el;
    }
    return elems[type];
  }

  function stopBGM(fadeMs = 1000) {
    clearInterval(fadeTimer);
    if (!currentBGM) return;
    const el = elems[currentBGM];
    currentBGM = null;
    if (!el || el.paused) return;
    const steps = Math.max(1, Math.round(fadeMs / 50));
    const start = el.volume;
    let s = 0;
    fadeTimer = setInterval(() => {
      s++;
      el.volume = Math.max(0, start * (1 - s / steps));
      if (s >= steps) { el.pause(); el.currentTime = 0; clearInterval(fadeTimer); }
    }, 50);
  }

  function playBGM(type) {
    if (currentBGM === type) return;
    const prev = currentBGM;
    stopBGM(600);
    setTimeout(() => {
      currentBGM = type;
      const el = getEl(type);
      el.volume = 0;
      if (el.currentTime > 0) el.currentTime = 0;
      el.play().catch(() => {});
      const target = BGM_VOL[type] || 0.45;
      const steps = 20; let s = 0;
      const fi = setInterval(() => {
        s++;
        el.volume = Math.min(target, target * s / steps);
        if (s >= steps) clearInterval(fi);
      }, 40);
    }, prev ? 680 : 0);
  }

  // ─── SFX ───
  function playSFX(type) {
    if (!ctx) return;

    if (type === 'blip') {
      blipCounter++;
      if (blipCounter % 2 !== 0) return;
      const buf = ctx.createBuffer(1, Math.floor(ctx.sampleRate * 0.022), ctx.sampleRate);
      const d = buf.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random()*2-1;
      const src = ctx.createBufferSource(); src.buffer = buf;
      const flt = ctx.createBiquadFilter(); flt.type='bandpass'; flt.frequency.value=1600; flt.Q.value=1.5;
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.05, ctx.currentTime); g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime+0.022);
      src.connect(flt); flt.connect(g); g.connect(master); src.start();
    }

    if (type === 'click') {
      const o = ctx.createOscillator(); o.type='sine';
      o.frequency.setValueAtTime(620, ctx.currentTime); o.frequency.exponentialRampToValueAtTime(150, ctx.currentTime+0.09);
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.10, ctx.currentTime); g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime+0.09);
      o.connect(g); g.connect(master); o.start(); o.stop(ctx.currentTime+0.11);
    }

    if (type === 'choice') {
      const o = ctx.createOscillator(); o.type='sine';
      o.frequency.setValueAtTime(300, ctx.currentTime); o.frequency.linearRampToValueAtTime(490, ctx.currentTime+0.15);
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.085, ctx.currentTime); g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime+0.20);
      o.connect(g); g.connect(master); o.start(); o.stop(ctx.currentTime+0.22);
    }

    if (type === 'scene') {
      const len = Math.floor(ctx.sampleRate * 0.32);
      const buf = ctx.createBuffer(1, len, ctx.sampleRate);
      const d = buf.getChannelData(0); for (let i = 0; i < len; i++) d[i] = Math.random()*2-1;
      const src = ctx.createBufferSource(); src.buffer = buf;
      const flt = ctx.createBiquadFilter(); flt.type='lowpass'; flt.frequency.value=260;
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.14, ctx.currentTime); g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime+0.36);
      src.connect(flt); flt.connect(g); g.connect(master); src.start();
    }

    if (type === 'horror') {
      const t = ctx.currentTime;
      const thud = ctx.createOscillator(); thud.type='sine';
      thud.frequency.setValueAtTime(90,t); thud.frequency.exponentialRampToValueAtTime(22,t+0.75);
      const tg = ctx.createGain();
      tg.gain.setValueAtTime(0.40,t); tg.gain.exponentialRampToValueAtTime(0.001,t+0.85);
      thud.connect(tg); tg.connect(master); thud.start(t); thud.stop(t+1.0);

      const metal = ctx.createOscillator(); metal.type='square';
      metal.frequency.setValueAtTime(360,t); metal.frequency.exponentialRampToValueAtTime(48,t+0.55);
      const mg = ctx.createGain();
      mg.gain.setValueAtTime(0,t); mg.gain.linearRampToValueAtTime(0.05,t+0.04); mg.gain.exponentialRampToValueAtTime(0.001,t+0.75);
      metal.connect(mg); mg.connect(master); metal.start(t); metal.stop(t+0.85);

      const screech = ctx.createOscillator(); screech.type='sawtooth';
      screech.frequency.setValueAtTime(155,t+0.08); screech.frequency.linearRampToValueAtTime(58,t+1.4);
      const sg = ctx.createGain();
      sg.gain.setValueAtTime(0,t); sg.gain.linearRampToValueAtTime(0.07,t+0.12); sg.gain.exponentialRampToValueAtTime(0.001,t+1.5);
      screech.connect(sg); sg.connect(master); screech.start(t); screech.stop(t+1.6);
    }
  }

  return { init, playBGM, stopBGM, playSFX };
})();
