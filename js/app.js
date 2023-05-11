import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im94dnlteW51aHZ0dnhoaHV4ZW9pIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM4MDQ5NjQsImV4cCI6MTk5OTM4MDk2NH0.glQRUBx4EcVkh96LnCrxcoP0OnmSAqhk3c9cswgMG5U";
const url="https://oxvymynuhvtvxhhuxeoi.supabase.co";

const supabase=createClient(url, key);
console.log(supabase);

// To-do

let inputTask=document.getElementById("add-task");

// fetch data

async function loadData()
{
    let{data:task, error}= await supabase.from("todo").select("*");
    console.log(error);
    console.log(task);
    
}

loadData();

inputTask.addEventListener("keypress", async function insertData(event)
{
   if(event.key==="Enter")
   {
    event.preventDefault();
    let taskEntered=inputTask.value;
    console.log(taskEntered);
    const {data, error}= await supabase.from("todo").insert([{
        task:taskEntered
    }]);

   }


});


const globalMenu=document.querySelector(".nav__right__global-menu--open");
const globalMenuCloseBtn=document.querySelector(".global__menu__close-btn");
const globalMenuOpenBtn=document.querySelector(".nav__right__global-menu-btn");


function closeGlobalMenu()
{
    globalMenu.style.display="none";
}

function openGlobalMenu()
{
    globalMenu.style.display="flex";
}




globalMenuCloseBtn.addEventListener("click", closeGlobalMenu);
globalMenuOpenBtn.addEventListener("click", openGlobalMenu);

