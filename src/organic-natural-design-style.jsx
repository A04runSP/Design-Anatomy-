import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import './organic-natural-design-style.css';
import './organic-natural-design-v2.css';

const anatomy = [
  { no:'01', title:'Form', copy:'Soft biomorphic shapes replace rigid geometry. Curves, blobs and imperfect edges make the interface feel grown rather than engineered.', image:'/organic/form.svg' },
  { no:'02', title:'Botany', copy:'Leaves, stems, flowers and hand-drawn marks become part of the visual vocabulary instead of decoration added at the end.', image:'/organic/botany.svg' },
  { no:'03', title:'Texture', copy:'Paper grain, watercolor washes and subtle print imperfections give digital surfaces a tactile, human quality.', image:'/organic/texture.svg' },
  { no:'04', title:'Colour', copy:'Earth, plant, clay and sky tones create warmth. Green is important, but it is never the whole palette.', image:'/organic/colour.svg' },
  { no:'05', title:'Rhythm', copy:'Asymmetry, irregular repetition and natural spacing create movement without making the composition feel mechanical.', image:'/organic/rhythm.svg' }
];

const palette = [
  ['Sage','#A7B896'],['Olive','#566B4F'],['Sand','#EADDC8'],['Terracotta','#C96F56'],['Clay','#B58B7A'],['Mustard','#E0B04B'],['Forest','#2E4B3C'],['Teal','#4F8F8F']
];

export default function OrganicNaturalDesignStyle({onNavigate}) {
  return <main className="organic-page">
    <div className="organic-grain"/>
    <header className="organic-nav">
      <button onClick={()=>onNavigate?.('library')}><ArrowLeft size={15}/> LIBRARY</button>
      <button className="organic-brand" onClick={()=>onNavigate?.('home')}><b>RYŪMA</b><span>リューマ</span></button>
      <span>EXPRESSIVE / 06</span>
    </header>

    <section className="organic-hero">
      <div className="organic-hero-copy">
        <span className="organic-kicker">08 / 12 · EXPRESSIVE / CREATIVE</span>
        <h1>Organic /<br/><em>Natural Design</em></h1>
        <h2>Design that grows instead of being constructed.</h2>
        <p>Organic design takes inspiration from nature — its forms, textures and rhythms — to create human, warm and harmonious visual experiences.</p>
        <div className="organic-actions"><button onClick={()=>document.getElementById('organic-elements')?.scrollIntoView({behavior:'smooth'})}>EXPLORE ELEMENTS <ArrowRight size={15}/></button><span>↓ &nbsp; SCROLL TO EXPLORE</span></div>
      </div>
      <div className="organic-hero-art">
        <div className="organic-wash wash-one"/><div className="organic-wash wash-two"/><div className="organic-wash wash-three"/>
        <img className="organic-hero-image" src="/organic/hero-botanical.svg" alt="Abstract botanical illustration"/>
        <div className="organic-script">Inspired<br/>by nature.</div>
        <span className="organic-art-note">NATURAL FORMS.<br/>MEANINGFUL DESIGNS.</span>
      </div>
    </section>

    <section className="organic-intro">
      <div><span className="organic-kicker">THE IDEA</span><h2>Nature isn't a theme.<br/><em>It's a behaviour.</em></h2></div>
      <p>The strongest organic interfaces do not simply place leaves around a conventional layout. They borrow nature's visual behaviour: softness, variation, imperfection, layering, rhythm and balance.</p>
      <strong>Human · Tactile · Calm · Alive</strong>
    </section>

    <section className="organic-elements" id="organic-elements">
      <div className="organic-section-head"><span>01 — THE ANATOMY</span><h2>Key <em>elements.</em></h2><p>Five ingredients turn a rigid digital surface into something warmer and more alive.</p></div>
      <div className="organic-anatomy-grid">{anatomy.map(item=><article key={item.no}>
        <span className="organic-no">{item.no}</span><div className="organic-card-art"><img src={item.image} alt={`${item.title} visual`} loading="lazy"/></div><h3>{item.title}</h3><p>{item.copy}</p>
      </article>)}</div>
    </section>

    <section className="organic-colour">
      <div className="organic-section-head"><span>02 — COLOUR SYSTEM</span><h2>Colours from <em>nature.</em></h2><p>Earth, plants, water and sun create a palette that feels calm without becoming dull.</p></div>
      <div className="organic-palette">{palette.map(([name,hex])=><div key={name} style={{'--swatch':hex}}><span>{name}</span><b>{hex}</b></div>)}</div>
    </section>

    <section className="organic-type">
      <div className="organic-type-copy"><span className="organic-kicker">03 — TYPOGRAPHY</span><h2>A natural<br/><em>voice.</em></h2><p>A refined serif carries the human, crafted feeling while a clean sans-serif keeps the interface clear and contemporary.</p></div>
      <div className="organic-type-specimen">
        <div className="specimen-main">Aa</div><div><span>DISPLAY / SERIF</span><strong>Good things<br/><em>grow slowly.</em></strong></div>
        <div className="specimen-sans"><span>BODY / UI / SANS</span><p>Clear text should feel as natural as the shapes around it.</p><small>ABCDEFGHIJKLMNOPQRSTUVWXYZ</small></div>
      </div>
    </section>

    <section className="organic-practice">
      <div className="organic-practice-copy"><span className="organic-kicker">04 — IN PRACTICE</span><h2>Nature in<br/><em>every detail.</em></h2><p>Here the visual language becomes a real interface: soft containers, botanical illustration, irregular forms, warm typography and a quiet product hierarchy.</p><button onClick={()=>document.getElementById('organic-rules')?.scrollIntoView({behavior:'smooth'})}>SEE THE SYSTEM <ArrowRight size={15}/></button></div>
      <div className="organic-product">
        <div className="product-top"><b>Natura</b><span>Home&nbsp;&nbsp; Story&nbsp;&nbsp; Journal&nbsp;&nbsp; Contact</span><i>◌</i></div>
        <div className="product-body"><div><span>NATURAL GOODS / 01</span><h3>Good Things<br/><em>Grow Here.</em></h3><p>Natural products for a kinder tomorrow.</p><button>EXPLORE PRODUCTS →</button></div><img className="product-botanical-image" src="/organic/botany.svg" alt="Botanical illustration"/><div className="product-circle pc-one"/><div className="product-circle pc-two"/></div>
      </div>
    </section>

    <section className="organic-rules" id="organic-rules">
      <div className="organic-section-head"><span>05 — THE RULES</span><h2>Let it <em>live.</em></h2></div>
      <div className="organic-rule-grid"><article><b>01</b><h3>Soften</h3><p>Prefer curves, rounded edges and forms that feel touched rather than manufactured.</p></article><article><b>02</b><h3>Vary</h3><p>Break repetition with small differences. Nature rarely makes two things perfectly identical.</p></article><article><b>03</b><h3>Layer</h3><p>Let illustration, colour washes and forms overlap gently to create depth and discovery.</p></article><article><b>04</b><h3>Ground</h3><p>Use warm neutrals and tactile surfaces so the interface feels connected to something physical.</p></article></div>
    </section>

    <footer className="organic-footer"><img className="footer-botanical-image" src="/organic/hero-botanical.svg" alt="Botanical illustration"/><span className="organic-kicker">ORGANIC / NATURAL · EXPRESSIVE</span><h2>Design with<br/><em>a human touch.</em></h2><p>Not a leaf pasted onto a layout. A visual system inspired by the way nature grows.</p><div><span>FORM · BOTANY · TEXTURE · COLOUR · RHYTHM</span><button onClick={()=>onNavigate?.('library')}>BACK TO LIBRARY <ArrowRight size={15}/></button></div></footer>
  </main>;
}
