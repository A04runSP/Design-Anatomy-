import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import './fluent-design-style.css';

const anatomy = [
  ['01','LIGHT','Light creates atmosphere and guides attention.'],
  ['02','MATERIAL','Responsive surfaces give the interface a sense of place.'],
  ['03','DEPTH','Layering separates information without heavy visual weight.'],
  ['04','MOTION','Continuous movement connects states and preserves context.'],
  ['05','ADAPTATION','The system responds naturally across contexts and screens.'],
];

export default function FluentDesignStyle({ onNavigate }) {
  const [active, setActive] = useState('light');
  const [cardOpen, setCardOpen] = useState(null);
  const cards = {
    light: { no:'01', title:'LIGHT', copy:'Light creates atmosphere and guides attention without taking over the interface.' },
    material: { no:'02', title:'MATERIAL', copy:'Responsive surfaces create a sense of place while staying light, transparent and digital.' },
    depth: { no:'03', title:'DEPTH', copy:'Layers establish relationships and focus without relying on heavy shadows.' },
    motion: { no:'04', title:'MOTION', copy:'Movement connects one state to another so change feels continuous rather than abrupt.' },
  };
  return <main className="fluent-style-page">
    <header className="fluent-nav">
      <button onClick={() => onNavigate?.('library')}><ArrowLeft size={16}/> DESIGN LIBRARY</button>
      <div><b>RYUMA</b><span>リューマ</span></div>
      <span>DESIGN LANGUAGE / 02.03</span>
    </header>

    <section className="fluent-hero">
      <div className="fluent-copy">
        <span className="fluent-kicker">02 / FLUENT DESIGN</span>
        <h1>Designed to<br/><em>feel.</em></h1>
        <p className="fluent-lead">A digital language shaped by light, material, depth, motion and adaptation.</p>
        <p>Fluent Design makes interfaces feel connected and responsive while keeping the system calm, clear and human.</p>
        <div className="fluent-palette"><i/><i/><i/><i/><i/></div>
      </div>
      <div className="fluent-hero-art"><div className="fluent-light-orb"/><div className="fluent-grid"/><div className="fluent-glass-card"><span>FLUENT</span><strong>FLOW<br/>WITH IT.</strong><small>LIGHT / MATERIAL / MOTION</small></div></div>
    </section>

    <section className="fluent-section"><div className="fluent-label"><span>03</span><b>THE IDEA</b></div><div><h2>Interfaces that<br/><em>move with you.</em></h2><p>Fluent Design combines light, material, depth, motion and adaptability into a system that feels natural across digital experiences.</p><div className="fluent-flow"><span>LIGHT</span><i>→</i><span>MATERIAL</span><i>→</i><span>DEPTH</span><i>→</i><b>FLOW</b></div></div></section>

    <section className="fluent-section"><div className="fluent-label"><span>04</span><b>DESIGN ANATOMY</b></div><div><h2>Five parts.<br/><em>One fluent language.</em></h2><div className="fluent-anatomy">{anatomy.map(([no,title,copy]) => <article key={no}><span>{no}</span><div><b>{title}</b><p>{copy}</p></div><ArrowRight size={17}/></article>)}</div></div></section>

    <section className="fluent-section fluent-light"><div className="fluent-label"><span>05</span><b>LIGHT</b></div><div><h2>Let light guide<br/><em>the interface.</em></h2><p>Light creates atmosphere and focus. In Fluent, it supports the content instead of becoming the content.</p><div className="light-demo"><div className="light-grid"/><div className="light-source"/><div className="light-panel"><span>FOCUS</span><strong>FOLLOW<br/>THE LIGHT.</strong></div></div></div></section>

    <section className="fluent-section fluent-material"><div className="fluent-label"><span>06</span><b>MATERIAL</b></div><div><h2>Surfaces can<br/><em>respond.</em></h2><p>Translucent surfaces create layers of information while keeping the interface open and lightweight.</p><div className="fluent-example-wrap"><div className="fluent-example-grid"/><div className="fluent-example-orb orb-blue"/><div className="fluent-example-orb orb-cyan"/>{Object.entries(cards).map(([key,card], index) => <button key={key} className={`fluent-card fluent-card-${index+1} ${cardOpen===key?'is-open':''}`} onClick={(e)=>{e.stopPropagation();setCardOpen(key)}}><span>{card.no}</span><strong>{card.title}</strong>{cardOpen===key&&<p>{card.copy}</p>}</button>)}{cardOpen&&<button className="fluent-return" onClick={()=>setCardOpen(null)}>TAP OUTSIDE TO RETURN</button>}</div></div></section>

    <section className="fluent-section"><div className="fluent-label"><span>07</span><b>DEPTH</b></div><div><h2>Depth without<br/><em>weight.</em></h2><p>Fluent uses transparency, spacing and layered surfaces to create hierarchy without making the interface feel heavy.</p><div className="depth-demo"><div/><div/><div/><span>FOCUS</span></div></div></section>

    <section className="fluent-section fluent-motion"><div className="fluent-label"><span>08</span><b>MOTION</b></div><div><h2>Nothing should<br/><em>feel abrupt.</em></h2><p>Motion connects one state to the next. Tap the states to see a contained Fluent transition.</p><div className={`motion-track ${active}`}><button onClick={()=>setActive('light')}>REST</button><i/><button onClick={()=>setActive('motion')}>MOVE</button><i/><button onClick={()=>setActive('depth')}>SETTLE</button><b/></div></div></section>

    <section className="fluent-section"><div className="fluent-label"><span>09</span><b>ADAPTATION</b></div><div><h2>One system.<br/><em>Many contexts.</em></h2><p>The same visual language can adapt to different screens without losing its identity.</p><div className="adapt-demo"><div><span>DESKTOP</span><b>WIDE</b></div><div><span>TABLET</span><b>ADAPT</b></div><div><span>MOBILE</span><b>FOCUS</b></div></div></div></section>

    <footer className="fluent-footer"><span>FLUENT DESIGN / 02.03</span><h2>Fluid system.<br/><em>Human response.</em></h2><p>A design specimen for studying light, material, depth, motion and adaptation.</p><button onClick={()=>onNavigate?.('library')}>BACK TO DESIGN LIBRARY <ArrowLeft size={15}/></button></footer>
  </main>;
}
