// import { createClient } from 'https://cors-anywhere.herokuapp.com/https://esm.sh/@supabase/supabase-js@2'

// const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im94dnlteW51aHZ0dnhoaHV4ZW9pIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM4MDQ5NjQsImV4cCI6MTk5OTM4MDk2NH0.glQRUBx4EcVkh96LnCrxcoP0OnmSAqhk3c9cswgMG5U";
// const url = "https://oxvymynuhvtvxhhuxeoi.supabase.co";

// const supabase = createClient(url, key);
// console.log(supabase);

import { supabase } from "../lib/client.js";

// sticky feature

// add note

const addNote = document.getElementById("add-note");
const notesContainer = document.getElementById("sticky-notes-container");

const noteHeading = document.querySelector(".card__heading");
const noteContent = document.querySelector(".note-area");
const addNoteBtn = document.querySelector(".card-footer-add");
const cancelNoteBtn = document.querySelector(".card-footer-cancel");




async function loadData() {

    // e.preventDefault();

    const { data: notesLoad, errorLoad } = await supabase.from("notes").select("*");
    console.log(errorLoad);
    console.log(notesLoad);

    notesLoad.forEach((note) => {
        console.log(note.heading);
        console.log(note.content);
        console.log(note.id);
        //     notesContainer.innerHTML += `
        //     <div class="sticky__card" id="note-${note.id}">
        //     <div class="sticky-initial">
        //     <input type="text" class="card__heading" id="heading-${note.id}" value="${note.heading}">

        //     <textarea name="" class="note-area" id="" cols="30" rows="8" id="content-${note.id}">${note.content}</textarea>
        // </div>
        // <div class="card__footer"> <div class="note-btns"><button class="edit-note-btn">  <img src="../images/edit-icon.svg" alt="" class="edit-note-icon"></button> <button class="edit-note-btn">  <img src="../images/delete-btn.svg" alt="" class="delete-note-icon"></button></div> </div>
        // </div>
        // `;

        notesContainer.insertAdjacentHTML('beforeend', `        <div class="sticky__card" id="note-${note.id}">
    <div class="sticky-initial">
    <input type="text" class="card__heading display-ch" id="heading-${note.id}" value="${note.heading}" readonly>

    <textarea name="" class="note-area display-na" cols="30" rows="8" id="content-${note.id}" readonly>${note.content}</textarea>
</div>
<div class="card__footer"> <div class="note-btns"><button class="edit-note-btn" name=${note.id}>  <img src="../images/edit-icon.svg" alt="" class="edit-note-icon"></button> <button class="delete-note-btn" name=${note.id}> <img src="../images/delete-btn.svg" alt="" class="delete-note-icon" ></button></div> </div>
</div>`);


    });


    const editBtns = document.querySelectorAll(".edit-note-btn");
    // const displayCardHeading = document.querySelector(".display-ch");
    // const displayNoteArea = document.querySelector(".display-na");
    // console.log(displayCardHeading);
    // console.log(displayNoteArea);


    editBtns.forEach((editBtn) => {
        editBtn.addEventListener("click", () => {

            const i = editBtn.name;

            document.querySelector(`[id="heading-${i}"]`).readOnly = false;
            document.querySelector(`[id="content-${i}"]`).readOnly = false;
            console.log("readonly changed of", i);
            document.querySelector(`[id="heading-${i}"]`).addEventListener("change",
                async function handleChange() {
                    const { data: changedData, error: changedError } = await supabase
                        .from('notes')
                        .update({ heading: document.querySelector(`[id="heading-${i}"]`).value })
                        .eq('id', i);
                }

            )
            document.querySelector(`[id="content-${i}"]`).addEventListener("change",
                async function handleChange() {
                    const { data: changedData, error: changedError } = await supabase
                        .from('notes')
                        .update({ content: document.querySelector(`[id="content-${i}"]`).value })
                        .eq('id', i);
                }

            )
        });
    });


    const deleteBtns = document.querySelectorAll(".delete-note-btn");

    deleteBtns.forEach((deleteBtn) => {
        deleteBtn.addEventListener("click", async function handleDelete() {
            const { data: delData, delError } = await supabase
                .from('notes')
                .delete()
                .eq('id', deleteBtn.name);
            location.reload();

        });
    });


    // location.reload();

}






function newNote() {

    async function insertNote() {
        // e.preventDefault();
        const { data: noteData, error: noteError } = await supabase.from("notes").insert([{
            heading: noteHeading.value,
            content: noteContent.value
        }]

        );
    }

    insertNote();

    if (noteContent.value == "" || noteHeading.value == "") {
        alert("Please fill both the fields!");
        return;
    }
    console.log("added");
    // location.reload();
    noteHeading.value = null;
    noteContent.value = null;
    // location.reload();
    // loadData();
}



addNoteBtn.addEventListener("click", () => {
    // e.preventDefault();
    newNote();
    console.log("Add clicked");

});
cancelNoteBtn.addEventListener("click", () => {
    location.reload();
    console.log("cancelled");
});

loadData();

// function newNote() {
//     // const date = new Date();
//     // const day = date.getDate();
//     // const month = date.getMonth();
//     // const year = date.getFullYear();

//     //     notesContainer.innerHTML += `
//     //     <div class="sticky__card">
//     //     <div class="sticky-initial">
//     //     <input type="text" class="card__heading" placeholder="Write note heading here..."></input>

//     //     <textarea name="" class="note-area" id="" cols="30" rows="8" placeholder="Write note here..."></textarea>
//     // </div>
//     //     <div class="card__footer"><button class="card-footer-add">Add</button><button class="card-footer-cancel">Cancel</button></div>
//     // </div>
//     // `;

//     // let noteInitial = document.createElement('div');
//     // noteInitial.classList.add('sticky__card');


//     console.log(cancelNoteBtn);

//     cancelNoteBtn.addEventListener("click", () => {
//         location.reload();
//         console.log("reached");
//     });

// }

// addNote.addEventListener("click", newNote);






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


// loadData();