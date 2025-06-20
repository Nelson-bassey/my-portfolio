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