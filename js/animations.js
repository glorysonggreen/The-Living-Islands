// ============================
// HELPER FUNCTIONS
// ============================
const isInView = (el, dividend = 1) => {
  return el.getBoundingClientRect().top <= (window.innerHeight || document.documentElement.clientHeight) / dividend;
};

const revealElement = (el) => {
  el.style.opacity = 1;
  el.style.transform = 'translateY(0)';
  el.style.transition = 'all 0.8s ease-out';
  el.dataset.animated = "true";
};

// ============================
// INITIALIZE ELEMENTS HIDDEN
// ============================
const scrollElements = [
  // Index
  ...document.querySelectorAll('.intro, .video-wrapper, .cards'),
  // About
  ...document.querySelectorAll('.about-card, .about-values h2, .about-values h4, .about-values p'),
  ...document.querySelectorAll('.about-text, .about-container p, .fauna-content, .flora-content, .about-text h2, .fauna-content h2, .flora-content h2'),
  // Fauna & Flora Cards
  ...document.querySelectorAll('.fauna-card, .flora-card'),
  // Conservation
  ...document.querySelectorAll('.why-text, .why-container p, .preserve-section h2, .preserve-section p, .preserve-item, .ngo-content, .ngo-card'),
  // Contact
  ...document.querySelectorAll('.contact-info, .contact-info h1, .contact-info p, .contact-details p'),
  ...document.querySelectorAll('.contact-form, .contact-form fieldset, .contact-form .form-row, .contact-form textarea, .form-buttons button')
];

scrollElements.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(50px)';
});

// ============================
// SCROLL REVEAL ANIMATION
// ============================
const handleScrollAnimations = () => {
  scrollElements.forEach((el, index) => {
    if (!el.dataset.animated && isInView(el, 1.25)) {
      if (el.classList.contains('fauna-card') || el.classList.contains('flora-card') ||
          el.classList.contains('preserve-item') || el.classList.contains('ngo-card') ||
          el.closest('.contact-form') || el.classList.contains('contact-details')) {
        setTimeout(() => revealElement(el), index * 100);
      } else {
        revealElement(el);
      }
    }
  });
};

window.addEventListener('scroll', handleScrollAnimations);

// ============================
// CARD & BUTTON HOVER EFFECTS
// ============================
const hoverCards = [
  ...document.querySelectorAll('.card, .about-card, .fauna-card, .flora-card, .preserve-item, .ngo-card')
];

hoverCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.03)';
    card.style.transition = 'transform 0.3s ease';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
  });
});

const hoverButtons = [
  ...document.querySelectorAll('.contact-details a, .form-buttons button')
];

hoverButtons.forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.transform = 'scale(1.02)';
    btn.style.transition = 'transform 0.3s ease';
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'scale(1)';
  });
});