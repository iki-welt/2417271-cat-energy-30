const button = document.querySelector('.js-toggler');
const navMenu = document.querySelector('.main-nav--js');

navMenu.classList.remove('main-nav--no-js');
button.classList.remove('js-toggler--no-js');

button.addEventListener('click', (e) => {
  e.preventDefault();

  button.classList.toggle('js-toggler--is-open');
  navMenu.classList.toggle('main-nav--is-open');
});
