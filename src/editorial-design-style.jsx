import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import './editorial-design-style.css';

const tigerPhoto = 'https://images.unsplash.com/photo-1726688377845-3fd7360ef2dd?auto=format&fit=crop&w=1800&q=88';

const anatomy = [
  { no:'01', title:'Image', copy:'Editorial design gives photography room to speak. The image becomes a narrative anchor, not decoration.' },
  { no:'02', title:'Typography', copy:'A refined serif creates voice while a clean sans-serif handles navigation, metadata and rhythm.' },
  { no:'03', title:'Grid', copy:'Columns, margins and alignment create structure beneath the apparent freedom of the composition.' },
  { no:'04', title:'Hierarchy', copy:'Scale decides what is read first, second and last. Headlines can become visual objects.' },
  { no:'05', title:'Rhythm', copy:'Whitespace, rules, captions and image changes create the pacing of a printed spread.' },
];

export default function EditorialDesignStyle({ onNavigate }) {
  return <main className="editorial-shell">
    <header className="editorial-nav">
      <button onClick={()=>onNavigate?.('library')}><ArrowLeft size={15}/> LIBRARY</button>
      <button className="editorial-brand" onClick={()=>onNavigate?.('home')}>RYUMA <em>リューマ</em></button>
      <span>DESIGN ANATOMY / 03.05</span>
    </header>

    <section className="editorial-hero">
      <div className="editorial-hero-copy">
        <span className="editorial-kicker">WILDLIFE / VISUAL ESSAY</span>
        <h1>THE<br/><i>TIGER.</i></h1>
        <p>Power doesn't need to shout. Sometimes the image does the talking.</p>
        <div className="editorial-byline"><span>FIELD NOTE 01</span><span>RAJASTHAN · INDIA</span></div>
      </div>
      <figure className="editorial-hero-image">
        <img src={tigerPhoto} alt="Real tiger photographed in a natural setting" />
        <figcaption><span>01</span><span>THE SUBJECT — A STUDY IN PRESENCE</span></figcaption>
      </figure>
      <div className="editorial-hero-side">RYŪMA / EDITORIAL STUDY</div>
    </section>

    <section className="editorial-intro">
      <span className="editorial-section-no">01 — THE IDEA</span>
      <div><h2>The page<br/><i>becomes the story.</i></h2></div>
      <div className="editorial-intro-copy"><p>Editorial design is art direction with a reading order. It combines image, type, grid, space and pacing to turn information into an experience.</p><p><strong>Here, the tiger is not an illustration of the idea. It is the subject around which the entire visual system is composed.</strong></p></div>
    </section>

    <section className="editorial-feature">
      <div className="editorial-feature-image"><img src={tigerPhoto} alt="Close editorial portrait of a tiger" /></div>
      <div className="editorial-feature-copy"><span>FIELD OBSERVATION / 02</span><h2>Look closer.</h2><p>The strongest editorial pages create a tension between what is immediately visible and what rewards a second look.</p><blockquote>“A photograph can carry the weight of a whole page.”</blockquote><small>EDITORIAL PRINCIPLE / IMAGE AS INFORMATION</small></div>
    </section>

    <section className="editorial-anatomy">
      <div className="editorial-anatomy-head"><span>02 — ANATOMY</span><h2>What makes<br/><i>the spread work.</i></h2></div>
      <div className="editorial-anatomy-grid">{anatomy.map(item=><article key={item.no}><span>{item.no}</span><h3>{item.title}</h3><p>{item.copy}</p></article>)}</div>
    </section>

    <section className="editorial-spread">
      <div className="editorial-spread-meta"><span>03 — THE SPREAD</span><span>WILDLIFE / 01—05</span></div>
      <div className="editorial-spread-grid">
        <div className="editorial-spread-text"><span className="dropcap">T</span><p>he tiger moves through the landscape with an economy that feels almost designed. Stripes break the body into rhythm. Amber fur catches light. A stare establishes hierarchy before a single word is read.</p><p>This is why editorial design begins with the subject. Once the visual idea is clear, every other decision can support it.</p></div>
        <figure><img src={tigerPhoto} alt="Tiger detail used as editorial photography"/><figcaption>FIG. 01 / TEXTURE, PATTERN, CONTRAST</figcaption></figure>
        <div className="editorial-pull">IMAGE<br/><i>→</i><br/>TYPE<br/><i>→</i><br/>MEANING</div>
      </div>
    </section>

    <section className="editorial-system">
      <div><span>04 — VISUAL SYSTEM</span><h2>Quiet colour.<br/><i>Strong contrast.</i></h2></div>
      <div className="editorial-colours"><span className="paper">PAPER<br/><b>#F3EFE7</b></span><span className="ink">INK<br/><b>#171614</b></span><span className="rust">RUST<br/><b>#A64B2A</b></span><span className="gold">GOLD<br/><b>#C7A45A</b></span></div>
    </section>

    <section className="editorial-rules">
      <span>05 — RULES</span>
      <div><p>01 / Let the image lead.</p><p>02 / Build a grid before breaking it.</p><p>03 / Give typography a voice.</p><p>04 / Use whitespace as punctuation.</p><p>05 / Every detail should support the story.</p></div>
    </section>

    <footer className="editorial-footer"><div><span>RYUMA / DESIGN ANATOMY</span><h2>Make the page<br/><i>worth reading.</i></h2></div><button onClick={()=>onNavigate?.('library')}>BACK TO LIBRARY <ArrowRight size={16}/></button></footer>
  </main>;
}
