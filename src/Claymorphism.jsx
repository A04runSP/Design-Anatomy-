import React from "react";
import "./claymorphism.css";

export default function Claymorphism({ onBack }) {
  const parts = [
    ["01", "INFLATED FORMS", "Rounded, chunky shapes create the feeling of soft objects floating above a surface."],
    ["02", "SOFT DEPTH", "Gentle shadows separate layers without creating hard edges."],
    ["03", "ROUNDED GEOMETRY", "Large corner radii and simple shapes keep the interface playful and approachable."],
    ["04", "MATTE SURFACES", "Low-reflection surfaces reinforce the soft, clay-like material impression."],
    ["05", "TACTILE DETAIL", "Small highlights and shadows suggest a physical object without becoming realistic."],
  ];

  return (
    <main className="clay-page">
      <div className="clay-environment" aria-hidden="true">
        <span className="clay-float clay-search">⌕</span>
        <span className="clay-float clay-heart">♥</span>
        <span className="clay-float clay-dot cyan"></span>
        <span className="clay-float clay-dot coral"></span>
        <span className="clay-float clay-dot lilac"></span>
        <span className="clay-float clay-pill">ACTIVE</span>
        <span className="clay-float clay-pill peach">PENDING</span>
        <span className="clay-float clay-slider"><i></i></span>
        <span className="clay-float clay-check">✓</span>
        <span className="clay-float clay-arrow">→</span>
        <span className="clay-float clay-bell">♟</span>
        <span className="clay-float clay-bottom-card"></span>
      </div>

      <header className="clay-header">
        <button className="clay-back" onClick={onBack}>← BACK TO LIBRARY</button>
      </header>

      <section className="clay-hero">
        <p className="clay-eyebrow">01.03 · MORPHISM FAMILY</p>
        <h1><span>Claymorphism.</span><br/>Soft forms.<br/>Playful depth.</h1>
        <p className="clay-lead">Claymorphism uses rounded, inflated shapes, soft shadows and matte surfaces to make digital interfaces feel tactile, friendly and almost touchable.</p>
        <blockquote><strong>Make the interface feel soft.</strong><br/>Then let depth make it feel alive.</blockquote>
        <div className="clay-demo">
          <div className="clay-orb"><span>+</span></div>
          <div><b>SOFT 3D</b><strong>TOUCHABLE FORM.</strong><small>ROUND · MATTE · INFLATED</small></div>
        </div>
      </section>

      <section className="clay-section">
        <div className="clay-heading"><span>01</span><h2>THE PARTS OF CLAYMORPHISM</h2></div>
        <div className="clay-parts">{parts.map(([n,t,d]) => <article key={n}><b>{n}</b><div><h3>{t}</h3><p>{d}</p></div></article>)}</div>
      </section>

      <section className="clay-section">
        <div className="clay-heading"><span>02</span><h2>THE CLAY TOOLKIT</h2></div>
        <div className="clay-toolkit">
          <div className="clay-object clay-button">PRESS</div>
          <div className="clay-object clay-card"><span>SOFT CARD</span><b>01</b></div>
          <div className="clay-object clay-toggle"><span></span><b>ON</b></div>
        </div>
      </section>

      <section className="clay-section">
        <div className="clay-heading"><span>03</span><h2>DEPTH WITHOUT HARSHNESS</h2></div>
        <div className="clay-depth"><div className="clay-depth-layer back">BACKGROUND</div><div className="clay-depth-layer middle">SURFACE</div><div className="clay-depth-layer front">FLOATING FORM</div></div>
        <p className="clay-intro">Claymorphism creates depth through soft separation. The goal is not realism; it is a gentle tactile suggestion.</p>
      </section>

      <section className="clay-section two-col">
        <div><div className="clay-heading"><span>04</span><h2>WHERE IT WORKS</h2></div><ul><li>Friendly consumer products</li><li>Creative tools</li><li>Education and learning</li><li>Children's interfaces</li><li>Playful dashboards</li><li>Brand and marketing experiences</li></ul></div>
        <div><div className="clay-heading"><span>05</span><h2>WHERE IT STRUGGLES</h2></div><ul><li>Dense enterprise interfaces</li><li>Information-heavy screens</li><li>Very small controls</li><li>Interfaces requiring strict visual efficiency</li></ul></div>
      </section>

      <section className="clay-section">
        <div className="clay-heading"><span>06</span><h2>CLAYMORPHISM vs NEUMORPHISM</h2></div>
        <div className="clay-versus"><article><h3>CLAYMORPHISM</h3><p>Inflated forms · rounded geometry · playful 3D · soft matte surfaces</p></article><article><h3>NEUMORPHISM</h3><p>Subtle surfaces · soft shadows · restrained depth · tactile controls</p></article></div>
        <p className="clay-choice">Claymorphism pushes softness and personality further; Neumorphism keeps the physical illusion quieter.</p>
      </section>

      <section className="clay-takeaway"><span>FINAL TAKEAWAY</span><h2>SOFT DOESN'T MEAN FLAT.</h2><p>Claymorphism shows how rounded forms, gentle light and controlled depth can make an interface feel tactile without becoming realistic.</p><strong>SHAPE + SOFTNESS + DEPTH.</strong></section>
    </main>
  );
}
