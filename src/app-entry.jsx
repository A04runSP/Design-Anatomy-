import React from "react";
import { createRoot } from "react-dom/client";
import Fluent from "./Fluent.jsx";
import "./fluent-entry.css";

class FluentBoundary extends React.Component {
  constructor(props) { super(props); this.state = { error: null }; }
  static getDerivedStateFromError(error) { return { error }; }
  render() {
    if (this.state.error) return (
      <main style={{minHeight:"100vh",background:"#0b0f14",color:"#fff",padding:"40px",fontFamily:"system-ui,sans-serif"}}>
        <p style={{color:"#79aaff",letterSpacing:".14em",fontSize:"11px"}}>DESIGN ANATOMY · FLUENT DESIGN</p>
        <h1 style={{fontSize:"42px",margin:"20px 0 10px"}}>Fluent failed to render.</h1>
        <p style={{color:"#aeb6c2",maxWidth:"650px",lineHeight:1.6}}>The Fluent route loaded, but its component threw a runtime error.</p>
        <pre style={{marginTop:"24px",padding:"18px",border:"1px solid rgba(255,255,255,.15)",borderRadius:"10px",whiteSpace:"pre-wrap",color:"#ffb4b4"}}>{String(this.state.error?.stack || this.state.error)}</pre>
        <button onClick={() => { window.location.hash = "library"; }} style={{marginTop:"20px",padding:"11px 15px",borderRadius:"8px",border:"1px solid rgba(255,255,255,.2)",background:"rgba(255,255,255,.06)",color:"#fff"}}>← BACK TO LIBRARY</button>
      </main>
    );
    return this.props.children;
  }
}

let fluentRoot = document.getElementById("fluent-root");
if (!fluentRoot) {
  fluentRoot = document.createElement("div");
  fluentRoot.id = "fluent-root";
  document.body.appendChild(fluentRoot);
}
fluentRoot.className = "fluent-route-host";
const fluentReactRoot = createRoot(fluentRoot);
const isFluentRoute = () => window.location.hash.replace(/^#/, "").toLowerCase() === "fluent";

function showFluent() {
  const appRoot = document.getElementById("root");
  const active = isFluentRoute();
  fluentRoot.classList.toggle("fluent-route-visible", active);
  fluentRoot.style.display = active ? "block" : "none";
  fluentRoot.style.minHeight = "100vh";
  fluentRoot.style.width = "100%";
  fluentRoot.style.position = active ? "relative" : "";
  fluentRoot.style.zIndex = active ? "2147483647" : "";
  if (active) {
    fluentReactRoot.render(<FluentBoundary><Fluent onBack={() => { window.location.hash = "library"; }} /></FluentBoundary>);
    requestAnimationFrame(() => {
      if (isFluentRoute()) {
        appRoot?.classList.add("app-root-hidden-for-fluent");
        window.scrollTo(0, 0);
      }
    });
  } else {
    appRoot?.classList.remove("app-root-hidden-for-fluent");
    fluentReactRoot.render(null);
  }
}

document.addEventListener("click", event => {
  const card = event.target instanceof Element ? event.target.closest('[data-route="fluent"]') : null;
  if (!card) return;
  event.preventDefault(); event.stopPropagation(); event.stopImmediatePropagation();
  window.location.hash = "fluent";
  showFluent();
}, true);
window.addEventListener("hashchange", showFluent);
showFluent();
