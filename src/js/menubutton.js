var menubutton = document.querySelector(".menu-button");
var menu = document.querySelector(".nav__list");

menubutton.classList.remove("menu-button--nojs");
menu.classList.remove("nav__list--nojs");

menubutton.addEventListener("click", function(evt) {
  evt.preventDefault();
  menu.classList.toggle("nav__list--open");
  menubutton.classList.toggle("menu-button--menu-open");
});

window.addEventListener("keydown", function(e) {
  if (e.keyCode === 27) {
    if (menubutton.classList.contains("menu-button--menu-open")) {
      e.preventDefault();
      menubutton.classList.remove("menu-button--menu-open");
      menu.classList.remove("nav__list--open");
    };
  };
});
