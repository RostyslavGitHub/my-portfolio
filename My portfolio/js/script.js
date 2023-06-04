"use strict"

const burgerMenu = document.querySelector('.header__burger-menu');
const menu = document.querySelector('.header__nav');
const body = document.querySelector('.body');
const closeMenu = () => {
  burgerMenu.classList.toggle('_active-burger-menu');
  menu.classList.toggle('_active-menu');
  body.classList.toggle('_stop-scroll');
}

if (burgerMenu) {
  burgerMenu.addEventListener('click', function() {
  closeMenu();
});
}

const navLinks = document.getElementsByClassName("header__nav__link");
const about = document.querySelector(".about");
const skills = document.querySelector(".skills");
const works = document.querySelector(".projects");
const contact = document.querySelector(".contact-form");

if (navLinks) {
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function() {
      if (i === 0) {
        about.scrollIntoView();
      } else if (i === 1) {
        skills.scrollIntoView();
      } else if (i === 2) {
        works.scrollIntoView();
      } else if (i === 3) {
        contact.scrollIntoView();
      }
      if (innerWidth < 699)
      closeMenu();
    });
  }
}


const inputElements = document.getElementsByClassName("contact-form__body__inputs");
const textAreaElement = document.querySelector(".contact-form__body__textarea");
const subminButton = document.querySelector(".contact-form__body__button");

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

  subminButton.addEventListener("click", function(){
    textAreaElement.value = "Any information you want to share (a job offer, the project details, etc.)";
    inputElements[0].value = "Your name";
    inputElements[1].value = "Your e-mail";
  })
}
