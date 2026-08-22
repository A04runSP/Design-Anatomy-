import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { ArrowRight, Compass, Eye, Lightbulb } from "lucide-react";
import "./style.css";

const styles = [
  { name: "MINIMALISM", icon: Compass, tag: "01", copy: "Clarity through restraint. Space, hierarchy and simple form do the heavy lifting." },
  { name: "GLASSMORPHISM", icon: Eye, tag: "02", copy: "Translucent surfaces, blur and light create depth without making the interface noisy." },
  { name: "NEUMORPHISM", icon: Lightbulb, tag: "03", copy: "Soft shadows make controls feel physical, tactile and quietly dimensional." },
];

function StylePreview({ index }) {
  if (index === 0) return (
    <div className="preview minimal-preview">
      <div className="mini-nav"><span></span><i></i><i></i><i></i></div>
      <div className="minimal-content">
        <div className="mini-kicker">STUDIO</div>
        <div className="mini-title">Less,<br/><b>but better.</b></div>
        <div className="mini-line"></div>
        <div className="mini-row"><span>01</span><span>Typography</span></div>
        <div className="mini-row"><span>02</span><span>Spacing</span></div>
      </div>
    </div>
  );
  if (index === 1) return (
    <div className="preview glass-preview">
      <div className="glass-backdrop"></div>
      <div className="glass-window">
        <span className="glass-dot"></span>
        <div className="glass-label">GLASS / 02</div>
        <div className="glass-number">72<span>%</span></div>
        <div className="glass-bar"><b></b></div>
        <div className="glass-pills"><i></i><i></i><i></i></div>
      </div>
    </div>
  );
  return (
    <div className="preview neo-preview">
      <div className="neo-panel">
        <div className="neo-label">CONTROL</div>
        <div className="neo-knob">+</div>
        <div className="neo-slider"><b></b></div>
        <div className="neo-row"><span>LIGHT</span><strong>ON</strong></div>
      </div>
    </div>
  );
}

function IntroSection() {
  return (
    <section className="intro-card">
      <div className="section-number">01</div>
      <h2>What is Design Anatomy?</h2>
      <p>It is a visual library for interface aesthetics. Every style is broken into the parts you can actually reuse — light, depth, material, type, rhythm — so you stop copying screenshots and start recognising intent. No trends for their own sake, no noise; just careful looking, explained in plain language.</p>
    </section>
  );
}

const featureCards = [
  { icon: Compass, title: "Explore Styles", copy: "Move through a curated library of design languages, each framed with the context it grew out of." },
  { icon: Eye, title: "See the Design", copy: "Study visual examples and real interface references that show how a style actually behaves." },
  { icon: Lightbulb, title: "Understand the Design", copy: "Read the reasoning behind every choice — depth, contrast, spacing, type, light and restraint." },
];

function App() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActive((value) => (value + 1) % styles.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const current = styles[active];
  const Icon = current.icon;

  return (
    <main>
      <header className="topbar">
        <div className="brand"><span className="brand-star">✦</span><span>DESIGN ANATOMY</span></div>
        <div className="brand-rule"></div>
      </header>

      <section className="hero">
        <div className="hero-glow"></div>
        <p className="eyebrow">VISUAL LITERACY, ONE STYLE AT A TIME</p>
        <h1>Design has a<br/>language.<br/><em>Learn to see it.</em></h1>
        <p className="hero-copy">Design Anatomy is a quiet place to explore design styles, look closely at examples, and understand the visual decisions behind them — why a surface glows, why a grid breathes, why one interface feels expensive and another feels loud.</p>
        <button className="jump">JUMP IN <ArrowRight size={25}/></button>
        <p className="section-link">What is Design Anatomy?</p>
      </section>

      <IntroSection />

      <section className="feature-grid">
        {featureCards.map(({ icon: FeatureIcon, title, copy }) => (
          <article className="feature-card" key={title}>
            <div className="feature-icon"><FeatureIcon size={25}/></div>
            <h3>{title}</h3>
            <p>{copy}</p>
            <div className="feature-arrow">Explore <ArrowRight size={21}/></div>
          </article>
        ))}
      </section>

      <section className="style-stage">
        <div className="stage-smoke"></div>
        <div className="stage-orb"></div>
        <div className="style-card" key={current.name}>
          <div className="card-head">
            <div className="style-icon"><Icon size={25}/></div>
            <span className="card-number">{current.tag}</span>
          </div>
          <div className="card-body">
            <p className="style-name">{current.name}</p>
            <p className="style-copy">{current.copy}</p>
            <StylePreview index={active}/>
          </div>
        </div>
        <div className="auto-note"><span className="pulse-dot"></span>AUTOMATICALLY EXPLORING</div>
      </section>

      <footer className="closing">
        <div>DESIGN ANATOMY</div>
        <div>LEARN TO SEE THE LANGUAGE</div>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
