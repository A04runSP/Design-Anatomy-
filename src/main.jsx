import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight } from 'lucide-react';
import './styles.css';

const previews = [
  { name: 'Glassmorphism', className: 'preview-glass', accent: 'Soft surfaces, depth & light' },
  { name: 'Brutalism', className: 'preview-brutal', accent: 'Raw structure, bold contrast' },
  { name: 'Minimalism', className: 'preview-minimal', accent: 'Reduction, rhythm & clarity' },
  { name: 'Dark UI', className: 'preview-dark', accent: 'Contrast, atmosphere & focus' },
  { name: 'Material', className: 'preview-material', accent: 'Systems, motion & hierarchy' },
];

function HomePage() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % previews.length);
    }, 2500);
    return () => window.clearInterval(timer);
  }, []);

  const jumpIn = () => {
    window.dispatchEvent(new CustomEvent('ryuma:navigate', { detail: 'dashboard' }));
  };

  return (
    <main className="home-shell">
      <div className="aurora aurora-one" />
      <div className="aurora aurora-two" />
      <div className="grain" />

      <nav className="topbar" aria-label="Primary navigation">
        <div className="brand-lockup">
          <span className="brand-mark">R</span>
          <span className="brand-name">RYUMA</span>
        </div>
        <span className="product-label">DESIGN ANATOMY</span>
      </nav>

      <section className="hero">
        <h1>Design has a<br /><span>language.</span></h1>
        <p className="hero-copy">
          Explore the visual systems behind the designs you see — and discover how colour,
          type, form, space and motion work together.
        </p>
        <button className="jump-button" onClick={jumpIn}>
          <span>JUMP IN</span><ArrowRight size={18} />
        </button>
      </section>

      <section className="preview-section" aria-label="Live design preview">
        <div className="section-meta">
          <div>
            <span className="section-kicker">LIVE PREVIEW</span>
            <h2>Watch design change.</h2>
          </div>
          <div className="preview-counter"><strong>0{active + 1}</strong> / 0{previews.length}</div>
        </div>

        <div className="preview-stage">
          {previews.map((preview, index) => (
            <article
              key={preview.name}
              className={`preview-card ${preview.className} ${index === active ? 'is-active' : ''}`}
              aria-hidden={index !== active}
            >
              <div className="preview-art">
                <div className="art-orbit orbit-a" />
                <div className="art-orbit orbit-b" />
                <div className="art-block block-a" />
                <div className="art-block block-b" />
                <div className="art-type">Aa</div>
                <div className="art-line" />
              </div>
              <div className="preview-caption">
                <div>
                  <span>DESIGN LANGUAGE</span>
                  <h3>{preview.name}</h3>
                </div>
                <p>{preview.accent}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="preview-dots" aria-label="Preview selection">
          {previews.map((preview, index) => (
            <button
              key={preview.name}
              className={index === active ? 'active' : ''}
              onClick={() => setActive(index)}
              aria-label={`Show ${preview.name}`}
            />
          ))}
        </div>

        <button className="jump-button secondary" onClick={jumpIn}>
          <span>JUMP IN</span><ArrowRight size={18} />
        </button>
      </section>

      <footer className="home-footer">
        <span>RYUMA / DESIGN ANATOMY</span>
        <span>LIVING COMPONENTS · UNLIMITED MOTION</span>
      </footer>
    </main>
  );
}

function App() {
  return <HomePage />;
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode><App /></React.StrictMode>
);
