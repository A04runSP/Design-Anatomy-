import React from "react";
import "./aurora-gradient.css";
import "./aurora-preview.css";

export default function AuroraGradient({ onBack }) {
  return (
    <main className="aurora-page">
      <header className="aurora-header">
        <button onClick={onBack}>← EXPLORE STYLES</button>
        <span>DESIGN ANATOMY · 02.03</span>
      </header>

      <section className="aurora-hero">
        <div className="aurora-field" aria-hidden="true">
          <span className="aurora-ribbon ribbon-one" />
          <span className="aurora-ribbon ribbon-two" />
          <span className="aurora-ribbon ribbon-three" />
          <span className="aurora-glow glow-cyan" />
          <span className="aurora-glow glow-violet" />
        </div>
        <p>02.03 · MODERN DIGITAL STYLES</p>
        <h1>Aurora <em>Gradient.</em></h1>
        <p>Atmospheric colour, flowing light and soft depth create interfaces that feel luminous without becoming noisy.</p>
      </section>

      <section className="aurora-specimen">
        <div className="aurora-specimen-top"><span>02.03</span><strong>AURORA SYSTEM</strong><small>CYAN · VIOLET · LIGHT</small></div>
        <div className="aurora-specimen-body">
          <span className="aurora-chip">LIGHT FIELD / 01</span>
          <h2>Let the light<br/><em>flow.</em></h2>
          <p>Dark space gives the gradient room to breathe. Luminous forms create focus, depth and movement without heavy surfaces.</p>
          <button>EXPLORE <span>→</span></button>
        </div>
        <div className="aurora-specimen-ribbon ribbon-one" />
        <div className="aurora-specimen-ribbon ribbon-two" />
        <div className="aurora-specimen-orb" />
        <div className="aurora-specimen-nav"><span>HOME</span><span>LIGHT</span><span>COLOUR</span></div>
      </section>

      <section className="aurora-example">
        <div className="aurora-example-head">
          <div><span>EXAMPLE 01 · AURORA FLOW</span><h2>Light moving through darkness.</h2></div>
          <p>A restrained interpretation of the selected references: deep negative space, cyan-violet light fields and organic flowing forms.</p>
        </div>
        <article className="aurora-example-card">
          <div className="aurora-study-visual">
            <span className="study-wave wave-a" />
            <span className="study-wave wave-b" />
            <span className="study-wave wave-c" />
            <span className="study-haze haze-a" />
            <span className="study-haze haze-b" />
            <div className="study-copy"><small>02.03</small><strong>AURORA<br/><em>FLOW</em></strong><span>COLOUR · LIGHT · MOTION</span></div>
          </div>
          <div className="aurora-example-info">
            <div className="example-meta"><span>02.03</span><span>AURORA · GRADIENT STUDY</span></div>
            <h3>Make light feel<br/><em>alive.</em></h3>
            <p>The visual language uses darkness as the canvas and treats colour as a luminous material. Cyan and violet gradients overlap as soft organic forms rather than hard panels.</p>
            <div className="aurora-observations">
              <div><span>01</span><strong>LIGHT FIELDS</strong><p>Glow is concentrated around the flowing forms so the background stays quiet.</p></div>
              <div><span>02</span><strong>ORGANIC FLOW</strong><p>Curves and ribbons create movement without relying on aggressive animation.</p></div>
              <div><span>03</span><strong>COLOUR DEPTH</strong><p>Cyan, blue and violet overlap to create depth through light rather than shadows.</p></div>
            </div>
            <div className="aurora-note"><b>WHAT TO NOTICE</b><span>Darkness → light → flow → colour depth</span></div>
          </div>
        </article>
      </section>

      <section className="aurora-principles">
        <div><span>01</span><strong>COLOUR</strong><p>Cyan and violet form the primary luminous family, with deep blue supporting the transition.</p></div>
        <div><span>02</span><strong>LIGHT</strong><p>Soft glow creates emphasis while large dark areas preserve calm and readability.</p></div>
        <div><span>03</span><strong>DEPTH</strong><p>Overlapping gradients and haze create distance without glass or heavy cards.</p></div>
        <div><span>04</span><strong>MOTION</strong><p>Any movement should be slow and subtle, like light drifting through an atmosphere.</p></div>
      </section>

      <div className="aurora-source">Reference direction: <span>selected Aurora flow studies · dark luminous gradient fields</span></div>
    </main>
  );
}
