"use strict";

const burger = document.querySelector(".burger");
const burgerTop = document.querySelector(".burger_top");
const burgerMiddle = document.querySelector(".burger_middle");
const burgerBottom = document.querySelector(".burger_bottom");
const nav = document.querySelector(".container_section_hero_nav");
const navLinks = document.querySelectorAll(".container_section_hero_li");

// Media Queries

const desktopMedia = window.matchMedia("(min-width: 1280px");

// Toggle Nav Menu with Burger

burger.addEventListener("click", () => {
  nav.classList.toggle("active_nav");
  burgerTop.classList.toggle("burgerTopClose");
  burgerMiddle.classList.toggle("burgerMiddleClose");
  burgerBottom.classList.toggle("burgerBottomClose");
});

// Close Nav Menu after Links are clicked // Mobile

navLinks.forEach((nl) => {
  nl.addEventListener("click", () => {
    nav.classList.remove("active_nav");
    burgerTop.classList.remove("burgerTopClose");
    burgerMiddle.classList.remove("burgerMiddleClose");
    burgerBottom.classList.remove("burgerBottomClose");
  });
});

// Reset Links / Remove Active Class from links // Desktop

const resetLinks = () => {
  navLinks.forEach((nl) => {
    nl.classList.remove("active_nav_links");
  });
};

// Add Active Class to Clicked Links // Desktop

navLinks.forEach((nl) => {
  nl.addEventListener("click", (e) => {
    resetLinks();
    if (e.currentTarget && desktopMedia.matches === true)
      nl.classList.add("active_nav_links");
  });
});
