const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

// Toggle menu on click
mobileMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  navLinks.classList.toggle("active");

  // Lock body scroll when menu is open
  if (navLinks.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
});

// Close menu when clicking outside or on a link
document.addEventListener("click", (e) => {
  if (
    navLinks.classList.contains("active") &&
    !mobileMenu.contains(e.target) &&
    !navLinks.contains(e.target)
  ) {
    mobileMenu.classList.remove("active");
    navLinks.classList.remove("active");
    document.body.style.overflow = "auto";
  }
});

// Close menu when a nav link is clicked
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    navLinks.classList.remove("active");
    document.body.style.overflow = "auto";
  });
});
