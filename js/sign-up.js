import { supabase } from '../lib/client.js';

const signUpBtn = document.querySelector('.sign-up-btn');
const signUpPassword = document.querySelector('.sign-up-password');
const signUpEmail = document.querySelector('.sign-up-email');

signUpBtn.addEventListener('click', async function signUpUser(e) {
  e.preventDefault();

  let { data: data, error: error } = await supabase.auth.signUp({
    email: signUpEmail.value,
    password: signUpPassword.value,
  });
  if (error) {
    alert(error.message);
  } else {
    alert('Successfully signed up!');
  }
});

signUpPassword.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    signUpBtn.click();
  }
});
