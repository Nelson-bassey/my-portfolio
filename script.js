const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const links = document.querySelectorAll('.links a');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

links.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
})

// === alert message === 
  onsubmit="alert('Thanks! Your message has been sent successfully ✔.');"


// === this code enables the type writting === 
  const skills = [
    "Frontend Developer ",
    "Graphic designer ",
    "Book worm ",
    "Football addict ",
  ];

  let skillIndex = 0;
  let charIndex = 0;
  let currentText = "";
  let isDeleting = false;

  const typewriter = document.getElementById("typewriter");

  function typeEffect() {
    currentText = skills[skillIndex];

    if (!isDeleting && charIndex <= currentText.length) {
      typewriter.textContent = currentText.substring(0, charIndex);
      charIndex++;
    }

    if (isDeleting && charIndex >= 0) {
      typewriter.textContent = currentText.substring(0, charIndex);
      charIndex--;
    }

    if (charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000); // pause before deleting
      return;
    }

    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      skillIndex = (skillIndex + 1) % skills.length;
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
  }

  window.onload = typeEffect;