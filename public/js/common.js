/* Common functionalities across all pages */
/* Navigation interactions: Code to handle things like navbar toggling, dropdowns, 
and mobile menu visibility. */
/* Footer behaviors: Any common interactions in the footer. */
/* Common UI Components: Modals, tabs, and accordions that appear on multiple pages. */
/* Initialization code: Setup tasks that need to run on every page, such as setting 
up event listeners for common elements. */

/* element definitions */
let navbar = document.getElementById("main-navbar__container");
let navbarContent = document.getElementById("main-navbar__content");
let navbarLogo = document.getElementById("main-navbar__logo");
let navbarLogoText = document.getElementById("main-navbar__logo--text");
let container = document.getElementById("container");

/* Main Navbar Scrolling */
window.onscroll = function () {
  scrollFunction();
};

const scrollFunction = function () {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navbar.classList.add("main-navbar__container--shrink");
    navbarContent.classList.add("main-navbar__content--shrink");
    navbarLogo.classList.add("hide");
    navbarLogoText.style.display = "block";
    container.classList.add("container--shrink");
  } else {
    navbar.classList.remove("main-navbar__container--shrink");
    navbarContent.classList.remove("main-navbar__content--shrink");
    navbarLogo.classList.remove("hide");
    navbarLogoText.style.display = "none";
    container.classList.remove("container--shrink");
  }
};
