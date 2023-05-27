/* Mobile Menu */

const mobileMenu = document.querySelector('.open-nav-mobile');
const globalMenuCloseBtn = document.querySelector('.global__menu__close-btn');
const mobileMenuOpenBtn = document.querySelector('.mobile-menu');

function closeGlobalMenu() {
  mobileMenu.style.display = 'none';
  mobileMenuOpenBtn.style.display = 'initial';
  // console.log('mobile menu closed');
}

function openGlobalMenu() {
  mobileMenu.style.display = 'flex';
  mobileMenuOpenBtn.style.display = 'none';
  // console.log('mobile menu opened');
}

globalMenuCloseBtn.addEventListener('click', closeGlobalMenu);
mobileMenuOpenBtn.addEventListener('click', openGlobalMenu);

const loginBtn = document.querySelector('.login');
const signUpBtn = document.querySelector('.sign-up');

loginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  window.open('../pages/login.html');
});

signUpBtn.addEventListener('click', (e) => {
  e.preventDefault();
  window.open('../pages/sign-up.html');
});
