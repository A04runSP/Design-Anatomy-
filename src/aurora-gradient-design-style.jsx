import React, { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import './aurora-gradient-design-style.css';

const anatomy = [
 ['01','LIGHT','Colour behaves like atmosphere, not decoration.'],
 ['02','BLEND','Adjacent colours flow into one another without hard edges.'],
 ['03','DEPTH','Layered luminosity creates space without physical shadows.'],
 ['04','MOTION','Slow movement makes the gradient feel alive.'],
 ['05','FOCUS','Contrast and glow guide the eye through the interface.'],
];

export default function AuroraGradientDesignStyle({onNavigate}){
 const playgroundRef=useRef(null);
 const [point,setPoint]=useState({x:50,y:50});
 const [dragging,setDragging]=useState(false);
 const moveLight=(event)=>{
  const box=playgroundRef.current?.getBoundingClientRect();
  if(!box)return;
  const x=Math.max(8,Math.min(92,((event.clientX-box.left)/box.width)*100));
  const y=Math.max(10,Math.min(90,((event.clientY-box.top)/box.height)*100));
  setPoint({x,y});
 };
 const start=(event)=>{setDragging(true);event.currentTarget.setPointerCapture?.(event.pointerId);moveLight(event)};
 const stop=(event)=>{setDragging(false);try{event.currentTarget.releasePointerCapture?.(event.pointerId)}catch{}};
 return <main className="aurora-gradient-page">
  <header className="aurora-gradient-nav"><button onClick={()=>onNavigate?.('library')}><ArrowLeft size={15}/> DESIGN LIBRARY</button><div><b>RYUMA</b><span>リューマ</span></div><span>AURORA / GRADIENT</span></header>

  <section className="ag-hero"><div className="ag-hero-copy"><span className="ag-kicker">02 / AURORA GRADIENT DESIGN</span><h1>Colour<br/><em>in motion.</em></h1><p className="ag-lead">A luminous visual language built from flowing colour, atmospheric depth and seamless transitions.</p><p>Gradients stop behaving like fills. They become the environment itself — shifting focus, mood and spatial rhythm.</p><div className="ag-spectrum"><i/><i/><i/><i/><i/></div></div><div className="ag-hero-art"><div className="ag-glow glow-a"/><div className="ag-glow glow-b"/><div className="ag-glow glow-c"/><div className="ag-hero-ring"/><div className="ag-hero-type">AURA<span>01</span></div></div></section>

  <section className="ag-section"><div className="ag-label"><span>03</span><b>THE IDEA</b></div><div><h2>Make colour<br/><em>feel alive.</em></h2><p>Aurora design uses gradients as atmosphere. Colours overlap, dissolve and glow into one another so the interface feels continuous rather than assembled from separate blocks.</p><div className="ag-flow"><span>COLOUR</span><i>→</i><span>BLEND</span><i>→</i><span>GLOW</span><i>→</i><b>FEEL</b></div></div></section>

  <section className="ag-section"><div className="ag-label"><span>04</span><b>DESIGN ANATOMY</b></div><div><h2>Five parts.<br/><em>One atmosphere.</em></h2><div className="ag-anatomy">{anatomy.map(([no,title,copy])=><article key={no}><span>{no}</span><div><b>{title}</b><p>{copy}</p></div></article>)}</div></div></section>

  <section className="ag-section"><div className="ag-label"><span>05</span><b>LIGHT</b></div><div><h2>Let colour<br/><em>occupy space.</em></h2><p>Instead of placing a gradient inside a component, Aurora lets colour become a field around the content. The result is soft, luminous and spatial.</p><div className="ag-light-demo"><div className="ag-light-grid"/><div className="ag-light-orb orb-one"/><div className="ag-light-orb orb-two"/><div className="ag-light-panel"><span>ATMOSPHERE / 01</span><strong>Glow<br/>without<br/>edges.</strong></div></div></div></section>

  <section className="ag-section"><div className="ag-label"><span>06</span><b>BLEND</b></div><div><h2>Where one colour<br/><em>becomes another.</em></h2><p>Hard boundaries disappear. Colour transitions create visual continuity, giving the interface a more fluid vocabulary.</p><div className="ag-blend-demo"><div className="blend-field"><i/><i/><i/></div><span>NO HARD EDGES</span></div></div></section>

  <section className="ag-section"><div className="ag-label"><span>07</span><b>MOTION</b></div><div><h2>Move the light.<br/><em>Change the mood.</em></h2><p>The signature interaction is contained inside one playground: drag the luminous point and watch the atmosphere follow your hand.</p><div className="ag-playground" ref={playgroundRef} style={{'--px':`${point.x}%`,'--py':`${point.y}%`}}><div className="ag-playground-grid"/><div className="ag-playground-glow"/><div className="ag-playground-orb"/><div className="ag-playground-content"><span>AURORA PLAYGROUND</span><strong>DRAG<br/>THE LIGHT.</strong><small>{dragging?'MOVING / ATMOSPHERE FOLLOWING':'TOUCH & DRAG THE GLOW'}</small></div><button className={`ag-light-handle ${dragging?'is-dragging':''}`} aria-label="Drag the aurora light" onPointerDown={start} onPointerMove={event=>dragging&&moveLight(event)} onPointerUp={stop} onPointerCancel={stop}><i/></button></div></div></section>

  <section className="ag-section"><div className="ag-label"><span>08</span><b>FOCUS</b></div><div><h2>Glow around<br/><em>what matters.</em></h2><p>Atmosphere should support hierarchy. Brighter zones attract attention while quieter areas give content room to breathe.</p><div className="ag-focus-demo"><div><span>01</span><b>PRIMARY</b></div><div><span>02</span><b>SECONDARY</b></div><div><span>03</span><b>QUIET</b></div></div></div></section>

  <footer className="ag-footer"><span>AURORA / GRADIENT DESIGN</span><h2>Light is the<br/><em>material.</em></h2><p>A visual language built from colour, blend, depth, motion and focus.</p><button onClick={()=>onNavigate?.('library')}>BACK TO DESIGN LIBRARY <ArrowLeft size={15}/></button></footer>
 </main>;
}
