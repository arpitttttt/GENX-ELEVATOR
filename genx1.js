document.addEventListener('DOMContentLoaded', function() {
  const navbarToggle = document.getElementById('navbar-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  navbarToggle.addEventListener('click', function() {
    mobileMenu.classList.toggle('hidden');
  });
});
