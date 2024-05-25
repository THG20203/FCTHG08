/* Common functionalities across all pages */
/* Navigation interactions: Code to handle things like navbar toggling, dropdowns, 
and mobile menu visibility. */
/* Footer behaviors: Any common interactions in the footer. */
/* Common UI Components: Modals, tabs, and accordions that appear on multiple pages. */
/* Initialization code: Setup tasks that need to run on every page, such as setting 
up event listeners for common elements. */

/* element definitions */
let navbar = document.getElementById("navbar-container");
let navbarLogo = document.getElementById("navbar-logo");
let navbarLogoText = document.getElementById("navbar-logo-text");

/* Main Navbar Scrolling */
window.onscroll = function () {
  scrollFunction();
};

const scrollFunction = function () {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navbar.classList.add("shrink");
    navbarLogo.classList.add("hide");
    navbarLogoText.style.display = "block";
  } else {
    navbar.classList.remove("shrink");
    navbarLogo.classList.remove("hide");
    navbarLogoText.style.display = "none";
    navbarLogoText.style.width = "none";
  }
};
