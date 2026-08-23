import React from "react";
import "./glassmorphism.css";
import { ArrowLeft } from "lucide-react";

export default function Glassmorphism({ onBack }) {
  return (
    <main className="glassmorphism-page">
      <header className="glassmorphism-header">
        <button className="glass-back-button" onClick={onBack}>
          <ArrowLeft size={19} /> BACK TO LIBRARY
        </button>
        <div className="glass-brand">✦ DESIGN ANATOMY</div>
      </header>

      <section className="glass-hero">
        <p className="glass-eyebrow">02 · GLASSMORPHISM</p>
        <h1>Glass that <em>feels alive.</em></h1>
        <p>
          Translucent surfaces, blur and light create depth without making the
          interface noisy. Glassmorphism works by letting the background remain
          visible while a softened surface separates the content above it.
        </p>
      </section>

      <section className="glass-demo-section">
        <div className="glass-demo-scene">
          <div className="glass-glow glass-glow-one" />
          <div className="glass-glow glass-glow-two" />
          <div className="glass-demo-card">
            <span className="glass-demo-kicker">GLASS / 02</span>
            <strong>72<span>%</span></strong>
            <div className="glass-demo-bar"><i /></div>
            <div className="glass-demo-pills"><i /><i /><i /></div>
          </div>
        </div>
        <p className="glass-demo-caption">
          The surface is translucent, the background stays present, and blur
          creates separation between layers.
        </p>
      </section>

      <section className="glass-principles">
        <div className="glass-section-heading">
          <span>01</span>
          <h2>THE PARTS OF GLASS</h2>
        </div>

        <article>
          <span>01</span>
          <div><h3>TRANSPARENCY</h3><p>Let the background show through the surface so the material feels light rather than opaque.</p></div>
        </article>
        <article>
          <span>02</span>
          <div><h3>BLUR</h3><p>Soften what sits behind the surface. Blur creates separation while preserving the sense of what is underneath.</p></div>
        </article>
        <article>
          <span>03</span>
          <div><h3>LIGHT</h3><p>Subtle highlights and borders help define the glass edge and make the surface believable.</p></div>
        </article>
        <article>
          <span>04</span>
          <div><h3>DEPTH</h3><p>Layered surfaces, shadows and distance establish which elements sit above or behind others.</p></div>
        </article>
        <article>
          <span>05</span>
          <div><h3>RESTRAINT</h3><p>Glass works best when it supports hierarchy. Too much transparency, blur or glow quickly becomes visual noise.</p></div>
        </article>
      </section>

      <section className="glass-takeaway">
        <span>GLASSMORPHISM</span>
        <b>Use transparency, blur and light to create depth — not decoration for its own sake.</b>
      </section>

      <button className="glass-bottom-back" onClick={onBack}>
        <ArrowLeft size={18} /> BACK TO LIBRARY
      </button>
    </main>
  );
}
