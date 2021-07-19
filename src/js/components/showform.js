const phone = document.querySelector(".header__phone");
const form = document.querySelector(".formcallback");

phone.addEventListener("mouseover", function () {
  form.classList.toggle("showform");
});

form.addEventListener("mouseout", function () {
  form.classList.toggle("showform");
});
