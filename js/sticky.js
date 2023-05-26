import { supabase } from '../lib/client.js';

// sticky feature

// add note

const addNote = document.getElementById('add-note');
const notesContainer = document.getElementById('sticky-notes-container');

const noteHeading = document.querySelector('.card__heading');
const noteContent = document.querySelector('.note-area');
const addNoteBtn = document.querySelector('.card-footer-add');
const cancelNoteBtn = document.querySelector('.card-footer-cancel');

let userId = localStorage.getItem('userId');
async function loadData() {
  // e.preventDefault();

  const { data: notesLoad, errorLoad } = await supabase
    .from('notes')
    .select('*')
    .eq('user_id', userId);
  // console.log(errorLoad);
  // console.log(notesLoad);

  notesLoad.forEach((note) => {
    notesContainer.insertAdjacentHTML(
      'beforeend',
      `        <div class="sticky__card" id="note-${note.id}">
    <div class="sticky-initial">
    <input type="text" class="card__heading display-ch" id="heading-${note.id}" value="${note.heading}" readonly>

    <textarea name="" class="note-area display-na" cols="30" rows="8" id="content-${note.id}" readonly>${note.content}</textarea>
</div>
<div class="card__footer"> <div class="note-btns"><button class="edit-note-btn" name=${note.id}>  <img src="../images/edit-icon.svg" alt="" class="edit-note-icon"></button> <button class="delete-note-btn" name=${note.id}> <img src="../images/delete-btn.svg" alt="" class="delete-note-icon" ></button></div> </div>
</div>`
    );
  });

  const editBtns = document.querySelectorAll('.edit-note-btn');

  editBtns.forEach((editBtn) => {
    editBtn.addEventListener('click', () => {
      const i = editBtn.name;

      document.querySelector(`[id="heading-${i}"]`).readOnly = false;
      document.querySelector(`[id="content-${i}"]`).readOnly = false;
      document.querySelector(`[id="content-${i}"]`).focus();

      // console.log('readonly changed of', i);
      document
        .querySelector(`[id="heading-${i}"]`)
        .addEventListener('change', async function handleChange() {
          const { data: changedData, error: changedError } = await supabase
            .from('notes')
            .update({
              heading: document.querySelector(`[id="heading-${i}"]`).value,
            })
            .eq('id', i)
            .eq('user_id', userId);
        });
      document
        .querySelector(`[id="content-${i}"]`)
        .addEventListener('change', async function handleChange() {
          const { data: changedData, error: changedError } = await supabase
            .from('notes')
            .update({
              content: document.querySelector(`[id="content-${i}"]`).value,
            })
            .eq('id', i)
            .eq('user_id', userId);
        });
    });
  });

  const deleteBtns = document.querySelectorAll('.delete-note-btn');

  deleteBtns.forEach((deleteBtn) => {
    deleteBtn.addEventListener('click', async function handleDelete() {
      const { data: delData, delError } = await supabase
        .from('notes')
        .delete()
        .eq('id', deleteBtn.name)
        .eq('user_id', userId);
      location.reload();
    });
  });

  // location.reload();
}

function newNote() {
  async function insertNote() {
    // e.preventDefault();
    const { data: noteData, error: noteError } = await supabase
      .from('notes')
      .insert([
        {
          heading: noteHeading.value,
          content: noteContent.value,
          user_id: userId,
        },
      ]);
  }

  insertNote();

  if (noteContent.value == '' || noteHeading.value == '') {
    alert('Please fill both the fields!');
    return;
  }
  // console.log('added');
  // location.reload();
  noteHeading.value = null;
  noteContent.value = null;
  // location.reload();
  // loadData();
}

addNoteBtn.addEventListener('click', (e) => {
  e.preventDefault();
  newNote();
  location.reload();
  // console.log('Add clicked');
});
cancelNoteBtn.addEventListener('click', () => {
  location.reload();
  // console.log('cancelled');
});

loadData();
