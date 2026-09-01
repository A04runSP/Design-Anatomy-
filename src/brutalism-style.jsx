import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Plus, Minus } from 'lucide-react';
import './brutalism-style.css';

const parts=[
 {n:'01',t:'Colour',d:'Bright orange and yellow collide with black and white. Red acts as a visual signal.'},
 {n:'02',t:'Type',d:'Oversized, heavy typography creates hierarchy without apologising for itself.'},
 {n:'03',t:'Form',d:'Hard rectangles, thick borders and offset blocks replace soft decoration.'},
 {n:'04',t:'Space',d:'Uneven spacing and deliberate tension keep the composition raw and energetic.'},
 {n:'05',t:'Motion',d:'Interactions snap, shift and interrupt rather than float or fade.'}
];

export default function BrutalismStyle({onNavigate}){
 const [active,setActive]=useState(0); const [count,setCount]=useState(7);
 return <main className="brutal-page"><header className="brutal-nav"><button onClick={()=>onNavigate?.('library')}><ArrowLeft size={16}/> DESIGN LIBRARY</button><div><b>RYUMA</b><span>リューマ</span></div><strong>04 / BRUTALISM</strong></header>
 <section className="brutal-hero"><div className="brutal-copy"><span>DESIGN LANGUAGE / 04</span><h1>MAKE IT<br/><i>LOUD.</i></h1><p>Raw structure. Hard edges. No unnecessary polish.</p><div className="brutal-stamp">BRUTAL<br/>BY DESIGN</div></div><div className="brutal-poster"><div className="poster-black">NO<br/>SOFT<br/><em>EDGES.</em></div><div className="poster-yellow">USE<br/><b>CONTRAST.</b></div><div className="poster-red">RAW<br/>UI</div><div className="poster-orange">04</div></div></section>
 <section className="brutal-demo"><div className="brutal-label">01 / LIVE SPECIMEN</div><div className="brutal-console"><div className="console-head"><b>CONTROL // RAW</b><span>STATUS: ACTIVE</span></div><div className="console-body"><div><small>COUNTER</small><strong>{String(count).padStart(2,'0')}</strong><div className="brutal-actions"><button onClick={()=>setCount(Math.max(0,count-1))} aria-label="Decrease counter"><Minus/></button><button onClick={()=>setCount(count+1)} aria-label="Increase counter"><Plus/></button></div></div><div className="brutal-switch"><button className={active?'is-active':''} onClick={()=>setActive(v=>1-v)}>{active?'ON':'OFF'}</button><small>HARD STATE / CLICK TO SWITCH</small></div></div></div></section>
 <section className="brutal-section"><div className="brutal-label">02 / THE IDEA</div><div><h2>DESIGN<br/><span>WITHOUT</span><br/>PERMISSION.</h2><p>Brutalism exposes structure instead of hiding it. Strong contrast, visible boundaries and intentionally direct interactions become the visual language.</p><div className="brutal-rules"><div><b>01</b><span>HARD BORDER</span></div><div><b>02</b><span>FLAT COLOUR</span></div><div><b>03</b><span>OFFSET SHADOW</span></div><div><b>04</b><span>RAW TYPE</span></div></div></div></section>
 <section className="brutal-section anatomy"><div className="brutal-label">03 / DESIGN ANATOMY</div><div><h2>FIVE PARTS.<br/><span>ZERO FLUFF.</span></h2><div className="brutal-parts">{parts.map(x=><article key={x.n}><b>{x.n}</b><h3>{x.t}</h3><p>{x.d}</p></article>)}</div></div></section>
 <section className="brutal-section composition"><div className="brutal-label">04 / COMPOSITION</div><div className="brutal-collage"><div className="collage-orange">STRUCTURE<br/>FIRST.</div><div className="collage-black">BLACK<br/><span>MEANS</span><br/>BUSINESS.</div><div className="collage-white">WHITE SPACE<br/><b>ISN'T</b><br/>ALWAYS QUIET.</div><div className="collage-yellow">!</div></div></section>
 <footer className="brutal-footer"><span>BRUTALISM / 04</span><h2>RAW.<br/><i>DIRECT.</i><br/>ALIVE.</h2><p>When the structure becomes the aesthetic.</p><button onClick={()=>onNavigate?.('library')}>BACK TO DESIGN LIBRARY <ArrowRight size={16}/></button></footer></main>;
}
