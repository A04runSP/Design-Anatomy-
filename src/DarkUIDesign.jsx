import React from "react";
import "./dark-ui-design.css";
import "./dark-ui-grey-type.css";
import "./dark-ui-components.css";

export default function DarkUIDesign({ onBack }) {
  return (
    <main className="dark-ui-page" style={{ position: "relative", zIndex: 21, isolation: "isolate", background: "linear-gradient(180deg, #020307 0%, #05070b 48%, #010205 100%)" }}>
      <header className="dark-ui-header">
        <button onClick={onBack}>← EXPLORE STYLES</button>
        <span>DESIGN ANATOMY · 02.04</span>
      </header>

      <section className="dark-ui-hero">
        <div className="dark-ui-atmosphere" aria-hidden="true">
          <span className="dark-ui-orb orb-cyan" />
          <span className="dark-ui-orb orb-violet" />
          <span className="dark-ui-line" />
        </div>
        <p>02.04 · MODERN DIGITAL STYLES</p>
        <h1>Dark <em>UI Design.</em></h1>
        <p>Deep surfaces, controlled contrast and luminous accents create an immersive interface where light becomes the visual language.</p>
      </section>

      <section className="dark-ui-specimen">
        <div className="dark-ui-specimen-head">
          <span>02.04</span><strong>DARK UI SYSTEM</strong><small>DARK · CONTRAST · LIGHT</small>
        </div>
        <div className="dark-ui-specimen-body">
          <div className="dark-ui-status"><i /> SYSTEM ONLINE <span>03</span></div>
          <h2>Let the<br/><em>light lead.</em></h2>
          <p>Dark surfaces give contrast and luminous accents room to create focus, hierarchy and atmosphere.</p>
          <div className="dark-ui-controls">
            <div><span>BRIGHTNESS</span><b>78%</b><i><strong /></i></div>
            <button>EXPLORE <span>→</span></button>
          </div>
        </div>
        <div className="dark-ui-surface surface-one" />
        <div className="dark-ui-surface surface-two" />

        <div className="dark-ui-component-field" aria-hidden="true">
          <div className="dark-ui-component toggle-component">
            <span className="component-pill" /><span className="component-dot" />
          </div>
          <div className="dark-ui-component notification-component">
            <span className="notification-dot" /><span className="notification-line line-long" /><span className="notification-line" />
          </div>
          <div className="dark-ui-component chart-component">
            <span className="chart-bar bar-one" /><span className="chart-bar bar-two" /><span className="chart-bar bar-three" /><span className="chart-bar bar-four" /><span className="chart-bar bar-five" />
          </div>
          <div className="dark-ui-component control-component">
            <span className="control-cell active" /><span className="control-cell" /><span className="control-cell" />
          </div>
        </div>
      </section>

      <section className="dark-ui-grey-type">
        <div className="dark-ui-grey-type-inner">
          <div className="dark-ui-grey-type-meta"><span>03</span><b>EDITORIAL TEXTURE</b></div>
          <h2>Secondary text can still carry visual weight.</h2>
          <p className="dark-ui-grey-type-category">Dark UI / Content hierarchy</p>
          <p>Not every message needs to be bright white. <strong>Use a deliberate grey for longer descriptions, supporting copy and secondary information</strong> so the interface stays quiet while the content still feels substantial.</p>
          <div className="dark-ui-grey-type-rule" />
        </div>
      </section>

      <section className="dark-ui-anatomy">
        <div className="dark-ui-section-head"><span>01</span><h2>What makes it work</h2><p>Dark UI is not simply black with bright colours. It is the controlled relationship between darkness, contrast and light.</p></div>
        <div className="dark-ui-principles">
          <article><span>01</span><strong>DEEP FOUNDATION</strong><p>Use near-black, charcoal or deep tinted surfaces. Subtle tonal differences create depth without making every panel bright.</p></article>
          <article><span>02</span><strong>CONTROLLED CONTRAST</strong><p>Give primary information strong contrast and let secondary information become quieter. Build hierarchy, not glare.</p></article>
          <article><span>03</span><strong>LUMINOUS ACCENTS</strong><p>Use vivid colour selectively for actions, states, highlights and important visual moments.</p></article>
          <article><span>04</span><strong>SURFACE DEPTH</strong><p>Separate cards and panels with tonal shifts, subtle borders, gradients or restrained shadows.</p></article>
          <article><span>05</span><strong>LIGHT AS A MATERIAL</strong><p>Glow should illuminate specific areas and feel like light inside the interface, not a generic haze.</p></article>
          <article><span>06</span><strong>BREATHING SPACE</strong><p>Dark interfaces need room. Too many competing accents make the visual field muddy.</p></article>
        </div>
      </section>

      <section className="dark-ui-visual-language">
        <div className="dark-ui-section-head"><span>02</span><h2>Visual anatomy</h2></div>
        <div className="dark-ui-token-grid">
          <div><small>BACKGROUND</small><strong>DEEP / ATMOSPHERIC</strong><i className="token-bg" /></div>
          <div><small>SURFACE</small><strong>SLIGHTLY ELEVATED</strong><i className="token-surface" /></div>
          <div><small>PRIMARY TEXT</small><strong>BRIGHT</strong><i className="token-text" /></div>
          <div><small>SECONDARY TEXT</small><strong>MUTED</strong><i className="token-muted" /></div>
          <div><small>ACCENT</small><strong>LUMINOUS / SELECTIVE</strong><i className="token-accent" /></div>
          <div><small>BORDER</small><strong>SUBTLE</strong><i className="token-border" /></div>
          <div><small>SHADOW</small><strong>DEEP / RESTRAINED</strong><i className="token-shadow" /></div>
          <div><small>GLOW</small><strong>FOCUSED</strong><i className="token-glow" /></div>
        </div>
      </section>

      <section className="dark-ui-principle-banner">
        <span>THE CORE PRINCIPLE</span>
        <h2>Darkness is the canvas.<br/><em>Light is the language.</em></h2>
      </section>

      <div className="dark-ui-source">DESIGN ANATOMY · DARK UI DESIGN · 02.04</div>
    </main>
  );
}
