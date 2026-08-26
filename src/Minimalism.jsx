import React from "react";
import { createRoot } from "react-dom/client";
import "./minimalism.css";

export default function Minimalism({ onBack }) {
  return (
    <main className="minimalism-page">
      <header className="minimalism-header">
        <button className="minimalism-back" type="button" onClick={onBack}>← BACK TO LIBRARY</button>
        <div className="minimalism-kicker">FOUNDATIONS · STRUCTURE & RESTRAINT</div>
      </header>

      <section className="minimalism-hero">
        <div className="minimalism-taxonomy"><span>01</span><span>FOUNDATIONS</span><i></i><span>STRUCTURE & RESTRAINT</span></div>
        <p className="minimalism-kicker">01.01 · FOUNDATION STYLE</p>
        <h1>Less,<br /><em>but better.</em></h1>
        <p>Minimalism is a visual language built around restraint. It removes unnecessary decoration so space, hierarchy, typography and simple form can carry the experience.</p>
        <div className="minimalism-ui-float ui-float-one"><span></span><b>01</b></div>
        <div className="minimalism-ui-float ui-float-two"><i></i><i></i><i></i></div>
      </section>

      <section className="minimalism-grid">
        <article className="minimalism-card minimalism-primary-card">
          <div className="minimalism-card-label"><span>SEE THE STYLE</span><span>01</span></div>
          <h2>Clarity through restraint.</h2>
          <p>The goal is not to make a screen empty. The goal is to make every remaining element purposeful.</p>
          <div className="minimalism-specimen" aria-label="Minimalism interface example">
            <nav><span>STUDIO</span><div><span>WORK</span><span>ABOUT</span><span>CONTACT</span></div></nav>
            <div className="spec-ui"><span>01 / EDITORIAL SYSTEM</span><i></i><i></i></div>
            <div className="spec-copy"><small>VISUAL IDENTITY</small><h3>Less,<br /><b>but better.</b></h3><p>Give the important thing enough space to be understood before adding anything else.</p></div>
            <div className="spec-rule"></div>
            <div className="spec-meta"><span>SPACE</span><span>HIERARCHY</span><span>RESTRAINT</span></div>
            <button className="spec-button" type="button">VIEW SYSTEM →</button>
          </div>
        </article>

        <article className="minimalism-card">
          <div className="minimalism-card-label"><span>VISUAL DNA</span><span>01</span></div>
          <h2>What makes it minimal?</h2>
          <p>Minimalism depends on deliberate reduction and strong relationships between the elements that remain.</p>
          <div className="minimalism-list">
            <div><span>01</span><div><strong>SPACE</strong><p>Generous breathing room keeps the interface calm and lets important content stand apart.</p></div></div>
            <div><span>02</span><div><strong>HIERARCHY</strong><p>Size, weight and position make the primary message obvious without extra decoration.</p></div></div>
            <div><span>03</span><div><strong>FORM</strong><p>Simple shapes and restrained components reduce visual noise.</p></div></div>
            <div><span>04</span><div><strong>TYPE</strong><p>Typography becomes a major visual tool because there is less competing around it.</p></div></div>
            <div><span>05</span><div><strong>RESTRAINT</strong><p>Colour, effects and decoration are used only when they serve a purpose.</p></div></div>
          </div>
        </article>
      </section>

      <section className="minimalism-wide">
        <article className="minimalism-card"><div className="minimalism-card-label"><span>FEELS LIKE</span></div><h2>Calm · Focused · Precise</h2><p>The visual rhythm is quiet because the interface isn't competing with itself for attention.</p></article>
        <article className="minimalism-card"><div className="minimalism-card-label"><span>GOOD FOR</span></div><h2>Editorial · Portfolio · Product</h2><p>Especially useful when the content, message or product itself should remain the visual focus.</p></article>
        <article className="minimalism-card"><div className="minimalism-card-label"><span>WATCH OUT</span></div><h2>Empty ≠ Minimal</h2><p>Removing elements without improving hierarchy can create a sparse interface rather than a purposeful one.</p></article>
      </section>

      <section className="minimalism-note"><span>FOUNDATION TAKEAWAY</span><b>Minimalism is not about using less for the sake of less. It is about making what remains matter more.</b></section>
    </main>
  );
}

export function mountMinimalism(root, onBack) {
  createRoot(root).render(<Minimalism onBack={onBack} />);
}
