import React from "react";
import "./material-design.css";
import "./material-example-new.css";

export default function MaterialDesign({ onBack }) {
  return <main className="material-page">
    <header className="material-header"><button onClick={onBack}>← EXPLORE STYLES</button><span>DESIGN ANATOMY · 02.02</span></header>

    <section className="material-hero"><p>02.02 · MODERN DIGITAL STYLES</p><h1>Material <em>Design.</em></h1><p>Meaningful motion, bold colour, clear hierarchy and physical surfaces shaped by Google's Material design language.</p></section>

    <section className="material-specimen">
      <div className="material-appbar"><span>✦</span><strong>Material</strong><small>DESIGN SYSTEM</small></div>
      <div className="material-content"><div className="material-chip">02.02</div><h2>Make it<br/><b>meaningful.</b></h2><p>Surfaces, elevation and motion give digital interfaces a sense of place.</p><button>EXPLORE <span>→</span></button></div>
      <div className="material-fab">+</div>
      <div className="material-nav"><span>HOME</span><span>LAYOUT</span><span>COMPONENTS</span></div>
    </section>

    <section className="material-example">
      <div className="material-example-head">
        <div><span>EXAMPLE 01 · VISUAL STUDY</span><h2>Material, beyond the interface.</h2></div>
        <p>A different way to read the style: look at the layers, surfaces, focal object and colour relationships before looking at the type.</p>
      </div>

      <article className="material-example-card material-example-card-new">
        <div className="material-study-visual">
          <div className="study-backdrop"></div>
          <div className="study-surface study-surface-back"></div>
          <div className="study-surface study-surface-mid"></div>
          <div className="study-poster">
            <div className="study-poster-top"><span>EARTH / 01</span><small>NATURAL SYSTEM</small></div>
            <div className="study-orbit"></div>
            <div className="study-earth"><span></span><b></b><i></i></div>
            <div className="study-copy"><strong>EARTH</strong><em>FROM BIG TO SMALL</em><small>EVERY LAYER CONNECTS.</small></div>
          </div>
          <div className="study-float-chip">SURFACE <b>+01</b></div>
          <div className="study-shadow-card"></div>
        </div>

        <div className="material-example-info material-study-info">
          <div className="example-meta"><span>02.02</span><span>MATERIAL STUDY</span></div>
          <h3>Build with<br/><em>layers.</em></h3>
          <p>This example is intentionally different from the main interface specimen. It shows how Material thinking can be read visually through stacked surfaces, elevation, a clear focal object and controlled colour.</p>
          <div className="study-observations">
            <div><span>01</span><strong>SURFACE</strong><p>Each plane has a clear visual role.</p></div>
            <div><span>02</span><strong>ELEVATION</strong><p>Shadow separates one layer from another.</p></div>
            <div><span>03</span><strong>COLOUR</strong><p>Blue and warm earth tones create hierarchy.</p></div>
          </div>
          <div className="example-note"><b>WHAT TO NOTICE</b><span>Layer → shadow → focal point → hierarchy</span></div>
        </div>
      </article>
    </section>

    <div className="material-source">Reference environment: <a href="https://www.elegantflyer.com/free-poster-templates-in-psd/earth-day-free-psd-poster-template/" target="_blank" rel="noreferrer">ElegantFlyer · Earth Day poster</a></div>
    <section className="material-principles"><div><span>01</span><strong>DEPTH</strong><p>Elevation and shadows establish a clear spatial hierarchy.</p></div><div><span>02</span><strong>MOTION</strong><p>Movement explains change and keeps interaction understandable.</p></div><div><span>03</span><strong>COLOUR</strong><p>Bold accents create hierarchy without sacrificing readability.</p></div></section>
  </main>;
}
