// Safe navigation layer for the existing React app.
// Dashboard and library stay inside the same React application.
const openLibrary = () => {
  window.location.hash = "#library";
};

const loadMinimalismStyles = () => {
  if (document.querySelector('link[data-minimalism-styles]')) return;
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "/src/minimalism.css";
  link.dataset.minimalismStyles = "true";
  document.head.appendChild(link);
};

const openMinimalism = () => {
  loadMinimalismStyles();
  const root = document.getElementById("root");
  if (!root) return;

  root.innerHTML = `
    <main class="minimalism-page">
      <header class="minimalism-header">
        <button class="minimalism-back" type="button">← BACK TO LIBRARY</button>
        <div class="minimalism-kicker">01 · DESIGN LIBRARY</div>
      </header>
      <section class="minimalism-hero">
        <p class="minimalism-kicker">01 · MINIMALISM</p>
        <h1>Less,<br><em>but better.</em></h1>
        <p>Minimalism is a visual language built around restraint. It removes unnecessary decoration so space, hierarchy, typography and simple form can carry the experience.</p>
      </section>
      <section class="minimalism-grid">
        <article class="minimalism-card">
          <div class="minimalism-card-label"><span>SEE THE STYLE</span><span>01</span></div>
          <h2>Clarity through restraint.</h2>
          <p>The goal is not to make a screen empty. The goal is to make every remaining element purposeful.</p>
          <div class="minimalism-specimen" aria-label="Minimalism interface example">
            <nav><span>STUDIO</span><div><span>WORK</span><span>ABOUT</span><span>CONTACT</span></div></nav>
            <div class="spec-copy"><small>VISUAL IDENTITY</small><h3>Less,<br><b>but better.</b></h3><p>Give the important thing enough space to be understood before adding anything else.</p></div>
            <div class="spec-rule"></div>
            <div class="spec-meta"><span>SPACE</span><span>HIERARCHY</span><span>RESTRAINT</span></div>
          </div>
        </article>
        <article class="minimalism-card">
          <div class="minimalism-card-label"><span>VISUAL DNA</span><span>01</span></div>
          <h2>What makes it minimal?</h2>
          <p>Minimalism depends on deliberate reduction and strong relationships between the elements that remain.</p>
          <div class="minimalism-list">
            <div><span>01</span><div><strong>SPACE</strong><p>Generous breathing room keeps the interface calm and lets important content stand apart.</p></div></div>
            <div><span>02</span><div><strong>HIERARCHY</strong><p>Size, weight and position make the primary message obvious without extra decoration.</p></div></div>
            <div><span>03</span><div><strong>FORM</strong><p>Simple shapes and restrained components reduce visual noise.</p></div></div>
            <div><span>04</span><div><strong>TYPE</strong><p>Typography becomes a major visual tool because there is less competing around it.</p></div></div>
            <div><span>05</span><div><strong>RESTRAINT</strong><p>Colour, effects and decoration are used only when they serve a purpose.</p></div></div>
          </div>
        </article>
      </section>
      <section class="minimalism-wide">
        <article class="minimalism-card"><div class="minimalism-card-label"><span>FEELS LIKE</span></div><h2>Calm · Focused · Precise</h2><p>The visual rhythm is quiet because the interface isn't competing with itself for attention.</p></article>
        <article class="minimalism-card"><div class="minimalism-card-label"><span>GOOD FOR</span></div><h2>Editorial · Portfolio · Product</h2><p>Especially useful when the content, message or product itself should remain the visual focus.</p></article>
        <article class="minimalism-card"><div class="minimalism-card-label"><span>WATCH OUT</span></div><h2>Empty ≠ Minimal</h2><p>Removing elements without improving hierarchy can create a sparse interface rather than a purposeful one.</p></article>
      </section>
      <section class="minimalism-note"><span>THE TAKEAWAY</span><b>Minimalism is not about using less for the sake of less. It is about making what remains matter more.</b></section>
    </main>
  `;

  root.querySelector(".minimalism-back")?.addEventListener("click", () => {
    window.location.hash = "#library";
    window.location.reload();
  });
  window.scrollTo(0, 0);
};

const handleNavigation = (event) => {
  const target = event.target instanceof Element ? event.target : null;
  const button = target?.closest("button");
  if (!button) return;

  if (button.classList.contains("library-style-action")) {
    event.preventDefault();
    event.stopPropagation();
    openMinimalism();
    return;
  }

  const label = button.textContent.replace(/\s+/g, " ").trim().toUpperCase();
  if (label.includes("OPEN LIBRARY")) {
    event.preventDefault();
    event.stopPropagation();
    openLibrary();
  }
};

document.addEventListener("click", handleNavigation, true);
document.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  handleNavigation(event);
}, true);
