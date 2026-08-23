// Safe navigation layer: keeps routing separate from the existing React dashboard.
document.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;

  if (button.textContent.trim().includes("OPEN LIBRARY")) {
    window.location.href = "/library.html";
  }
});
