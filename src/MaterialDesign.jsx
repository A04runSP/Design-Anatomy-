import React from "react";
import "./material-design.css";
import "./earth-material.css";

export default function MaterialDesign({ onBack }) {
  return (
    <main className="material-page">
      <header className="material-header">
        <button onClick={onBack}>← BACK TO LIBRARY</button>
        <span>DESIGN ANATOMY · 03.02</span>
      </header>
      <section className="material-hero">
        <p>03.02 · DIGITAL INTERFACE / SYSTEMIC INTERFACES / DESIGN SYSTEM</p>
        <h1>Material <em>Design.</em></h1>
        <p>A design system and visual language built around meaningful surfaces, clear hierarchy, responsive layouts, colour, typography, components and purposeful motion.</p>
        <div className="earth-atmosphere"><span className="atmosphere-leaf leaf-a">❧</span><span className="atmosphere-leaf leaf-b">❧</span><span className="atmosphere-bird bird-a">⌁</span><span className="atmosphere-bird bird-b">⌁</span><span className="atmosphere-butterfly">✦</span><span className="atmosphere-deer">♞</span></div>
      </section>
      <section className="material-specimen earth-material-specimen">
        <div className="material-appbar"><span>✦</span><strong>Material</strong><small>SYSTEMIC INTERFACE</small></div>
        <div className="material-content"><div className="material-chip">03.02 · SYSTEM</div><h2>Make it<br/><b>meaningful.</b></h2><p>Surfaces, elevation, motion, colour and components work together as a coherent interface language.</p><button>EXPLORE <span>→</span></button></div>
        <div className="preview-life life-bird bird-one">⌁</div><div className="preview-life life-bird bird-two">⌁</div><div className="preview-life life-butterfly butterfly-one">✦</div><div className="preview-life life-leaf leaf-one">❧</div><div className="preview-animal preview-rabbit"><span>◡</span></div><div className="preview-animal preview-bear"><span>•ᴥ•</span></div><div className="material-fab">+</div><div className="material-nav"><span>HOME</span><span>LAYOUT</span><span>COMPONENTS</span></div>
      </section>
      <section className="material-example"><div className="material-example-head"><div><span>EXAMPLE 01 · SYSTEM STUDY</span><h2>Material as a system.</h2></div><p>The example keeps the existing nature-inspired visual environment, but the page now explains it as an application of a broader design system rather than redefining Material Design itself.</p></div>
        <article className="material-example-card material-earth-card"><div className="material-study-visual material-earth-visual"><div className="earth-sky"></div><div className="earth-moon"></div><div className="earth-sun-glow"></div><div className="earth-mountain mountain-back"></div><div className="earth-mountain mountain-mid"></div><div className="earth-mountain mountain-front"></div><div className="earth-tree tree-left"></div><div className="earth-tree tree-right"></div><div className="earth-tree tree-small"></div><div className="earth-bush bush-one"></div><div className="earth-bush bush-two"></div><div className="earth-bird bird-one">⌁</div><div className="earth-bird bird-two">⌁</div><div className="earth-bird bird-three">⌁</div><div className="earth-deer"><span></span></div><div className="earth-rabbit"><span></span></div><div className="earth-bear"><span>•ᴥ•</span></div><div className="earth-butterfly butterfly-one">✦</div><div className="earth-butterfly butterfly-two">✦</div><div className="earth-leaf leaf-one">❧</div><div className="earth-leaf leaf-two">❧</div><div className="earth-leaf leaf-three">❧</div><div className="earth-poster-copy"><strong>EARTH</strong><em>ONE LIVING SYSTEM</em><small>SYSTEM · COMPONENTS · HIERARCHY</small></div><div className="earth-float-chip">SYSTEM <b>+01</b></div></div>
          <div className="material-example-info material-study-info earth-info"><div className="example-meta"><span>03.02</span><span>MATERIAL · SYSTEM STUDY</span></div><h3>Build a system,<br/><em>not a surface.</em></h3><p>This example uses the existing nature-inspired environment as a visual study while separating the Material Design system concepts: components, elevation, colour, typography, layout and motion.</p><div className="study-observations"><div><span>01</span><strong>COMPONENTS</strong><p>Reusable controls and patterns create consistency across screens.</p></div><div><span>02</span><strong>HIERARCHY</strong><p>Surface, elevation, typography and spacing establish structure.</p></div><div><span>03</span><strong>MOTION</strong><p>Movement should communicate relationships and state, not simply decorate.</p></div></div><div className="example-note"><b>WHAT TO NOTICE</b><span>System → components → hierarchy → motion</span></div></div>
        </article>
      </section>
      <div className="material-source">Design Anatomy classification: <span>Digital Interface · Systemic Interfaces · Design System</span></div>
      <section className="material-principles"><div><span>01</span><strong>SURFACE</strong><p>Surfaces create grouping and spatial relationships without turning the interface into decoration.</p></div><div><span>02</span><strong>ELEVATION</strong><p>Elevation and layering communicate hierarchy and interaction.</p></div><div><span>03</span><strong>MOTION</strong><p>Motion communicates state, continuity and relationships between interface elements.</p></div><div><span>04</span><strong>COLOUR</strong><p>Colour supports hierarchy, meaning, branding and accessible communication.</p></div></section>
    </main>
  );
}
