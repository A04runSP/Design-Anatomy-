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
  const [dragOffsets, setDragOffsets] = useState({});
  const [dragging, setDragging] = useState(null);
  const cards = {
    light: { no:'01', title:'LIGHT', copy:'Light creates atmosphere and guides attention without taking over the interface.' },
    material: { no:'02', title:'MATERIAL', copy:'Responsive surfaces create a sense of place while staying light, transparent and digital.' },
    depth: { no:'03', title:'DEPTH', copy:'Layers establish relationships and focus without relying on heavy shadows.' },
    motion: { no:'04', title:'MOTION', copy:'Movement connects one state to another so change feels continuous rather than abrupt.' },
  };

  const startCardDrag = (event, key) => {
    if (cardOpen) return;
    const card = event.currentTarget;
    const wrap = card.parentElement;
    const startX = event.clientX;
    const startY = event.clientY;
    const startOffset = dragOffsets[key] || { x:0, y:0 };
    let moved = false;

    card.setPointerCapture?.(event.pointerId);
    setDragging(key);

    const move = (moveEvent) => {
      const dx = moveEvent.clientX - startX;
      const dy = moveEvent.clientY - startY;
      if (Math.abs(dx) + Math.abs(dy) > 6) moved = true;

      const minX = -card.offsetLeft;
      const maxX = wrap.clientWidth - card.offsetLeft - card.offsetWidth;
      const minY = -card.offsetTop;
      const maxY = wrap.clientHeight - card.offsetTop - card.offsetHeight;
      const x = Math.max(minX, Math.min(maxX, startOffset.x + dx));
      const y = Math.max(minY, Math.min(maxY, startOffset.y + dy));

      setDragOffsets((current) => ({ ...current, [key]: { x, y } }));
    };

    const end = () => {
      card.releasePointerCapture?.(event.pointerId);
      setDragging(null);
      if (!moved) setCardOpen(key);
      card.removeEventListener('pointermove', move);
      card.removeEventListener('pointerup', end);
      card.removeEventListener('pointercancel', end);
    };

    card.addEventListener('pointermove', move);
    card.addEventListener('pointerup', end);
    card.addEventListener('pointercancel', end);
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

    <section className="fluent-section fluent-material"><div className="fluent-label"><span>06</span><b>MATERIAL</b></div><div><h2>Surfaces can<br/><em>respond.</em></h2><p>Translucent surfaces create layers of information while keeping the interface open and lightweight.</p><div className="fluent-example-wrap"><div className="fluent-example-grid"/><div className="fluent-example-orb orb-blue"/><div className="fluent-example-orb orb-cyan"/>{Object.entries(cards).map(([key,card], index) => { const offset = dragOffsets[key] || {x:0,y:0}; return <button key={key} aria-label={`Drag ${card.title} card or tap to open`} className={`fluent-card fluent-card-${index+1} ${cardOpen===key?'is-open':''} ${dragging===key?'is-dragging':''}`} style={{transform:cardOpen===key?'rotate(0)':`translate3d(${offset.x}px, ${offset.y}px, 0) rotate(${[ -3, 3, -2, 2 ][index]}deg)${dragging===key?' scale(1.035)':''}`}} onPointerDown={(e)=>startCardDrag(e,key)}>{cardOpen===key&&<><span>{card.no}</span><strong>{card.title}</strong><p>{card.copy}</p></>}{cardOpen!==key&&<><span>{card.no}</span><strong>{card.title}</strong><small>DRAG / TAP</small></>}</button>})}{cardOpen&&<button className="fluent-return" onClick={()=>setCardOpen(null)}>TAP OUTSIDE TO RETURN</button>}</div></div></section>

    <section className="fluent-section"><div className="fluent-label"><span>07</span><b>DEPTH</b></div><div><h2>Depth without<br/><em>weight.</em></h2><p>Fluent uses transparency, spacing and layered surfaces to create hierarchy without making the interface feel heavy.</p><div className="depth-demo"><div/><div/><div/><span>FOCUS</span></div></div></section>

    <section className="fluent-section fluent-motion"><div className="fluent-label"><span>08</span><b>MOTION</b></div><div><h2>Nothing should<br/><em>feel abrupt.</em></h2><p>Motion connects one state to the next. Tap the states to see a contained Fluent transition.</p><div className={`motion-track ${active}`}><button onClick={()=>setActive('light')}>REST</button><i/><button onClick={()=>setActive('motion')}>MOVE</button><i/><button onClick={()=>setActive('depth')}>SETTLE</button><b/></div></div></section>

    <section className="fluent-section"><div className="fluent-label"><span>09</span><b>ADAPTATION</b></div><div><h2>One system.<br/><em>Many contexts.</em></h2><p>The same visual language can adapt to different screens without losing its identity.</p><div className="adapt-demo"><div><span>DESKTOP</span><b>WIDE</b></div><div><span>TABLET</span><b>ADAPT</b></div><div><span>MOBILE</span><b>FOCUS</b></div></div></div></section>

    <footer className="fluent-footer"><span>FLUENT DESIGN / 02.03</span><h2>Fluid system.<br/><em>Human response.</em></h2><p>A design specimen for studying light, material, depth, motion and adaptation.</p><button onClick={()=>onNavigate?.('library')}>BACK TO DESIGN LIBRARY <ArrowLeft size={15}/></button></footer>
  </main>;
}
