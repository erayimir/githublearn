/* main.js */
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.toggle-button');
  const navLinks = document.querySelector('.nav-links');

  toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
  });
});
