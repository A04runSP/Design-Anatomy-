import React from 'react';
import { ArrowLeft } from 'lucide-react';
import './retro-vintage-style.css';

const anatomy = [
  { no: '01', title: 'Palette', copy: 'Warm cream, faded teal, mustard, brick and burnt orange create the familiar warmth of printed ephemera.' },
  { no: '02', title: 'Typography', copy: 'Expressive serifs and condensed sans lettering give the work a period voice without sacrificing hierarchy.' },
  { no: '03', title: 'Texture', copy: 'Grain, halftone, ink variation and paper-like surfaces make the digital canvas feel physically printed.' },
  { no: '04', title: 'Shape', copy: 'Badges, arches, ribbons, circles and imperfect geometry become recognizable visual motifs.' },
  { no: '05', title: 'Composition', copy: 'Poster-like framing, borders and deliberate asymmetry create a sense of collected history.' }
];

export default function RetroVintageStyle({ onNavigate }) {
  return <main className="retro-page">
    <header className="retro-nav">
      <button onClick={() => onNavigate?.('library')}><ArrowLeft size={15} /> DESIGN LIBRARY</button>
      <div className="retro-brand"><b>RYUMA</b><span>リューマ</span></div>
      <span>EXPRESSIVE / 02</span>
    </header>

    <section className="retro-hero">
      <div className="retro-stamp">EST.<br />19<br />68</div>
      <div className="retro-hero-copy">
        <span className="retro-kicker">02 / RETRO + VINTAGE</span>
        <h1>OLD<br /><em>SOUL.</em></h1>
        <p>A visual language built from memory, print, colour and the character of another era.</p>
      </div>
      <div className="retro-poster">
        <span className="retro-sun" />
        <span className="retro-arch">GOOD<br /><b>FORM</b></span>
        <span className="retro-ring" />
        <span className="retro-poster-copy">PRINTED<br />WITH<br />CHARACTER</span>
        <span className="retro-ticket">NO. 024</span>
      </div>
    </section>

    <section className="retro-intro">
      <div><span className="retro-kicker">THE IDEA</span><h2>When the past<br /><em>gets a new canvas.</em></h2></div>
      <p>Retro and vintage design borrow visual cues from earlier decades — not to imitate them perfectly, but to bring their warmth, imperfection and cultural memory into the present.</p>
      <strong>Familiar, but never frozen.</strong>
    </section>

    <section className="retro-anatomy">
      <div className="retro-section-label"><span>03</span><b>DESIGN ANATOMY</b></div>
      <div className="retro-section-main">
        <h2>Five signals.<br /><em>One unmistakable mood.</em></h2>
        <div className="retro-anatomy-grid">{anatomy.map(item => <article key={item.no}><span>{item.no}</span><h3>{item.title}</h3><p>{item.copy}</p></article>)}</div>
      </div>
    </section>

    <section className="retro-colour">
      <div className="retro-section-label"><span>04</span><b>COLOUR SYSTEM</b></div>
      <div className="retro-colour-main">
        <div className="retro-colour-copy"><h2>Colour with<br /><em>patina.</em></h2><p>Vintage palettes feel lived-in. Saturation is softened, warmth is amplified, and every colour feels like it belongs on paper.</p></div>
        <div className="retro-palette"><div className="retro-cream"><span>PAPER<br />CREAM</span></div><div className="retro-brick"><span>BRICK<br />RED</span></div><div className="retro-mustard"><span>MUSTARD</span></div><div className="retro-teal"><span>FADED<br />TEAL</span></div><div className="retro-orange"><span>BURNT<br />ORANGE</span></div></div>
      </div>
    </section>

    <section className="retro-type">
      <div className="retro-section-label"><span>05</span><b>TYPOGRAPHY</b></div>
      <div className="retro-type-main">
        <div className="retro-type-poster"><span>THE</span><strong>GOOD</strong><i>OLD</i><b>DAYS</b><small>ARCHIVE / ISSUE 1968</small></div>
        <div><h2>Type carries<br /><em>the era.</em></h2><p>Display serif faces suggest heritage and storytelling, while condensed sans lettering brings the punch of old posters, packaging and signage.</p></div>
      </div>
    </section>

    <section className="retro-texture">
      <div className="retro-section-label"><span>06</span><b>PRINT + TEXTURE</b></div>
      <div className="retro-texture-main">
        <div className="retro-texture-card"><span>INK</span><b>HALFTONE</b><i>GRAIN</i><small>PRESS / PAPER / IMPERFECTION</small></div>
        <div><h2>Perfectly<br /><em>imperfect.</em></h2><p>Texture is not decoration. It creates the physical feeling that makes a digital composition resemble something found in an old drawer, shop window or printed archive.</p></div>
      </div>
    </section>

    <section className="retro-rules">
      <div className="retro-section-label"><span>07</span><b>THE RULES</b></div>
      <div className="retro-rules-main"><h2>Borrow the past.<br /><em>Don't copy it.</em></h2><div className="retro-rule-list">
        <div><b>01</b><strong>Warm it</strong><span>Use softened, period-inspired colour instead of sterile digital saturation.</span></div>
        <div><b>02</b><strong>Print it</strong><span>Let grain, halftone and ink-like variation give surfaces a physical voice.</span></div>
        <div><b>03</b><strong>Frame it</strong><span>Use borders, badges and poster structures to create a sense of place and era.</span></div>
        <div><b>04</b><strong>Modernize it</strong><span>Keep hierarchy, spacing and interaction contemporary even when the styling looks historic.</span></div>
      </div></div>
    </section>

    <footer className="retro-footer">
      <span className="retro-kicker">RETRO / VINTAGE · EXPRESSIVE</span>
      <h2>Old references.<br /><em>New energy.</em></h2>
      <p>Retro design turns cultural memory into a living visual language — warm, tactile, recognizable and ready for now.</p>
      <div><span>PRINT · PATINA · TYPE · COLOUR · MEMORY</span><span>RYUMA / DESIGN ANATOMY</span></div>
    </footer>
  </main>;
}
