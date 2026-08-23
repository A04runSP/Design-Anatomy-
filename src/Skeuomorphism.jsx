import React from "react";
import "./skeuomorphism.css";

export default function Skeuomorphism({ onBack }) {
  const parts = [
    ["01", "REAL-WORLD METAPHORS", "Digital controls resemble objects people already understand."],
    ["02", "MATERIAL", "Textures and surfaces communicate what something is supposed to feel like."],
    ["03", "DEPTH", "Shadows, highlights and perspective create physical separation."],
    ["04", "DETAIL", "Small visual details reinforce the illusion of a physical object."],
    ["05", "AFFORDANCE", "The appearance of an element suggests how it can be used."]
  ];

  return <main className="skeuo-page">
    <header className="skeuo-header"><button className="skeuo-back" onClick={onBack}>← BACK TO LIBRARY</button></header>
    <section className="skeuo-hero">
      <p className="skeuo-eyebrow">01.04 · MORPHISM FAMILY</p>
      <h1><span>Skeuomorphism.</span><br/>Digital things.<br/>That feel physical.</h1>
      <p className="skeuo-lead">Skeuomorphism uses familiar real-world objects, materials and visual cues to make digital interfaces easier to recognise. Leather, paper, metal, glass, buttons, switches and physical controls become visual references for digital interaction.</p>
      <blockquote>When the interface looks familiar,<br/><strong>the interaction can feel familiar too.</strong></blockquote>
      <div className="skeuo-demo"><div className="skeuo-switch"><span></span></div><div><b>PHYSICAL METAPHOR</b><strong>FLIP THE SWITCH.</strong><small>FORM · MATERIAL · AFFORDANCE</small></div></div>
    </section>

    <section className="skeuo-section"><div className="skeuo-heading"><span>01</span><h2>THE PARTS OF SKEUOMORPHISM</h2></div><div className="skeuo-parts">{parts.map(([n,t,d]) => <article key={n}><b>{n}</b><div><h3>{t}</h3><p>{d}</p></div></article>)}</div></section>

    <section className="skeuo-section"><div className="skeuo-heading"><span>02</span><h2>THE SKEUOMORPHIC TOOLKIT</h2></div><div className="toolkit-grid"><article><b>TEXTURE</b><p>Leather, paper, wood, metal and fabric can suggest familiar surfaces.</p></article><article><b>HIGHLIGHTS</b><p>Simulated reflections and light reinforce physical form.</p></article><article><b>SHADOWS</b><p>Depth and separation help controls feel tangible.</p></article><article><b>BEVELS</b><p>Edges can make buttons and controls appear physically constructed.</p></article><article><b>PHYSICAL CONTROLS</b><p>Knobs, switches, sliders and buttons borrow familiar interaction cues.</p></article></div></section>

    <section className="skeuo-section"><div className="skeuo-heading"><span>03</span><h2>PHYSICAL → DIGITAL</h2></div><div className="translation"><article><span>01</span><b>PHYSICAL OBJECT</b><div className="physical-card">LIGHT<br/>SWITCH</div></article><i>→</i><article><span>02</span><b>VISUAL METAPHOR</b><div className="metaphor-card"><span></span><strong>ON</strong></div></article><i>→</i><article><span>03</span><b>DIGITAL INTERFACE</b><div className="digital-card"><span>TOGGLE</span><b>ON</b></div></article></div><p className="skeuo-intro">The user recognises the metaphor before fully understanding the interface.</p></section>

    <section className="skeuo-section"><div className="skeuo-heading"><span>04</span><h2>WHY IT WORKS</h2></div><div className="reason-card"><div className="reason-object">↻</div><div><h3>FAMILIARITY REDUCES THE LEARNING CURVE.</h3><p>A button looks like something that can be pressed. A switch looks like something that can be flipped. A folder looks like something that contains files.</p></div></div></section>

    <section className="skeuo-section two-col"><div><div className="skeuo-heading"><span>05</span><h2>WHERE IT WORKS</h2></div><ul><li>Music applications</li><li>Creative tools</li><li>Educational interfaces</li><li>Simulations</li><li>Interfaces based on physical equipment</li><li>Products where familiarity is important</li></ul></div><div><div className="skeuo-heading"><span>06</span><h2>WHERE IT STRUGGLES</h2></div><ul><li>Dense information systems</li><li>Very small screens</li><li>Interfaces requiring extreme simplicity</li><li>Products where realistic decoration adds unnecessary complexity</li></ul></div></section>

    <section className="skeuo-section"><div className="skeuo-heading"><span>07</span><h2>SKEUOMORPHISM vs FLAT DESIGN</h2></div><div className="versus"><article><h3>SKEUOMORPHISM</h3><p>Physical metaphor · texture · depth · detail</p></article><article><h3>FLAT DESIGN</h3><p>Abstract representation · simplicity · clean surfaces · minimal decoration</p></article></div><p className="choice-note">Neither is automatically better. <strong>The right choice depends on the experience you're creating.</strong></p></section>

    <section className="skeuo-takeaway"><span>FINAL TAKEAWAY</span><h2>MAKE THE DIGITAL FAMILIAR.</h2><p>Skeuomorphism reminds us that visual design isn't only about appearance. It can use familiar physical experiences to communicate interaction.</p><strong>THE OBJECT BECOMES THE EXPLANATION.</strong></section>
  </main>;
}
