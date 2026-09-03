import React, { useMemo, useState } from 'react';
import { ArrowLeft, Copy, Download, RotateCcw, Sparkles } from 'lucide-react';
import './aurora-gradient-design-style.css';

const DEFAULT_COLORS = ['#19E6FF', '#6A5CFF', '#D84CFF', '#20F0A6'];

function hexToRgb(hex) {
  const value = hex.replace('#', '');
  const full = value.length === 3 ? value.split('').map((c) => c + c).join('') : value;
  const number = Number.parseInt(full, 16);
  return { r: (number >> 16) & 255, g: (number >> 8) & 255, b: number & 255 };
}

function mix(hexA, hexB, amount) {
  const a = hexToRgb(hexA);
  const b = hexToRgb(hexB);
  const r = Math.round(a.r + (b.r - a.r) * amount);
  const g = Math.round(a.g + (b.g - a.g) * amount);
  const bValue = Math.round(a.b + (b.b - a.b) * amount);
  return `rgb(${r}, ${g}, ${bValue})`;
}

export default function AuroraGradientDesignStyle({ onNavigate }) {
  const [colors, setColors] = useState(DEFAULT_COLORS);
  const [blur, setBlur] = useState(72);
  const [glow, setGlow] = useState(68);
  const [flow, setFlow] = useState(58);
  const [motion, setMotion] = useState(42);
  const [grain, setGrain] = useState(24);
  const [playing, setPlaying] = useState(true);
  const [copied, setCopied] = useState(false);

  const gradient = useMemo(() => {
    const [a, b, c, d] = colors;
    return `radial-gradient(ellipse at 16% 68%, ${a} 0%, transparent 36%), radial-gradient(ellipse at 52% 28%, ${b} 0%, transparent 39%), radial-gradient(ellipse at 86% 66%, ${c} 0%, transparent 38%), radial-gradient(ellipse at 56% 92%, ${d} 0%, transparent 34%), linear-gradient(135deg, #050817 0%, #0A0C23 52%, #090415 100%)`;
  }, [colors]);

  const updateColor = (index, value) => setColors((current) => current.map((color, i) => (i === index ? value : color)));
  const reset = () => {
    setColors(DEFAULT_COLORS);
    setBlur(72);
    setGlow(68);
    setFlow(58);
    setMotion(42);
    setGrain(24);
    setPlaying(true);
  };

  const cssSnippet = `.aurora {\n  background: ${gradient};\n  filter: blur(${Math.round(blur / 4)}px);\n  opacity: ${Math.round(55 + glow * 0.4)}%;\n}`;

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(cssSnippet);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      setCopied(false);
    }
  };

  return (
    <main className="aurora-page">
      <header className="aurora-nav">
        <button className="aurora-back" onClick={() => onNavigate?.('library')}><ArrowLeft size={15} /> DESIGN LIBRARY</button>
        <button className="aurora-brand" onClick={() => onNavigate?.('home')}><b>RYUMA</b><em>リューマ</em></button>
        <span className="aurora-index">STYLE / 03.07</span>
      </header>

      <section className="aurora-hero">
        <div className="aurora-hero-art" style={{ background: gradient }}>
          <div className={`aurora-light aurora-light-a ${playing ? 'is-moving' : ''}`} />
          <div className={`aurora-light aurora-light-b ${playing ? 'is-moving' : ''}`} />
          <div className={`aurora-light aurora-light-c ${playing ? 'is-moving' : ''}`} />
          <div className="aurora-star-field" />
          <div className="aurora-hero-type"><span>DESIGN ANATOMY / AURORA</span><h1>Aurora</h1><p>Design made of light.</p></div>
          <div className="aurora-art-note">COLOUR · LIGHT · BLUR · DEPTH · MOTION</div>
        </div>
        <div className="aurora-hero-copy">
          <span className="aurora-kicker">07 / AURORA GRADIENT DESIGN</span>
          <h2>A gradient that<br /><i>breathes.</i></h2>
          <p>Aurora Gradient Design turns colour into an atmosphere — using luminous transitions, soft diffusion and organic movement to make interfaces feel alive.</p>
          <div className="aurora-pills"><span>ATMOSPHERIC</span><span>LUMINOUS</span><span>FLUID</span></div>
        </div>
      </section>

      <section className="aurora-statement">
        <div><span className="aurora-kicker">THE IDEA</span><h2>Aurora isn't a gradient.<br /><em>It's a behaviour of light.</em></h2></div>
        <p>Colours merge instead of stopping. Forms drift instead of snapping. Light fades instead of ending. The result is a visual field that feels closer to mist, plasma or northern light than a conventional background.</p>
      </section>

      <section className="aurora-anatomy">
        <div className="aurora-section-head"><span className="aurora-kicker">DESIGN ANATOMY</span><h2>Five forces shape the atmosphere.</h2></div>
        <div className="aurora-anatomy-grid">
          {[
            ['01', 'COLOUR', 'Layered hues create identity. Cyan, blue, violet, magenta and green can move through the same field without hard boundaries.'],
            ['02', 'LIGHT', 'Focused glow creates hierarchy. Intensity rises where attention should land and dissolves where the eye should rest.'],
            ['03', 'BLUR', 'Diffused edges remove the feeling of constructed shapes and let colour bleed naturally into surrounding space.'],
            ['04', 'DEPTH', 'Overlapping fields create distance: background atmosphere, translucent colour, luminous foreground and shadow.'],
            ['05', 'MOTION', 'Slow drift, morph and flow make the field feel continuous rather than animated for animation’s sake.'],
          ].map(([number, title, copy]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}
        </div>
      </section>

      <section className="aurora-lab">
        <div className="aurora-section-head lab-head"><div><span className="aurora-kicker">AURORA / LAB</span><h2>Build your own light field.</h2><p>Shape the atmosphere live. There are no hard ribbons here — only colour, diffusion, depth and flow.</p></div><button onClick={reset}><RotateCcw size={15} /> RESET</button></div>
        <div className="aurora-lab-grid">
          <div className={`aurora-canvas ${playing ? 'is-playing' : ''}`} style={{ '--aurora-blur': `${blur}px`, '--aurora-glow': glow / 100, '--aurora-flow': `${Math.max(8, 100 - flow)}s`, '--aurora-grain': grain / 100 }}>
            <div className="aurora-canvas-field" style={{ background: gradient }} />
            <div className="aurora-flow-shape flow-one" style={{ background: `linear-gradient(110deg, ${colors[0]}, ${colors[1]}, ${colors[2]})` }} />
            <div className="aurora-flow-shape flow-two" style={{ background: `linear-gradient(110deg, ${colors[3]}, ${colors[1]}, ${colors[0]})` }} />
            <div className="aurora-canvas-caption"><span>LIVE FIELD</span><strong>{playing ? 'FLOWING' : 'FROZEN'}</strong></div>
          </div>
          <aside className="aurora-controls">
            <div className="aurora-control-block"><span>COLOUR FIELD</span>{colors.map((color, index) => <label key={index}><i style={{ background: color }} /><input type="color" value={color} onChange={(event) => updateColor(index, event.target.value)} /><code>{color.toUpperCase()}</code></label>)}</div>
            {[['BLUR', blur, setBlur], ['GLOW', glow, setGlow], ['FLOW', flow, setFlow], ['MOTION', motion, setMotion], ['GRAIN', grain, setGrain]].map(([label, value, setter]) => <label className="aurora-range" key={label}><span><b>{label}</b><output>{value}</output></span><input type="range" min="0" max="100" value={value} onChange={(event) => setter(Number(event.target.value))} /></label>)}
            <div className="aurora-lab-actions"><button className="primary" onClick={() => setPlaying((value) => !value)}><Sparkles size={15} /> {playing ? 'FREEZE FIELD' : 'RESUME FLOW'}</button><button onClick={copyCode}><Copy size={15} /> {copied ? 'COPIED' : 'COPY CSS'}</button></div>
          </aside>
        </div>
      </section>

      <section className="aurora-guidance">
        <div className="aurora-do"><span className="aurora-kicker">DO</span><h2>Let the light<br />lead.</h2><ul><li>Use deep contrast to make glow meaningful.</li><li>Keep transitions continuous and soft.</li><li>Give the brightest region a clear purpose.</li><li>Use motion slowly enough to feel atmospheric.</li></ul></div>
        <div className="aurora-dont"><span className="aurora-kicker">DON'T</span><h2>Turn it into<br />neon wallpaper.</h2><ul><li>Avoid hard-edged ribbons.</li><li>Don't saturate every corner equally.</li><li>Don't stack random colours without hierarchy.</li><li>Avoid fast, repetitive animation loops.</li></ul></div>
      </section>

      <section className="aurora-uses"><span className="aurora-kicker">WHERE IT WORKS</span><h2>Best when the experience<br /><em>needs atmosphere.</em></h2><div className="aurora-use-grid">{['Digital products', 'Creative portfolios', 'Music & entertainment', 'Technology', 'Editorial campaigns', 'Motion experiences'].map((item, index) => <article key={item}><span>0{index + 1}</span><h3>{item}</h3><p>Use Aurora to establish mood, focus and a memorable visual environment.</p></article>)}</div></section>

      <section className="aurora-close"><div className="aurora-close-art" style={{ background: gradient }}><div className="aurora-light aurora-light-b is-moving" /></div><span className="aurora-kicker">RYŪMA / DESIGN ANATOMY</span><h2>Don't paint the light.<br /><em>Design how it moves.</em></h2><button onClick={() => onNavigate?.('library')}>BACK TO LIBRARY <ArrowLeft size={15} /></button></section>
      <footer className="aurora-footer"><span>RYUMA / AURORA GRADIENT DESIGN</span><span>LIVING LIGHT · CONTINUOUS TRANSITION</span></footer>
    </main>
  );
}
