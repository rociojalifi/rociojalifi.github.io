// TODO: use IDs as selectors
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("nav");

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("nav-open");
  nav.classList.toggle("nav-open");
});

const navLinks = document.querySelectorAll(".nav__item");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navToggle.classList.remove("nav-open");
    nav.classList.remove("nav-open");
  });
});
