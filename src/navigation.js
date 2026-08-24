import { mountFlatDesign } from "./FlatDesign.jsx";
import "./flat-library.css";

const CARD_CLASS = "flat-design-card";

function makeFlatCard() {
  const card = document.createElement("article");
  card.className = `library-style-card ${CARD_CLASS}`;
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
    <button type="button" class="library-style-action flat-design-action">VIEW STYLE <span>→</span></button>
  `;
  return card;
}

function injectFlatDesignCard() {
  const family = document.querySelector(".library-page .material-family");
  const grid = family?.querySelector(".library-grid");
  if (!grid || grid.querySelector(`.${CARD_CLASS}`)) return false;

  grid.insertBefore(makeFlatCard(), grid.firstElementChild || null);
  return true;
}

const ensureLibraryCard = () => {
  if (document.querySelector(".library-page .material-family .library-grid")) {
    injectFlatDesignCard();
  }
};

window.setInterval(ensureLibraryCard, 250);
window.addEventListener("load", ensureLibraryCard);
window.addEventListener("hashchange", () => window.setTimeout(ensureLibraryCard, 0));
window.setTimeout(ensureLibraryCard, 0);

function openFlatDesign() {
  const root = document.getElementById("root");
  if (!root) return;

  window.history.pushState({}, "", "#flat-design");
  mountFlatDesign(root, () => {
    // The FlatDesign page is mounted as a separate React root by navigation.js.
    // Changing only the hash does not remount the original library. Reloading
    // the app at #library restores the real Design Library safely.
    window.location.assign(`${window.location.pathname}#library`);
  });
  window.scrollTo(0, 0);
}

document.addEventListener("click", (event) => {
  const target = event.target instanceof Element ? event.target : null;
  const button = target?.closest(`.${CARD_CLASS} .flat-design-action`);
  if (!button) return;

  event.preventDefault();
  event.stopPropagation();
  openFlatDesign();
}, true);
