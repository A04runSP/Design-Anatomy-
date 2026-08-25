import React, { useState } from "react";
import "./skeuomorphism.css";
import "./skeuomorphism-contrast.css";
import "./skeuomorphism-final.css";

export default function Skeuomorphism({ onBack }) {
  const [switchOn, setSwitchOn] = useState(true);
  const [knob, setKnob] = useState(2);

  const parts = [
    ["01", "REAL-WORLD METAPHORS", "Digital controls borrow the visual language of objects people already understand."],
    ["02", "MATERIAL", "Leather, paper, wood, metal and glass make a digital surface feel made rather than merely coloured."],
    ["03", "DEPTH", "Shadows, highlights, bevels and perspective establish front, back and physical separation."],
    ["04", "DETAIL", "Stitching, grain, reflections, screws and small imperfections can reinforce the physical reference."],
    ["05", "AFFORDANCE", "The shape and treatment of a control suggest what it can be pressed, turned, dragged or flipped to do."]
  ];

  return <main className="skeuo-page">
    <header className="skeuo-header">
      <button className="skeuo-back" onClick={onBack}>← BACK TO LIBRARY</button>
      <div className="skeuo-header-mark"><span>DESIGN</span><b>ANATOMY</b></div>
    </header>

    <section className="skeuo-hero">
      <p className="skeuo-eyebrow">01.04 · MORPHISM FAMILY</p>
      <div className="skeuo-hero-grid">
        <div>
          <h1><span>Skeuomorphism.</span><br/>Digital things.<br/>That feel physical.</h1>
          <p className="skeuo-lead">Skeuomorphism uses familiar objects, materials and physical cues to make digital interfaces easier to recognise. The goal isn't decoration for decoration's sake — the object becomes part of the explanation.</p>
          <blockquote>When the interface looks familiar,<br/><strong>the interaction can feel familiar too.</strong></blockquote>
        </div>
        <div className="desk-scene" aria-label="Skeuomorphic desk scene">
          <div className="desk-shadow"></div><div className="wood-panel"><span className="wood-grain grain-one"></span><span className="wood-grain grain-two"></span></div>
          <div className="paper-sheet"><span className="paper-hole"></span><span className="paper-hole"></span><span className="paper-hole"></span><b>IDEAS</b><i>FORM · MATERIAL · AFFORDANCE</i><div className="paper-lines"></div></div>
          <button className={`physical-toggle ${switchOn ? "is-on" : ""}`} onClick={() => setSwitchOn(v => !v)} aria-label="Toggle physical switch"><span className="toggle-plate"></span><b>{switchOn ? "ON" : "OFF"}</b></button>
          <div className="brass-knob" onClick={() => setKnob(v => (v + 1) % 4)} style={{ "--turn": `${knob * 25}deg` }}><span></span></div>
          <div className="desk-label">PHYSICAL METAPHOR</div>
        </div>
      </div>
    </section>

    <section className="skeuo-section"><div className="skeuo-heading"><span>01</span><h2>THE PARTS OF SKEUOMORPHISM</h2></div><div className="skeuo-parts">{parts.map(([n,t,d]) => <article key={n} className="material-card"><b>{n}</b><div><h3>{t}</h3><p>{d}</p></div></article>)}</div></section>

    <section className="skeuo-section"><div className="skeuo-heading"><span>02</span><h2>THE SKEUOMORPHIC TOOLKIT</h2></div><div className="toolkit-grid">
      <article className="tool-card paper-tool"><div className="tool-object paper-object"><span>NOTES</span></div><b>PAPER</b><p>Paper textures and ruled surfaces suggest documents, notes and editable space.</p></article>
      <article className="tool-card wood-tool"><div className="tool-object wood-object"><span>WOOD</span></div><b>WOOD GRAIN</b><p>Natural grain gives a surface a strong physical identity.</p></article>
      <article className="tool-card metal-tool"><div className="tool-object metal-object"><span>+</span></div><b>METAL</b><p>Brushed highlights and weight make controls feel engineered.</p></article>
      <article className="tool-card leather-tool"><div className="tool-object leather-object"><span>STITCH</span></div><b>LEATHER</b><p>Soft grain, seams and stitching can make digital surfaces feel crafted.</p></article>
      <article className="tool-card glass-tool"><div className="tool-object glass-object"><span>HIGHLIGHTS</span></div><b>GLASS</b><p>Reflections and translucent layers explain how a surface catches light.</p></article>
      <article className="tool-card control-tool"><div className="tool-object control-object"><span></span></div><b>PHYSICAL CONTROLS</b><p>Knobs, switches, sliders and buttons communicate interaction through shape.</p></article>
    </div></section>

    <section className="skeuo-section"><div className="skeuo-heading"><span>03</span><h2>PHYSICAL → DIGITAL</h2></div><div className="translation">
      <article className="translation-object"><span>01</span><b>PHYSICAL OBJECT</b><div className="physical-card"><div className="real-switch"></div><strong>LIGHT<br/>SWITCH</strong></div></article><i>→</i>
      <article className="translation-object"><span>02</span><b>VISUAL METAPHOR</b><div className="metaphor-card"><div className="round-button"></div><strong>PRESS</strong></div></article><i>→</i>
      <article className="translation-object"><span>03</span><b>DIGITAL INTERFACE</b><div className="digital-card"><div className="ui-toggle"><span></span></div><strong>TOGGLE</strong><em>ON</em></div></article>
    </div><p className="skeuo-intro">The user recognises the physical reference before fully understanding the interface.</p></section>

    <section className="skeuo-section"><div className="skeuo-heading"><span>04</span><h2>WHY IT WORKS</h2></div><div className="reason-card"><div className="reason-object"><div className="reason-disc">↻</div></div><div><h3>FAMILIARITY REDUCES THE LEARNING CURVE.</h3><p>A button looks pressable. A switch looks flippable. A folder looks like something that contains things. Physical references turn unfamiliar digital actions into recognisable ones.</p></div></div></section>

    <section className="skeuo-section two-col"><div><div className="skeuo-heading"><span>05</span><h2>WHERE IT WORKS</h2></div><ul><li>Music applications and creative tools</li><li>Educational interfaces and simulations</li><li>Interfaces based on physical equipment</li><li>Products where familiarity matters</li><li>Experiences where material storytelling adds meaning</li></ul></div><div><div className="skeuo-heading"><span>06</span><h2>WHERE IT STRUGGLES</h2></div><ul><li>Dense information systems</li><li>Very small screens</li><li>Interfaces requiring extreme simplicity</li><li>When realistic decoration competes with content</li><li>When metaphor becomes harder to understand than the action</li></ul></div></section>

    <section className="skeuo-section"><div className="skeuo-heading"><span>07</span><h2>SKEUOMORPHISM vs FLAT DESIGN</h2></div><div className="versus"><article className="versus-skeuo" style={{background:"linear-gradient(145deg,#4b321f 0%,#2a1b11 52%,#17100b 100%)",border:"1px solid #9a7142",boxShadow:"inset 0 1px rgba(255,235,195,.14),6px 7px 0 #060504",color:"#f1e6cc"}}><div className="versus-icon raised-button"></div><h3 style={{color:"#f1e6cc"}}>SKEUOMORPHISM</h3><p style={{color:"#c7bdab"}}>Physical metaphor · texture · depth · detail</p></article><article className="versus-flat"><div className="versus-icon flat-button"></div><h3>FLAT DESIGN</h3><p>Abstract representation · simplicity · clean surfaces · minimal decoration</p></article></div><p className="choice-note">Neither is automatically better. <strong>The right choice depends on the experience you're creating.</strong></p></section>

    <section className="skeuo-takeaway"><span>FINAL TAKEAWAY</span><h2>MAKE THE DIGITAL FEEL MADE.</h2><p>Skeuomorphism can use objects, material, light, depth and controls as a visual vocabulary — not just as decoration.</p><strong>THE OBJECT BECOMES THE EXPLANATION.</strong></section>
  </main>;
}
