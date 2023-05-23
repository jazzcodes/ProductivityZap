import { supabase } from '../lib/client.js';

// // Quotes

// const quote = document.querySelector('.quote');
// const author = document.querySelector('.author');
// const button = document.querySelector('.change-quote');

// const quotes = [
//     {
//         quote: "“The greatest glory in living lies not in never falling, but in rising every time we fall.”",
//         author: "Nelson Mandela"
//     },
//     {
//         quote: "“Truth can only be found in one place: the code.”",
//         author: "Robert C. Martin"
//     },
//     {
//         quote: "“Life is what happens when you're busy making other plans.”",
//         author: "John Lennon"
//     },
//     {
//         quote: "“If life were predictable it would cease to be life, and be without flavor.”",
//         author: "Eleanor Roosevelt"
//     },
//     {
//         quote: "“Whoever is happy will make others happy too.”",
//         author: "Anne Frank"
//     },
//     {
//         quote: "“Always remember that you are absolutely unique. Just like everyone else.”",
//         author: "Margaret Mead"
//     }
// ]

// button.addEventListener("click",
//     () => {
//         const random = Math.floor(Math.random() * quotes.length);
//         quote.innerText = quotes[random].quote;
//         author.innerText = quotes[random].author;
//     }

// )

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

const logout = document.querySelector('.logout');

logout.addEventListener('click', async (e) => {
  e.preventDefault();

  let { error: error } = await supabase.auth.signOut();
  if (error) {
    alert(error.message);
  } else {
    window.open('../pages/login.html', '_self');
  }
});

async function loadUser() {
  const { data } = await supabase.auth.getUser();
  // console.log(data);
  // console.log(data['user']['email']);
  const username = document.querySelector('.profile-user');
  username.innerText = data['user']['email'];
}

loadUser();
