import React from "react";
import { createRoot } from "react-dom/client";
import Fluent from "./Fluent.jsx";
import "./fluent-entry.css";

// Fluent is an isolated page mounted beside the existing app.
// It never replaces or reboots the main React application.
const fluentRoot = document.createElement("div");
fluentRoot.id = "fluent-root";
fluentRoot.className = "fluent-route-host";
document.body.appendChild(fluentRoot);
const fluentReactRoot = createRoot(fluentRoot);

const isFluentRoute = () => window.location.hash.replace(/^#/, "").toLowerCase() === "fluent";

function showFluent() {
  const appRoot = document.getElementById("root");
  const active = isFluentRoute();
  if (appRoot) appRoot.classList.toggle("app-root-hidden-for-fluent", active);
  fluentRoot.classList.toggle("fluent-route-visible", active);
  if (active) {
    fluentReactRoot.render(<Fluent onBack={() => { window.location.hash = "library"; }} />);
  } else {
    fluentReactRoot.render(null);
  }
}

// Use one document-level handler so the taxonomy cards work even though
// taxonomy-library.js creates/replaces them dynamically.
document.addEventListener("click", event => {
  const card = event.target instanceof Element ? event.target.closest('[data-route="fluent"]') : null;
  if (!card) return;
  event.preventDefault();
  event.stopPropagation();
  event.stopImmediatePropagation();
  if (window.location.hash !== "#fluent") {
    window.location.hash = "fluent";
  }
  showFluent();
}, true);

window.addEventListener("hashchange", showFluent);
window.addEventListener("DOMContentLoaded", showFluent);
showFluent();
