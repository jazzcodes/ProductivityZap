import { supabase } from '../lib/client.js';

/* Mobile Menu */

const mobileMenu = document.querySelector('.dashboard-open-mobile-menu');
const globalMenuCloseBtn = document.querySelector('.global__menu__close-btn');
const mobileMenuOpenBtn = document.querySelector('.dashboard-mobile-menu-icon');

function closeGlobalMenu() {
  mobileMenu.style.display = 'none';
  mobileMenuOpenBtn.style.display = 'initial';
  // console.log('mobile menu closed');
}

function openGlobalMenu() {
  mobileMenu.style.display = 'initial';
  mobileMenuOpenBtn.style.display = 'none';
  // console.log('mobile menu opened');
}

globalMenuCloseBtn.addEventListener('click', closeGlobalMenu);
mobileMenuOpenBtn.addEventListener('click', openGlobalMenu);

const mobileMenuProfile = document.querySelector('.profile-open');
const globalMenuCloseBtnProfile = document.querySelector(
  '.global__menu__close-btn-profile'
);
const mobileMenuOpenBtnProfile = document.querySelector('.profile-dropdown');

function closeProfileMenu() {
  mobileMenuProfile.style.display = 'none';
  mobileMenuOpenBtnProfile.style.display = 'initial';
  // console.log('profile menu closed');
}

function openProfileMenu() {
  mobileMenuProfile.style.display = 'flex';
  mobileMenuOpenBtnProfile.style.display = 'none';
  // console.log('profile menu opened');
}

globalMenuCloseBtnProfile.addEventListener('click', closeProfileMenu);
mobileMenuOpenBtnProfile.addEventListener('click', openProfileMenu);

async function loadUser() {
  const { data } = await supabase.auth.getUser();
  // console.log(data);
  // console.log(data['user']['email']);
  const username = document.querySelector('.profile-user');
  username.innerText = data['user']['email'];
  console.log(data);
  localStorage.setItem('userId', data['user']['id']);
  localStorage.setItem('loggedUser', JSON.stringify(data['user']['email']));
}

loadUser();

const logout = document.querySelector('.logout');

logout.addEventListener('click', async (e) => {
  e.preventDefault();

  let { error: error } = await supabase.auth.signOut();
  if (error) {
    alert(error.message);
  } else {
    localStorage.setItem('loggedUser', null);
    localStorage.setItem('userId', null);
    window.open('../pages/login.html', '_self');
  }
});
