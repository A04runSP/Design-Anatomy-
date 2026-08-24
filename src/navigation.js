import { mountFlatDesign } from "./FlatDesign.jsx";
import "./flat-library.css";

// Navigation bridge for modular style pages.
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

/*
 * Modern Digital Styles is ONE family.
 * Flat Design = 02.01
 * Material Design = 02.02
 *
 * Both cards live in the same .material-family grid. This avoids creating
 * a second heading/section and keeps the React library's existing family
 * structure intact.
 */
const structureModernDigitalFamily = () => {
  if (window.location.hash !== "#library") return;

  const page = document.querySelector(".library-page");
  const family = page?.querySelector(".library-family.material-family");
  const grid = family?.querySelector(".library-grid");
  if (!family || !grid) return;

  // Make the existing family explicitly represent Modern Digital Styles.
  family.classList.add("modern-digital-family");
  const heading = family.querySelector(".library-family-heading");
  if (heading) {
    const number = heading.querySelector("span");
    const title = heading.querySelector("h2");
    const copy = heading.querySelector("p");
    if (number) number.textContent = "02";
    if (title) title.textContent = "MODERN DIGITAL STYLES";
    if (copy) copy.textContent = "Screen-native systems shaped by clarity, usability and contemporary digital interfaces.";
  }

  // Material is the second style in this family.
  const materialCard = grid.querySelector(".library-style-card:not(.flat-design-card)");
  if (materialCard) {
    const tag = materialCard.querySelector(".library-style-top > span");
    if (tag) tag.textContent = "02.02";
    const previewTag = materialCard.querySelector(".material-mini-content > span");
    if (previewTag) previewTag.textContent = "02.02";
  }

  // Insert Flat Design exactly once, directly before Material Design.
  if (grid.querySelector(".flat-design-card")) return;

  const flatCard = document.createElement("article");
  flatCard.className = "library-style-card flat-design-card";
  flatCard.innerHTML = `
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
  `;

  if (materialCard) grid.insertBefore(flatCard, materialCard);
  else grid.appendChild(flatCard);
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

const observer = new MutationObserver(structureModernDigitalFamily);
observer.observe(document.body, { childList: true, subtree: true });
window.addEventListener("hashchange", () => {
  if (window.location.hash === "#flat-design") openFlatDesign();
  window.setTimeout(structureModernDigitalFamily, 50);
});

window.setTimeout(() => {
  if (window.location.hash === "#flat-design") openFlatDesign();
  structureModernDigitalFamily();
}, 50);
