import { supabase } from '../lib/client.js';

const signUpBtn = document.querySelector('.sign-up-btn');
const signUpPassword = document.querySelector('.sign-up-password');
const signUpEmail = document.querySelector('.sign-up-email');
const loader = document.querySelector('.loader');
const success = document.querySelector('.success');
const invite = document.querySelector('.invite');

signUpBtn.addEventListener('click', async function signUpUser(e) {
  e.preventDefault();
  loader.style.display = 'initial';
  invite.style.display = 'initial';
  let { data: data, error: error } = await supabase.auth.signUp({
    email: signUpEmail.value,
    password: signUpPassword.value,
  });
  if (error) {
    alert(error.message);
  } else {
    // alert('Successfully signed up!');
    invite.style.display = 'none';
    // success.style.display = 'initial';
    loader.style.display = 'none';
    signUpEmail.value = '';
    signUpPassword.value = '';
  }
});

signUpPassword.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    signUpBtn.click();
  }
});
