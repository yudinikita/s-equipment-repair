const header = document.querySelector(".header");
const hero = document.querySelector(".hero");

const headerHeight = header.offsetHeight;
const heroHeight = hero.offsetHeight;

let lastScrollTop = 0;

window.addEventListener("scroll", () => {
  let scrollDistance = window.scrollY;

  if (scrollDistance > lastScrollTop) {
    header.classList.remove("header-fixed");
    hero.style.marginTop = null;
  } else if (scrollDistance < lastScrollTop) {
    header.classList.add("header-fixed");
    hero.style.marginTop = `${headerHeight}px`;
  }

  if (scrollDistance === 0) {
    header.classList.remove("header-fixed");
    hero.style.marginTop = null;
  }

  lastScrollTop = scrollDistance;
});
