import { supabase } from '../lib/client.js';

let userId = localStorage.getItem('userId');

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

const pending = document.querySelector('.pending-list');
const done = document.querySelector('.done-list');

async function todoDataPending() {
  const { data: todo, error } = await supabase
    .from('todo')
    .select('*')
    .eq('user_id', userId)
    .eq('done', false)
    .order('id', { ascending: true });

  todo.forEach((task) => {
    pending.innerHTML += `
        <li id=${task.id} class="task-pending"> 
        ${task.task}
        </li>

        `;
  });
}

todoDataPending();

async function todoDataDone() {
  const { data: todo, error } = await supabase
    .from('todo')
    .select('*')
    .eq('user_id', userId)
    .eq('done', true)
    .order('id', { ascending: true });

  todo.forEach((task) => {
    done.innerHTML += `
        <li id=${task.id} class="task-done"> 
        ${task.task}
        </li>

        `;
  });
}

todoDataDone();

const noteFirst = document.querySelector('.firstNote-matter');

async function displayFirstNote() {
  const { data: notesLoad, errorLoad } = await supabase
    .from('notes')
    .select('*')
    .eq('user_id', userId);

  notesLoad.forEach((note) => {
    noteFirst.innerHTML = `        <div class="sticky__card-first" id="note-${note.id}">
   
    <input type="text" class="card__heading-first display-ch" id="heading-${note.id}" value="${note.heading}" readonly>

    <textarea name="" class="note-area-first display-na" cols="30" rows="8" id="content-${note.id}" readonly>${note.content}</textarea>


</div>`;
  });
}

displayFirstNote();

const seeNotes = document.querySelector('.seeNotes');

seeNotes.addEventListener('click', () => {
  window.open('../pages/sticky-notes.html', '_self');
});
