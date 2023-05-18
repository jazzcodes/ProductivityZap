
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


// pomodoro

const pomodoroBtn = document.getElementById("pomodoro");
const shortBreakBtn = document.getElementById("short-break");
const longBreakBtn = document.getElementById("long-break");
const initialTime = document.querySelector(".initial-time");
const startPause = document.getElementById("start-pause");
const notification = document.querySelector(".notification");

function pomodoroSpl() {


    let leadingSeconds = 0;
    let leadingMinutes = 0;

    let timeInterval = null;
    let timerStatus = "stopped";

    let seconds = 60;
    let minutes = 24;



    function pomodoro() {
        console.log(leadingMinutes, leadingSeconds);

        seconds--;
        if (seconds / 60 == 0) {
            minutes--;
            seconds = 60;

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

        if (seconds >= 0 && minutes >= 0) {

            initialTime.innerText = `${leadingMinutes}:${leadingSeconds}`;
            shortBreakBtn.disabled = "true";
            longBreakBtn.disabled = "true";



        }
        else {
            // initialTime.innerText = "00:00";
            // startPause.innerText = "Restart";
            reset();
            // notification.style.display = "initial";
            location.reload();



        }



        // shortBreakBtn.addEventListener("click", () => {

        //     shortBreakSpl();
        // });
        // longBreakBtn.addEventListener("click", () => {
        //     reset();
        //     longBreakSpl();
        // });
    }

    startPause.addEventListener("click",
        function () {
            if (timerStatus === "stopped") {
                timeInterval = window.setInterval(pomodoro, 1000);
                startPause.innerText = `Pause`;
                timerStatus = "started";

            }
            else {
                window.clearInterval(timeInterval);
                startPause.innerText = `Start`;
                timerStatus = "stopped";
            }

        })

    function reset() {
        window.clearInterval(timeInterval);
        seconds = 60;
        minutes = 24;


        // initialTime.innerText = "25:00";
        if (timerStatus == "started") {
            startPause.innerText = `Start`;
            timerStatus = "stopped";

        }
    };

}


pomodoroBtn.addEventListener("click", function (e) {

    e.preventDefault();

    pomodoroSpl();
    initialTime.innerText = "25:00";
    // pomodoroBtn.disabled = "true";
    // shortBreakBtn.disabled = "false";
    // longBreakBtn.disabled = "false";
});


function shortBreakSpl() {


    let leadingSeconds = 0;
    let leadingMinutes = 0;

    let timeInterval = null;
    let timerStatus = "stopped";

    let seconds = 60;
    let minutes = 4;



    function pomodoro() {
        console.log(leadingMinutes, leadingSeconds);

        seconds--;
        if (seconds / 60 == 0) {
            minutes--;
            seconds = 60;

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
        if (seconds >= 0 && minutes >= 0) {

            initialTime.innerText = `${leadingMinutes}:${leadingSeconds}`;
            pomodoroBtn.disabled = "true";
            longBreakBtn.disabled = "true";

        }
        else {
            // initialTime.innerText = "00:00";
            // startPause.innerText = "Restart";
            reset();
            location.reload();


        }

        // pomodoroBtn.addEventListener("click", reset);
        // longBreakBtn.addEventListener("click", reset);


    }

    startPause.addEventListener("click",
        function () {
            if (timerStatus === "stopped") {
                timeInterval = window.setInterval(pomodoro, 1000);
                startPause.innerText = `Pause`;
                timerStatus = "started";

            }
            else {
                window.clearInterval(timeInterval);
                startPause.innerText = `Start`;
                timerStatus = "stopped";
            }

        })

    function reset() {
        window.clearInterval(timeInterval);
        seconds = 60;
        minutes = 4;


        // initialTime.innerText = "05:00";
        if (timerStatus == "started") {
            startPause.innerText = `Start`;
            timerStatus = "stopped";

        }
    };

}

shortBreakBtn.addEventListener("click", function (e) {

    e.preventDefault();

    shortBreakSpl();
    initialTime.innerText = "05:00";
    // shortBreakBtn.disabled = "true";
    // pomodoroBtn.disabled = "false";
    // longBreakBtn.disabled = "false";
});


function longBreakSpl() {


    let leadingSeconds = 0;
    let leadingMinutes = 0;

    let timeInterval = null;
    let timerStatus = "stopped";

    let seconds = 60;
    let minutes = 14;



    function pomodoro() {
        console.log(leadingMinutes, leadingSeconds);

        seconds--;
        if (seconds / 60 == 0) {
            minutes--;
            seconds = 60;

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
        if (seconds >= 0 && minutes >= 0) {

            initialTime.innerText = `${leadingMinutes}:${leadingSeconds}`;
            pomodoroBtn.disabled = "true";
            shortBreakBtn.disabled = "true";
        }
        else {
            // initialTime.innerText = "00:00";
            // startPause.innerText = "Restart";
            reset();
            location.reload();
        }

        // shortBreakBtn.addEventListener("click", reset);
        // pomodoroBtn.addEventListener("click", reset);


    }

    startPause.addEventListener("click",
        function () {
            if (timerStatus === "stopped") {
                timeInterval = window.setInterval(pomodoro, 1000);
                startPause.innerText = `Pause`;
                timerStatus = "started";

            }
            else {
                window.clearInterval(timeInterval);
                startPause.innerText = `Start`;
                timerStatus = "stopped";
            }

        })

    function reset() {
        window.clearInterval(timeInterval);
        seconds = 60;
        minutes = 14;


        // initialTime.innerText = "15:00";
        if (timerStatus == "started") {
            startPause.innerText = `Start`;
            timerStatus = "stopped";

        }
    };

}

longBreakBtn.addEventListener("click", function (e) {

    e.preventDefault();

    longBreakSpl();
    initialTime.innerText = "15:00";
    // longBreakBtn.disabled = "true";
    // pomodoroBtn.disabled = "false";
    // shortBreakBtn.disabled = "false";

});
