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

/* 1. Purpose: Toggles the mobile navigation state when the hamburger button is clicked. */

const hamburger = document.querySelector("#hamburger");
const navLinks = document.querySelector("#nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");

  /* this is mainly for accessibility, so screen readers know whether the menu is open or closed. */
  const isOpen = hamburger.classList.contains("active");
  hamburger.setAttribute("aria-expanded", isOpen);
});
