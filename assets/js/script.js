"use strict";

/**
 * Add event listeners to multiple elements
 * @param {NodeList} elements - The elements to attach the event to
 * @param {string} eventType - The type of event to listen for
 * @param {Function} callback - The function to call when the event occurs
 */
const addEventOnElements = (elements, eventType, callback) => {
  elements.forEach((element) => element.addEventListener(eventType, callback));
};

/**
 * Navbar toggle
 */
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");
const navTogglerBtn = document.querySelector(".nav-toggle-btn");

const toggleNavbar = () => {
  if (window.innerWidth > 992) return;

  const elements = [navbar, document.body, navTogglerBtn, overlay];
  elements.forEach((element) => element.classList.toggle("active"));
};

addEventOnElements(navTogglers, "click", toggleNavbar);

/**
 * Activate header & back-to-top button when window scrolls down to 200px
 */
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElemOnScroll = () => {
  const isActive = window.scrollY > 200;
  header.classList.toggle("active", isActive);
  backTopBtn.classList.toggle("active", isActive);
};

window.addEventListener("scroll", activeElemOnScroll);
