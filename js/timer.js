// import { supabase } from "../lib/client.js";


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


const startStopBtn = document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#resetBtn');


let seconds = 0;
let minutes = 0;
let hours = 0;

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

let timeInterval = null;
let timerStatus = "stopped";

function stopWatch() {
    seconds++;
    if (seconds / 60 == 1) {
        minutes++;
        seconds = 0;
        if (minutes / 60 == 1) {
            hours++;
            minutes = 0;
        }
    }

    if (seconds < 10) {
        leadingSeconds = "0" + seconds.toString();
    }
    else {
        leadingSeconds = seconds;
    }

    if (minutes < 10) {
        leadingMinutes = "0" + minutes.toString();
    }
    else {
        leadingMinutes = minutes;
    }

    if (hours < 10) {
        leadingHours = "0" + hours.toString();
    }
    else {
        leadingHours = hours;
    }

    document.getElementById('timer').innerText = `${leadingHours}:${leadingMinutes}:${leadingSeconds}`;
}


// window.setInterval(stopWatch, 1000); // time in milli seconds 


startStopBtn.addEventListener("click",
    function () {
        if (timerStatus === "stopped") {
            timeInterval = window.setInterval(stopWatch, 1000);
            document.getElementById('startStopBtn').innerHTML = `<i class="fa fa-pause id="pause" style=" background-color:#0D121F;"></i>`;
            timerStatus = "started";
        }
        else {
            window.clearInterval(timeInterval);
            document.getElementById('startStopBtn').innerHTML = `<i class="fa fa-play id="play" style=" background-color: #7C5CFC;"></i>`;
            timerStatus = "stopped";
        }

    })

resetBtn.addEventListener("click", function () {
    window.clearInterval(timeInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;

    document.getElementById('timer').innerText = "00:00:00";
    if (timerStatus == "started") {
        document.getElementById('startStopBtn').innerHTML = `<i class="fa fa-play id="play" style=" background-color: green;"></i>`;
        timerStatus = "stopped";

    }
})