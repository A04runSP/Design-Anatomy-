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

const ribbonSets = {
 hero: [
  ['M-100 150 C100 45 300 38 505 84 C700 126 850 178 1100 72 L1100 138 C860 260 680 216 500 164 C310 110 120 155 -100 250 Z','M-100 182 C110 62 320 52 520 105 C700 153 865 145 1100 50 L1100 132 C860 255 684 236 500 184 C315 136 110 185 -100 274 Z','M-100 132 C110 32 320 72 510 58 C700 45 870 200 1100 92 L1100 156 C850 278 690 198 505 136 C315 75 120 175 -100 230 Z'],
  ['M-100 245 C130 160 315 178 500 225 C690 275 850 318 1100 205 L1100 280 C850 405 670 350 492 298 C305 244 125 280 -100 340 Z','M-100 278 C125 185 320 198 510 252 C695 305 855 278 1100 190 L1100 264 C850 375 670 360 500 315 C310 264 120 318 -100 372 Z','M-100 220 C125 145 320 208 505 198 C690 188 860 345 1100 230 L1100 300 C850 420 680 315 495 270 C300 222 120 300 -100 345 Z'],
  ['M-110 360 C120 285 315 315 500 372 C690 428 865 422 1110 330 L1110 400 C850 520 665 500 490 445 C300 385 105 410 -110 475 Z','M-110 395 C130 310 315 350 505 400 C690 450 855 430 1110 300 L1110 372 C860 500 670 520 490 470 C300 418 115 455 -110 505 Z','M-110 335 C125 260 315 340 495 345 C680 350 860 455 1110 350 L1110 425 C850 530 675 475 485 420 C300 365 110 430 -110 480 Z']
 ],
 light: [
  ['M-100 120 C130 25 340 40 520 92 C700 142 860 150 1100 58 L1100 125 C850 225 675 205 505 155 C320 102 130 120 -100 195 Z','M-100 150 C135 48 330 68 510 105 C700 145 850 120 1100 35 L1100 105 C855 210 680 220 500 170 C320 120 130 155 -100 220 Z','M-100 95 C130 15 335 65 520 65 C700 65 870 180 1100 80 L1100 145 C850 240 680 175 505 120 C315 60 120 145 -100 190 Z'],
  ['M-100 292 C125 218 315 228 488 274 C675 325 855 355 1100 270 L1100 338 C845 438 660 395 480 345 C300 295 120 310 -100 375 Z','M-100 320 C120 238 315 250 495 300 C675 350 850 325 1100 250 L1100 315 C850 415 665 385 480 365 C300 345 120 350 -100 405 Z','M-100 265 C125 205 315 260 490 255 C670 250 860 380 1100 300 L1100 365 C850 455 660 355 480 315 C300 275 120 355 -100 400 Z']
 ],
 blend: [
  ['M-100 118 C120 42 315 52 495 94 C675 136 850 150 1100 68 L1100 130 C850 220 670 205 485 160 C300 116 120 125 -100 195 Z','M-100 145 C125 55 315 75 500 112 C680 148 855 120 1100 45 L1100 108 C850 210 670 225 490 175 C305 130 120 160 -100 225 Z','M-100 92 C125 30 320 78 500 72 C680 66 860 195 1100 90 L1100 150 C850 255 670 175 490 125 C300 70 120 155 -100 205 Z'],
  ['M-100 248 C120 188 305 190 480 235 C660 280 850 318 1100 240 L1100 305 C845 398 655 355 470 308 C290 262 120 270 -100 330 Z','M-100 280 C120 205 305 215 485 255 C665 295 855 275 1100 210 L1100 275 C850 370 655 340 475 320 C290 300 120 310 -100 360 Z','M-100 220 C125 170 305 225 485 215 C665 205 855 345 1100 260 L1100 325 C850 420 660 325 475 285 C290 245 120 320 -100 370 Z'],
  ['M-110 360 C125 304 305 315 478 357 C655 400 845 425 1100 345 L1100 410 C845 500 650 458 468 414 C290 372 115 380 -110 440 Z','M-110 390 C120 325 305 340 485 385 C665 430 850 400 1100 320 L1100 385 C850 480 660 475 475 430 C295 385 120 425 -110 475 Z','M-110 330 C120 280 305 345 475 340 C650 335 850 465 1100 365 L1100 430 C850 525 650 450 470 400 C290 350 120 420 -110 465 Z']
 ]
};

function Ribbon({frames,index,variant}){
 const id=`${variant}-${index}`;
 return <g className="ag-ribbon" style={{'--ribbon-delay':`${index*-1.7}s`}}>
  <path d={frames[0]} fill={`url(#ribbon-${variant})`}>
   <animate attributeName="d" values={`${frames[0]};${frames[1]};${frames[2]};${frames[0]}`} dur={`${10+index*1.8}s`} repeatCount="indefinite" calcMode="spline" keyTimes="0;.34;.68;1" keySplines=".42 0 .58 1;.42 0 .58 1;.42 0 .58 1"/>
  </path>
  <path d={frames[0]} fill={`url(#ribbon-hi-${variant})`} className="ag-ribbon-highlight">
   <animate attributeName="d" values={`${frames[0]};${frames[1]};${frames[2]};${frames[0]}`} dur={`${10+index*1.8}s`} repeatCount="indefinite" calcMode="spline" keyTimes="0;.34;.68;1" keySplines=".42 0 .58 1;.42 0 .58 1;.42 0 .58 1"/>
  </path>
 </g>;
}

function RibbonField({variant='hero'}){
 const frames=ribbonSets[variant]||ribbonSets.hero;
 return <svg className={`ag-ribbon-field ag-ribbon-${variant}`} viewBox="0 0 1000 500" preserveAspectRatio="none" aria-hidden="true">
  <defs>
   <linearGradient id={`ribbon-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" stopColor="#22d3ee"/><stop offset="30%" stopColor="#4f46e5"/><stop offset="57%" stopColor="#8b5cf6"/><stop offset="82%" stopColor="#ec4899"/><stop offset="100%" stopColor="#f0abfc"/>
   </linearGradient>
   <linearGradient id={`ribbon-hi-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" stopColor="#fff" stopOpacity="0"/><stop offset="45%" stopColor="#fff" stopOpacity=".08"/><stop offset="55%" stopColor="#fff" stopOpacity=".22"/><stop offset="70%" stopColor="#fff" stopOpacity=".04"/><stop offset="100%" stopColor="#fff" stopOpacity="0"/>
   </linearGradient>
   <filter id={`ribbon-blur-${variant}`} x="-20%" y="-40%" width="140%" height="180%"><feGaussianBlur stdDeviation="14"/></filter>
  </defs>
  <g className="ag-ribbon-glow" filter={`url(#ribbon-blur-${variant})`} opacity=".5">{frames.map((frame,i)=><Ribbon key={i} frames={frame} index={i} variant={variant}/>)}</g>
  <g className="ag-ribbon-main">{frames.map((frame,i)=><Ribbon key={`main-${i}`} frames={frame} index={i+3} variant={variant}/>)}</g>
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
  <section className="ag-section"><div className="ag-label"><span>07</span><b>MOTION</b></div><div><h2>Move the light.<br/><em>Change the mood.</em></h2><p>The signature interaction is contained inside one playground: drag the luminous point and watch the atmosphere follow your hand.</p><div className="ag-playground" ref={playgroundRef} style={{'--px':`${point.x}%`,'--py':`${point.y}%`}}><div className="ag-playground-grid"/><RibbonField variant="hero"/><div className="ag-playground-glow"/><div className="ag-playground-orb"/><div className="ag-playground-content"><span>AURORA PLAYGROUND</span><strong>DRAG<br/>THE LIGHT.</strong><small>{dragging?'MOVING / ATMOSPHERE FOLLOWING':'TOUCH & DRAG THE GLOW'}</small></div><button className={`ag-light-handle ${dragging?'is-dragging':''}`} aria-label="Drag the aurora light" onPointerDown={start} onPointerMove={event=>dragging&&moveLight(event)} onPointerUp={stop} onPointerCancel={stop}><i/></button></div></div></section>
  <section className="ag-section"><div className="ag-label"><span>08</span><b>FOCUS</b></div><div><h2>Glow around<br/><em>what matters.</em></h2><p>Atmosphere should support hierarchy. Brighter zones attract attention while quieter areas give content room to breathe.</p><div className="ag-focus-demo"><div><span>01</span><b>PRIMARY</b></div><div><span>02</span><b>SECONDARY</b></div><div><span>03</span><b>QUIET</b></div></div></div></section>
  <footer className="ag-footer"><span>AURORA / GRADIENT DESIGN</span><h2>Light is the<br/><em>material.</em></h2><p>A visual language built from colour, blend, depth, motion and focus.</p><button onClick={()=>onNavigate?.('library')}>BACK TO DESIGN LIBRARY <ArrowLeft size={15}/></button></footer>
 </main>;
}
