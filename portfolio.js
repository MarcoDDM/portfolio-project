function showMenu() {
  const elements = document.querySelectorAll('.navbar, .headline, .works, .about, .form');
  elements.forEach((element) => {
    element.style.display = 'none';
  });

  mobileMenu.style.display = 'flex';
  mobileMenu.style.width = '100%';
  mobileMenu.style.height = '184px';

}