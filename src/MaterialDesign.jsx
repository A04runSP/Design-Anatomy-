import React from "react";
import "./material-design.css";

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
        <div><span>EXAMPLE 01</span><h2>Material in the real world.</h2></div>
        <p>Study how imagery, layers, colour and typography work together to create a surface with depth and hierarchy.</p>
      </div>
      <article className="material-example-card">
        <div className="material-example-art" aria-label="Earth and environment poster-inspired example">
          <div className="example-sun"></div>
          <div className="example-globe"><i></i><b></b><span></span></div>
          <div className="example-hill hill-one"></div>
          <div className="example-hill hill-two"></div>
          <div className="example-plant plant-one"></div>
          <div className="example-plant plant-two"></div>
          <div className="example-poster-title">EARTH</div>
          <div className="example-poster-sub">FROM BIG TO SMALL · WE'RE ALL CONNECTED</div>
        </div>
        <div className="material-example-info">
          <div className="example-meta"><span>02.02</span><span>VISUAL REFERENCE</span></div>
          <h3>Depth becomes<br/><em>meaning.</em></h3>
          <p>This example uses a strong visual focal point, layered surfaces, natural colour and clear type hierarchy — principles that translate into Material interfaces.</p>
          <div className="example-tags"><span>DEPTH</span><span>COLOUR</span><span>HIERARCHY</span><span>SURFACE</span></div>
          <div className="example-note"><b>WHAT TO NOTICE</b><span>Foreground · focal point · contrast · spacing</span></div>
        </div>
      </article>
    </section>

    <div className="material-source">Reference environment: <a href="https://www.elegantflyer.com/free-poster-templates-in-psd/earth-day-free-psd-poster-template/" target="_blank" rel="noreferrer">ElegantFlyer · Earth Day poster</a></div>
    <section className="material-principles"><div><span>01</span><strong>DEPTH</strong><p>Elevation and shadows establish a clear spatial hierarchy.</p></div><div><span>02</span><strong>MOTION</strong><p>Movement explains change and keeps interaction understandable.</p></div><div><span>03</span><strong>COLOUR</strong><p>Bold accents create hierarchy without sacrificing readability.</p></div></section>
  </main>;
}
