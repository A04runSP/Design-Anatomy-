import React from "react";
import { createRoot } from "react-dom/client";
import { ArrowLeft, ArrowRight } from "lucide-react";
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
      <div className="flat-specimen-bar"><span>FLAT / 02.01</span><i></i><i></i><i></i></div>
      <div className="flat-specimen-body">
        <div className="flat-chip">01</div>
        <h3>Clear<br /><b>by design.</b></h3>
        <p>Colour · Type · Shape</p>
        <div className="flat-blocks"><i></i><i></i><i></i></div>
      </div>
    </div>
  );
}

function FlatDesign({ onBack }) {
  return (
    <main className="flat-page">
      <header className="flat-header">
        <button className="flat-back" onClick={onBack}><ArrowLeft size={18} /> BACK TO LIBRARY</button>
      </header>
      <section className="flat-hero">
        <p className="flat-eyebrow">02.01 · MODERN DIGITAL STYLES</p>
        <h1><em>Flat Design.</em><br />Clarity. Simplicity.<br />Function.</h1>
        <p>Flat Design removes unnecessary depth and decoration so the interface can communicate through colour, typography, shape and spacing.</p>
        <p>Instead of realistic textures, shadows and physical effects, elements stay visually simple and readable. The goal isn't to make the interface empty — it's to make every visual decision intentional.</p>
        <div className="flat-principle"><span>THE PRINCIPLE</span><b>Less visual noise. More direct communication.</b></div>
      </section>
      <section className="flat-feature"><FlatSpecimen /></section>
      <section className="flat-parts">
        <div className="flat-section-heading"><span>01</span><h2>THE PARTS OF FLAT DESIGN</h2></div>
        <div className="flat-parts-grid">
          {parts.map(([number, title, copy]) => <article key={number} className="flat-part"><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}
        </div>
      </section>
      <section className="flat-comparison">
        <div><span>DEPTH</span><b>FLAT</b><p>No visual depth is required to communicate hierarchy.</p></div>
        <div><span>DETAIL</span><b>REDUCED</b><p>Visual detail is simplified so the message stays direct.</p></div>
        <div><span>FOCUS</span><b>FUNCTION</b><p>Colour, type, shape and spacing carry the interface.</p></div>
      </section>
      <section className="flat-takeaway"><span>FLAT DESIGN</span><b>When decoration gets out of the way, the interface can speak clearly.</b></section>
    </main>
  );
}

export function mountFlatDesign(root, onBack) {
  return createRoot(root).render(<FlatDesign onBack={onBack} />);
}

export default FlatDesign;
