"use strict"

const burgerMenu = document.querySelector('.header__burger-menu');
const menu = document.querySelector('.header__nav');
const body = document.querySelector('.body');
if (burgerMenu) {
  burgerMenu.addEventListener('click', function() {
  burgerMenu.classList.toggle('_active-burger-menu');
  menu.classList.toggle('_active-menu');
  body.classList.toggle('_stop-scroll');
});
}

const inputElements = document.getElementsByClassName("contact-form__body__inputs");
const textAreaElement = document.querySelector(".contact-form__body__textarea");

if (inputElements) {
  for (let i = 0; i < inputElements.length; i++) {
    inputElements[i].addEventListener("focus", function() {
      if (inputElements[i].value === "Your name" || inputElements[i].value === "Your e-mail") {
        inputElements[i].value = "";
      }
    });
    inputElements[i].addEventListener("blur", function() {
      if (inputElements[i].value === "") {
        if (i === 0) {
          inputElements[i].value = "Your name";
        } else if (i === 1) {
          inputElements[i].value = "Your e-mail";
        }
      }
    });
  }
}

if (textAreaElement) {
  textAreaElement.addEventListener("focus", function() {
    if (textAreaElement.value === "Any information you want to share (a job offer, the project details, etc.)") {
      textAreaElement.value = "";
    }
  });
  textAreaElement.addEventListener("blur", function() {
    if (textAreaElement.value === "") {
      textAreaElement.value = "Any information you want to share (a job offer, the project details, etc.)";
    }
  });
}
