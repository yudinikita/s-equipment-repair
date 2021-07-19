const phone = document.querySelector(".header__phone");
const form = document.querySelector(".formcallback");
const btnCallback = document.querySelector(".footer__backcall-link");

phone.addEventListener("mouseenter", function () {
  form.classList.toggle("showform");
});

form.addEventListener("mouseleave", function () {
  form.classList.toggle("showform");
});

btnCallback.addEventListener("click", function () {
  form.classList.toggle("showform");
});
