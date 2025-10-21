document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  const phoneInput = document.getElementById("phone");
  let allowAutoReset = false;

  phoneInput.addEventListener("input", () => {
    phoneInput.value = phoneInput.value.replace(/\D/g, "");
  });

  contactForm.addEventListener("reset", (e) => {
    if (!allowAutoReset) {
      const confirmReset = confirm("Are you sure you want to clear all fields?");
      if (!confirmReset) {
        e.preventDefault();
      }
    }
  });

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const phone = phoneInput.value.trim();

    if (phone.length < 7) {
      alert("Please enter a valid phone number with at least 7 digits.");
      return;
    }

    alert("Message sent successfully. Thank you for reaching out!");

    allowAutoReset = true;
    contactForm.reset();
    allowAutoReset = false;
  });
});