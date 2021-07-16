// смена класса для гамбургера на ноутбуках
var hamburger = document.querySelector(".nav__hamburger");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
});
