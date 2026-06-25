/* ==== HEADER SCROLL EFFECT ==== */

/* 1. Purpose: Adds the "Scrolled" class to the header when the user scrolls down the page. */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
