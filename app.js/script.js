"use strict";

const burger = document.querySelector(".burger");
const burgerTop = document.querySelector(".burger_top");
const burgerMiddle = document.querySelector(".burger_middle");
const burgerBottom = document.querySelector(".burger_bottom");
const nav = document.querySelector(".container_section_hero_nav");
const navLinks = document.querySelectorAll(".container_section_hero_li");
const projectLinks = document.querySelectorAll(
  ".container_section_projects_li"
);
const modalImg = document.querySelector(".modalImage");
const scrolledNav = document.querySelectorAll(".scrolled_nav");
const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

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
    if (e.currentTarget && desktopMedia.matches === true) {
      resetLinks();
      nl.classList.add("active_nav_links");
    }
  });
});

// Show Images Corresponding to Project Links Clicked

projectLinks.forEach((pl) => {
  pl.addEventListener("click", (e) => {
    const newImg = e.currentTarget.children[1].src;
    modalImg.src = newImg;
  });
});

// Nav Links Highlighted when Scrolled to Sections

// Observer Callback Function

const sectionsFunction = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  // entry.target.classList.toggle("active_nav_links", entry.isIntersecting);

  if (entry.isIntersecting && desktopMedia.matches === true) {
    let current = entry.target.getAttribute("id");

    navLinks.forEach((nl) => {
      if (nl.classList[1] === current) {
        resetLinks();
        nl.classList.add("active_nav_links");
      }
    });
  }
};

// Observer Options

const sectionsOptions = {
  root: null,
  threshold: 0,
  rootMargin: "-10px",
};

// Actual Observer

const sectionsObserver = new IntersectionObserver(
  sectionsFunction,
  sectionsOptions
);

scrolledNav.forEach((sn) => {
  sectionsObserver.observe(sn);
});

// Contact Form with Email JS

const sendMail = () => {
  const params = {
    from_name: document.getElementById("fullName").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value,
  };

  emailjs.send("service_giz9sqf", "template_tazcnoa", params).then((res) => {
    if (
      params.from_name.value === "" ||
      params.email_id.value === "" ||
      params.message.value === ""
    ) {
      alert("All Fields Must be Filled!");
    } else {
      alert(`Success! Email Sent! ${res.status}`);
    }
  });
};

// Image Carousel Slider

// Counter

let curSlide = 0;
const maxSlide = slides.length;

// Go to Next Slide Function

const goToSlide = (slide) => {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};

// Project Slider Carousel

goToSlide(0);

// Next Slide

const nextSlide = () => {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  goToSlide(curSlide);
};

// Previous Slide

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }

  goToSlide(curSlide);
};

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);
