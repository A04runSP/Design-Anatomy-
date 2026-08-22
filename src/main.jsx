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
      <div className="glass-orb"></div>
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

function App() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setActive((value) => (value + 1) % styles.length), 4200);
    return () => clearInterval(timer);
  }, []);

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

      <section className="style-stage">
        <div className="stage-smoke"></div><div className="stage-orb"></div>
        <div className="stack">
          {styles.map((item, index) => {
            const Icon = item.icon;
            const isActive = index === active;
            const distance = (index - active + styles.length) % styles.length;
            return (
              <article className={`style-card ${isActive ? "active" : ""} pos-${distance}`} key={item.name}>
                <div className="card-head"><div className="style-icon"><Icon size={25}/></div><span className="card-number">{item.tag}</span></div>
                <div className="card-body">
                  <p className="style-name">{item.name}</p>
                  <p className="style-copy">{item.copy}</p>
                  <StylePreview index={index}/>
                </div>
              </article>
            );
          })}
        </div>
        <div className="auto-note"><span className="pulse-dot"></span>AUTOMATICALLY EXPLORING</div>
      </section>

      <section className="closing"><p>DESIGN ANATOMY</p><h2>LEARN TO SEE<br/>THE LANGUAGE.</h2></section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
