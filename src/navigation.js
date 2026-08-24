import { mountFlatDesign } from "./FlatDesign.jsx";
import "./flat-library.css";

// Flat Design is integrated into the existing Modern Digital Styles family.
// The library is rendered by React, so we wait for that DOM to exist instead
// of assuming it is available at module-load time.
const injectFlatDesignCard = () => {
  const family = document.querySelector(".library-page .material-family");
  const grid = family?.querySelector(".library-grid");
  if (!grid || grid.querySelector(".flat-design-card")) return;

  const card = document.createElement("article");
  card.className = "library-style-card flat-design-card";
  card.innerHTML = `
    <div class="library-style-top">
      <span>02.01</span>
      <span class="flat-card-mark">▣</span>
    </div>
    <h2>FLAT DESIGN</h2>
    <p>Clarity through colour, typography, geometry and spacing — without unnecessary depth or decoration.</p>
    <div class="flat-library-preview" aria-label="Flat Design visual preview">
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

  // Flat Design is the first style in the Modern Digital Styles family.
  grid.insertBefore(card, grid.firstElementChild);
};

// React may replace the library DOM after navigation, so observe the root.
const observer = new MutationObserver(() => injectFlatDesignCard());
observer.observe(document.getElementById("root") || document.body, {
  childList: true,
  subtree: true,
});

window.setTimeout(injectFlatDesignCard, 0);

const openFlatDesign = () => {
  const root = document.getElementById("root");
  if (!root) return;

  // Do not trigger main.jsx's hashchange router. Push the URL silently,
  // then mount the existing FlatDesign page into the same application root.
  window.history.pushState({}, "", "#flat-design");
  mountFlatDesign(root, () => {
    window.location.hash = "library";
    window.scrollTo(0, 0);
  });
  window.scrollTo(0, 0);
};

document.addEventListener("click", (event) => {
  const target = event.target instanceof Element ? event.target : null;
  const button = target?.closest(".flat-design-action");
  if (!button) return;

  event.preventDefault();
  event.stopPropagation();
  openFlatDesign();
}, true);
