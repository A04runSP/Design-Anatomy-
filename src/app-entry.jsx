import "./main.jsx";
import React from "react";
import { createRoot } from "react-dom/client";
import Fluent from "./Fluent.jsx";
import "./fluent-entry.css";

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
  root.classList.toggle("app-root-hidden-for-fluent", active);
  fluentRoot.classList.toggle("fluent-route-visible", active);

  if (active) {
    fluentReactRoot.render(<Fluent onBack={() => { window.location.hash = "library"; }} />);
  } else {
    fluentReactRoot.render(null);
  }
}

function addFluentLibraryEntry() {
  const header = document.querySelector(".library-page .library-header");
  if (!header || header.querySelector(".fluent-library-entry")) return;

  const button = document.createElement("a");
  button.className = "fluent-library-entry";
  button.href = "#fluent";
  button.textContent = "FLUENT DESIGN →";
  header.appendChild(button);
}

function sync() {
  renderFluentRoute();
  if (window.location.hash === "#library") {
    window.setTimeout(addFluentLibraryEntry, 0);
  }
}

window.addEventListener("hashchange", sync);
new MutationObserver(() => {
  if (window.location.hash === "#library") addFluentLibraryEntry();
}).observe(document.getElementById("root"), { childList: true, subtree: true });

sync();
