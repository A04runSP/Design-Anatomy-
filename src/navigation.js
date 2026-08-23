import { mountMinimalism } from "./Minimalism.jsx";

// Navigation bridge for the existing React application.
// Dashboard and library remain on the existing hash routes.
const openLibrary = () => {
  window.location.hash = "#library";
};

const openMinimalism = () => {
  const root = document.getElementById("root");
  if (!root) return;

  window.location.hash = "#minimalism";
  mountMinimalism(root, () => {
    window.location.hash = "#library";
    window.location.reload();
  });
  window.scrollTo(0, 0);
};

const handleNavigation = (event) => {
  const target = event.target instanceof Element ? event.target : null;
  const button = target?.closest("button");
  if (!button) return;

  if (button.classList.contains("library-style-action")) {
    event.preventDefault();
    event.stopPropagation();
    openMinimalism();
    return;
  }

  const label = button.textContent.replace(/\s+/g, " ").trim().toUpperCase();
  if (label.includes("OPEN LIBRARY")) {
    event.preventDefault();
    event.stopPropagation();
    openLibrary();
  }
};

document.addEventListener("click", handleNavigation, true);
document.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  handleNavigation(event);
}, true);
