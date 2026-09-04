import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import './organic-natural-design-style.css';

const images = {
  hero: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1800&q=88',
  form: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1000&q=88',
  botany: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=88',
  texture: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1000&q=88',
  colour: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1000&q=88',
  rhythm: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=88',
  practice: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=1800&q=88'
};

const anatomy = [
  { no:'01', title:'Form', copy:'Soft curves, irregular silhouettes and gentle transitions make the interface feel grown rather than engineered.', image:images.form },
  { no:'02', title:'Botany', copy:'Leaves, stems and natural photography become part of the visual language instead of decorative stickers.', image:images.botany },
  { no:'03', title:'Texture', copy:'Paper, bark, stone and grain introduce a physical layer that gives digital surfaces a tactile presence.', image:images.texture },
  { no:'04', title:'Colour', copy:'Earth, plant, clay and sky tones create warmth. Green matters, but the palette is never only green.', image:images.colour },
  { no:'05', title:'Rhythm', copy:'Variation in scale, crop and spacing creates a calmer rhythm than rigid repeated components.', image:images.rhythm }
];

const palette = [
  ['Sage','#A7B896'],['Olive','#566B4F'],['Sand','#EADDC8'],['Terracotta','#C96F56'],['Clay','#B58B7A'],['Mustard','#E0B04B'],['Forest','#2E4B3C'],['Teal','#4F8F8F']
];

function BotanicalSprig({className=''}) {
  return <svg className={`botanical-sprig ${className}`} viewBox="0 0 180 110" aria-hidden="true">
    <path d="M18 91 C48 76 72 56 91 22 C102 3 115 8 106 28 C91 59 60 78 18 91Z" fill="none" stroke="currentColor" strokeWidth="2"/>
    <path d="M43 76 C35 61 26 57 18 59 C23 70 31 77 43 76Z" fill="currentColor" opacity=".72"/>
    <path d="M57 65 C48 49 39 45 30 48 C35 60 45 67 57 65Z" fill="currentColor" opacity=".58"/>
    <path d="M70 52 C63 37 54 32 46 35 C49 47 58 54 70 52Z" fill="currentColor" opacity=".76"/>
    <path d="M81 38 C76 25 68 19 61 22 C63 33 71 40 81 38Z" fill="currentColor" opacity=".56"/>
    <path d="M51 72 C58 56 67 50 76 52 C72 64 63 72 51 72Z" fill="currentColor" opacity=".46"/>
    <path d="M66 57 C75 42 85 37 94 40 C89 52 79 59 66 57Z" fill="currentColor" opacity=".68"/>
    <path d="M81 40 C91 27 101 24 108 29 C102 40 93 44 81 40Z" fill="currentColor" opacity=".5"/>
  </svg>;
}

function BotanicalFlower({className=''}) {
  return <svg className={`botanical-flower ${className}`} viewBox="0 0 100 100" aria-hidden="true">
    <g fill="currentColor">
      <ellipse cx="50" cy="22" rx="10" ry="22"/>
      <ellipse cx="78" cy="38" rx="10" ry="22" transform="rotate(55 78 38)"/>
      <ellipse cx="72" cy="70" rx="10" ry="22" transform="rotate(110 72 70)"/>
      <ellipse cx="28" cy="70" rx="10" ry="22" transform="rotate(-110 28 70)"/>
      <ellipse cx="22" cy="38" rx="10" ry="22" transform="rotate(-55 22 38)"/>
    </g>
    <circle cx="50" cy="50" r="11" fill="#E0B04B"/>
  </svg>;
}

const DecorativeBotany = () => <div className="organic-decor" aria-hidden="true"><BotanicalSprig/><BotanicalFlower/><span className="organic-seed seed-one"/><span className="organic-seed seed-two"/></div>;

export default function OrganicNaturalDesignStyle({onNavigate}) {
  return <main className="organic-page">
    <header className="organic-nav">
      <button onClick={()=>onNavigate?.('library')}><ArrowLeft size={15}/> LIBRARY</button>
      <button className="organic-brand" onClick={()=>onNavigate?.('home')}><b>RYŪMA</b><span>リューマ</span></button>
      <span>EXPRESSIVE / 06</span>
    </header>

    <section className="organic-hero">
      <div className="organic-hero-copy">
        <span className="organic-kicker">08 / 12 · EXPRESSIVE / CREATIVE</span>
        <h1>Organic /<br/><em>Natural Design</em></h1>
        <h2>Design that grows instead of being constructed.</h2>
        <p>Organic design takes inspiration from nature — its forms, textures and rhythms — to create human, warm and harmonious visual experiences.</p>
        <div className="organic-actions"><button onClick={()=>document.getElementById('organic-elements')?.scrollIntoView({behavior:'smooth'})}>EXPLORE ELEMENTS <ArrowRight size={15}/></button><span>↓ &nbsp; SCROLL TO EXPLORE</span></div>
      </div>
      <figure className="organic-hero-image-wrap">
        <img src={images.hero} alt="Close botanical photograph with layered green leaves"/>
        <figcaption><span>FIELD STUDY / 01</span><span>BOTANICAL · LIGHT · FORM</span></figcaption>
        <BotanicalSprig className="hero-sprig"/>
      </figure>
    </section>

    <section className="organic-intro">
      <DecorativeBotany/>
      <div><span className="organic-kicker">THE IDEA</span><h2>Nature isn't a theme.<br/><em>It's a behaviour.</em></h2></div>
      <p>The strongest organic interfaces do not simply place leaves around a conventional layout. They borrow nature's visual behaviour: softness, variation, imperfection, layering, rhythm and balance.</p>
      <strong>Human · Tactile · Calm · Alive</strong>
    </section>

    <section className="organic-elements" id="organic-elements">
      <div className="organic-section-head"><span>01 — THE ANATOMY</span><div><h2>Key <em>elements.</em></h2></div><p>Five ingredients turn a rigid digital surface into something warmer and more alive.</p><BotanicalFlower className="section-flower"/></div>
      <div className="organic-anatomy-grid">{anatomy.map((item,index)=><article key={item.no}>
        <div className="organic-card-meta"><span>{item.no}</span><span>VISUAL STUDY</span></div>
        <figure className="organic-card-art"><img src={item.image} alt={`${item.title} natural design reference`} loading="lazy"/>{index===1&&<BotanicalSprig className="card-sprig"/>}</figure>
        <h3>{item.title}</h3><p>{item.copy}</p>
      </article>)}</div>
    </section>

    <section className="organic-colour">
      <div className="organic-section-head"><span>02 — COLOUR SYSTEM</span><div><h2>Colours from <em>nature.</em></h2></div><p>Earth, plants, water and sun create a palette that feels calm without becoming dull.</p></div>
      <div className="organic-palette">{palette.map(([name,hex])=><div key={name} style={{'--swatch':hex}}><span>{name}</span><b>{hex}</b></div>)}</div>
      <BotanicalSprig className="colour-sprig"/>
    </section>

    <section className="organic-type">
      <div className="organic-type-copy"><span className="organic-kicker">03 — TYPOGRAPHY</span><h2>A natural<br/><em>voice.</em></h2><p>A refined serif carries the human, crafted feeling while a clean sans-serif keeps the interface clear and contemporary.</p></div>
      <div className="organic-type-specimen">
        <div className="specimen-main">Aa</div><div><span>DISPLAY / SERIF</span><strong>Good things<br/><em>grow slowly.</em></strong></div>
        <div className="specimen-sans"><span>BODY / UI / SANS</span><p>Clear text should feel as natural as the shapes around it.</p><small>ABCDEFGHIJKLMNOPQRSTUVWXYZ</small></div>
        <BotanicalFlower className="type-flower"/>
      </div>
    </section>

    <section className="organic-practice">
      <div className="organic-practice-copy"><span className="organic-kicker">04 — IN PRACTICE</span><h2>Nature in<br/><em>every detail.</em></h2><p>This is the visual language applied to a real brand interface: photography carries atmosphere, typography carries personality, and spacing lets the content breathe.</p><button onClick={()=>document.getElementById('organic-rules')?.scrollIntoView({behavior:'smooth'})}>SEE THE SYSTEM <ArrowRight size={15}/></button></div>
      <figure className="organic-practice-image"><img src={images.practice} alt="Natural forest photography used as art direction for a premium organic brand" loading="lazy"/><figcaption><span>NATURAL GOODS / 01</span><b>Good Things<br/><em>Grow Here.</em></b><small>Photography, restrained typography and warm materials work as one system.</small></figcaption><BotanicalFlower className="practice-flower"/></figure>
    </section>

    <section className="organic-rules" id="organic-rules">
      <div className="organic-section-head"><span>05 — THE RULES</span><div><h2>Let it <em>live.</em></h2></div><p>Organic design is not decoration. These rules keep the visual language intentional.</p><BotanicalSprig className="rules-sprig"/></div>
      <div className="organic-rule-grid"><article><b>01</b><h3>Soften</h3><p>Prefer curves, rounded edges and transitions that feel touched rather than manufactured.</p></article><article><b>02</b><h3>Vary</h3><p>Break repetition with small differences. Nature rarely makes two things perfectly identical.</p></article><article><b>03</b><h3>Layer</h3><p>Let photography, texture and type overlap gently to create depth and discovery.</p></article><article><b>04</b><h3>Ground</h3><p>Use warm neutrals and physical references so the interface feels connected to the real world.</p></article></div>
    </section>

    <footer className="organic-footer">
      <div><span className="organic-kicker">ORGANIC / NATURAL · EXPRESSIVE</span><h2>Design with<br/><em>a human touch.</em></h2><p>Not a leaf pasted onto a layout. A visual system inspired by the way nature grows.</p></div>
      <figure><img src={images.botany} alt="Botanical detail" loading="lazy"/><figcaption>FORM · BOTANY · TEXTURE · COLOUR · RHYTHM</figcaption><BotanicalSprig className="footer-sprig"/></figure>
      <div className="organic-footer-bottom"><span>RYŪMA / DESIGN ANATOMY</span><button onClick={()=>onNavigate?.('library')}>BACK TO LIBRARY <ArrowRight size={15}/></button></div>
    </footer>
  </main>;
}
