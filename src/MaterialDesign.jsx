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
    <div className="material-source">Reference environment: <a href="https://www.elegantflyer.com/free-poster-templates-in-psd/earth-day-free-psd-poster-template/" target="_blank" rel="noreferrer">ElegantFlyer · Earth Day poster</a></div>
    <section className="material-principles"><div><span>01</span><strong>DEPTH</strong><p>Elevation and shadows establish a clear spatial hierarchy.</p></div><div><span>02</span><strong>MOTION</strong><p>Movement explains change and keeps interaction understandable.</p></div><div><span>03</span><strong>COLOUR</strong><p>Bold accents create hierarchy without sacrificing readability.</p></div></section>
  </main>;
}
