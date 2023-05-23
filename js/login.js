import { supabase } from '../lib/client.js';

const loginBtn = document.querySelector('.login-btn');
const loginPassword = document.querySelector('.login-password');
const loginEmail = document.querySelector('.login-email');

loginBtn.addEventListener('click', async function loginUser(e) {
  console.log(loginEmail.value);
  console.log(loginPassword.value);

  e.preventDefault();

  let { data: data, error: error } = await supabase.auth.signInWithPassword({
    email: loginEmail.value,
    password: loginPassword.value,
  });

  if (error) {
    alert(error.message);
  } else {
    console.log(data);
  }
});

// Check if user is logged in
async function checkAuth() {
  const user = supabase.auth.user();

  console.log('Checking auth...', user);

  if (user) {
    console.log('User is logged in');
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
  console.log('Auth state changed:', event, session);
  checkAuth();
}

supabase.auth.onAuthStateChange(handleAuthStateChange);

// this is needed whenever reloading the page
// checkAuth();
