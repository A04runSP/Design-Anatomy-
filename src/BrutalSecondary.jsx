import React from "react";
import "./brutal-secondary-component.css";

export default function BrutalSecondary() {
  return (
    <section className="brutal-secondary-component" aria-label="Brutalist editorial poster specimen">
      <div className="bsc-label">SECONDARY VISUAL / RAW POSTER SYSTEM</div>

      <article className="bsc-poster">
        <div className="bsc-noise" aria-hidden="true" />
        <div className="bsc-grid" aria-hidden="true" />

        <header className="bsc-topline">
          <span>ARCHIVE / 04</span>
          <span>RAW VISUAL LANGUAGE</span>
          <span>0131 / SYSTEM</span>
        </header>

        <div className="bsc-cross bsc-cross-a">+</div>
        <div className="bsc-cross bsc-cross-b">×</div>
        <div className="bsc-mark">///<br />///</div>

        <div className="bsc-headline">
          <span>BRUTAL</span>
          <strong>FORM</strong>
        </div>

        <div className="bsc-red-block" aria-hidden="true" />
        <div className="bsc-red-slab" aria-hidden="true" />

        <div className="bsc-building" aria-hidden="true">
          <div className="bsc-building-back" />
          <div className="bsc-building-main">
            <div className="bsc-floor-lines" />
            <div className="bsc-window-grid" />
          </div>
          <div className="bsc-building-side" />
          <div className="bsc-building-cut" />
        </div>

        <div className="bsc-side-copy">
          TYPE · IMAGE · GRID · TEXTURE
        </div>

        <div className="bsc-info-panel">
          <span>01 / RAW FORM</span>
          <h3>STRUCTURE<br />IS VISIBLE.</h3>
          <p>THE BUILDING BECOMES THE IMAGE.</p>
          <strong>CONTROLLED CHAOS.</strong>
          <small>ARCHITECTURE / MASS / GRID</small>
        </div>

        <div className="bsc-system-panel">
          <span>SYSTEM / 04</span>
          <b>RAW<br />SURFACE.<br />HARD<br />EDGES.</b>
          <i>NO POLISH.</i>
        </div>

        <div className="bsc-rule" aria-hidden="true" />
        <div className="bsc-stamp">RAW<br />///</div>
        <div className="bsc-date">09—25<br />2026</div>
        <div className="bsc-footer-code">MASS / CONTRAST / INTERRUPTION</div>
      </article>
    </section>
  );
}
