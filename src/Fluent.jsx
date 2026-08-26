import React, { useState } from "react";
import "./fluent.css";

const principles = [
  ["01", "CLARITY", "Keep hierarchy, content and actions easy to understand across surfaces and screen sizes."],
  ["02", "DEPTH", "Use elevation, layering and acrylic-like material treatments to establish spatial relationships."],
  ["03", "MOTION", "Motion should communicate continuity, state and relationships instead of existing only as decoration."],
  ["04", "ADAPTABILITY", "The language should work across different devices, input methods and contexts."],
  ["05", "HUMAN", "Typography, iconography, colour and interaction should feel approachable and purposeful."]
];

export default function Fluent({ onBack }) {
  const [active, setActive] = useState("Home");
  return (
    <main className="fluent-page">
      <header className="fluent-header">
        <button onClick={onBack}>← BACK TO LIBRARY</button>
        <span>DESIGN ANATOMY · 03.03</span>
      </header>

      <section className="fluent-hero">
        <p className="fluent-eyebrow">03.03 · DIGITAL INTERFACE / SYSTEMIC INTERFACES / DESIGN LANGUAGE</p>
        <div className="fluent-hero-copy">
          <div><h1>Fluent <em>Design.</em></h1><p>A design language for creating clear, expressive and adaptable digital experiences across Microsoft's product ecosystem.</p></div>
          <div className="fluent-window-demo">
            <div className="fluent-window-bar"><span>●</span><b>Fluent surface</b><i>— □ ×</i></div>
            <div className="fluent-window-body"><aside><strong>DESIGN</strong><button className={active === "Home" ? "active" : ""} onClick={() => setActive("Home")}>⌂ Home</button><button className={active === "Library" ? "active" : ""} onClick={() => setActive("Library")}>▦ Library</button><button className={active === "Settings" ? "active" : ""} onClick={() => setActive("Settings")}>⚙ Settings</button></aside><div className="fluent-content"><small>FLUENT SURFACE</small><h2>{active}</h2><p>Layered material, clear hierarchy and adaptive interaction.</p><div className="fluent-action-row"><button>Primary action</button><button>Secondary</button></div></div></div>
          </div>
        </div>
      </section>

      <section className="fluent-section">
        <div className="fluent-heading"><span>01</span><h2>THE PARTS OF FLUENT</h2></div>
        <div className="fluent-principles">{principles.map(([n,t,d]) => <article key={n}><b>{n}</b><div><h3>{t}</h3><p>{d}</p></div></article>)}</div>
      </section>

      <section className="fluent-section fluent-material-section">
        <div className="fluent-heading"><span>02</span><h2>MATERIAL & DEPTH</h2></div>
        <div className="fluent-material-demo"><div className="fluent-acrylic back"><span>BACKGROUND</span></div><div className="fluent-acrylic middle"><span>ACRYLIC / LAYER</span></div><div className="fluent-acrylic front"><strong>CONTENT</strong><p>Depth establishes relationships between surfaces.</p></div></div>
      </section>

      <section className="fluent-section fluent-motion-section">
        <div className="fluent-heading"><span>03</span><h2>MOTION WITH PURPOSE</h2></div>
        <div className="fluent-motion-track"><div className="fluent-motion-dot"/><div className="fluent-motion-line"/><div className="fluent-motion-card"><span>01</span><b>STATE</b><p>Motion helps users understand where an element came from and where it went.</p></div><div className="fluent-motion-card"><span>02</span><b>CONTINUITY</b><p>Transitions preserve context when layouts and surfaces change.</p></div></div>
      </section>

      <section className="fluent-section fluent-system-section">
        <div className="fluent-heading"><span>04</span><h2>DESIGN LANGUAGE ≠ SINGLE VISUAL STYLE</h2></div>
        <div className="fluent-system-grid"><div><strong>TYPOGRAPHY</strong><p>Hierarchy establishes readable information structure.</p></div><div><strong>COLOUR</strong><p>Colour communicates emphasis, state and brand identity.</p></div><div><strong>ICONOGRAPHY</strong><p>Icons remain clear, consistent and recognisable.</p></div><div><strong>LAYOUT</strong><p>Adaptive structure allows experiences to move across form factors.</p></div></div>
      </section>

      <section className="fluent-takeaway"><span>03.03 · FLUENT DESIGN</span><h2>CLARITY, DEPTH, MOTION.</h2><p>Fluent is best understood as a broad design language rather than a single visual skin. Its value comes from the relationships between components, surfaces, motion, typography, colour and adaptable layouts.</p></section>
    </main>
  );
}
