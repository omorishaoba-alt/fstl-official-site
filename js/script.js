// Basic script: highlight active sidebar item based on current URL
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".sidebar nav a");
  const current = window.location.pathname.split("/").pop() || "index.html";
  links.forEach(a => {
    const href = a.getAttribute("href");
    if (href === current || (href === "index.html" && current === "")) {
      a.classList.add("active");
    }
  });
});