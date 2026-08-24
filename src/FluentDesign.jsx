import React from "react";
import fluentStyles from "./fluent-design.css?raw";

export default function FluentDesign({ onBack }) {
  return (
    <>
      <style>{fluentStyles}</style>
      <main className="fluent-page">
        <header className="fluent-header">
          <button onClick={onBack}>← EXPLORE STYLES</button>
          <span>DESIGN ANATOMY · 02.03</span>
        </header>

        <section className="fluent-hero">
          <div className="fluent-aurora aurora-one"></div>
          <div className="fluent-aurora aurora-two"></div>
          <div className="fluent-orb orb-one"></div>
          <div className="fluent-orb orb-two"></div>
          <p className="fluent-kicker">02.03 · MODERN DIGITAL STYLES</p>
          <h1>Fluent <em>Design.</em></h1>
          <p className="fluent-lede">Light, depth, motion and material create an interface that feels alive — layered through Acrylic, Mica and soft spatial surfaces.</p>
          <div className="fluent-hero-window">
            <div className="fluent-window-bar"><span className="fluent-logo">✦</span><strong>Fluent</strong><small>MICA / ACRYLIC</small><i>•••</i></div>
            <div className="fluent-window-body">
              <div className="fluent-window-copy"><span>02.03</span><h2>Designed to<br/><b>feel natural.</b></h2><p>Light moves through the surface while depth keeps every layer readable.</p></div>
              <div className="fluent-float-card"><small>NOW PLAYING</small><strong>Atmosphere</strong><span>○  ○  ○</span></div>
              <div className="fluent-window-nav"><span>HOME</span><span>LAYOUT</span><span>DETAILS</span></div>
            </div>
          </div>
        </section>

        <section className="fluent-example">
          <div className="fluent-example-intro">
            <span>EXAMPLE 01 · ACRYLIC STUDY</span>
            <h2>Make the surface<br/><em>feel alive.</em></h2>
            <p>Instead of treating Fluent as a collection of rounded cards, this environment uses light, blur, transparency and depth across the whole scene.</p>
          </div>

          <article className="fluent-scene-card">
            <div className="fluent-scene-bg">
              <div className="scene-glow scene-glow-a"></div>
              <div className="scene-glow scene-glow-b"></div>
              <div className="scene-mica-plane plane-back"></div>
              <div className="scene-mica-plane plane-mid"></div>
              <div className="scene-mica-plane plane-front"></div>
              <div className="scene-window scene-window-main">
                <div className="scene-window-head"><span>✦</span><strong>FLUENT WORKSPACE</strong><small>ACRYLIC</small></div>
                <div className="scene-window-content"><small>02.03</small><h3>Light finds<br/><em>its way through.</em></h3><p>Soft surfaces, clear hierarchy and gentle motion keep the experience calm.</p><button>OPEN SPACE <b>→</b></button></div>
              </div>
              <div className="scene-floating scene-card-one"><small>FOCUS</small><strong>01</strong><span>Depth</span></div>
              <div className="scene-floating scene-card-two"><small>AMBIENT</small><strong>Soft light</strong><span>+ Acrylic</span></div>
              <div className="scene-dot dot-one"></div><div className="scene-dot dot-two"></div><div className="scene-dot dot-three"></div>
            </div>
            <div className="fluent-study-copy">
              <div className="fluent-meta"><span>02.03</span><span>FLUENT · ACRYLIC STUDY</span></div>
              <h3>Depth without <em>weight.</em></h3>
              <p>The example keeps the entire environment Fluent: the background carries atmosphere, surfaces are translucent, floating panels create spatial layers, and light gives the materials a believable presence.</p>
              <div className="fluent-observations">
                <div><span>01</span><strong>MICA</strong><p>Soft tinted surfaces let the background remain part of the environment.</p></div>
                <div><span>02</span><strong>ACRYLIC</strong><p>Blurred translucent layers create separation without hard borders everywhere.</p></div>
                <div><span>03</span><strong>MOTION</strong><p>Subtle movement and responsive states make the interface feel alive.</p></div>
              </div>
              <div className="fluent-note"><b>WHAT TO NOTICE</b><span>Light → material → depth → motion</span></div>
            </div>
          </article>
        </section>

        <div className="fluent-source">Reference language: <span>Fluent Design · Acrylic · Mica · spatial surfaces</span></div>
        <section className="fluent-principles">
          <div><span>01</span><strong>LIGHT</strong><p>Use soft illumination to reveal layers and establish atmosphere.</p></div>
          <div><span>02</span><strong>MATERIAL</strong><p>Acrylic, Mica and solid surfaces should feel like distinct materials.</p></div>
          <div><span>03</span><strong>DEPTH</strong><p>Distance and elevation organize the interface without visual heaviness.</p></div>
          <div><span>04</span><strong>MOTION</strong><p>Movement should explain change and make transitions feel natural.</p></div>
        </section>
      </main>
    </>
  );
}
