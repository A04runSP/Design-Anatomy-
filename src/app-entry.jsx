import React from "react";
import { createRoot } from "react-dom/client";
import Fluent from "./Fluent.jsx";
import "./fluent-entry.css";

// Isolated Fluent route. The existing main React app stays untouched.
const fluentRoot = document.createElement("div");
fluentRoot.id = "fluent-root";
fluentRoot.style.display = "none";
fluentRoot.style.minHeight = "100vh";
document.body.appendChild(fluentRoot);
const fluentReactRoot = createRoot(fluentRoot);

function isFluentRoute() {
  return window.location.hash.replace(/^#/, "").toLowerCase() === "fluent";
}

function showFluent() {
  const appRoot = document.getElementById("root");
  if (!appRoot) return;
  const active = isFluentRoute();
  appRoot.style.display = active ? "none" : "";
  fluentRoot.style.display = active ? "block" : "none";
  if (active) {
    fluentReactRoot.render(<Fluent onBack={() => { window.location.hash = "library"; }} />);
  } else {
    fluentReactRoot.render(null);
  }
}

function bindFluentViewStyle() {
  document.querySelectorAll('[data-route="fluent"]').forEach(card => {
    const target = card.querySelector("button, a") || card;
    if (target.dataset.fluentBound === "true") return;
    target.dataset.fluentBound = "true";
    target.addEventListener("click", event => {
      event.preventDefault();
      event.stopImmediatePropagation();
      window.location.hash = "fluent";
      showFluent();
    }, true);
  });
}

function sync() {
  showFluent();
  bindFluentViewStyle();
}

window.addEventListener("hashchange", sync);
window.addEventListener("load", sync);
const appRoot = document.getElementById("root");
if (appRoot) new MutationObserver(bindFluentViewStyle).observe(appRoot, { childList: true, subtree: true });
sync();
