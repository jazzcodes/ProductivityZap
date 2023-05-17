// import { createClient } from 'https://cors-anywhere.herokuapp.com/https://esm.sh/@supabase/supabase-js@2'

// const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im94dnlteW51aHZ0dnhoaHV4ZW9pIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM4MDQ5NjQsImV4cCI6MTk5OTM4MDk2NH0.glQRUBx4EcVkh96LnCrxcoP0OnmSAqhk3c9cswgMG5U";
// const url = "https://oxvymynuhvtvxhhuxeoi.supabase.co";

// const supabase = createClient(url, key);
// console.log(supabase);

/* Global Menu */



const globalMenu = document.querySelector(".nav__right__global-menu--open");
const globalMenuCloseBtn = document.querySelector(".global__menu__close-btn");
const globalMenuOpenBtn = document.querySelector(".nav__right__global-menu-btn");


function closeGlobalMenu() {
    globalMenu.style.display = "none";
    console.log("global menu closed");
}

function openGlobalMenu() {
    globalMenu.style.display = "flex";
    console.log("global menu opened");
}




globalMenuCloseBtn.addEventListener("click", closeGlobalMenu);
globalMenuOpenBtn.addEventListener("click", openGlobalMenu);

// sticky feature

// add note

const addNote = document.getElementById("add-note");
const notesContainer = document.getElementById("sticky-notes-container");


function newNote() {
    // const date = new Date();
    // const day = date.getDate();
    // const month = date.getMonth();
    // const year = date.getFullYear();

    notesContainer.innerHTML += `
<div class="sticky__card">
<div class="sticky-initial">
<p class="card__heading" contenteditable="true">Write note heading here...</p>
<p class="note-area" contenteditable="true">Write note here...</p>
</div>
<div class="card__footer"><button class="card-footer-add">Add</button> </div>
</div>
`;

}

addNote.addEventListener("click", newNote);

const noteHeading = document.querySelector(".card__heading");
const noteContent = document.querySelector(".note-area");



// addNote.addEventListener("click", async function insertData(event) {

//     const heading = noteHeading.textContent;
//     const note = noteContent.textContent;

//     const { data: insertData, insertError } = await supabase
//         .from('notes')
//         .insert([
//             { 'heading': heading, 'note': note },
//         ])

//     location.reload();


// });


