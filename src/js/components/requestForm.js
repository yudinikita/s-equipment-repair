const nameInput = document.querySelector(".request__input-name");
const telInput = document.querySelector(".request__input-tel");
const selectInput = document.querySelector(".request__input-select");
const msgInput = document.querySelector(".request__input-msg");

const nameLabel = document.querySelector(".request__label-name");
const telLabel = document.querySelector(".request__label-tel");
const selectLabel = document.querySelector(".request__label-select");
const msgLabel = document.querySelector(".request__label-msg");

const btnSubmit = document.querySelector(".request__form-submit");

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
