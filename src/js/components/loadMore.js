const btn = document.querySelector(".review__button");
const list = document.querySelectorAll(".review__comment");
var num = 4;

btn.addEventListener("click", function () {
  list[num].classList.remove("review__comment-hidden");
  num += 1;
  list[num].classList.remove("review__comment-hidden");
  num += 1;
});
