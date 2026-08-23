import React from "react";
import "./neumorphism.css";

export default function Neumorphism({ onBack }) {
  const principles = [
    ["01", "SURFACE", "Keep the background and components close in tone so depth comes from light and shadow."],
    ["02", "LIGHT", "Use a consistent light direction so highlights feel believable across the interface."],
    ["03", "SHADOW", "Soft shadows create raised and pressed states without harsh visual edges."],
    ["04", "RADIUS", "Consistent rounded corners reinforce the soft, physical character of the system."],
    ["05", "DEPTH", "Use raised and pressed states to communicate structure and interaction, not decoration."]
  ];

  return (
    <main className="neumorphism-page">
      <header className="neo-header">
        <button className="neo-back" onClick={onBack}>← BACK TO LIBRARY</button>
        <div className="neo-brand">✦ DESIGN ANATOMY</div>
      </header>

      <section className="neo-hero">
        <p className="neo-eyebrow">03 · DESIGN STYLE</p>
        <h1><span>Neumorphism.</span><br />Soft surfaces.<br />Physical depth.</h1>
        <p className="neo-lead">Neumorphism makes interface elements feel pressed into or raised from the same surface. Light, shadow and subtle contrast create the illusion of physical material.</p>
        <div className="neo-hero-demo">
          <div className="neo-demo-button">EXPLORE</div>
          <div className="neo-demo-pressed">ACTIVE</div>
        </div>
      </section>

      <section className="neo-section">
        <div className="neo-section-heading"><span>01</span><h2>THE PARTS OF NEUMORPHISM</h2></div>
        <p className="neo-intro">A convincing neumorphic interface depends on a small set of relationships. The surface, light, shadow, radius and depth need to behave like one material system.</p>
        <div className="neo-principles">
          {principles.map(([number, title, text]) => (
            <article className="neo-principle" key={title}>
              <span className="neo-number">{number}</span>
              <div><h3>{title}</h3><p>{text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="neo-section neo-raised-section">
        <div className="neo-section-heading"><span>02</span><h2>RAISED vs PRESSED</h2></div>
        <p className="neo-intro">Neumorphism becomes useful when depth communicates state. A raised control feels available; a pressed control feels selected or active.</p>
        <div className="neo-state-grid">
          <article className="neo-state-card"><div className="neo-raised-control">PLAY <b>▶</b></div><h3>RAISED</h3><p>The element appears to sit above the surface and feels ready to be pressed.</p></article>
          <article className="neo-state-card"><div className="neo-pressed-control">● ACTIVE</div><h3>PRESSED</h3><p>The element appears to sink into the surface and communicates an active state.</p></article>
        </div>
      </section>

      <section className="neo-section">
        <div className="neo-section-heading"><span>03</span><h2>CONTRAST</h2></div>
        <p className="neo-intro">Subtle contrast is part of the style, but too little contrast can hurt readability. The practical sweet spot is enough separation to keep hierarchy clear.</p>
        <div className="neo-contrast-grid">
          <article><div className="neo-contrast-demo low"><b>Secondary information</b><span>Soft difference. Easy to miss.</span></div><h3>LOW</h3><p>Beautifully subtle, but difficult to read.</p></article>
          <article><div className="neo-contrast-demo balanced"><b>Primary information</b><span>Strong enough to guide the eye.</span></div><h3>BALANCED</h3><p>The practical sweet spot.</p></article>
          <article><div className="neo-contrast-demo high"><b>Important action</b><span>Maximum separation and attention.</span></div><h3>HIGH</h3><p>More accessible, but less purely neumorphic.</p></article>
        </div>
      </section>

      <section className="neo-section neo-where-section">
        <div className="neo-columns">
          <div><div className="neo-section-heading"><span>04</span><h2>WHERE IT WORKS</h2></div><ul><li>Control panels</li><li>Music players</li><li>Smart-device interfaces</li><li>Dashboards</li><li>Buttons and toggles</li></ul></div>
          <div><div className="neo-section-heading"><span>05</span><h2>WHERE IT STRUGGLES</h2></div><ul><li>Dense information</li><li>Text-heavy interfaces</li><li>Complex navigation</li><li>Accessibility-critical interfaces</li><li>Strong hierarchy requirements</li></ul></div>
        </div>
      </section>

      <section className="neo-takeaway"><span>NEUMORPHISM</span><strong>Soft depth. Strong discipline.</strong><p>Don't use shadows just because they look cool. Use depth to communicate structure.</p></section>
    </main>
  );
}
