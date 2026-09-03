import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Plus, Minus } from 'lucide-react';
import './material-design-style.css';

const anatomy = [
  ['01','SURFACE','Layers give content a clear place to live.'],
  ['02','ELEVATION','Depth separates priority without decoration.'],
  ['03','TYPE','Scale and hierarchy make information scannable.'],
  ['04','COLOUR','A focused accent system guides action and meaning.'],
  ['05','MOTION','Transitions explain change and preserve continuity.'],
];

export default function MaterialDesignStyle({onNavigate}) {
  const [selected, setSelected] = useState('surface');
  const [count, setCount] = useState(2);
  const [selectedCard, setSelectedCard] = useState(null);
  const modes = {surface:'SURFACE', elevation:'ELEVATION', type:'TYPE'};
  return <main className="material-style-page">
    <header className="material-nav">
      <button onClick={()=>onNavigate?.('library')}><ArrowLeft size={16}/> DESIGN LIBRARY</button>
      <div className="material-brand"><b>RYUMA</b><span>リューマ</span></div>
      <span>DESIGN LANGUAGE / 02.02</span>
    </header>

    <section className="material-hero">
      <div className="material-hero-copy">
        <span className="material-kicker">02 / MATERIAL DESIGN</span>
        <h1>Objects<br/><em>have order.</em></h1>
        <p className="material-lead">A system of surfaces, hierarchy, motion and meaningful interaction built for the screen.</p>
        <p>Material design turns digital interfaces into a coherent system of components — clear enough to understand, flexible enough to adapt.</p>
        <button className="material-primary" onClick={()=>setSelected('elevation')}>EXPLORE THE SYSTEM <ArrowRight size={17}/></button>
      </div>
      <div className={`material-stage ${selectedCard ? 'has-selected-card' : ''}`} onClick={()=>selectedCard&&setSelectedCard(null)}>
        <div className="material-backdrop"/>
        <button className={`material-card card-back ${selectedCard==='depth'?'card-selected':''}`} onClick={(e)=>{e.stopPropagation();setSelectedCard(selectedCard==='depth'?null:'depth')}}><span>03</span><b>DEPTH</b></button>
        <button className={`material-card card-mid ${selectedCard==='structure'?'card-selected':''}`} onClick={(e)=>{e.stopPropagation();setSelectedCard(selectedCard==='structure'?null:'structure')}}><span>02</span><b>STRUCTURE</b></button>
        <button className={`material-card card-front ${selectedCard==='component'?'card-selected':''}`} onClick={(e)=>{e.stopPropagation();setSelectedCard(selectedCard==='component'?null:'component')}}><span>01 / COMPONENT</span><strong>MAKE<br/>IT CLEAR.</strong><span className="material-card-action">CONTINUE <ArrowRight size={14}/></span></button>
        <button className="material-fab" aria-label="Floating action" onClick={(e)=>e.stopPropagation()}>+</button>
      </div>
    </section>

    <section className="material-section material-idea">
      <div className="material-label"><span>03</span><b>THE IDEA</b></div>
      <div><h2>One system.<br/><em>Many surfaces.</em></h2><p>Material design is not about making screens look like physical paper. It uses a shared model of surfaces, hierarchy and motion so components behave consistently.</p><div className="material-flow"><span>COMPONENT</span><i>→</i><span>SYSTEM</span><i>→</i><b>EXPERIENCE</b></div></div>
    </section>

    <section className="material-section">
      <div className="material-label"><span>04</span><b>DESIGN ANATOMY</b></div>
      <div><h2>Build the<br/><em>system.</em></h2><div className="material-anatomy">{anatomy.map(([no,title,copy])=><article key={no}><span>{no}</span><div><b>{title}</b><p>{copy}</p></div><ArrowRight size={17}/></article>)}</div></div>
    </section>

    <section className="material-section material-elevation">
      <div className="material-label"><span>05</span><b>ELEVATION</b></div>
      <div><h2>Depth without<br/><em>confusion.</em></h2><p>Elevation establishes relationships between surfaces. The visual language stays restrained so hierarchy does the talking.</p><div className="elevation-demo"><div className="elevation-ground"><span>BASE</span><div className="elevation-surface level-one">LEVEL 01</div><div className="elevation-surface level-two">LEVEL 02</div><div className="elevation-surface level-three">LEVEL 03</div></div></div></div>
    </section>

    <section className="material-section material-components">
      <div className="material-label"><span>06</span><b>COMPONENTS</b></div>
      <div><h2>Small parts.<br/><em>Shared rules.</em></h2><div className="component-demo"><div className="demo-toolbar"><span>ACCOUNT</span><i/><i/><i/></div><div className="demo-content"><div className="demo-avatar">R</div><div><strong>RYUMA SYSTEM</strong><span>Component study</span></div><button onClick={()=>setSelected('surface')}><Check size={15}/> DONE</button></div></div></div>
    </section>

    <section className="material-section material-motion">
      <div className="material-label"><span>07</span><b>MOTION</b></div>
      <div><h2>Change should<br/><em>make sense.</em></h2><p>Motion connects one state to the next. It gives feedback, preserves context and makes an interface feel responsive rather than abrupt.</p><div className={`motion-demo ${selected}`}><div className="motion-orb"/><span>{modes[selected]}</span></div><div className="material-controls">{Object.entries(modes).map(([key,label])=><button key={key} className={selected===key?'is-selected':''} onClick={()=>setSelected(key)}>{label}</button>)}</div></div>
    </section>

    <section className="material-section material-interaction">
      <div className="material-label"><span>08</span><b>INTERACTION</b></div>
      <div><h2>Design for<br/><em>the response.</em></h2><p>Components should communicate their state clearly. Tap the controls to change the system and see the response immediately.</p><div className="stepper"><button aria-label="Decrease" onClick={()=>setCount(c=>Math.max(0,c-1))}><Minus size={18}/></button><strong>{count}</strong><button aria-label="Increase" onClick={()=>setCount(c=>c+1)}><Plus size={18}/></button><span>ITEMS</span></div></div>
    </section>

    <footer className="material-footer"><span>MATERIAL DESIGN / 02.02</span><h2>Clear system.<br/><em>Natural response.</em></h2><p>A design specimen for studying surfaces, hierarchy, components and motion.</p><button onClick={()=>onNavigate?.('library')}>BACK TO DESIGN LIBRARY <ArrowLeft size={15}/></button></footer>
  </main>;
}
