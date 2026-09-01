import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import './view-style.css';

const principles = [
  { number:'01', title:'Mark-making', copy:'A mark records an action. It turns movement, memory and observation into something that can remain after the maker is gone.' },
  { number:'02', title:'Symbol', copy:'A repeated image can carry meaning. Animals, hands and simple forms become a visual vocabulary shared with others.' },
  { number:'03', title:'Place', copy:'The surface matters. Rock, wall, shadow and natural contours become part of the composition rather than a neutral canvas.' },
  { number:'04', title:'Story', copy:'Images can connect people to events, animals, beliefs and one another. Visual communication begins before typography or screens.' },
];

export default function ViewStyle({ style = 'The First Mark', onNavigate }) {
  const isFirst = style === 'The First Mark' || style === 'Lascaux / Cave Art' || style === 'Origins';

  if (!isFirst) {
    return <main className="style-page"><section className="style-empty"><span className="style-kicker">DESIGN LANGUAGE</span><h1>{style}</h1><p>This visual language is ready to be explored.</p></section></main>;
  }

  return <main className="style-page first-mark-page">
    <div className="style-glow style-glow-a"/><div className="style-glow style-glow-b"/>
    <header className="style-nav">
      <div className="style-brand"><b>RYUMA</b><span>リューマ</span></div>
      <span>DESIGN ANATOMY / ORIGINS</span>
    </header>

    <section className="style-hero">
      <div className="style-hero-copy">
        <span className="style-kicker">00 / BEFORE SCREENS</span>
        <h1>The first<br/><em>design.</em></h1>
        <p className="style-lead">Before interfaces, posters, books or type, humans were already making visual decisions.</p>
        <p>One of the earliest forms of visual communication was the mark: an image, symbol or trace placed deliberately onto a surface.</p>
      </div>
      <div className="cave-visual" aria-label="Abstract cave-wall interpretation of early mark-making">
        <div className="cave-light"/>
        <div className="cave-animal animal-one"/><div className="cave-animal animal-two"/>
        <div className="cave-hand"><i/><i/><i/><i/><i/></div>
        <div className="cave-line line-one"/><div className="cave-line line-two"/><div className="cave-line line-three"/>
        <span className="cave-caption">EARLY VISUAL LANGUAGE</span>
      </div>
    </section>

    <section className="style-section origin-section">
      <div className="style-section-label"><span>01</span><b>THE ORIGIN</b></div>
      <div className="style-section-content">
        <h2>Before a style,<br/><em>there was a mark.</em></h2>
        <p>Long before modern design systems, people used images and marks to record what they saw, remembered, valued or wanted to communicate.</p>
        <p className="style-strong">The surface became the first interface.</p>
        <div className="origin-equation"><span>OBSERVE</span><i>→</i><span>MARK</span><i>→</i><span>MEANING</span></div>
      </div>
    </section>

    <section className="style-section anatomy-section-style">
      <div className="style-section-label"><span>02</span><b>DESIGN ANATOMY</b></div>
      <div className="style-section-content">
        <h2>Read the<br/><em>visual decisions.</em></h2>
        <div className="principles-grid">{principles.map(item => <article className="principle" key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.copy}</p></article>)}</div>
      </div>
    </section>

    <section className="style-section visual-language-section">
      <div className="style-section-label"><span>03</span><b>VISUAL LANGUAGE</b></div>
      <div className="style-section-content">
        <h2>Simple parts.<br/><em>Powerful relationships.</em></h2>
        <p>A cave image does not need typography, grids or digital components to communicate. It uses form, contrast, position, repetition and context.</p>
        <div className="language-stack"><span>FORM</span><i>+</i><span>CONTRAST</span><i>+</i><span>SYMBOL</span><i>+</i><span>PLACE</span><strong>= MEANING</strong></div>
      </div>
    </section>

    <section className="style-footer">
      <span className="style-kicker">THE FIRST MARK</span>
      <h2>Every visual language<br/><em>starts somewhere.</em></h2>
      <p>From the cave wall to the screen, design keeps turning decisions into meaning.</p>
      <div className="style-footer-meta"><span>ORIGINS / 01</span><span>EARLY VISUAL COMMUNICATION</span></div>
    </section>
  </main>;
}
