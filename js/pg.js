import { createClient } from 'https://cors-anywhere.herokuapp.com/https://esm.sh/@supabase/supabase-js@2'

// import { check } from 'prettier';

const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im94dnlteW51aHZ0dnhoaHV4ZW9pIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM4MDQ5NjQsImV4cCI6MTk5OTM4MDk2NH0.glQRUBx4EcVkh96LnCrxcoP0OnmSAqhk3c9cswgMG5U";
const url = "https://oxvymynuhvtvxhhuxeoi.supabase.co";

const supabase = createClient(url, key);
console.log(supabase);

// To-do

const inputTask = document.getElementById("add-task");
const tasksList = document.querySelector(".tasks");


// fetch data from supabase & display

async function loadData() {
    const { data: todo, error } = await supabase.from("todo").select("*");
    console.log(error);
    console.log(todo);

    todo.forEach((task) => {
        console.log(task.id);
        console.log(task.task);
        tasksList.innerHTML += `
        <li id=${task.id} class="task"> <div class="task-check"><input type="checkbox" class="done" name="${task.id}" id=""> <p class="strikethrough"> ${task.task} </p> </div><button id="delete-task" name=${task.id}>Delete</button></li>
         
        `;

    });
    inputTask.value = "";
}

loadData();

//     // done status
//     const doneTask = document.querySelectorAll(".done"); // checkboxes
//     // const strikethrough = document.querySelectorAll(".strikethrough");
//     doneTask.forEach((done) => {
//         done.addEventListener("change", () => {

//             console.log(done.checked);
//             const taskID = done.name;
//             console.log("status changed ID:", taskID);

//             async function handleDone() {
//                 const { data: doneData, error: doneError } = await supabase
//                     .from('todo')
//                     .update({ done: done.checked })
//                     .eq('id', taskID);



//             }


//             handleDone();

//         });

//     }


//     );



//     const deleteBtn = document.querySelectorAll("#delete-task");



//     // deleteBtn.forEach((del) => {
//     //     del.addEventListener("click", async function handleDelete(e) {

//     //         e.preventDefault();

//     //         const { data: deleteData, error: deleteError } = await supabase
//     //             .from('todo')
//     //             .delete()
//     //             .eq('id', deleteBtn.name);

//     //         console.log("deleted");

//     //         const task = document.querySelectorAll(".task");
//     //         task.forEach((t) => {
//     //             if (t.id == deleteBtn.name) {
//     //                 taskList.remove(task);
//     //             }

//     //         });


//     //     });


//     // });

// }


// );



// // Strikethrough

// const doneTask = document.querySelectorAll(".done");














// insert data to supabase

// inputTask.addEventListener("keypress", async function insertData(event) {
//     if (event.key === "Enter") {
//         event.preventDefault();
//         let taskEntered = inputTask.value;
//         console.log(taskEntered);
//         const { data: todo, error } = await supabase.from("todo").insert([{
//             task: taskEntered
//         }]

//         );
//         location.reload();
//     }

// });


// loadData();







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

