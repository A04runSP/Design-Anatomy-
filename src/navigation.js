import { mountFlatDesign } from "./FlatDesign.jsx";
import "./flat-library.css";

// Small navigation bridge for modular style pages that are added without
// changing the existing React library structure.
const openLibrary = () => {
  window.location.hash = "#library";
};

const openFlatDesign = () => {
  const root = document.getElementById("root");
  if (!root) return;

  window.location.hash = "#flat-design";
  mountFlatDesign(root, () => {
    window.location.hash = "#library";
    window.location.reload();
  });
  window.scrollTo(0, 0);
};

const injectModernDigitalStyles = () => {
  if (window.location.hash !== "#library") return;
  const page = document.querySelector(".library-page");
  if (!page || page.querySelector(".modern-digital-family")) return;

  const note = page.querySelector(".library-note");
  const section = document.createElement("section");
  section.className = "library-family modern-digital-family";
  section.innerHTML = `
    <div class="library-family-heading modern-digital-heading">
      <span>02</span>
      <h2>MODERN DIGITAL STYLES</h2>
      <p>Screen-native systems shaped by clarity, usability and contemporary digital interfaces.</p>
    </div>
    <div class="library-grid">
      <article class="library-style-card flat-design-card">
        <div class="library-style-top"><span>02.01</span><span class="flat-card-mark">■</span></div>
        <h2>FLAT DESIGN</h2>
        <p>Clarity through colour, typography, geometry and spacing — without unnecessary depth or decoration.</p>
        <div class="flat-library-preview">
          <div class="flat-preview-top"><b>FLAT / 02.01</b><i></i><i></i><i></i></div>
          <div class="flat-preview-body">
            <span>01</span>
            <strong>Clear<br/><b>by design.</b></strong>
            <small>COLOUR · TYPE · SHAPE</small>
            <div><i></i><i></i><i></i></div>
          </div>
        </div>
        <button class="library-style-action flat-design-action">VIEW STYLE <span>→</span></button>
      </article>
    </div>`;
  if (note) page.insertBefore(section, note); else page.appendChild(section);
};

const handleNavigation = (event) => {
  const target = event.target instanceof Element ? event.target : null;
  const button = target?.closest("button");
  if (!button) return;

  if (button.classList.contains("flat-design-action")) {
    event.preventDefault();
    event.stopPropagation();
    openFlatDesign();
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

const observer = new MutationObserver(injectModernDigitalStyles);
observer.observe(document.body, { childList: true, subtree: true });
window.addEventListener("hashchange", () => window.setTimeout(injectModernDigitalStyles, 50));
window.setTimeout(injectModernDigitalStyles, 50);
