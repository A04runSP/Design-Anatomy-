import React from "react";
import { ArrowLeft } from "lucide-react";
import "./flat-design.css";

const parts = [
  ["01", "SIMPLICITY", "Remove unnecessary visual decoration and keep the interface focused on its purpose."],
  ["02", "COLOUR", "Use clear, purposeful colour to separate actions, information and hierarchy."],
  ["03", "TYPOGRAPHY", "Strong type hierarchy helps users understand what matters without relying on visual effects."],
  ["04", "GEOMETRY", "Simple shapes, clean edges and consistent proportions create a structured interface."],
  ["05", "ICONS", "Icons communicate through simplified forms rather than realistic detail."],
  ["06", "SPACING", "Generous, consistent spacing keeps the interface organised and easy to scan."],
];

function FlatSpecimen() {
  return (
    <div className="flat-specimen" aria-label="Flat Design visual specimen">
      <div className="flat-specimen-bar">
        <span>FLAT / 03.01</span><b>DIGITAL INTERFACE / REDUCED DEPTH</b>
      </div>
      <div className="flat-specimen-visual">
        <div className="flat-sky" />
        <div className="flat-sun" />
        <div className="flat-mountain flat-mountain-back" />
        <div className="flat-mountain flat-mountain-front" />
        <div className="flat-road" />
        <div className="flat-road-line line-a" />
        <div className="flat-road-line line-b" />
        <div className="flat-building building-a"><i /><i /><i /><i /></div>
        <div className="flat-building building-b"><i /><i /><i /></div>
        <div className="flat-tree tree-a"><i /><b /></div>
        <div className="flat-tree tree-b"><i /><b /></div>
        <div className="flat-card-copy">
          <span>03.01 / FLAT</span>
          <strong>COLOUR<br /><em>IN FORM.</em></strong>
          <small>GEOMETRY · TYPE · SPACE</small>
        </div>
        <div className="flat-reference-label">REFERENCE LANGUAGE / VECTOR INTERFACE</div>
      </div>
      <div className="flat-specimen-body">
        <div className="flat-chip">01</div>
        <h3>Clear<br /><b>by design.</b></h3>
        <p>COLOUR · TYPE · GEOMETRY</p>
        <div className="flat-blocks"><i /><i /><i /></div>
      </div>
    </div>
  );
}

function FlatDesign({ onBack }) {
  return (
    <main className="flat-page">
      <div className="flat-environment" aria-hidden="true">
        <div className="environment-sun" />
        <div className="environment-shape environment-shape-a" />
        <div className="environment-shape environment-shape-b" />
        <div className="environment-shape environment-shape-c" />
      </div>
      <header className="flat-header">
        <button type="button" className="flat-back" onClick={onBack}>
          <ArrowLeft size={18} /> BACK TO LIBRARY
        </button>
        <span className="flat-header-index">03 / DIGITAL INTERFACE</span>
      </header>
      <section className="flat-hero">
        <p className="flat-eyebrow">03.01 · DIGITAL INTERFACE / FLAT / REDUCED DEPTH</p>
        <h1><em>Flat Design.</em><br />Colour. Shape.<br />Function.</h1>
        <p>Flat Design communicates through clear colour, bold geometry, simple illustration and strong typography.</p>
        <p>Instead of realistic texture and unnecessary depth, the visual language stays graphic, direct and easy to understand.</p>
        <div className="flat-principle"><span>THE PRINCIPLE</span><b>Simple forms. Strong colour. Clear communication.</b></div>
      </section>
      <section className="flat-feature"><FlatSpecimen /></section>
      <section className="flat-parts">
        <div className="flat-section-heading"><span>01</span><h2>THE PARTS OF FLAT DESIGN</h2></div>
        <div className="flat-parts-grid">
          {parts.map(([number, title, copy]) => (
            <article key={number} className="flat-part"><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></article>
          ))}
        </div>
      </section>
      <section className="flat-comparison">
        <div><span>DEPTH</span><b>REDUCED</b><p>Hierarchy does not depend on heavy shadows, gradients or realistic depth.</p></div>
        <div><span>DETAIL</span><b>SIMPLIFIED</b><p>Visual detail is reduced so the interface remains direct and easy to scan.</p></div>
        <div><span>FOCUS</span><b>FUNCTION</b><p>Colour, type, shape and spacing carry the interface while controls stay visually clear.</p></div>
      </section>
      <section className="flat-takeaway"><span>FLAT DESIGN</span><b>When decoration gets out of the way, the interface can speak clearly.</b></section>
    </main>
  );
}

export default FlatDesign;
