import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ChevronDown } from 'lucide-react';
import './dashboard.css';

const systems = [
  { no:'01', name:'Glassmorphism', note:'Transparency · depth · light', className:'dashboard-glass' },
  { no:'02', name:'Brutalism', note:'Structure · contrast · raw form', className:'dashboard-brutal' },
  { no:'03', name:'Minimalism', note:'Reduction · rhythm · clarity', className:'dashboard-minimal' },
  { no:'04', name:'Dark UI', note:'Contrast · atmosphere · focus', className:'dashboard-dark' },
  { no:'05', name:'Material', note:'Elevation · systems · motion', className:'dashboard-material' },
];

const history = [
  { no:'01', era:'ORIGINS', title:'Before screens.', copy:'Marks, symbols, objects and images became ways to communicate, identify and create meaning.', tag:'MARKS · SYMBOLS · OBJECTS', image:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Lascaux_painting.jpg', source:'Lascaux cave painting' },
  { no:'02', era:'PRINT & TYPOGRAPHY', title:'The page becomes a system.', copy:'Printing and typography made visual communication reproducible, while type, margins and layout created repeatable structures.', tag:'TYPE · PAGE · REPRODUCTION', image:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Gutenberg_bible.jpg', source:'Gutenberg Bible, c. 1453' },
  { no:'03', era:'INDUSTRIAL DESIGN', title:'Machines change the possibilities.', copy:'Mass production and new materials changed how objects were made, distributed and experienced at everyday scale.', tag:'MATERIAL · MANUFACTURING · SCALE', image:'https://commons.wikimedia.org/wiki/Special:Redirect/file/AssemblyLine.jpg', source:'Ford assembly line, 1913' },
  { no:'04', era:'MODERNISM', title:'Less becomes a language.', copy:'Function, geometry, grids and reduction became powerful tools for visual communication and designed objects.', tag:'GRID · GEOMETRY · FUNCTION', image:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Josef_Müller-Brockmann_1957.jpg', source:'Josef Müller-Brockmann / Swiss Style' },
  { no:'05', era:'DIGITAL DESIGN', title:'Design enters the screen.', copy:'Pixels, software and graphical interfaces introduced a new medium where visual systems could become interactive.', tag:'PIXELS · INTERFACE · INTERACTION', image:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Xerox_Alto_full.jpg', source:'Xerox Alto graphical interface, 1973' },
  { no:'06', era:'WEB DESIGN', title:'The interface becomes a place.', copy:'The Web moved design from individual screens toward connected documents, navigation and eventually responsive digital products.', tag:'WEB · HYPERLINK · RESPONSIVE', image:'https://commons.wikimedia.org/wiki/Special:Redirect/file/W3_First_Website.png', source:'First World Wide Web site' },
  { no:'07', era:'CONTEMPORARY', title:'Design becomes fluid.', copy:'Motion, 3D, generative systems, AI and spatial interfaces are expanding what a visual language can be.', tag:'MOTION · 3D · GENERATIVE', image:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Mona_Lisa_2024.jpg', source:'Contemporary generative digital art' },
];

export default function Dashboard({ onNavigate }) {
  const [open, setOpen] = useState(null);
  const [historyOpen, setHistoryOpen] = useState(null);
  const goLibrary = () => onNavigate?.('library');
  const goHome = () => onNavigate?.('home');

  return <main className="dashboard-shell">
    <div className="dashboard-glow glow-a"/><div className="dashboard-glow glow-b"/><div className="dashboard-grain"/>
    <header className="dashboard-nav">
      <button className="dashboard-brand" onClick={goHome}><span>R</span><b>RYUMA</b><em>リューマ</em></button>
      <div className="dashboard-nav-title">DESIGN ANATOMY</div>
      <div className="dashboard-nav-actions"><button className="dashboard-back" onClick={goHome}><ArrowLeft size={15}/> BACK TO HOME</button><button className="dashboard-library" onClick={goLibrary}>LIBRARY <ArrowRight size={15}/></button></div>
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

    <section className="dashboard-history" aria-label="Design history">
      <div className="history-heading"><div><span className="dashboard-kicker">03 / DESIGN HISTORY</span><h2>How visual language<br/><span>evolved.</span></h2></div><p>Design changes when culture, technology, materials and human needs change. Follow seven moments that shaped how we make and see things.</p></div>
      <div className="history-timeline">{history.map((item,index)=><article className={`history-card ${historyOpen===index?'is-open':''}`} key={item.no}>
        <button className="history-toggle" onClick={()=>setHistoryOpen(historyOpen===index?null:index)} aria-expanded={historyOpen===index}>
          <span className="history-no">{item.no}</span><div><span className="history-era">{item.era}</span><h3>{item.title}</h3></div><ChevronDown className="history-chevron" size={22}/>
        </button>
        <div className="history-panel"><div className="history-image-wrap"><img src={item.image} alt={item.source} loading="lazy"/><span>{item.source}</span></div><div className="history-copy"><p>{item.copy}</p><strong>{item.tag}</strong></div></div>
      </article>)}</div>
      <div className="history-thread"><span>CULTURE</span><i>→</i><span>TECHNOLOGY</span><i>→</i><span>MATERIAL</span><i>→</i><span>PEOPLE</span><i>→</i><b>DESIGN</b></div>
    </section>

    <section className="dashboard-anatomy"><span className="dashboard-kicker">04 / LOOK CLOSER</span><h2>See the parts.<br/><span>Understand the system.</span></h2><p>Colour, type, form, space and motion work together to create a visual language.</p><div className="anatomy-chain"><b>COLOUR</b><i>+</i><b>TYPE</b><i>+</i><b>FORM</b><i>+</i><b>SPACE</b><i>+</i><b>MOTION</b></div></section>

    <section className="dashboard-end"><span className="dashboard-kicker">05 / NEXT</span><h2>Don't just look at design.<br/><span>Learn to read it.</span></h2><button className="dashboard-cta" onClick={goLibrary}>ENTER THE LIBRARY <ArrowRight size={18}/></button></section>
    <footer className="dashboard-footer"><span>RYUMA / DESIGN ANATOMY</span><span>SEE · BREAK DOWN · UNDERSTAND · CREATE</span></footer>
  </main>;
}
