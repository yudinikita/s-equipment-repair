const hamburger = document.querySelector(".nav__hamburger");
const mobileMenu = document.querySelector(".mobile__menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
  mobileMenu.classList.toggle("mobile__menu-is-active");
});
