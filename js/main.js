"use strict";
"use strict";

var hamburger = document.querySelector(".nav__hamburger");
var mobileMenu = document.querySelector(".mobile__menu");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
  mobileMenu.classList.toggle("mobile__menu-is-active");
});
var mobileSubmit = document.querySelector(".mobile__menu-button");
mobileSubmit.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
  mobileMenu.classList.toggle("mobile__menu-is-active");
});
var list = document.querySelectorAll(".mobile__menu-link");
list.forEach(function (i) {
  i.addEventListener("click", function (e) {
    hamburger.classList.toggle("is-active");
    mobileMenu.classList.toggle("mobile__menu-is-active");
  });
});
"use strict";

var btn = document.querySelector(".review__button");
var list = document.querySelectorAll(".review__comment");
var num = 4;
btn.addEventListener("click", function () {
  list[num].classList.remove("review__comment-hidden");
  num += 1;
  list[num].classList.remove("review__comment-hidden");
  num += 1;
});
"use strict";

var nameInput = document.querySelector(".request__input-name");
var telInput = document.querySelector(".request__input-tel");
var selectInput = document.querySelector(".request__input-select");
var msgInput = document.querySelector(".request__input-msg");
var nameLabel = document.querySelector(".request__label-name");
var telLabel = document.querySelector(".request__label-tel");
var selectLabel = document.querySelector(".request__label-select");
var msgLabel = document.querySelector(".request__label-msg");
var btnSubmit = document.querySelector(".request__form-submit");
nameInput.addEventListener("input", function () {
  if (nameInput.value.length > 0) {
    nameLabel.classList.add("request__label-write");
  } else {
    nameLabel.classList.remove("request__label-write");
  }
});
telInput.addEventListener("input", function () {
  if (telInput.value.length > 0) {
    telLabel.classList.add("request__label-write");
  } else {
    telLabel.classList.remove("request__label-write");
  }

  if (telInput.value.length > 10) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
});
msgInput.addEventListener("input", function () {
  if (msgInput.value.length > 0) {
    msgLabel.classList.add("request__label-msg-write");
  } else {
    msgLabel.classList.remove("request__label-msg-write");
  }
});
selectInput.addEventListener("input", function () {
  if (selectInput.value.length > 0) {
    selectLabel.classList.add("request__label-write");
  } else {
    selectLabel.classList.remove("request__label-write");
  }
});
"use strict";

var header = document.querySelector(".header");
var hero = document.querySelector(".hero");
var headerHeight = header.offsetHeight;
var heroHeight = hero.offsetHeight;
var lastScrollTop = 0;
window.addEventListener("scroll", function () {
  var scrollDistance = window.scrollY;

  if (scrollDistance > lastScrollTop) {
    header.classList.remove("header-fixed");
    hero.style.marginTop = null;
  } else if (scrollDistance < lastScrollTop) {
    header.classList.add("header-fixed");
    hero.style.marginTop = "".concat(headerHeight, "px");
  }

  if (scrollDistance === 0) {
    header.classList.remove("header-fixed");
    hero.style.marginTop = null;
  }

  lastScrollTop = scrollDistance;
});
"use strict";

var phone = document.querySelector(".header__phone");
var form = document.querySelector(".formcallback");
var btnCallback = document.querySelector(".footer__backcall-link");
phone.addEventListener("mouseenter", function () {
  form.classList.toggle("showform");
});
form.addEventListener("mouseleave", function () {
  form.classList.toggle("showform");
});
btnCallback.addEventListener("click", function () {
  form.classList.toggle("showform");
});
"use strict";
//# sourceMappingURL=main.js.map
