import React from "react";
import { createRoot } from "react-dom/client";
import Fluent from "./Fluent.jsx";
import "./fluent-entry.css";

// This file is a Fluent-only bridge. main.jsx is loaded separately by index.html
// so the existing Home/Dashboard/Library router remains the single React app root.
const fluentRoot = document.createElement("div");
fluentRoot.id = "fluent-root";
document.body.appendChild(fluentRoot);
const fluentReactRoot = createRoot(fluentRoot);

function isFluentRoute() {
  return window.location.hash === "#fluent";
}

function renderFluentRoute() {
  const root = document.getElementById("root");
  const active = isFluentRoute();
  if (!root) return;
  root.classList.toggle("app-root-hidden-for-fluent", active);
  fluentRoot.classList.toggle("fluent-route-visible", active);

  if (active) {
    fluentReactRoot.render(
      <Fluent onBack={() => { window.location.hash = "library"; }} />
    );
  } else {
    fluentReactRoot.render(null);
  }
}

function bindFluentViewStyle() {
  document.querySelectorAll('[data-route="fluent"]').forEach(card => {
    if (card.dataset.fluentBound === "true") return;
    card.dataset.fluentBound = "true";
    card.addEventListener("click", event => {
      event.preventDefault();
      event.stopPropagation();
      window.location.hash = "fluent";
    });
  });
}

function sync() {
  renderFluentRoute();
  bindFluentViewStyle();
}

window.addEventListener("hashchange", sync);
new MutationObserver(bindFluentViewStyle).observe(document.getElementById("root"), {
  childList: true,
  subtree: true,
});

sync();
