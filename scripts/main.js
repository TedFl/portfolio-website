/* ==== HEADER SCROLL EFFECT ==== */

/* 1. Purpose: Adds the "Scrolled" class to the navigation when the user scrolls down the page. */

const header = document.querySelector(".main-nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

/* ==== MOBILE NAVIGATION TOGGLE ==== */

/* 1. Purpose: Controls the mobile navigation state. */

const hamburger = document.querySelector("#hamburger");
const navLinks = document.querySelector("#nav-links");
const body = document.body;

const openMobileMenu = () => {
  hamburger.classList.add("active");
  navLinks.classList.add("active");
  body.classList.add("no-scroll");
};

const closeMobileMenu = () => {
  hamburger.classList.remove("active");
  navLinks.classList.remove("active");
  body.classList.remove("no-scroll");
  hamburger.setAttribute("aria-expanded", "false");
};

hamburger.addEventListener("click", () => {
  const isOpen = hamburger.classList.contains("active");

  if (isOpen) {
    closeMobileMenu();
  } else {
    openMobileMenu();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMobileMenu();
  }
});
