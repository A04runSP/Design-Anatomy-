import React, { useState } from "react";
import "./fluent.css";

const principles = [
  ["01", "NATURAL ON EVERY PLATFORM", "Experiences should adapt to the device and build on familiar platform behaviours."],
  ["02", "BUILT FOR FOCUS", "Reduce visual noise so people can stay in the flow and act with confidence."],
  ["03", "ONE FOR ALL, ALL FOR ONE", "Design for a broad range of people, abilities, perspectives and contexts from the start."],
  ["04", "UNMISTAKABLY MICROSOFT", "Create a coherent identity through colour, type, iconography, sound and signature experiences."],
];

const materials = [
  ["SOLID", "Opaque surface", "The everyday foundation. Colour and elevation separate regions and interactions."],
  ["MICA", "Opaque, background-aware", "A subtle surface that can reflect the desktop environment and communicate window focus."],
  ["ACRYLIC", "Semi-transparent", "A frosted-glass effect suited to transient surfaces such as menus and popovers."],
  ["SMOKE", "Translucent black", "Dims the interface underneath blocking surfaces such as dialogs and modal interactions."],
];

const motionPatterns = [
  ["ENTER / EXIT", "Introduce or dismiss UI while making the source and destination understandable."],
  ["ELEVATION", "Use movement to communicate a change in depth, hierarchy or interaction state."],
  ["TOP LEVEL", "Move between major destinations without making large page transitions feel heavy."],
  ["CONTAINER TRANSFORM", "Preserve the relationship between an element and the larger surface it becomes."],
];

export default function Fluent({ onBack }) {
  const [active, setActive] = useState("Home");
  const [material, setMaterial] = useState("ACRYLIC");

  return (
    <main className="fluent-page">
      <header className="fluent-header"><button onClick={onBack}>← BACK TO LIBRARY</button><span>DESIGN ANATOMY · FLUENT DESIGN</span></header>

      <section className="fluent-hero">
        <p className="fluent-eyebrow">03.03 · DIGITAL DESIGN LANGUAGE · FLUENT 2</p>
        <div className="fluent-hero-copy">
          <div><h1>Fluent <em>Design.</em></h1><p>Fluent is Microsoft’s design system for building coherent digital experiences across products and platforms. It connects principles, materials, colour, typography, layout, components, motion and accessibility into one adaptable system.</p><div className="fluent-hero-tags"><span>ADAPTIVE</span><span>FOCUS</span><span>ACCESSIBLE</span><span>SYSTEMIC</span></div></div>
          <div className="fluent-window-demo"><div className="fluent-window-bar"><span>●</span><b>Fluent workspace</b><i>— □ ×</i></div><div className="fluent-window-body"><aside><strong>DESIGN</strong>{["Home","Library","Settings"].map(item => <button key={item} className={active === item ? "active" : ""} onClick={() => setActive(item)}>{item === "Home" ? "⌂" : item === "Library" ? "▦" : "⚙"} {item}</button>)}</aside><div className="fluent-content"><small>FLUENT SURFACE / LIVE STATE</small><h2>{active}</h2><p>Clear hierarchy, layered surfaces and purposeful interaction keep the experience understandable.</p><div className="fluent-action-row"><button>Primary action</button><button>Secondary</button></div></div></div></div>
        </div>
      </section>

      <section className="fluent-section"><div className="fluent-heading"><span>01</span><h2>WHAT FLUENT IS TRYING TO ACHIEVE</h2></div><div className="fluent-principles">{principles.map(([n,t,d]) => <article key={n}><b>{n}</b><div><h3>{t}</h3><p>{d}</p></div></article>)}</div></section>

      <section className="fluent-section fluent-system-section"><div className="fluent-heading"><span>02</span><h2>FLUENT IS A SYSTEM, NOT A SKIN</h2></div><p className="fluent-section-intro">A Fluent interface can look different across Windows, web, iOS and Android while still feeling related. The system provides shared foundations and lets each platform behave naturally.</p><div className="fluent-system-grid"><div><strong>COLOUR</strong><p>Build hierarchy, emphasis, state and identity through a cohesive colour system.</p></div><div><strong>TYPOGRAPHY</strong><p>Use readable hierarchy and scale so information is easy to scan and understand.</p></div><div><strong>SHAPE</strong><p>Standardised corners, strokes and component geometry create familiar relationships.</p></div><div><strong>TOKENS</strong><p>Shared design values help designers and developers keep decisions consistent.</p></div><div><strong>COMPONENTS</strong><p>Reusable building blocks turn the design language into practical interface patterns.</p></div><div><strong>LAYOUT</strong><p>Spacing, grids and responsive behaviour establish relationships across screen sizes.</p></div><div><strong>CONTENT</strong><p>Words are part of the interface: concise, useful language helps people make decisions.</p></div><div><strong>ACCESSIBILITY</strong><p>Inclusive structure, contrast, focus, zoom and assistive-technology support belong in the foundation.</p></div></div></section>

      <section className="fluent-section fluent-material-section"><div className="fluent-heading"><span>03</span><h2>MATERIAL · SURFACE · DEPTH</h2></div><p className="fluent-section-intro">Fluent 2 defines four material types: solid, Mica, Acrylic and Smoke. Material is not decoration; it helps communicate what is behind, above, below or temporarily blocking something else.</p><div className="fluent-material-demo"><div className="fluent-acrylic back"><span>BACKGROUND</span></div><div className="fluent-acrylic middle"><span>{material} / LAYER</span></div><div className="fluent-acrylic front"><strong>{material}</strong><p>{materials.find(item => item[0] === material)?.[2]}</p></div></div><div className="fluent-material-selector">{materials.map(([name]) => <button key={name} className={material === name ? "active" : ""} onClick={() => setMaterial(name)}>{name}</button>)}</div><div className="fluent-material-cards">{materials.map(([name,type,copy]) => <article key={name}><span>{name}</span><small>{type}</small><p>{copy}</p></article>)}</div></section>

      <section className="fluent-section fluent-motion-section"><div className="fluent-heading"><span>04</span><h2>MOTION THAT EXPLAINS CHANGE</h2></div><p className="fluent-section-intro">Fluent motion should help people understand what changed, where something came from and what happens next. Its guidance emphasises functional, natural, consistent and appealing movement.</p><div className="fluent-motion-track"><div className="fluent-motion-dot"/><div className="fluent-motion-line"/><div className="fluent-motion-card"><span>01</span><b>FUNCTIONAL</b><p>Motion communicates state, next steps and change instead of adding decoration for its own sake.</p></div></div><div className="fluent-motion-patterns">{motionPatterns.map(([name,copy],i) => <article key={name}><span>0{i+1}</span><strong>{name}</strong><p>{copy}</p></article>)}</div></section>

      <section className="fluent-section"><div className="fluent-heading"><span>05</span><h2>LAYOUT THAT ADAPTS</h2></div><div className="fluent-layout-demo"><div className="fluent-layout-device desktop"><span>DESKTOP</span><b>REPOSITION</b><i></i><i></i><i></i></div><div className="fluent-layout-device tablet"><span>TABLET</span><b>RESIZE</b><i></i><i></i></div><div className="fluent-layout-device mobile"><span>MOBILE</span><b>REFLOW</b><i></i></div></div><div className="fluent-layout-rules"><div><strong>REPOSITION</strong><p>Move elements to maintain reading order and focus.</p></div><div><strong>RESIZE</strong><p>Adjust dimensions and margins as space changes.</p></div><div><strong>REFLOW</strong><p>Change the arrangement when a different composition works better.</p></div><div><strong>SHOW / HIDE</strong><p>Reduce secondary information when available space demands it.</p></div></div></section>

      <section className="fluent-section fluent-accessibility-section"><div className="fluent-heading"><span>06</span><h2>INCLUSION IS PART OF THE SYSTEM</h2></div><div className="fluent-accessibility-grid"><article><span>01</span><strong>STRUCTURE</strong><p>Keep hierarchy and navigation logical so people can understand relationships and move through the experience.</p></article><article><span>02</span><strong>ZOOM</strong><p>Design layouts that reflow without horizontal scrolling and remain usable at high zoom levels.</p></article><article><span>03</span><strong>MOTION</strong><p>Respect reduced-motion needs and avoid flashes or sudden movement that can cause discomfort.</p></article><article><span>04</span><strong>ALTERNATIVES</strong><p>Provide meaningful text alternatives and semantic structure so visual information is not the only path to understanding.</p></article></div></section>

      <section className="fluent-section fluent-content-section"><div className="fluent-heading"><span>07</span><h2>CONTENT IS A DESIGN MATERIAL</h2></div><div className="fluent-content-practice"><div><span>01</span><strong>KEEP IT SIMPLE</strong><p>Use plain language and short, scannable sentences.</p></div><div><span>02</span><strong>GET TO THE POINT</strong><p>Make decisions and next steps obvious without unnecessary words.</p></div><div><span>03</span><strong>TALK LIKE A PERSON</strong><p>Use a conversational voice that matches the user’s context and intent.</p></div></div></section>

      <section className="fluent-takeaway"><span>03.03 · FLUENT DESIGN</span><h2>DESIGN FOR THE FLOW.</h2><p>Fluent is strongest when its pieces work together: familiar platform behaviour, focused hierarchy, meaningful materials, purposeful motion, adaptable layout, useful content and inclusive interaction. The result should feel natural rather than merely branded.</p><div className="fluent-takeaway-points"><b>ADAPT</b><b>FOCUS</b><b>CONNECT</b><b>INCLUDE</b></div></section>
    </main>
  );
}
