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

const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');

function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}

sun.addEventListener('click', () => {
  if (localStorage.getItem('theme') === 'theme-dark') {
    setTheme('theme-light');
    moon.style.display = 'initial';
    sun.style.display = 'none';
  } else {
    setTheme('theme-dark');
    moon.style.display = 'none';
    sun.style.display = 'initial';
  }
});

moon.addEventListener('click', () => {
  if (localStorage.getItem('theme') === 'theme-dark') {
    setTheme('theme-light');
    moon.style.display = 'initial';
    sun.style.display = 'none';
  } else {
    setTheme('theme-dark');
    moon.style.display = 'none';
    sun.style.display = 'initial';
  }
});

(function () {
  if (localStorage.getItem('theme') === 'theme-dark') {
    setTheme('theme-dark');
    moon.style.display = 'none';
    sun.style.display = 'initial';
  } else {
    setTheme('theme-light');
    moon.style.display = 'initial';
    sun.style.display = 'none';
  }
})();

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
