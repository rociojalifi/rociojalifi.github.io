// TODO: use IDs as selectors
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("nav");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("nav-open");
    nav.classList.toggle("nav-open");
  });
}
