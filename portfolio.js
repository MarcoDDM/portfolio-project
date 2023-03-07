const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const close = document.querySelector('.close');

hamburger.addEventListener('click', () => {
  const elements = document.querySelectorAll('.logo, .hamburger, .headline, .works, .about, .form');

  elements.forEach((element) => {
    element.style.display = 'none';
  });

  mobileMenu.style.display = 'flex';
  mobileMenu.style.width = '100vw';
  mobileMenu.style.height = '100vh';
});

close.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
  const elements = document.querySelectorAll('.logo, .hamburger, .headline, .works, .about, .form');

  elements.forEach((element) => {
    element.style.display = 'flex';
  });
});

let closeMenu = () => {
  const elements = document.querySelectorAll('.logo, .hamburger, .headline, .works, .about, .form');

  elements.forEach((element) => {
    element.style.display = 'flex';
  });

  mobileMenu.style.display = 'none';
};
