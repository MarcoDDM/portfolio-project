const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const close = document.querySelector('.close');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.add('active');
  document.body.classList.add('noScroll');
});

close.addEventListener('click', () => {
  mobileMenu.classList.remove('active'); // This hides the menu
  document.body.classList.remove('noScroll'); // This enables the scrolling on the body again.
});

const menuLinks = document.querySelectorAll('.menu-link');

// Iterate over the resulting array of links:

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active'); // This hides the menu
    document.body.classList.remove('noScroll'); // This enables the scrolling on the body again.
  });
});
