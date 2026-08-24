import { mountFlatDesign } from "./FlatDesign.jsx";
import "./flat-library.css";

const CARD_CLASS = "flat-design-card";
const FLAT_ROOT_ID = "flat-design-root";

function openFlatDesign() {
  if (document.getElementById(FLAT_ROOT_ID)) return;

  const flatRoot = document.createElement("div");
  flatRoot.id = FLAT_ROOT_ID;
  flatRoot.setAttribute("data-route", "flat-design");
  document.body.appendChild(flatRoot);

  document.documentElement.classList.add("flat-design-open");
  document.body.classList.add("flat-design-open");
  window.history.pushState({}, "", `${window.location.pathname}${window.location.search}#flat-design`);

  mountFlatDesign(flatRoot);
  window.scrollTo(0, 0);
}

function closeFlatDesign() {
  document.getElementById(FLAT_ROOT_ID)?.remove();
  document.documentElement.classList.remove("flat-design-open");
  document.body.classList.remove("flat-design-open");
  window.history.replaceState({}, "", `${window.location.pathname}${window.location.search}#library`);
  window.scrollTo(0, 0);
  ensureLibraryCard();
}

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

  // Attach the handler directly to the Flat Design button.
  // Nothing else on the library can trigger this navigation.
  card.querySelector(".flat-design-action")?.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    openFlatDesign();
  });

  return card;
}

function injectFlatDesignCard() {
  const family = document.querySelector(".library-page .material-family");
  const grid = family?.querySelector(".library-grid");
  if (!grid || grid.querySelector(`.${CARD_CLASS}`)) return false;
  grid.insertBefore(makeFlatCard(), grid.firstElementChild || null);
  return true;
}

function ensureLibraryCard() {
  if (document.querySelector(".library-page .material-family .library-grid")) {
    injectFlatDesignCard();
  }
}

window.setInterval(ensureLibraryCard, 250);
window.addEventListener("load", ensureLibraryCard);
window.addEventListener("hashchange", () => window.setTimeout(ensureLibraryCard, 0));
window.setTimeout(ensureLibraryCard, 0);
window.closeFlatDesign = closeFlatDesign;

window.addEventListener("popstate", () => {
  if (window.location.hash !== "#flat-design") closeFlatDesign();
});
