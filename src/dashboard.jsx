import React, { useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import './dashboard.css';

const systems = [
  { no:'01', name:'Glassmorphism', note:'Transparency · depth · light', className:'dashboard-glass' },
  { no:'02', name:'Brutalism', note:'Structure · contrast · raw form', className:'dashboard-brutal' },
  { no:'03', name:'Minimalism', note:'Reduction · rhythm · clarity', className:'dashboard-minimal' },
  { no:'04', name:'Dark UI', note:'Contrast · atmosphere · focus', className:'dashboard-dark' },
  { no:'05', name:'Material', note:'Elevation · systems · motion', className:'dashboard-material' },
];

export default function Dashboard({ onNavigate }) {
  const [open, setOpen] = useState(null);
  const goLibrary = () => onNavigate?.('library');

  return <main className="dashboard-shell">
    <div className="dashboard-glow glow-a"/><div className="dashboard-glow glow-b"/><div className="dashboard-grain"/>
    <header className="dashboard-nav">
      <button className="dashboard-brand" onClick={() => onNavigate?.('home')}><span>R</span><b>RYUMA</b><em>リューマ</em></button>
      <div className="dashboard-nav-title">DESIGN ANATOMY</div>
      <button className="dashboard-library" onClick={goLibrary}>LIBRARY <ArrowRight size={15}/></button>
    </header>

    <section className="dashboard-hero">
      <span className="dashboard-kicker">DESIGN ANATOMY / 01</span>
      <h1>Design is a<br/><span>system.</span></h1>
      <p>Look beyond the surface. Explore the decisions, influences and visual languages that make design feel the way it does.</p>
      <button className="dashboard-cta" onClick={goLibrary}>EXPLORE THE LIBRARY <ArrowRight size={18}/></button>
    </section>

    <section className="dashboard-story">
      <div className="story-intro"><span className="dashboard-kicker">01 / THE IDEA</span><h2>Design doesn't<br/><span>appear out of nowhere.</span></h2></div>
      <div className="story-copy"><p>Every visual language grows from choices. Culture changes what we value. Technology changes what we can make. Materials change what we can build.</p><p><strong>Over time, those influences become recognizable ways of seeing and making.</strong></p></div>
      <div className="influence-line"><span>CULTURE</span><i>→</i><span>TECHNOLOGY</span><i>→</i><span>MATERIAL</span><i>→</i><span>PEOPLE</span><i>→</i><b>DESIGN</b></div>
    </section>

    <section className="dashboard-systems">
      <div className="systems-heading"><div><span className="dashboard-kicker">02 / VISUAL LANGUAGES</span><h2>Explore the<br/><span>systems.</span></h2></div><p>Each design language makes a different set of decisions. Open one to see where its visual world will live.</p></div>
      <div className="system-list">{systems.map((system,index) => <article className={`system-row ${system.className} ${open===index?'is-open':''}`} key={system.name}>
        <button className="system-toggle" onClick={()=>setOpen(open===index?null:index)} aria-expanded={open===index}>
          <span className="system-no">{system.no}</span><div><h3>{system.name}</h3><p>{system.note}</p></div><ChevronDown className="system-chevron" size={22}/>
        </button>
        <div className="system-panel"><div className="system-preview"><span>LIVE PREVIEW</span><div className="preview-placeholder"><b>{system.name}</b><small>ENVIRONMENT COMING TO LIFE</small></div></div><div className="system-panel-copy"><span>DESIGN LANGUAGE</span><p>The full environment will be connected here when this design system is built.</p><button onClick={goLibrary}>EXPLORE STYLE <ArrowRight size={15}/></button></div></div>
      </article>)}</div>
    </section>

    <section className="dashboard-anatomy"><span className="dashboard-kicker">03 / LOOK CLOSER</span><h2>See the parts.<br/><span>Understand the system.</span></h2><p>Colour, type, form, space and motion work together to create a visual language.</p><div className="anatomy-chain"><b>COLOUR</b><i>+</i><b>TYPE</b><i>+</i><b>FORM</b><i>+</i><b>SPACE</b><i>+</i><b>MOTION</b></div></section>

    <section className="dashboard-end"><span className="dashboard-kicker">04 / NEXT</span><h2>Don't just look at design.<br/><span>Learn to read it.</span></h2><button className="dashboard-cta" onClick={goLibrary}>ENTER THE LIBRARY <ArrowRight size={18}/></button></section>
    <footer className="dashboard-footer"><span>RYUMA / DESIGN ANATOMY</span><span>SEE · BREAK DOWN · UNDERSTAND · CREATE</span></footer>
  </main>;
}
