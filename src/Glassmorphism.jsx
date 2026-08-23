import React from "react";
import "./glassmorphism.css";
import "./glass-preview.css";
import { ArrowLeft } from "lucide-react";

export default function Glassmorphism({ onBack }) {
  return (
    <main className="glassmorphism-page">
      <header className="glassmorphism-header">
        <button className="glass-back-button" onClick={onBack}>
          <ArrowLeft size={18} /> BACK TO LIBRARY
        </button>
        <div className="glass-brand">✦ DESIGN ANATOMY</div>
      </header>

      <section className="glass-hero">
        <p className="glass-eyebrow">02 · GLASSMORPHISM</p>
        <h1>Glass that <em>feels alive.</em></h1>
        <p>
          Translucent surfaces, background blur, soft light and layered depth
          create the signature glass interface effect.
        </p>
      </section>

      <section className="glass-demo-section">
        <div className="glass-demo-scene">
          <div className="glass-orb orb-a" /><div className="glass-orb orb-b" />
          <div className="glass-orb orb-c" /><div className="glass-orb orb-d" />
          <div className="glass-orb orb-e" /><div className="glass-orb orb-f" />
          <div className="glass-orb orb-g" />

          <div className="glass-demo-card">
            <div className="glass-card-top">
              <span>Frosted Glass Effect</span>
              <span>Soft blur · Minimal UI</span>
            </div>
            <div className="glass-card-center">
              <h2>Glass<br />Morphism</h2>
              <span className="glass-ui-badge">UI Background</span>
            </div>
            <div className="glass-card-bottom">
              <span>Premium Design Asset</span>
              <span>Editable PSD</span>
            </div>
          </div>
        </div>
        <p className="glass-demo-caption">
          The background remains visible through a translucent surface while
          blur, highlights and soft shadows create depth between layers.
        </p>
      </section>

      <section className="glass-principles">
        <div className="glass-section-heading"><span>01</span><h2>THE PARTS OF GLASS</h2></div>
        <article><span>01</span><div><h3>TRANSPARENCY</h3><p>Let the background show through the surface so the material feels light rather than opaque.</p></div></article>
        <article><span>02</span><div><h3>BLUR</h3><p>Soften what sits behind the surface. Blur creates separation while preserving the sense of what is underneath.</p></div></article>
        <article><span>03</span><div><h3>LIGHT</h3><p>Subtle highlights and borders define the glass edge and make the material believable.</p></div></article>
        <article><span>04</span><div><h3>DEPTH</h3><p>Layered surfaces, shadows and distance establish which elements sit above or behind others.</p></div></article>
        <article><span>05</span><div><h3>RESTRAINT</h3><p>Glass works best when it supports hierarchy. Too much transparency, blur or glow quickly becomes visual noise.</p></div></article>
      </section>

      <section className="glass-takeaway"><span>GLASSMORPHISM</span><b>Use transparency, blur and light to create depth — not decoration for its own sake.</b></section>

      <button className="glass-bottom-back" onClick={onBack}>
        <ArrowLeft size={18} /> BACK TO LIBRARY
      </button>
    </main>
  );
}
