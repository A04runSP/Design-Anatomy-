import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import './editorial-design-style.css';

const anatomy=[
 {n:'01',t:'Grid',d:'The invisible columns that keep images, headlines, captions and body text aligned.'},
 {n:'02',t:'Hierarchy',d:'Scale and placement decide what the reader sees first, second and third.'},
 {n:'03',t:'Typography',d:'Display type introduces the story; smaller text creates a comfortable reading rhythm.'},
 {n:'04',t:'Image',d:'Photography provides atmosphere, scale and the first emotional entry point.'},
 {n:'05',t:'Information',d:'Captions, dates, folios and side notes turn a picture into an editorial page.'}
];

const cityPhoto='https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1800&q=85';

export default function EditorialDesignStyle({onNavigate}){
 return <main className="editorial-shell editorial-real">
  <header className="editorial-nav"><button onClick={()=>onNavigate?.('library')}><ArrowLeft size={15}/> LIBRARY</button><button className="editorial-brand" onClick={()=>onNavigate?.('home')}>RYUMA <em>リューマ</em></button><span>DESIGN ANATOMY / EDITORIAL</span></header>

  <section className="ed-hero">
   <div><span className="ed-kicker">DESIGN ANATOMY / 07</span><h1>EDITORIAL<br/><i>DESIGN.</i></h1><p>Editorial design is not simply a picture beside some text. It is the deliberate arrangement of <b>images, information, typography and space</b> into a page that tells the reader where to look.</p><div className="ed-rule"><span>WHAT YOU ARE LOOKING AT</span><span>GRID · TYPE · IMAGE · INFO</span></div></div>
   <figure><img src={cityPhoto} alt="City street at night"/><figcaption><span>FIG. 01</span><span>VISUAL ENTRY POINT</span></figcaption></figure>
  </section>

  <section className="ed-explain">
   <div className="ed-section-head"><span>01 — UNDERSTAND THE DESIGN</span><h2>See the picture.<br/><i>Then see the system.</i></h2></div>
   <div className="ed-example">
    <figure><img src="https://i.pinimg.com/originals/5f/2b/22/5f2b228ba56911f77047c8ad29d542da.jpg" alt="Editorial magazine spread showing photography, headlines and columns"/><figcaption><span>EXAMPLE / EDITORIAL SPREAD</span><span>REFERENCE IMAGE</span></figcaption></figure>
    <div className="ed-annotations"><div><b>01</b><h3>IMAGE</h3><p>The large photograph creates the first visual anchor.</p></div><div><b>02</b><h3>HEADLINE</h3><p>The headline introduces the story and establishes scale.</p></div><div><b>03</b><h3>COLUMNS</h3><p>Multiple text columns create an actual reading structure.</p></div><div><b>04</b><h3>ACCENT</h3><p>A controlled colour block separates important information.</p></div><div><b>05</b><h3>CAPTION + META</h3><p>Small information completes the relationship between image and story.</p></div></div>
   </div>
  </section>

  <section className="ed-definition"><span>THE IMPORTANT PART</span><h2>Editorial design<br/><i>organises information.</i></h2><p>A poster can communicate one message. An editorial layout has to make many things work together — a story, photographs, headlines, captions, quotes, numbers and long-form text — without becoming confusing.</p></section>

  <section className="ed-real">
   <div className="ed-real-head"><span>02 — NOW, SEE IT AS A REAL DESIGN</span><span>ORIGINAL RYŪMA FEATURE / AFTER DARK</span></div>
   <div className="ed-magazine">
    <article className="ed-page ed-page-photo"><div className="folio">RYŪMA / 07</div><img src={cityPhoto} alt="Night city editorial photograph"/><div className="photo-caption">CITY LIGHTS / 23:48<br/>PHOTOGRAPHIC STUDY</div></article>
    <article className="ed-page ed-page-story"><div className="folio">AFTER DARK · 08</div><span className="story-kicker">VISUAL CULTURE / FEATURE</span><h2>WHEN THE<br/><i>CITY</i> CHANGES.</h2><p className="standfirst">After sunset, the same streets begin to tell a different story. Light selects what matters, movement creates rhythm and darkness gives the page somewhere to breathe.</p><div className="story-columns"><p>At night, architecture becomes an active part of the composition. A lit window can pull the eye across a dark facade. A passing car can create a line through the frame.</p><p>The editorial designer works in the same way: choosing what arrives first, what waits, and what information deserves a quieter position.</p></div><blockquote>“A good spread makes the reader want to move from one element to the next.”</blockquote><div className="story-footer"><span>TEXT / RYŪMA EDITORIAL DESK</span><span>08</span></div></article>
   </div>
   <div className="ed-spread-note"><span>IMAGE</span><i>→</i><span>HEADLINE</span><i>→</i><span>STORY</span><i>→</i><span>DETAIL</span></div>
  </section>

  <section className="ed-anatomy"><div className="ed-section-head"><span>03 — ANATOMY</span><h2>What makes<br/><i>it editorial?</i></h2></div><div className="ed-anatomy-grid">{anatomy.map(x=><article key={x.n}><b>{x.n}</b><h3>{x.t}</h3><p>{x.d}</p></article>)}</div></section>

  <section className="ed-contrast"><div><span>04 — THE DIFFERENCE</span><h2>Not<br/><i>image + text.</i></h2></div><div className="compare"><div><small>SIMPLE PRESENTATION</small><div className="simple-box"><div></div><p>Headline<br/><span>Some information beside an image.</span></p></div><em>Information is present.</em></div><div><small>EDITORIAL DESIGN</small><div className="editorial-mini"><b>FEATURE</b><h3>AFTER<br/><i>DARK</i></h3><p>Three columns · caption · quote · metadata</p><span>08</span></div><em>Information is composed.</em></div></div></section>

  <footer className="ed-footer"><div><span>RYŪMA / DESIGN ANATOMY</span><h2>Design the way<br/><i>the story is read.</i></h2></div><button onClick={()=>onNavigate?.('library')}>BACK TO LIBRARY <ArrowRight size={16}/></button></footer>
 </main>;
}
