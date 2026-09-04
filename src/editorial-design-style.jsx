import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import './editorial-design-style.css';

const anatomy = [
  { no:'01', title:'Grid', copy:'Editorial composition begins with an invisible structure. Columns create order before the page starts to move.' },
  { no:'02', title:'Typography', copy:'Serif and sans-serif work as voices: one creates character, the other creates information and rhythm.' },
  { no:'03', title:'Image', copy:'A visual can act as evidence, atmosphere or interruption. It should carry meaning, not simply fill space.' },
  { no:'04', title:'Hierarchy', copy:'Scale, weight and placement decide what the eye reads first, what it notices next and what it discovers later.' },
  { no:'05', title:'Rhythm', copy:'Rules, captions, whitespace and changing proportions create a pace that makes a page feel designed.' },
];

function HeroVisual(){
  return <div className="editorial-visual editorial-visual-hero" aria-hidden="true">
    <span className="visual-index">01</span>
    <div className="visual-frame"><i/><i/><i/></div>
    <div className="visual-word">FORM</div>
    <div className="visual-orbit"/>
    <span className="visual-caption">A STUDY IN SCALE / SPACE / CONTRAST</span>
  </div>;
}

function FeatureVisual(){
  return <div className="editorial-visual editorial-visual-feature" aria-hidden="true">
    <span className="visual-index">02</span>
    <div className="feature-circle"/>
    <div className="feature-bar bar-one"/>
    <div className="feature-bar bar-two"/>
    <div className="feature-square"/>
    <span className="feature-letter">A</span>
    <span className="feature-caption">OBJECT / 002<br/>COMPOSITION AS LANGUAGE</span>
  </div>;
}

function SpreadVisual(){
  return <div className="editorial-visual editorial-visual-spread" aria-hidden="true">
    <div className="spread-panel">
      <span>03</span><b>THE<br/><em>FORM</em></b>
      <i/>
      <small>EDITORIAL STUDY<br/>RYŪMA / 2026</small>
    </div>
    <div className="spread-grid-lines"/>
  </div>;
}

export default function EditorialDesignStyle({ onNavigate }) {
  return <main className="editorial-shell">
    <header className="editorial-nav">
      <button onClick={()=>onNavigate?.('library')}><ArrowLeft size={15}/> LIBRARY</button>
      <button className="editorial-brand" onClick={()=>onNavigate?.('home')}>RYUMA <em>リューマ</em></button>
      <span>DESIGN ANATOMY / 03.05</span>
    </header>

    <section className="editorial-hero">
      <div className="editorial-hero-copy">
        <span className="editorial-kicker">VISUAL CULTURE / EDITORIAL STUDY</span>
        <h1>THE<br/><i>FORM.</i></h1>
        <p>A page is not a container for information. It is a composition that teaches the eye where to look.</p>
        <div className="editorial-byline"><span>ISSUE 01</span><span>RYŪMA · 2026</span></div>
      </div>
      <figure className="editorial-hero-image"><HeroVisual/><figcaption><span>01</span><span>THE COMPOSITION — A STUDY IN PRESENCE</span></figcaption></figure>
      <div className="editorial-hero-side">RYŪMA / EDITORIAL STUDY</div>
    </section>

    <section className="editorial-intro">
      <span className="editorial-section-no">01 — THE IDEA</span>
      <div><h2>The page<br/><i>becomes the story.</i></h2></div>
      <div className="editorial-intro-copy"><p>Editorial design is art direction with a reading order. It combines image, type, grid, space and pacing to turn information into an experience.</p><p><strong>There is no single subject here. The subject is composition itself — how visual decisions create meaning before a sentence is finished.</strong></p></div>
    </section>

    <section className="editorial-feature">
      <div className="editorial-feature-image"><FeatureVisual/></div>
      <div className="editorial-feature-copy"><span>OBJECT STUDY / 02</span><h2>Look<br/>closer.</h2><p>Good editorial work rewards attention. A small shift in scale, a line crossing a margin or an unexpected block of colour can change the entire reading of a page.</p><blockquote>“The detail is where the composition reveals itself.”</blockquote><small>EDITORIAL PRINCIPLE / DETAIL CREATES DEPTH</small></div>
    </section>

    <section className="editorial-anatomy">
      <div className="editorial-anatomy-head"><span>02 — ANATOMY</span><h2>What makes<br/><i>the spread work.</i></h2></div>
      <div className="editorial-anatomy-grid">{anatomy.map(item=><article key={item.no}><span>{item.no}</span><h3>{item.title}</h3><p>{item.copy}</p></article>)}</div>
    </section>

    <section className="editorial-spread">
      <div className="editorial-spread-meta"><span>03 — THE SPREAD</span><span>FORM / 01—05</span></div>
      <div className="editorial-spread-grid">
        <div className="editorial-spread-text"><span className="dropcap">A</span><p>page begins before the reader understands what it is saying. Scale establishes importance. Margins establish boundaries. A headline creates an entry point. Empty space gives the eye permission to pause.</p><p>Editorial design works because these decisions are connected. Change one and the rhythm of the whole composition changes with it.</p></div>
        <figure><SpreadVisual/><figcaption>FIG. 01 / SCALE, STRUCTURE, RHYTHM</figcaption></figure>
        <div className="editorial-pull">GRID<br/><i>→</i><br/>TYPE<br/><i>→</i><br/>RHYTHM</div>
      </div>
    </section>

    <section className="editorial-system">
      <div><span>04 — VISUAL SYSTEM</span><h2>Quiet colour.<br/><i>Strong structure.</i></h2></div>
      <div className="editorial-colours"><span className="paper">PAPER<br/><b>#F3EFE7</b></span><span className="ink">INK<br/><b>#171614</b></span><span className="rust">RUST<br/><b>#A64B2A</b></span><span className="gold">GOLD<br/><b>#C7A45A</b></span></div>
    </section>

    <section className="editorial-rules">
      <span>05 — RULES</span>
      <div><p>01 / Build the grid before breaking it.</p><p>02 / Give typography a voice.</p><p>03 / Let one element dominate.</p><p>04 / Use whitespace as punctuation.</p><p>05 / Make every detail earn its place.</p></div>
    </section>

    <footer className="editorial-footer"><div><span>RYUMA / DESIGN ANATOMY</span><h2>Make the page<br/><i>worth reading.</i></h2></div><button onClick={()=>onNavigate?.('library')}>BACK TO LIBRARY <ArrowRight size={16}/></button></footer>
  </main>;
}
