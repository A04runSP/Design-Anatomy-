import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { ArrowRight, Compass, Eye, Lightbulb, Search, ArrowLeft, X } from "lucide-react";
import "./style.css";
import "./enhancements.css";
import "./typography.css";
import "./spacing.css";
import "./light-material.css";
import "./contrast.css";

const styles = [
  { name: "MINIMALISM", icon: Compass, tag: "01", copy: "Clarity through restraint. Space, hierarchy and simple form do the heavy lifting." },
  { name: "GLASSMORPHISM", icon: Eye, tag: "02", copy: "Translucent surfaces, blur and light create depth without making the interface noisy." },
  { name: "NEUMORPHISM", icon: Lightbulb, tag: "03", copy: "Soft shadows make controls feel physical, tactile and quietly dimensional." },
];

function StylePreview({ index }) {
  if (index === 0) return <div className="preview minimal-preview"><div className="mini-nav"><span></span><i></i><i></i><i></i></div><div className="minimal-content"><div className="mini-kicker">STUDIO</div><div className="mini-title">Less,<br/><b>but better.</b></div><div className="mini-line"></div><div className="mini-row"><span>01</span><span>Typography</span></div><div className="mini-row"><span>02</span><span>Spacing</span></div></div></div>;
  if (index === 1) return <div className="preview glass-preview"><div className="glass-backdrop"></div><div className="glass-window"><span className="glass-dot"></span><div className="glass-label">GLASS / 02</div><div className="glass-number">72<span>%</span></div><div className="glass-bar"><b></b></div><div className="glass-pills"><i></i><i></i><i></i></div></div></div>;
  return <div className="preview neo-preview"><div className="neo-panel"><div className="neo-label">CONTROL</div><div className="neo-knob">+</div><div className="neo-slider"><b></b></div><div className="neo-row"><span>LIGHT</span><strong>ON</strong></div></div></div>;
}

function IntroSection() {
  return <section className="intro-card"><div className="section-number">01</div><h2>What is Design Anatomy?</h2><p>It is a visual library for interface aesthetics. Every style is broken into the parts you can actually reuse — light, depth, material, type, rhythm — so you stop copying screenshots and start recognising intent. No trends for their own sake, no noise; just careful looking, explained in plain language.</p></section>;
}

const featureCards = [
  { icon: Compass, title: "Explore Styles", copy: "Move through a curated library of design languages, each framed with the context it grew out of." },
  { icon: Eye, title: "See the Design", copy: "Study visual examples and real interface references that show how a style actually behaves." },
  { icon: Lightbulb, title: "Understand the Design", copy: "Read the reasoning behind every choice — depth, contrast, spacing, type, light and restraint." },
];

function Home({ onEnter }) {
  const [active, setActive] = useState(0);
  useEffect(() => { const timer = setInterval(() => setActive(v => (v + 1) % styles.length), 5000); return () => clearInterval(timer); }, []);
  const current = styles[active]; const Icon = current.icon;
  return <main>
    <header className="topbar"><div className="brand"><span className="brand-star">✦</span><span>DESIGN ANATOMY</span></div><div className="brand-rule"></div></header>
    <section className="hero"><div className="hero-glow"></div><p className="eyebrow">VISUAL LITERACY, ONE STYLE AT A TIME</p><h1>Design has a<br/>language.<br/><em>Learn to see it.</em></h1><p className="hero-copy">Design Anatomy is a quiet place to explore design styles, look closely at examples, and understand the visual decisions behind them — why a surface glows, why a grid breathes, why one interface feels expensive and another feels loud.</p><button className="jump" onClick={onEnter}>JUMP IN <ArrowRight size={25}/></button><p className="section-link">What is Design Anatomy?</p></section>
    <IntroSection />
    <section className="feature-grid">{featureCards.map(({icon: FeatureIcon,title,copy}) => <article className="feature-card" key={title}><div className="feature-icon"><FeatureIcon size={25}/></div><h3>{title}</h3><p>{copy}</p><div className="feature-arrow">Explore <ArrowRight size={21}/></div></article>)}</section>
    <section className="style-stage"><div className="stage-smoke"></div><div className="stage-orb"></div><div className="style-card" key={current.name}><div className="card-head"><div className="style-icon"><Icon size={25}/></div><span className="card-number">{current.tag}</span></div><div className="card-body"><p className="style-name">{current.name}</p><p className="style-copy">{current.copy}</p><StylePreview index={active}/></div></div><div className="auto-note"><span className="pulse-dot"></span>AUTOMATICALLY EXPLORING</div></section>
    <footer className="closing"><div>DESIGN ANATOMY</div><div>LEARN TO SEE THE LANGUAGE</div></footer>
  </main>;
}

const dashboardCards = [
  { tag: "01", icon: Compass, title: "Explore Styles", copy: "Browse design languages and discover what makes each one distinct.", action: "OPEN LIBRARY" },
  { tag: "02", icon: Eye, title: "See the Design", copy: "Study visual examples and real interface references.", action: "VIEW EXAMPLES" },
  { tag: "03", icon: Lightbulb, title: "Understand the Design", copy: "Break down the decisions behind depth, type, colour and space.", action: "START LEARNING" },
];

function DesignReference() {
  return <div className="design-reference" aria-label="Visual design examples">
    <div className="reference-minimal"><span>01</span><strong>TYPE</strong><b>Less,<br/>but better.</b><i></i><small>SPACE · HIERARCHY · RESTRAINT</small></div>
    <div className="reference-glass"><div className="reference-glass-panel"><span></span><small>GLASS / 02</small><strong>72<span>%</span></strong><i></i></div></div>
    <div className="reference-neo"><div className="reference-neo-panel"><small>CONTROL</small><b>+</b><i></i><span>LIGHT&nbsp;&nbsp; ON</span></div></div>
    <div className="reference-caption"><span>VISUAL REFERENCES</span><b>Minimal · Glass · Neo</b></div>
  </div>;
}

function DepthVisual() {
  return <div className="depth-visual" aria-label="Three layers showing depth">
    <div className="depth-layer depth-back"><span>BACKGROUND</span></div>
    <div className="depth-layer depth-surface"><span>SURFACE</span></div>
    <div className="depth-layer depth-float"><span>FLOATING ELEMENT</span><b>01</b></div>
    <div className="depth-axis"><i></i><span>distance</span></div>
  </div>;
}

function TypographyVisual() {
  return <div className="typography-card" aria-label="Typography information and visual specimen"><div className="typography-specimen"></div></div>;
}

function ColourVisual() {
  return <div className="colour-section" aria-label="Colour information and control visual">
    <div className="colour-heading"><span>03</span><strong>COLOUR</strong></div>
    <p className="colour-intro">Colour gives meaning to hierarchy. Contrast, accent and restraint help the eye understand what matters first.</p>
    <div className="colour-control"><div className="colour-control-top"><span>CONTROL</span><b>03</b></div><div className="colour-swatch-grid"><div className="colour-swatch background-swatch"><span>BACKGROUND</span><b>#020E11</b></div><div className="colour-swatch surface-swatch"><span>SURFACE</span><b>#092A2E</b></div><div className="colour-swatch accent-swatch"><span>ACCENT</span><b>#16E1EF</b></div><div className="colour-swatch text-swatch"><span>TEXT</span><b>#F4FFFF</b></div></div><div className="colour-control-demo"><div className="colour-demo-label">ACCENT / CYAN</div><div className="colour-demo-title">Focus the eye.</div><div className="colour-demo-bar"><b></b></div><div className="colour-demo-knob">+</div></div></div>
    <div className="colour-principles"><div><span>01</span><strong>HIERARCHY</strong><p>Use colour to tell the eye what matters first.</p></div><div><span>02</span><strong>CONTRAST</strong><p>Separate information clearly without making it harsh.</p></div><div><span>03</span><strong>RESTRAINT</strong><p>Let important elements earn the accent colour.</p></div></div>
  </div>;
}

function SpacingVisual() {
  return <div className="spacing-section" aria-label="Spacing information and comparison visual">
    <div className="spacing-heading"><span>04</span><strong>SPACING</strong></div>
    <p className="spacing-intro">Space isn't empty. It separates ideas, creates rhythm, and gives important elements room to breathe.</p>
    <div className="spacing-showcase">
      <div className="spacing-panel tight-panel"><div className="spacing-panel-head"><span aria-hidden="true">✕</span><strong>TOO TIGHT</strong></div><div className="mock-ui"><b>Build with intention.</b><small>Clear structure makes interfaces easier to understand.</small><button>EXPLORE</button><i></i></div><p>Cramped · hard to scan</p></div>
      <div className="spacing-panel balanced-panel"><div className="spacing-panel-head"><span aria-hidden="true">✓</span><strong>BALANCED</strong></div><div className="mock-ui"><b>Build with intention.</b><small>Clear structure makes interfaces easier to understand.</small><button>EXPLORE</button><i></i></div><p>Clear · comfortable to scan</p></div>
    </div>
    <div className="spacing-principles"><div><span>01</span><strong>RHYTHM</strong><p>Consistent spacing helps the eye move through a page.</p></div><div><span>02</span><strong>GROUPING</strong><p>Related elements stay closer; separate ideas get more space.</p></div><div><span>03</span><strong>BREATHING ROOM</strong><p>Important content needs enough space around it to stand out.</p></div></div>
    <div className="spacing-takeaway"><span>SPACE</span><b>Good spacing makes the right things easier to see.</b></div>
  </div>;
}

function LightMaterialVisual() {
  return <section className="light-material-section" aria-label="Light and material information">
    <div className="light-material-heading"><span>05</span><strong>LIGHT &amp; MATERIAL</strong></div>
    <p className="light-material-intro">Light reveals the material. Material tells the interface what it is made of — glass, metal, paper, plastic, or something soft. Light gives those surfaces form, depth and character.</p>
    <div className="material-showcase">
      <div className="material-stage"><div className="material-orb matte-orb"></div><div className="material-label"><span>MATTE</span><small>Soft · low reflection</small></div></div>
      <div className="material-stage glass-material"><div className="material-orb glass-orb"></div><div className="material-label"><span>GLASS</span><small>Transparent · blurred · reflective</small></div></div>
      <div className="material-stage gloss-material"><div className="material-orb gloss-orb"></div><div className="material-label"><span>GLOSS</span><small>Polished · strong highlight</small></div></div>
    </div>
    <div className="light-material-principles">
      <div><span>01</span><strong>DIRECTION</strong><p>Light needs a believable source. Highlights and shadows should suggest where it comes from.</p></div>
      <div><span>02</span><strong>SURFACE</strong><p>Different materials respond differently to light. Matte absorbs; glass catches; glossy surfaces reflect.</p></div>
      <div><span>03</span><strong>DEPTH</strong><p>Light separates layers and makes elements feel closer without making the interface heavy.</p></div>
    </div>
    <div className="light-material-takeaway"><span>LIGHT + MATERIAL</span><b>Good lighting makes the surface believable.</b></div>
  </section>;
}

function ContrastVisual() {
  return <section className="contrast-section" aria-label="Contrast information and visual comparison">
    <div className="contrast-heading"><span>06</span><strong>CONTRAST</strong></div>
    <p className="contrast-intro">Contrast helps the eye separate what matters from what supports it. It can come from light and dark, size, weight, colour or distance.</p>
    <div className="contrast-showcase">
      <div className="contrast-card contrast-low"><div className="contrast-card-head"><span>LOW</span><small>QUIET</small></div><div className="contrast-demo"><b>Secondary information</b><span>Soft difference. Easy to miss.</span></div><p>Useful for supporting content.</p></div>
      <div className="contrast-card contrast-balanced"><div className="contrast-card-head"><span>BALANCED</span><small>CLEAR</small></div><div className="contrast-demo"><b>Primary information</b><span>Strong enough to guide the eye.</span></div><p>Clear hierarchy without shouting.</p></div>
      <div className="contrast-card contrast-high"><div className="contrast-card-head"><span>HIGH</span><small>STRONG</small></div><div className="contrast-demo"><b>Important action</b><span>Maximum separation and attention.</span></div><p>Use carefully for emphasis.</p></div>
    </div>
    <div className="contrast-principles">
      <div><span>01</span><strong>HIERARCHY</strong><p>Give the strongest contrast to the information that matters most.</p></div>
      <div><span>02</span><strong>READABILITY</strong><p>Text needs enough difference from its background to stay effortless to read.</p></div>
      <div><span>03</span><strong>RESTRAINT</strong><p>Too much contrast everywhere removes the sense of priority.</p></div>
    </div>
    <div className="contrast-takeaway"><span>CONTRAST</span><b>Good contrast tells the eye where to look first.</b></div>
    <div className="rhythm-section" aria-label="03.07 Rhythm">
      <div className="rhythm-heading"><span>03.07</span><strong>RHYTHM</strong></div>
      <p className="rhythm-intro">Repeated patterns help the eye move through an interface. Consistent spacing, alignment, shapes, and visual beats create a sense of order without making everything feel identical.</p>
      <div className="rhythm-principles">
        <div><span>01</span><strong>REPETITION</strong><p>Repeat useful visual elements so the interface feels connected.</p></div>
        <div><span>02</span><strong>CONSISTENCY</strong><p>Keep spacing, sizing, alignment, and patterns predictable.</p></div>
        <div><span>03</span><strong>FLOW</strong><p>Let each section naturally lead the eye toward the next.</p></div>
      </div>
    </div>
  </section>;
}

function Dashboard({ onBack }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeCard, setActiveCard] = useState(null);
  useEffect(() => { if (!searchOpen) return; const onKey = event => { if (event.key === "Escape") { setSearchOpen(false); setQuery(""); } }; window.addEventListener("keydown", onKey); return () => window.removeEventListener("keydown", onKey); }, [searchOpen]);
  const filteredCards = useMemo(() => { const term = query.trim().toLowerCase(); if (!term) return dashboardCards; return dashboardCards.filter(card => `${card.tag} ${card.title} ${card.copy} ${card.action}`.toLowerCase().includes(term)); }, [query]);
  const activateCard = tag => { setActiveCard(tag); window.setTimeout(() => setActiveCard(current => current === tag ? null : current), 850); };
  return <main className="dashboard-page">
    <header className="dash-header"><button className="back-button" onClick={onBack}><ArrowLeft size={19}/> HOME</button><div className="brand dash-brand"><span className="brand-star">✦</span><span>DESIGN ANATOMY</span></div><div className={`search-wrap ${searchOpen ? "open" : ""}`}>{searchOpen && <input autoFocus value={query} onChange={event => setQuery(event.target.value)} placeholder="Search styles, design, concepts..." aria-label="Search design library" />}<button className="search-button" aria-label={searchOpen ? "Close search" : "Search design library"} onClick={() => { setSearchOpen(value => !value); if (searchOpen) setQuery(""); }}>{searchOpen ? <X size={20}/> : <Search size={20}/>}<span className="search-label">SEARCH</span></button></div></header>
    <section className="dashboard-hero"><p className="eyebrow">DESIGN LIBRARY</p><h1>Explore design<br/><em>visually.</em></h1><p>See the style. Understand the parts. Learn why it works.</p></section>
    {searchOpen && query.trim() && <div className="search-status">{filteredCards.length} {filteredCards.length === 1 ? "result" : "results"} for <strong>“{query}”</strong></div>}
    <section className="dashboard-grid">{filteredCards.length > 0 ? filteredCards.map(({tag, icon: CardIcon, title, copy, action}, index) => <article key={tag} className={`dashboard-card ${index === 0 && !query ? "large" : ""} ${activeCard === tag ? "is-active" : ""} ${tag === "02" ? "see-design-card" : ""} ${tag === "03" ? "understand-card" : ""}`} tabIndex="0" onClick={() => activateCard(tag)} onKeyDown={event => { if (event.key === "Enter" || event.key === " ") activateCard(tag); }}><span className="dashboard-number">{tag}</span><div className="dashboard-icon"><CardIcon size={24}/></div><h2>{title}</h2><p>{copy}</p>{tag === "02" && <DesignReference/>}{tag === "03" && <div className="depth-section"><div className="depth-heading"><span>01</span><div><strong>DEPTH</strong><small>Hierarchy through distance.</small></div></div><p className="depth-copy">Shadows, layers and contrast create a sense of distance. Good depth guides the eye without making the interface feel heavy.</p><DepthVisual/><TypographyVisual/><ColourVisual/><SpacingVisual/><LightMaterialVisual/><ContrastVisual/></div>}<button onClick={event => { event.stopPropagation(); activateCard(tag); }}>{action} <ArrowRight size={18}/></button></article>) : <div className="no-results"><Search size={28}/><strong>No matching design found</strong><span>Try “style”, “visual”, “depth” or “learn”.</span></div>}</section>
    <section className="dashboard-note"><span>01</span><div><strong>START HERE</strong><p>The dashboard is the entry point to the Design Anatomy library. Search above to quickly find a concept, then tap a card to feel the interaction.</p></div></section>
  </main>;
}

function App() { const [dashboard, setDashboard] = useState(() => window.location.hash === "#dashboard"); const enter = () => { window.location.hash = "dashboard"; setDashboard(true); window.scrollTo(0,0); }; const back = () => { window.location.hash = ""; setDashboard(false); window.scrollTo(0,0); }; useEffect(() => { const onHash = () => setDashboard(window.location.hash === "#dashboard"); window.addEventListener("hashchange", onHash); return () => window.removeEventListener("hashchange", onHash); }, []); return dashboard ? <Dashboard onBack={back}/> : <Home onEnter={enter}/>; }
createRoot(document.getElementById("root")).render(<App />);
