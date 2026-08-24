import React from "react";
import "./brutalism.css";
import "./brutal-dark.css";
import "./brutal-architecture.css";
import BrutalSecondary from "./BrutalSecondary";

export default function Brutalism({ onBack }) {
  const parts = [
    ["01", "TYPOGRAPHY", "Oversized type, compressed headlines and unexpected scale make typography behave like an image."],
    ["02", "CONTRAST", "Black, off-white and a hard accent colour create instant hierarchy and visual impact."],
    ["03", "STRUCTURE", "Grids, rules, labels, frames and coordinates stay visible instead of disappearing behind polish."],
    ["04", "COLLAGE", "Images, type, shapes and textures can overlap, crop and interrupt one another."],
    ["05", "IMPERFECTION", "Rough edges, grain, uneven alignment and deliberate tension give the composition its attitude."]
  ];
  return <main className="brutalism-page">
    <header className="brutal-header"><button className="brutal-back" onClick={onBack}>← BACK TO LIBRARY</button><span className="brutal-header-code">BRUTAL / 04 / RAW VISUAL LANGUAGE</span></header>
    <section className="brutal-hero">
      <div className="brutal-hero-copy"><p className="brutal-eyebrow">04 · DESIGN STYLE / EDITORIAL BRUTALISM</p><h1><span>Brutalism.</span><br/>Loud type.<br/>Raw composition.</h1><p className="brutal-lead">Brutalism doesn't simply mean ugly or unfinished. The stronger visual language seen in brutalist posters uses oversized typography, hard contrast, visible grids, collage, cropped imagery, texture and deliberate disruption.</p><blockquote>DON'T HIDE THE SYSTEM.<br/><strong>MAKE THE SYSTEM THE IMAGE.</strong></blockquote></div>
      <BrutalSecondary compact />
    </section>
    <section className="brutal-section"><div className="brutal-heading"><span>01</span><h2>THE PARTS OF BRUTALISM</h2></div><div className="brutal-parts">{parts.map(([n,t,d]) => <article key={n}><b>{n}</b><div><h3>{t}</h3><p>{d}</p></div></article>)}</div></section>
    <section className="brutal-section"><div className="brutal-heading"><span>02</span><h2>THE BRUTALIST TOOLKIT</h2></div><div className="toolkit-grid"><article><b>OVERSIZED TYPE</b><p>Let the headline become a graphic object.</p></article><article><b>HARD FRAMES</b><p>Boxes, rules and borders expose the construction.</p></article><article><b>RED / BLACK / WHITE</b><p>A limited palette can hit harder than a rainbow of effects.</p></article><article><b>VISIBLE GRID</b><p>Columns, coordinates and alignment lines can remain on the surface.</p></article><article><b>RAW IMAGE</b><p>Crop, scale, duplicate or interrupt imagery instead of treating it as decoration.</p></article><article><b>GRAIN + TEXTURE</b><p>Noise and imperfect surfaces add physical, printed character.</p></article></div></section>
    <section className="brutal-section"><div className="brutal-heading"><span>03</span><h2>CONTRAST</h2></div><p className="brutal-intro">The references you found repeatedly use extreme black-and-white foundations with one aggressive accent. Contrast creates the attitude before decoration even enters the frame.</p><div className="contrast-row"><article><b>MONO</b><span>BLACK / WHITE</span></article><article><b>ACCENT</b><span>ONE LOUD COLOUR</span></article><article><b>EXTREME</b><span>SIZE / WEIGHT / SCALE</span></article></div></section>
    <section className="brutal-section"><div className="brutal-heading"><span>04</span><h2>COMPOSITION</h2></div><div className="composition-grid"><article><b>ASYMMETRY</b><p>Move elements off-centre so the page feels constructed rather than templated.</p></article><article><b>OVERLAP</b><p>Allow type, imagery and shapes to occupy the same visual territory.</p></article><article><b>CROP</b><p>Let giant letters and images continue beyond their containers.</p></article><article><b>INTERRUPTION</b><p>Break the rhythm with a stamp, line, number, label or unexpected object.</p></article></div></section>
    <section className="brutal-section two-col"><div><div className="brutal-heading"><span>05</span><h2>WHERE IT WORKS</h2></div><ul><li>Creative portfolios</li><li>Editorial and poster systems</li><li>Art and culture</li><li>Fashion and campaigns</li><li>Music and entertainment</li><li>Experimental products</li><li>Youth-focused brands</li></ul></div><div><div className="brutal-heading"><span>06</span><h2>THE TRAP</h2></div><ul><li>Random distortion with no hierarchy</li><li>Too many colours competing at once</li><li>Unreadable typography</li><li>Texture used as decoration only</li><li>Broken layouts that hurt usability</li></ul></div></section>
    <section className="brutal-section"><div className="brutal-heading"><span>07</span><h2>BRUTALISM vs BAD DESIGN</h2></div><div className="versus"><article className="versus-good"><h3>GOOD BRUTALISM</h3><p>Extreme but controlled · expressive but readable · raw but intentional · chaotic-looking but structured underneath.</p></article><article className="versus-bad"><h3>BAD DESIGN</h3><p>Noise without hierarchy · random effects · accidental spacing · decoration pretending to be a concept.</p></article></div><p className="intent-note">The goal is not to make it messy. <strong>The goal is to make the structure impossible to ignore.</strong></p></section>
    <section className="brutal-takeaway"><span>FINAL TAKEAWAY / 08</span><h2>RAW DOESN'T MEAN CARELESS.</h2><p>The strongest brutalist work combines oversized type, visible systems, limited colour, rough texture, imagery and controlled disruption. It looks rebellious because the rules are exposed — not because the rules disappeared.</p><strong>MAKE IT LOUD. KEEP IT INTENTIONAL.</strong></section>
  </main>;
}
