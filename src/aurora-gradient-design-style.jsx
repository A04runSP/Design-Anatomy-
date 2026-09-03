import React, { useRef, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import './aurora-gradient-design-style.css';

const anatomy = [
 ['01','LIGHT','Colour behaves like atmosphere, not decoration.'],
 ['02','BLEND','Adjacent colours flow into one another without hard edges.'],
 ['03','DEPTH','Layered luminosity creates space without physical shadows.'],
 ['04','MOTION','Slow movement makes the gradient feel alive.'],
 ['05','FOCUS','Contrast and glow guide the eye through the interface.'],
];

function RibbonField({ variant='hero' }) {
 const paths = variant === 'hero' ? [
  'M-90 155 C110 58 315 38 505 82 C680 122 842 174 1090 88 L1090 145 C860 258 676 214 505 166 C320 114 126 154 -90 236 Z',
  'M-90 242 C145 170 316 170 505 224 C680 274 844 315 1090 218 L1090 280 C850 385 670 352 495 294 C305 232 120 260 -90 326 Z',
  'M-100 360 C135 292 318 320 500 372 C690 426 854 420 1090 342 L1090 396 C850 510 664 502 490 444 C300 382 115 390 -100 454 Z',
  'M-80 88 C155 6 348 22 528 64 C690 102 850 110 1080 42 L1080 74 C850 158 676 146 520 108 C330 62 150 72 -80 150 Z'
 ] : variant === 'light' ? [
  'M-80 116 C150 28 350 42 520 88 C700 136 862 144 1080 68 L1080 122 C850 216 674 202 508 152 C324 96 138 112 -80 190 Z',
  'M-90 292 C125 220 315 228 488 274 C674 324 852 354 1090 276 L1090 334 C846 428 662 392 480 344 C300 296 126 306 -90 370 Z'
 ] : [
  'M-90 118 C120 42 312 50 492 92 C666 134 846 142 1090 70 L1090 126 C846 216 668 202 486 158 C302 114 124 122 -90 190 Z',
  'M-90 248 C120 188 302 188 480 232 C660 278 848 316 1090 244 L1090 302 C844 394 656 354 470 306 C292 260 122 266 -90 326 Z',
  'M-100 356 C126 304 304 314 476 356 C654 400 842 424 1090 350 L1090 398 C842 488 650 454 468 412 C290 370 120 378 -100 430 Z'
 ];

 return <svg className={`ag-ribbon-field ag-ribbon-${variant}`} viewBox="0 0 1000 500" preserveAspectRatio="none" aria-hidden="true">
  <defs>
   <linearGradient id={`ribbon-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" stopColor="#22d3ee"/><stop offset="32%" stopColor="#4f46e5"/><stop offset="58%" stopColor="#8b5cf6"/><stop offset="82%" stopColor="#ec4899"/><stop offset="100%" stopColor="#f0abfc"/>
   </linearGradient>
   <linearGradient id={`ribbon-hi-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" stopColor="#fff" stopOpacity="0"/><stop offset="35%" stopColor="#fff" stopOpacity=".08"/><stop offset="55%" stopColor="#fff" stopOpacity=".18"/><stop offset="78%" stopColor="#fff" stopOpacity=".05"/><stop offset="100%" stopColor="#fff" stopOpacity="0"/>
   </linearGradient>
   <filter id={`ribbon-blur-${variant}`} x="-20%" y="-40%" width="140%" height="180%"><feGaussianBlur stdDeviation="16"/></filter>
  </defs>
  <g className="ag-ribbon-glow" filter={`url(#ribbon-blur-${variant})`} opacity=".52">{paths.map((d,i)=><path key={i} d={d} fill={`url(#ribbon-${variant})`}/>)}</g>
  <g className="ag-ribbon-main">{paths.map((d,i)=><g key={i}><path d={d} fill={`url(#ribbon-${variant})`}/><path d={d} fill={`url(#ribbon-hi-${variant})`} className="ag-ribbon-highlight"/></g>)}</g>
 </svg>;
}

export default function AuroraGradientDesignStyle({onNavigate}){
 const playgroundRef=useRef(null);
 const [point,setPoint]=useState({x:50,y:50});
 const [dragging,setDragging]=useState(false);
 const moveLight=(event)=>{const box=playgroundRef.current?.getBoundingClientRect();if(!box)return;const x=Math.max(8,Math.min(92,((event.clientX-box.left)/box.width)*100));const y=Math.max(10,Math.min(90,((event.clientY-box.top)/box.height)*100));setPoint({x,y});};
 const start=(event)=>{setDragging(true);event.currentTarget.setPointerCapture?.(event.pointerId);moveLight(event)};
 const stop=(event)=>{setDragging(false);try{event.currentTarget.releasePointerCapture?.(event.pointerId)}catch{}};
 return <main className="aurora-gradient-page">
  <header className="aurora-gradient-nav"><button onClick={()=>onNavigate?.('library')}><ArrowLeft size={15}/> DESIGN LIBRARY</button><div><b>RYUMA</b><span>リューマ</span></div><span>AURORA / GRADIENT</span></header>
  <section className="ag-hero"><div className="ag-hero-copy"><span className="ag-kicker">02 / AURORA GRADIENT DESIGN</span><h1>Colour<br/><em>in motion.</em></h1><p className="ag-lead">A luminous visual language built from flowing colour, atmospheric depth and seamless transitions.</p><p>Gradients stop behaving like fills. They become the environment itself — shifting focus, mood and spatial rhythm.</p><div className="ag-spectrum"><i/><i/><i/><i/><i/></div></div><div className="ag-hero-art"><RibbonField variant="hero"/><div className="ag-hero-type">AURA<span>01</span></div></div></section>
  <section className="ag-section"><div className="ag-label"><span>03</span><b>THE IDEA</b></div><div><h2>Make colour<br/><em>feel alive.</em></h2><p>Aurora design uses gradients as atmosphere. Colours overlap, dissolve and glow into one another so the interface feels continuous rather than assembled from separate blocks.</p><div className="ag-flow"><span>COLOUR</span><i>→</i><span>BLEND</span><i>→</i><span>GLOW</span><i>→</i><b>FEEL</b></div></div></section>
  <section className="ag-section"><div className="ag-label"><span>04</span><b>DESIGN ANATOMY</b></div><div><h2>Five parts.<br/><em>One atmosphere.</em></h2><div className="ag-anatomy">{anatomy.map(([no,title,copy])=><article key={no}><span>{no}</span><div><b>{title}</b><p>{copy}</p></div></article>)}</div></div></section>
  <section className="ag-section"><div className="ag-label"><span>05</span><b>LIGHT</b></div><div><h2>Let colour<br/><em>occupy space.</em></h2><p>Instead of placing a gradient inside a component, Aurora lets colour become a field around the content. The result is soft, luminous and spatial.</p><div className="ag-light-demo"><div className="ag-light-grid"/><RibbonField variant="light"/><div className="ag-light-panel"><span>ATMOSPHERE / 01</span><strong>Glow<br/>without<br/>edges.</strong></div></div></div></section>
  <section className="ag-section"><div className="ag-label"><span>06</span><b>BLEND</b></div><div><h2>Where one colour<br/><em>becomes another.</em></h2><p>Hard boundaries disappear. Colour transitions create visual continuity, giving the interface a more fluid vocabulary.</p><div className="ag-blend-demo"><RibbonField variant="blend"/><span>NO HARD EDGES</span></div></div></section>
  <section className="ag-section"><div className="ag-label"><span>07</span><b>MOTION</b></div><div><h2>Move the light.<br/><em>Change the mood.</em></h2><p>The signature interaction is contained inside one playground: drag the luminous point and watch the atmosphere follow your hand.</p><div className="ag-playground" ref={playgroundRef} style={{'--px':`${point.x}%`,'--py':`${point.y}%`}}><div className="ag-playground-grid"/><RibbonField variant="playground"/><div className="ag-playground-glow"/><div className="ag-playground-orb"/><div className="ag-playground-content"><span>AURORA PLAYGROUND</span><strong>DRAG<br/>THE LIGHT.</strong><small>{dragging?'MOVING / ATMOSPHERE FOLLOWING':'TOUCH & DRAG THE GLOW'}</small></div><button className={`ag-light-handle ${dragging?'is-dragging':''}`} aria-label="Drag the aurora light" onPointerDown={start} onPointerMove={event=>dragging&&moveLight(event)} onPointerUp={stop} onPointerCancel={stop}><i/></button></div></div></section>
  <section className="ag-section"><div className="ag-label"><span>08</span><b>FOCUS</b></div><div><h2>Glow around<br/><em>what matters.</em></h2><p>Atmosphere should support hierarchy. Brighter zones attract attention while quieter areas give content room to breathe.</p><div className="ag-focus-demo"><div><span>01</span><b>PRIMARY</b></div><div><span>02</span><b>SECONDARY</b></div><div><span>03</span><b>QUIET</b></div></div></div></section>
  <footer className="ag-footer"><span>AURORA / GRADIENT DESIGN</span><h2>Light is the<br/><em>material.</em></h2><p>A visual language built from colour, blend, depth, motion and focus.</p><button onClick={()=>onNavigate?.('library')}>BACK TO DESIGN LIBRARY <ArrowLeft size={15}/></button></footer>
 </main>;
}
