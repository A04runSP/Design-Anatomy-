// Safe navigation layer for the existing React app.
// The dashboard already uses hash-based routing, so keep navigation inside
// the same deployed application instead of requesting a separate HTML page.
const openLibrary = () => {
  window.location.hash = "#library";
};

document.addEventListener("click", (event) => {
  const target = event.target instanceof Element ? event.target : null;
  const button = target?.closest("button");
  if (!button) return;

  const label = button.textContent.replace(/\s+/g, " ").trim().toUpperCase();
  if (label.includes("OPEN LIBRARY")) {
    event.preventDefault();
    event.stopPropagation();
    openLibrary();
  }
}, true);

document.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const target = event.target instanceof Element ? event.target : null;
  const button = target?.closest("button");
  if (!button) return;

  const label = button.textContent.replace(/\s+/g, " ").trim().toUpperCase();
  if (label.includes("OPEN LIBRARY")) {
    event.preventDefault();
    event.stopPropagation();
    openLibrary();
  }
}, true);
