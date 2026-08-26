import React from "react";
import "./brutalism.css";
import "./brutal-dark.css";
import "./brutal-architecture.css";
import BrutalSecondary from "./BrutalSecondary";

export default function Brutalism({ onBack }) {
  const parts = [
    ["01", "RAW FORM", "Simple, blunt forms and visibly constructed layouts reject the expectation that every interface must look polished."],
    ["02", "EXTREME SCALE", "Oversized typography, compressed headlines and unexpected proportions turn type into a graphic object."],
    ["03", "VISIBLE STRUCTURE", "Grids, rules, frames, labels and coordinates remain visible instead of disappearing behind decoration."],
    ["04", "CONTRAST", "Hard relationships between black, white and a strong accent establish hierarchy before effects do the work."],
    ["05", "CONTROLLED DISRUPTION", "Cropping, overlap, asymmetry, texture and interruption create tension while an underlying system keeps the work usable."]
  ];

  return (
    <main className="brutalism-page">
      <header className="brutal-header">
        <button className="brutal-back" onClick={onBack}>← BACK TO LIBRARY</button>
        <span className="brutal-header-code">FOUNDATIONS · RAW & ANTI-REFINEMENT</span>
      </header>

      <section className="brutal-hero">
        <div className="brutal-hero-copy">
          <div className="brutal-taxonomy">
            <span>01</span><span>FOUNDATIONS</span><i></i><span>RAW & ANTI-REFINEMENT</span>
          </div>
          <p className="brutal-eyebrow">01.02 · FOUNDATION STYLE · DESIGN MOVEMENT / WEB AESTHETIC</p>
          <h1><span>Brutalism.</span><br />Raw form.<br />Visible structure.</h1>
          <p className="brutal-lead">Brutalism is a design movement and visual approach built around blunt form, strong contrast, exposed structure and deliberate rejection of excessive refinement. In digital work, it often makes the grid, type, rules and construction part of the visual language.</p>
          <blockquote>DON'T HIDE THE SYSTEM.<br/><strong>MAKE THE STRUCTURE VISIBLE.</strong></blockquote>
        </div>
        <BrutalSecondary compact />
      </section>

      <section className="brutal-section">
        <div className="brutal-heading"><span>01</span><h2>VISUAL DNA</h2></div>
        <div className="brutal-parts">
          {parts.map(([n, t, d]) => <article key={n}><b>{n}</b><div><h3>{t}</h3><p>{d}</p></div></article>)}
        </div>
      </section>

      <section className="brutal-section">
        <div className="brutal-heading"><span>02</span><h2>THE RAW TOOLKIT</h2></div>
        <div className="toolkit-grid">
          <article><b>OVERSIZED TYPE</b><p>Let the headline become a structural element rather than ordinary supporting text.</p></article>
          <article><b>HARD FRAMES</b><p>Boxes, rules and borders expose how the composition was assembled.</p></article>
          <article><b>LIMITED PALETTE</b><p>Use a restrained base with one forceful accent when contrast needs to carry the visual weight.</p></article>
          <article><b>VISIBLE GRID</b><p>Columns, coordinates and alignment lines can remain on the surface.</p></article>
          <article><b>RAW IMAGE</b><p>Crop, scale, duplicate or interrupt imagery instead of treating it as passive decoration.</p></article>
          <article><b>TEXTURE + IMPERFECTION</b><p>Grain, rough surfaces and uneven details can suggest physical or printed character.</p></article>
        </div>
      </section>

      <section className="brutal-section">
        <div className="brutal-heading"><span>03</span><h2>COMPOSITION LOGIC</h2></div>
        <div className="composition-grid">
          <article><b>ASYMMETRY</b><p>Shift elements off-centre so the page feels deliberately constructed rather than templated.</p></article>
          <article><b>OVERLAP</b><p>Allow type, imagery and shapes to occupy the same territory when hierarchy remains clear.</p></article>
          <article><b>CROP</b><p>Let giant letters and images continue beyond containers to create scale and tension.</p></article>
          <article><b>INTERRUPTION</b><p>Break the rhythm with a stamp, number, line, label or unexpected object.</p></article>
        </div>
      </section>

      <section className="brutal-section">
        <div className="brutal-heading"><span>04</span><h2>CONTRAST AS STRUCTURE</h2></div>
        <p className="brutal-intro">Brutalism does not require visual chaos. Its force often comes from a few extreme relationships: dark against light, huge against small, rigid against irregular, and polished information against visibly raw construction.</p>
        <div className="contrast-row">
          <article><b>MONO</b><span>BLACK / WHITE</span></article>
          <article><b>ACCENT</b><span>ONE STRONG COLOUR</span></article>
          <article><b>EXTREME</b><span>SIZE / WEIGHT / SCALE</span></article>
        </div>
      </section>

      <section className="brutal-section two-col">
        <div>
          <div className="brutal-heading"><span>05</span><h2>WHERE IT FITS</h2></div>
          <ul><li>Creative portfolios</li><li>Editorial and poster systems</li><li>Art and culture</li><li>Fashion and campaigns</li><li>Music and entertainment</li><li>Experimental products</li><li>Youth-focused brands</li></ul>
        </div>
        <div>
          <div className="brutal-heading"><span>06</span><h2>BOUNDARIES</h2></div>
          <ul><li>Random distortion with no hierarchy</li><li>Unreadable typography used as a gimmick</li><li>Effects added without structural purpose</li><li>Texture used only as decoration</li><li>Broken layouts that damage usability</li></ul>
        </div>
      </section>

      <section className="brutal-section">
        <div className="brutal-heading"><span>07</span><h2>BRUTALISM vs BAD DESIGN</h2></div>
        <div className="versus">
          <article className="versus-good"><h3>GOOD BRUTALISM</h3><p>Extreme but controlled · expressive but readable · raw but intentional · disruptive on the surface but structured underneath.</p></article>
          <article className="versus-bad"><h3>BAD DESIGN</h3><p>Noise without hierarchy · random effects · accidental spacing · illegibility pretending to be a concept.</p></article>
        </div>
        <p className="intent-note">The goal is not to make it messy. <strong>The goal is to make the construction impossible to ignore.</strong></p>
      </section>

      <section className="brutal-takeaway">
        <span>FOUNDATION TAKEAWAY / 01.02</span>
        <h2>RAW DOESN'T MEAN CARELESS.</h2>
        <p>Strong brutalist work exposes its construction through scale, contrast, grids, typography, imagery, texture and controlled disruption. The attitude comes from refusing unnecessary polish while keeping the underlying system intentional.</p>
        <strong>EXPOSE THE RULES. KEEP THE PURPOSE.</strong>
      </section>
    </main>
  );
}
