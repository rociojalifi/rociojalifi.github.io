// TODO: use IDs as selectors
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("nav");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("nav-open");
    nav.classList.toggle("nav-open");
  });
}

let logo = document.getElementById("logo")
let icon = document.getElementById("icon");
  icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")){
    icon.src = "assets/images/light.png"
    logo.src = "assets/images/dark-logo.png"
  } else {
    icon.src = "assets/images/dark.png"
    logo.src = "assets/images/logo.png"

  }
}
