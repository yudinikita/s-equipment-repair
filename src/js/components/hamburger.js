const hamburger = document.querySelector(".nav__hamburger");
const mobileMenu = document.querySelector(".mobile__menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
  mobileMenu.classList.toggle("mobile__menu-is-active");
});

const mobileSubmit = document.querySelector(".mobile__menu-button");

mobileSubmit.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
  mobileMenu.classList.toggle("mobile__menu-is-active");
});

const list = document.querySelectorAll(".mobile__menu-link");

list.forEach((i) => {
  i.addEventListener("click", function (e) {
    hamburger.classList.toggle("is-active");
    mobileMenu.classList.toggle("mobile__menu-is-active");
  });
});
