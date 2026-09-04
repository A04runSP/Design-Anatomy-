import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import './editorial-design-style.css';

const images={
 hero:'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1800&q=85',
 street:'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1400&q=85',
 night:'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1600&q=85',
 detail:'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1200&q=85'
};

const notes=[
 ['01','THE CITY CHANGES','After sunset, familiar streets lose their daytime hierarchy. Light selects the details we notice first.'],
 ['02','LIGHT BECOMES LANGUAGE','Windows, signs and headlights become punctuation marks against the dark.'],
 ['03','PEOPLE BECOME MOTION','A passing figure is no longer background. Movement becomes part of the composition.'],
 ['04','THE QUIET BETWEEN','Empty streets and dark windows create the pauses that make bright moments feel brighter.']
];

export default function EditorialDesignStyle({onNavigate}){
 return <main className="editorial-shell after-dark">
  <header className="editorial-nav"><button onClick={()=>onNavigate?.('library')}><ArrowLeft size={15}/> LIBRARY</button><button className="editorial-brand" onClick={()=>onNavigate?.('home')}>RYUMA <em>リューマ</em></button><span>DESIGN ANATOMY / EDITORIAL</span></header>

  <section className="ad-hero">
   <div className="ad-hero-copy"><span className="ad-kicker">ISSUE 07 / VISUAL ESSAY / 2026</span><h1>AFTER<br/><i>DARK</i></h1><p>When the sun goes down, the city does not disappear. It edits itself.</p><div className="ad-meta"><span>AN ORIGINAL EDITORIAL STUDY</span><span>01—12</span></div></div>
   <figure className="ad-hero-image"><img src={images.hero} alt="City buildings after dark"/><figcaption><span>FIG. 01</span><span>CITY LIGHT / 23:48</span></figcaption></figure>
  </section>

  <section className="ad-lede"><div className="ad-label">01 — THE NIGHT SHIFT</div><div><h2>Same city.<br/><i>Different rules.</i></h2><p>At night, architecture stops being background. Windows glow. Roads become reflective surfaces. A familiar corner can suddenly feel cinematic.</p><p className="ad-bold">This is a visual story about how darkness changes attention.</p></div></section>

  <section className="ad-feature"><figure><img src={images.street} alt="Urban street at night"/><figcaption>FIG. 02 / STREET LIGHT · 00:17</figcaption></figure><div className="ad-feature-copy"><span>02 — LIGHT</span><h2>Darkness makes<br/><i>light visible.</i></h2><p>Good editorial design understands contrast. Night gives us a natural lesson: a warm window against a cool street, a headlight cutting through shadow, one bright sign holding an entire frame.</p><blockquote>“What we notice first changes what we understand next.”</blockquote></div></section>

  <section className="ad-notes"><div className="ad-story-head"><span>03 — FIELD NOTES</span><h2>Read the<br/><i>night.</i></h2></div><div className="ad-note-grid">{notes.map(([n,t,c])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{c}</p></article>)}</div></section>

  <section className="ad-spread"><div className="ad-spread-top"><span>04 — CITY STUDY / 01</span><span>23:48 — 04:32</span></div><div className="ad-spread-grid"><figure><img src={images.night} alt="Night skyline and city lights"/><figcaption>FIG. 03 / THE CITY FROM ABOVE</figcaption></figure><div className="ad-spread-copy"><span className="dropcap">A</span><p>city at night is a collection of small decisions. Which window stays on? Which road carries the most light? Where does someone stop for a minute before continuing home?</p><p>Editorial design works the same way. It does not show everything at once. It chooses the order in which we discover things.</p><strong>IMAGE → TYPE → SPACE → ATTENTION</strong></div></div></section>

  <section className="ad-detail"><figure><img src={images.detail} alt="Urban lights at night"/><figcaption>FIG. 04 / DETAILS IN LOW LIGHT</figcaption></figure><div><span>05 — ONE FRAME</span><h2>Let one image<br/><i>carry the mood.</i></h2><p>A strong editorial spread does not need decoration around every photograph. Give the image scale. Give the text room. Let the relationship between them create the atmosphere.</p></div></section>

  <section className="ad-data"><div><span>06 — AFTER DARK / FIELD NOTES</span><h2>Small details<br/><i>carry the story.</i></h2></div><div className="ad-facts"><div><b>23:48</b><span>PEAK GLOW</span><p>Commercial streets become visual corridors.</p></div><div><b>01:17</b><span>QUIET FRAME</span><p>Negative space begins to dominate.</p></div><div><b>04:32</b><span>FIRST LIGHT</span><p>The palette slowly gives the city back.</p></div></div></section>

  <section className="ad-principles"><span>07 — EDITORIAL PRINCIPLES</span><div><p><b>01</b> Start with a story, not decoration.</p><p><b>02</b> Give photography authority.</p><p><b>03</b> Let typography control the pace.</p><p><b>04</b> Use contrast to guide attention.</p><p><b>05</b> Leave space between discoveries.</p></div></section>

  <footer className="ad-footer"><span>RYŪMA / DESIGN ANATOMY / EDITORIAL</span><h2>The city sleeps.<br/><i>The page stays awake.</i></h2><button onClick={()=>onNavigate?.('library')}>BACK TO LIBRARY <ArrowRight size={16}/></button></footer>
 </main>;
}
