import React from "react";
import { createRoot } from "react-dom/client";
import Fluent from "./Fluent.jsx";
import "./fluent.css";
import "./fluent-entry.css";

const appRoot = document.getElementById("root");
const fluentRoot = document.getElementById("fluent-root");
const fluentReactRoot = createRoot(fluentRoot);

const isFluent = () => window.location.hash.replace(/^#/, "").toLowerCase() === "fluent";

function syncFluent() {
  const active = isFluent();
  appRoot?.classList.toggle("app-root-hidden-for-fluent", active);
  fluentRoot?.classList.toggle("fluent-route-visible", active);
  fluentRoot?.style.setProperty("display", active ? "block" : "none", "important");
  fluentRoot?.style.setProperty("min-height", "100vh", "important");
  fluentRoot?.style.setProperty("width", "100%", "important");

  if (active) {
    fluentReactRoot.render(<Fluent onBack={() => { window.location.hash = "library"; }} />);
    window.scrollTo(0, 0);
  } else {
    fluentReactRoot.render(null);
  }
}

document.addEventListener("click", event => {
  const target = event.target instanceof Element ? event.target.closest('[data-route="fluent"]') : null;
  if (!target) return;
  event.preventDefault();
  event.stopPropagation();
  event.stopImmediatePropagation();
  window.location.hash = "fluent";
  syncFluent();
}, true);

window.addEventListener("hashchange", syncFluent);
syncFluent();
