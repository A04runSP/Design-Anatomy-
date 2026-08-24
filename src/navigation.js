import { mountFlatDesign } from "./FlatDesign.jsx";
import "./flat-library.css";

// Flat Design bridge: only touches the existing Modern Digital Styles library section.
const injectFlatDesignCard = () => {
  if (window.location.hash !== "#library") return;

  const family = document.querySelector(".library-page .material-family");
  const grid = family?.querySelector(".library-grid");
  if (!grid || grid.querySelector(".flat-design-card")) return;

  const card = document.createElement("article");
  card.className = "library-style-card flat-design-card";
  card.innerHTML = `
    <div class="library-style-top"><span>02.01</span><span class="flat-card-mark">■</span></div>
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

  grid.insertBefore(card, grid.firstElementChild);
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

document.addEventListener("click", (event) => {
  const target = event.target instanceof Element ? event.target : null;
  const button = target?.closest(".flat-design-action");
  if (!button) return;
  event.preventDefault();
  event.stopPropagation();
  openFlatDesign();
}, true);

window.addEventListener("hashchange", () => {
  window.setTimeout(injectFlatDesignCard, 80);
});

window.setTimeout(injectFlatDesignCard, 120);
