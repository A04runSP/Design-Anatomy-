import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import './editorial-design-style.css';

const sections = [
  ['01','THE CITY CHANGES','After sunset, the same streets become a different visual system. Windows glow, roads reflect, and movement becomes part of the composition.'],
  ['02','LIGHT BECOMES LANGUAGE','A shop sign, a traffic signal or one apartment window can become the strongest point of attention in an otherwise dark frame.'],
  ['03','PEOPLE BECOME MOTION','At night, silhouettes and passing headlights turn ordinary movement into layers of rhythm, scale and story.'],
  ['04','THE QUIET BETWEEN','Editorial design also needs pauses. Darkness, margins and empty streets give the louder moments somewhere to breathe.']
];

function NightImage({variant=''}){ return <div className={`night-image ${variant}`} aria-hidden="true"><span className="moon"/><span className="skyline skyline-a"/><span className="skyline skyline-b"/><span className="street"/><span className="light light-a"/><span className="light light-b"/><span className="light light-c"/><span className="reflection"/></div>; }

export default function EditorialDesignStyle({onNavigate}){
 return <main className="editorial-shell after-dark">
  <header className="editorial-nav"><button onClick={()=>onNavigate?.('library')}><ArrowLeft size={15}/> LIBRARY</button><button className="editorial-brand" onClick={()=>onNavigate?.('home')}>RYUMA <em>リューマ</em></button><span>DESIGN ANATOMY / EDITORIAL</span></header>

  <section className="ad-hero">
   <div className="ad-hero-copy"><span className="ad-kicker">ISSUE 07 / VISUAL CULTURE / 2026</span><h1>AFTER<br/><i>DARK</i></h1><p>When the sun goes down, the city does not disappear. It edits itself.</p><div className="ad-meta"><span>AN EDITORIAL STUDY</span><span>01—12</span></div></div>
   <figure className="ad-hero-image"><NightImage variant="hero-night"/><figcaption><span>FIG. 01</span><span>THE CITY, 23:48</span></figcaption></figure>
  </section>

  <section className="ad-lede"><div className="ad-label">01 — THE NIGHT SHIFT</div><div><h2>Same city.<br/><i>Different rules.</i></h2><p>At night, architecture stops being background. Light selects what we notice. Reflections stretch the street. A familiar corner becomes unfamiliar for a few hours.</p><p className="ad-bold">This is a visual story about the moment a city changes its hierarchy.</p></div></section>

  <section className="ad-feature"><figure><NightImage variant="feature-night"/><figcaption>FIG. 02 / WINDOW LIGHT · 00:17</figcaption></figure><div className="ad-feature-copy"><span>02 — LIGHT</span><h2>Darkness makes<br/><i>light visible.</i></h2><p>Editorial composition depends on contrast. Night gives that contrast naturally: a warm window against blue streets, headlights cutting through haze, a single sign holding an entire frame.</p><blockquote>“The brightest thing is not always the most important. But it is always noticed first.”</blockquote></div></section>

  <section className="ad-story"><div className="ad-story-head"><span>03 — FOUR OBSERVATIONS</span><h2>Read the<br/><i>night.</i></h2></div><div className="ad-story-grid">{sections.map(([n,t,c])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{c}</p></article>)}</div></section>

  <section className="ad-spread"><div className="ad-spread-top"><span>04 — CITY STUDY / 01</span><span>23:48 — 04:32</span></div><div className="ad-spread-grid"><figure><NightImage variant="spread-night"/><figcaption>FIG. 03 / MOVEMENT IN LOW LIGHT</figcaption></figure><div className="ad-spread-copy"><span className="dropcap">A</span><p>city at night is a collection of small decisions. Which window stays on? Which road carries the most light? Where does someone stop for a minute before continuing home?</p><p>Good editorial design works the same way. It does not show everything at once. It chooses.</p><strong>LIGHT → MOVEMENT → PAUSE</strong></div></div></section>

  <section className="ad-data"><div><span>05 — AFTER DARK / FIELD NOTES</span><h2>Small details<br/><i>carry the story.</i></h2></div><div className="ad-facts"><div><b>23:48</b><span>PEAK GLOW</span><p>Commercial streets become visual corridors.</p></div><div><b>01:17</b><span>QUIET FRAME</span><p>Negative space begins to dominate.</p></div><div><b>04:32</b><span>FIRST LIGHT</span><p>The palette slowly gives the city back.</p></div></div></section>

  <section className="ad-principles"><span>06 — EDITORIAL PRINCIPLES</span><div><p><b>01</b> Give the image room to speak.</p><p><b>02</b> Let typography create the pace.</p><p><b>03</b> Use contrast to guide attention.</p><p><b>04</b> Mix information with atmosphere.</p><p><b>05</b> Leave space between discoveries.</p></div></section>

  <footer className="ad-footer"><span>RYŪMA / DESIGN ANATOMY / EDITORIAL</span><h2>The city sleeps.<br/><i>The page stays awake.</i></h2><button onClick={()=>onNavigate?.('library')}>BACK TO LIBRARY <ArrowRight size={16}/></button></footer>
 </main>;
}
