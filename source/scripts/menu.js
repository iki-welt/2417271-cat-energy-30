const buttonMenu = document.querySelector('.js-burger');
const navMenu = document.querySelector('.js-main-nav');

buttonMenu.classList.remove('burger--no-js');
navMenu.classList.remove('main-nav--no-js');

buttonMenu.addEventListener('click', (e) => {
  e.preventDefault();

  buttonMenu.classList.toggle('burger--is-open');
  navMenu.classList.toggle('main-nav--is-open');
});
