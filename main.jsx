// Created: 22 August 2026
import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { ArrowRight, Compass, Eye, Lightbulb, Search } from "lucide-react";
import "./styles.css";

const styles = [
  { title: "Typography", icon: "Aa" },
  { title: "Composition", icon: "◌" },
  { title: "Color", icon: "◈" },
];

function App() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <main className="page">
      <div className="noise" />
      <div className="smoke smoke-a" />
      <div className="smoke smoke-b" />
      <div className="smoke smoke-c" />
      <div className="cyan-bloom bloom-a" />
      <div className="cyan-bloom bloom-b" />

      <nav className="nav">
        <div className="brand"><span className="brand-mark">✦</span> DESIGN ANATOMY</div>
        <div className="nav-links">
          <a href="#anatomy">Anatomy</a>
          <a href="#principles">Principles</a>
          <a href="#explore">Explore</a>
          <button className="search-button" onClick={() => setSearchOpen(v => !v)} aria-label="Search"><Search size={16} /></button>
        </div>
      </nav>

      {searchOpen && <div className="search-panel">Search design anatomy</div>}

      <section className="hero" id="anatomy">
        <div className="hero-copy">
          <div className="eyebrow">THE LANGUAGE OF VISUAL DESIGN</div>
          <h1>Understand the <span>anatomy</span> of design.</h1>
          <p>Break beautiful interfaces into the principles, systems, and decisions that make them work.</p>
          <div className="hero-actions">
            <a className="primary-cta" href="#principles">Explore anatomy <ArrowRight size={17} /></a>
            <a className="secondary-link" href="#explore">See the principles</a>
          </div>
        </div>

        <div className="style-orbit" aria-hidden="true">
          <div className="orbit-core" />
          <div className="orbit-glow" />
          {styles.map((style, i) => (
            <div className={`style-card style-${i}`} key={style.title}>
              <span>{style.title}</span><i />
            </div>
          ))}
        </div>
      </section>

      <section className="glass-section" id="principles">
        <div className="section-label">01 / WHY</div>
        <div>
          <h2>Good design is not decoration.</h2>
          <p>It is a system of choices. Typography creates voice. Composition creates hierarchy. Color creates meaning. Learn to see the decisions underneath the surface.</p>
        </div>
      </section>

      <section className="feature-grid" id="explore">
        <article className="feature-card">
          <div className="icon-ring"><Eye size={22} /></div>
          <h3>See the structure</h3>
          <p>Look past the polished surface and identify the visual relationships that hold an interface together.</p>
          <div className="feature-arrow">Discover <ArrowRight size={14} /></div>
        </article>
        <article className="feature-card">
          <div className="icon-ring"><Compass size={22} /></div>
          <h3>Learn the principles</h3>
          <p>Understand hierarchy, rhythm, balance, contrast, spacing, and the systems behind intentional layouts.</p>
          <div className="feature-arrow">Explore <ArrowRight size={14} /></div>
        </article>
        <article className="feature-card">
          <div className="icon-ring"><Lightbulb size={22} /></div>
          <h3>Design with intent</h3>
          <p>Turn visual observations into practical decisions you can apply to your own digital products.</p>
          <div className="feature-arrow">Apply <ArrowRight size={14} /></div>
        </article>
      </section>

      <footer><span>DESIGN ANATOMY</span><span>STRUCTURE · SYSTEM · INTENT</span></footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
