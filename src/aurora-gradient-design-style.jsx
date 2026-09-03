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
  ['M-120 170 C70 35 270 40 455 105 C635 168 790 220 1120 70 L1120 190 C820 315 650 260 455 195 C270 132 75 155 -120 290 Z','M-120 220 C70 75 285 58 470 128 C650 196 820 175 1120 45 L1120 165 C815 300 650 285 455 220 C270 155 70 205 -120 335 Z','M-120 135 C85 18 285 72 465 72 C650 72 820 250 1120 95 L1120 210 C815 345 640 240 455 170 C275 100 75 205 -120 270 Z'],
  ['M-120 300 C85 180 270 205 455 270 C650 338 825 350 1120 205 L1120 330 C830 455 640 405 450 340 C260 275 70 320 -120 405 Z','M-120 345 C85 210 275 220 465 295 C650 370 835 310 1120 185 L1120 305 C830 430 645 420 450 365 C260 310 70 365 -120 445 Z','M-120 270 C90 155 280 235 460 240 C645 245 825 395 1120 245 L1120 360 C825 485 640 375 450 315 C260 255 70 350 -120 420 Z'],
  ['M-130 425 C65 300 270 330 455 395 C650 463 830 465 1130 320 L1130 445 C825 565 635 525 445 465 C255 405 65 455 -130 520 Z','M-130 470 C75 325 275 350 465 425 C650 500 835 450 1130 285 L1130 410 C835 545 640 555 450 495 C260 435 70 500 -130 555 Z','M-130 390 C70 270 270 355 450 365 C640 375 835 500 1130 340 L1130 465 C825 585 635 490 445 440 C260 390 70 480 -130 535 Z']
 ],
 light: [
  ['M-120 125 C80 15 285 40 465 105 C650 172 825 170 1120 55 L1120 170 C820 295 645 245 455 180 C270 118 70 150 -120 275 Z','M-120 185 C80 48 285 58 475 125 C655 188 830 130 1120 30 L1120 145 C820 275 645 275 455 205 C270 140 70 205 -120 325 Z','M-120 92 C80 5 285 75 465 72 C650 68 835 220 1120 75 L1120 195 C820 320 640 215 450 150 C265 85 65 195 -120 260 Z'],
  ['M-120 310 C75 220 275 225 455 280 C645 338 835 365 1120 270 L1120 380 C820 480 640 420 450 360 C265 305 70 345 -120 430 Z','M-120 360 C75 235 280 255 465 315 C650 375 830 335 1120 230 L1120 345 C825 460 640 420 450 390 C260 360 70 390 -120 465 Z','M-120 270 C80 190 275 270 455 260 C640 250 835 400 1120 295 L1120 410 C820 505 635 385 450 330 C265 275 70 390 -120 455 Z']
 ],
 blend: [
  ['M-120 125 C75 42 275 55 455 108 C645 164 830 170 1120 70 L1120 185 C825 300 640 245 450 185 C265 125 70 160 -120 275 Z','M-120 175 C80 55 280 72 465 130 C650 188 835 125 1120 45 L1120 155 C825 280 640 285 450 210 C270 145 70 200 -120 330 Z','M-120 92 C80 25 280 78 455 76 C640 74 835 235 1120 88 L1120 200 C820 325 635 215 450 155 C270 95 70 195 -120 285 Z'],
  ['M-120 285 C80 190 275 205 450 255 C640 310 835 345 1120 245 L1120 360 C820 465 635 405 445 340 C260 280 70 330 -120 430 Z','M-120 335 C80 205 280 225 465 285 C650 345 835 300 1120 215 L1120 330 C820 445 640 420 450 370 C270 320 70 375 -120 460 Z','M-120 245 C80 165 280 235 455 235 C640 235 835 380 1120 275 L1120 395 C820 500 635 370 450 315 C265 260 70 355 -120 445 Z'],
  ['M-130 430 C70 315 270 325 450 385 C640 448 835 460 1130 345 L1130 455 C825 570 635 520 445 460 C260 400 70 470 -130 545 Z','M-130 475 C70 335 275 350 465 420 C650 490 840 440 1130 305 L1130 420 C825 555 635 555 450 500 C265 445 70 515 -130 570 Z','M-130 395 C70 285 275 350 450 355 C635 360 840 495 1130 365 L1130 480 C820 590 635 500 445 445 C260 390 70 490 -130 555 Z']
 ]
};

function Ribbon({frames,index,variant,layer='core'}){
 const duration=`${11+index*1.4}s`;
 const values=`${frames[0]};${frames[1]};${frames[2]};${frames[0]}`;
 return <g className={`ag-ribbon ag-ribbon-${layer}`} style={{'--ribbon-delay':`${index*-1.9}s`}}>
  <path d={frames[0]} fill={`url(#ribbon-${variant})`}>
   <animate attributeName="d" values={values} dur={duration} repeatCount="indefinite" calcMode="spline" keyTimes="0;.34;.68;1" keySplines=".42 0 .58 1;.42 0 .58 1;.42 0 .58 1"/>
  </path>
  {layer!=='glow'&&<path d={frames[0]} fill={`url(#ribbon-hi-${variant})`} className="ag-ribbon-highlight">
   <animate attributeName="d" values={values} dur={duration} repeatCount="indefinite" calcMode="spline" keyTimes="0;.34;.68;1" keySplines=".42 0 .58 1;.42 0 .58 1;.42 0 .58 1"/>
  </path>}
 </g>;
}

function RibbonField({variant='hero',reactive=false,point={x:50,y:50}}){
 const frames=ribbonSets[variant]||ribbonSets.hero;
 const ribbonStyle=reactive?{'--ribbon-x':`${(point.x-50)*0.11}%`,'--ribbon-y':`${(point.y-50)*0.08}%`}:undefined;
 return <svg className={`ag-ribbon-field ag-ribbon-${variant}${reactive?' ag-ribbon-reactive':''}`} style={ribbonStyle} viewBox="0 0 1000 500" preserveAspectRatio="none" aria-hidden="true">
  <defs>
   <linearGradient id={`ribbon-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" stopColor="#19d9ef"/><stop offset="28%" stopColor="#467cf4"/><stop offset="52%" stopColor="#8c5cf5"/><stop offset="76%" stopColor="#d84fdf"/><stop offset="100%" stopColor="#ff62b1"/>
   </linearGradient>
   <linearGradient id={`ribbon-hi-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" stopColor="#fff" stopOpacity="0"/><stop offset="38%" stopColor="#fff" stopOpacity=".04"/><stop offset="54%" stopColor="#fff" stopOpacity=".2"/><stop offset="68%" stopColor="#fff" stopOpacity=".05"/><stop offset="100%" stopColor="#fff" stopOpacity="0"/>
   </linearGradient>
   <filter id={`ribbon-soft-${variant}`} x="-25%" y="-80%" width="150%" height="260%"><feGaussianBlur stdDeviation="20"/></filter>
   <filter id={`ribbon-core-${variant}`} x="-20%" y="-60%" width="140%" height="220%"><feGaussianBlur stdDeviation="7"/></filter>
   <filter id={`ribbon-wisp-${variant}`} x="-20%" y="-60%" width="140%" height="220%"><feGaussianBlur stdDeviation="3.5"/></filter>
  </defs>
  <g className="ag-ribbon-atmosphere" filter={`url(#ribbon-soft-${variant})`} opacity=".82">{frames.map((frame,i)=><Ribbon key={`glow-${i}`} frames={frame} index={i} variant={variant} layer="glow"/>)}</g>
  <g className="ag-ribbon-cloud" filter={`url(#ribbon-core-${variant})`} opacity=".72">{frames.map((frame,i)=><Ribbon key={`cloud-${i}`} frames={frame} index={i+3} variant={variant} layer="cloud"/>)}</g>
  <g className="ag-ribbon-wisps" filter={`url(#ribbon-wisp-${variant})`} opacity=".62">{frames.map((frame,i)=><Ribbon key={`wisp-${i}`} frames={frame} index={i+6} variant={variant} layer="wisp"/>)}</g>
  {reactive&&<g className="ag-ribbon-reactive-haze"><ellipse cx="500" cy="260" rx="260" ry="95" fill={`url(#ribbon-${variant})`}/></g>}
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
  <section className="ag-section"><div className="ag-label"><span>07</span><b>MOTION</b></div><div><h2>Move the light.<br/><em>Change the mood.</em></h2><p>The signature interaction is contained inside one playground: drag the luminous point and watch the atmosphere follow your hand.</p><div className="ag-playground" ref={playgroundRef} style={{'--px':`${point.x}%`,'--py':`${point.y}%`}}><div className="ag-playground-grid"/><RibbonField variant="hero" reactive point={point}/><div className="ag-playground-glow"/><div className="ag-playground-orb"/><div className="ag-playground-content"><span>AURORA PLAYGROUND</span><strong>DRAG<br/>THE LIGHT.</strong><small>{dragging?'MOVING / ATMOSPHERE FOLLOWING':'TOUCH & DRAG THE GLOW'}</small></div><button className={`ag-light-handle ${dragging?'is-dragging':''}`} aria-label="Drag the aurora light" onPointerDown={start} onPointerMove={event=>dragging&&moveLight(event)} onPointerUp={stop} onPointerCancel={stop}><i/></button></div></div></section>
  <section className="ag-section"><div className="ag-label"><span>08</span><b>FOCUS</b></div><div><h2>Glow around<br/><em>what matters.</em></h2><p>Atmosphere should support hierarchy. Brighter zones attract attention while quieter areas give content room to breathe.</p><div className="ag-focus-demo"><div><span>01</span><b>PRIMARY</b></div><div><span>02</span><b>SECONDARY</b></div><div><span>03</span><b>QUIET</b></div></div></div></section>
  <footer className="ag-footer"><span>AURORA / GRADIENT DESIGN</span><h2>Light is the<br/><em>material.</em></h2><p>A visual language built from colour, blend, depth, motion and focus.</p><button onClick={()=>onNavigate?.('library')}>BACK TO DESIGN LIBRARY <ArrowLeft size={15}/></button></footer>
 </main>;
}
