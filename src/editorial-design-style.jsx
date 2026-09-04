import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import './editorial-design-style.css';

const anatomy = [
  { no:'01', title:'Grid', copy:'A quiet structure underneath the page. Columns give every element a place before the composition becomes expressive.' },
  { no:'02', title:'Type', copy:'Display type creates personality. Supporting type creates clarity. The relationship between them creates rhythm.' },
  { no:'03', title:'Image', copy:'Images are not decoration. They create scale, mood and an immediate point of entry into the story.' },
  { no:'04', title:'Hierarchy', copy:'Size, weight and position tell the reader what matters first, second and last.' },
  { no:'05', title:'Space', copy:'Margins and empty areas are active parts of the composition. Space gives important elements room to speak.' },
];

function CoverArt(){
  return <div className="editorial-art editorial-cover-art" aria-hidden="true">
    <div className="cover-sun" />
    <div className="cover-arc" />
    <div className="cover-block cover-block-a" />
    <div className="cover-block cover-block-b" />
    <div className="cover-grid" />
    <span className="cover-number">01</span>
    <span className="cover-mini">VISUAL STUDY / 2026</span>
    <strong>THE<br/><i>PAGE</i></strong>
    <span className="cover-line" />
  </div>;
}

function ObjectArt(){
  return <div className="editorial-art editorial-object-art" aria-hidden="true">
    <div className="object-circle" />
    <div className="object-square" />
    <div className="object-bar object-bar-one" />
    <div className="object-bar object-bar-two" />
    <div className="object-type">A</div>
    <span className="object-label">OBJECT STUDY<br/>SCALE / WEIGHT / SPACE</span>
  </div>;
}

function SpreadArt(){
  return <div className="editorial-art editorial-spread-art" aria-hidden="true">
    <div className="spread-page spread-page-left">
      <span>02</span><small>THE EDITORIAL PAGE</small><h3>READ<br/><i>THE<br/>SPACE.</i></h3><div className="tiny-lines" />
    </div>
    <div className="spread-page spread-page-right">
      <span>RYŪMA / 2026</span><div className="spread-photo"><i /></div><b>FORM<br/>FOLLOWS<br/><em>ATTENTION.</em></b>
    </div>
  </div>;
}

export default function EditorialDesignStyle({ onNavigate }) {
  return <main className="editorial-shell">
    <header className="editorial-nav">
      <button onClick={()=>onNavigate?.('library')}><ArrowLeft size={15}/> LIBRARY</button>
      <button className="editorial-brand" onClick={()=>onNavigate?.('home')}>RYUMA <em>リューマ</em></button>
      <span>DESIGN ANATOMY / EDITORIAL</span>
    </header>

    <section className="editorial-hero">
      <div className="editorial-hero-intro">
        <span className="editorial-kicker">ISSUE 01 / VISUAL CULTURE</span>
        <div className="editorial-hero-title"><small>EDITORIAL<br/>DESIGN</small><h1>THE<br/><i>PAGE.</i></h1></div>
        <p>Editorial design turns information into a visual experience — using type, image, grid and space to control how a story is read.</p>
        <div className="editorial-byline"><span>RYŪMA · 2026</span><span>01—08</span></div>
      </div>
      <figure className="editorial-cover"><CoverArt/><figcaption><span>FIG. 01</span><span>STRUCTURE / SCALE / RHYTHM</span></figcaption></figure>
    </section>

    <section className="editorial-intro">
      <span className="editorial-section-no">01 — THE IDEA</span>
      <h2>Design the<br/><i>reading order.</i></h2>
      <div className="editorial-intro-copy"><p>A strong editorial page does more than arrange information. It creates a sequence: enter, notice, pause, read, discover.</p><p><strong>The designer decides what arrives first — and what is allowed to arrive later.</strong></p></div>
    </section>

    <section className="editorial-feature">
      <div className="editorial-feature-art"><ObjectArt/></div>
      <div className="editorial-feature-copy"><span>OBJECT STUDY / 02</span><h2>Nothing<br/><i>is random.</i></h2><p>A headline can cross a boundary. A line can divide two ideas. A small caption can anchor an entire page. Editorial design makes these relationships intentional.</p><blockquote>“Every placement changes the way the next element is understood.”</blockquote><small>COMPOSITION / RELATIONSHIP CREATES MEANING</small></div>
    </section>

    <section className="editorial-anatomy">
      <div className="editorial-anatomy-head"><span>02 — ANATOMY</span><h2>The five<br/><i>decisions.</i></h2></div>
      <div className="editorial-anatomy-grid">{anatomy.map(item=><article key={item.no}><span>{item.no}</span><h3>{item.title}</h3><p>{item.copy}</p></article>)}</div>
    </section>

    <section className="editorial-spread">
      <div className="editorial-spread-meta"><span>03 — THE SPREAD</span><span>AN EDITORIAL STUDY / 01</span></div>
      <div className="editorial-spread-grid">
        <div className="editorial-spread-text"><span className="dropcap">A</span><p>page begins before the reader understands the words. Scale establishes importance. Margins establish boundaries. Contrast creates an entrance.</p><p>Then rhythm takes over. The eye moves from headline to image, from image to detail, from detail back into the story.</p></div>
        <figure><SpreadArt/><figcaption>FIG. 02 / A TWO-PAGE COMPOSITION</figcaption></figure>
        <div className="editorial-pull">TYPE <i>→</i> IMAGE <i>→</i> SPACE</div>
      </div>
    </section>

    <section className="editorial-system">
      <div><span>04 — VISUAL SYSTEM</span><h2>One accent.<br/><i>Many tones.</i></h2><p>Editorial palettes work best when colour has a job: signal, separate, emphasise or interrupt.</p></div>
      <div className="editorial-colours"><span className="paper">PAPER <b>#F4F0E8</b></span><span className="ink">INK <b>#151515</b></span><span className="accent">ACCENT <b>#B24D2E</b></span><span className="warm">WARM GREY <b>#D7D0C5</b></span></div>
    </section>

    <section className="editorial-rules">
      <span>05 — RULES</span>
      <div><p><b>01</b> Start with structure.</p><p><b>02</b> Give the headline authority.</p><p><b>03</b> Let images create scale.</p><p><b>04</b> Treat whitespace as a material.</p><p><b>05</b> Break the grid only with purpose.</p></div>
    </section>

    <footer className="editorial-footer"><div><span>RYŪMA / DESIGN ANATOMY</span><h2>Make the page<br/><i>rememberable.</i></h2></div><button onClick={()=>onNavigate?.('library')}>BACK TO LIBRARY <ArrowRight size={16}/></button></footer>
  </main>;
}
