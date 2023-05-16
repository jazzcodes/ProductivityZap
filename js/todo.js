import { createClient } from 'https://cors-anywhere.herokuapp.com/https://esm.sh/@supabase/supabase-js@2'

const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im94dnlteW51aHZ0dnhoaHV4ZW9pIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM4MDQ5NjQsImV4cCI6MTk5OTM4MDk2NH0.glQRUBx4EcVkh96LnCrxcoP0OnmSAqhk3c9cswgMG5U";
const url = "https://oxvymynuhvtvxhhuxeoi.supabase.co";

const supabase = createClient(url, key);
console.log(supabase);



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

        //display data

        tasksList.innerHTML += `
        <li id=${task.id} class="task"> <div class="task-check"><input type="checkbox" class="done" name="${task.id}" id=""> <p class="strikethrough"> ${task.task} </p> </div><button class="delete-task" name=${task.id}><img src="../images/delete-btn.svg" alt="" class="del-icon"> </button></li>
         
        `;


        // handle delete

        const deleteBtns = document.querySelectorAll(".delete-task");

        deleteBtns.forEach((del) => {
            del.addEventListener("click", async function handleDelete() {
                console.log("deleted", del.name);
                const { data: delData, delError } = await supabase
                    .from('todo')
                    .delete()
                    .eq('id', del.name);

                location.reload();

            });



        });



        // console.log(tasksList);
        const doneTask = document.querySelectorAll(".task .task-check .done"); // checkboxes
        console.log(doneTask);

        async function handleCheck() {

            console.log(tasksList);
            const taskItem = document.querySelectorAll(".task .task-check .done");
            console.log(taskItem);

            const { data: todoNew, errorNew } = await supabase.from("todo").select("id").eq("done", 'true');
            console.log(errorNew);
            console.log(todoNew);

            const todoNew2 = todoNew.map(a => a.id);


            taskItem.forEach((t) => {
                console.log(todoNew2);
                console.log("true-btn-name", t.name);
                if (todoNew2.includes(Number(t.name))) {
                    console.log(t.name, "is there");
                    t.checked = true;
                }

                else {
                    console.log("not there");
                }
            }
            );





        }
        // done status
        doneTask.forEach((done) => {
            console.log(done);

            done.addEventListener("change", () => {


                console.log("clicked");
                console.log(done.checked);
                const taskID = done.name;
                task.done = done.checked;

                console.log("status changed ID:", taskID);


                async function handleDone() {
                    const { data: doneData, error: doneError } = await supabase
                        .from('todo')
                        .update({ done: done.checked })
                        .eq('id', taskID);



                }

                handleDone();
                // handleCheck();

                console.log("new status", task.done);


            });




            handleCheck();


        });





    });






    inputTask.value = "";




}








// insert data to supabase

inputTask.addEventListener("keypress", async function insertData(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        let taskEntered = inputTask.value;
        console.log(taskEntered);
        const { data: todo, error } = await supabase.from("todo").insert([{
            task: taskEntered
        }]

        );
        location.reload();
    }

});



loadData();



