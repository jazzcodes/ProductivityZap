import { supabase } from '../lib/client.js';

const loginBtn = document.querySelector('.login-btn');
const loginPassword = document.querySelector('.login-password');
const loginEmail = document.querySelector('.login-email');
const loader = document.querySelector('.loader');

loginBtn.addEventListener('click', async function loginUser(e) {
  e.preventDefault();

  loader.style.display = 'initial';

  let { data: data, error: error } = await supabase.auth.signInWithPassword({
    email: loginEmail.value,
    password: loginPassword.value,
  });

  if (error) {
    alert(error.message);
  } else {
    loginEmail.value = '';
    loginPassword.value = '';
  }
});

loginPassword.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    loginBtn.click();
  }
});

// Check if user is logged in
async function checkAuth() {
  const user = supabase.auth.user();

  if (user) {
    window.open('../pages/dashboard.html', '_self');
  } else {
    window.open('../pages/login.html', '_self');
  }
}

// Listen to auth changes
supabase.auth.onAuthStateChange(async (event) => {
  if (event === 'SIGNED_IN') {
    window.open('../pages/dashboard.html', '_self');
  } else if (event === 'SIGNED_OUT') {
    window.open('../pages/login.html', '_self');
    alert('You have been signed out.');
  }
});

// Add this function to handle the auth state change
function handleAuthStateChange(event, session) {
  checkAuth();
}

supabase.auth.onAuthStateChange(handleAuthStateChange);
