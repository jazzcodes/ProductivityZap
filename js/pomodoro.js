// pomodoro

const pomodoroBtn = document.getElementById('pomodoro');
const shortBreakBtn = document.getElementById('short-break');
const longBreakBtn = document.getElementById('long-break');
const initialTime = document.querySelector('.initial-time');
const startPause = document.getElementById('start-pause');
const notification = document.querySelector('.notification');

function pomodoroSpl() {
  let leadingSeconds = 0;
  let leadingMinutes = 0;

  let timeInterval = null;
  let timerStatus = 'stopped';

  let seconds = 60;
  let minutes = 24;

  function pomodoro() {
    seconds--;
    if (seconds / 60 == 0) {
      minutes--;
      seconds = 60;
    }

    leadingSeconds = seconds < 10 ? '0' + seconds.toString() : seconds;
    leadingMinutes = minutes < 10 ? '0' + minutes.toString() : minutes;

    if (seconds >= 0 && minutes >= 0) {
      initialTime.innerText = `${leadingMinutes}:${leadingSeconds}`;
      shortBreakBtn.disabled = 'true';
      longBreakBtn.disabled = 'true';
    } else {
      reset();

      location.reload();
    }
  }

  startPause.addEventListener('click', function () {
    if (timerStatus === 'stopped') {
      timeInterval = window.setInterval(pomodoro, 1000);
      startPause.innerText = `Pause`;
      timerStatus = 'started';
    } else {
      window.clearInterval(timeInterval);
      startPause.innerText = `Start`;
      timerStatus = 'stopped';
    }
  });

  function reset() {
    window.clearInterval(timeInterval);
    seconds = 60;
    minutes = 24;

    if (timerStatus == 'started') {
      startPause.innerText = `Start`;
      timerStatus = 'stopped';
    }
  }
}

pomodoroBtn.addEventListener('click', function (e) {
  e.preventDefault();

  pomodoroSpl();
  initialTime.innerText = '25:00';
});

function shortBreakSpl() {
  let leadingSeconds = 0;
  let leadingMinutes = 0;

  let timeInterval = null;
  let timerStatus = 'stopped';

  let seconds = 60;
  let minutes = 4;

  function pomodoro() {
    seconds--;
    if (seconds / 60 == 0) {
      minutes--;
      seconds = 60;
    }

    if (seconds < 10) {
      leadingSeconds = '0' + seconds.toString();
    } else {
      leadingSeconds = seconds;
    }

    if (minutes < 10) {
      leadingMinutes = '0' + minutes.toString();
    } else {
      leadingMinutes = minutes;
    }
    if (seconds >= 0 && minutes >= 0) {
      initialTime.innerText = `${leadingMinutes}:${leadingSeconds}`;
      pomodoroBtn.disabled = 'true';
      longBreakBtn.disabled = 'true';
    } else {
      reset();
      location.reload();
    }
  }

  startPause.addEventListener('click', function () {
    if (timerStatus === 'stopped') {
      timeInterval = window.setInterval(pomodoro, 1000);
      startPause.innerText = `Pause`;
      timerStatus = 'started';
    } else {
      window.clearInterval(timeInterval);
      startPause.innerText = `Start`;
      timerStatus = 'stopped';
    }
  });

  function reset() {
    window.clearInterval(timeInterval);
    seconds = 60;
    minutes = 4;

    if (timerStatus == 'started') {
      startPause.innerText = `Start`;
      timerStatus = 'stopped';
    }
  }
}

shortBreakBtn.addEventListener('click', function (e) {
  e.preventDefault();

  shortBreakSpl();
  initialTime.innerText = '05:00';
});

function longBreakSpl() {
  let leadingSeconds = 0;
  let leadingMinutes = 0;

  let timeInterval = null;
  let timerStatus = 'stopped';

  let seconds = 60;
  let minutes = 14;

  function pomodoro() {
    seconds--;
    if (seconds / 60 == 0) {
      minutes--;
      seconds = 60;
    }

    if (seconds < 10) {
      leadingSeconds = '0' + seconds.toString();
    } else {
      leadingSeconds = seconds;
    }

    if (minutes < 10) {
      leadingMinutes = '0' + minutes.toString();
    } else {
      leadingMinutes = minutes;
    }
    if (seconds >= 0 && minutes >= 0) {
      initialTime.innerText = `${leadingMinutes}:${leadingSeconds}`;
      pomodoroBtn.disabled = 'true';
      shortBreakBtn.disabled = 'true';
    } else {
      reset();
      location.reload();
    }
  }

  startPause.addEventListener('click', function () {
    if (timerStatus === 'stopped') {
      timeInterval = window.setInterval(pomodoro, 1000);
      startPause.innerText = `Pause`;
      timerStatus = 'started';
    } else {
      window.clearInterval(timeInterval);
      startPause.innerText = `Start`;
      timerStatus = 'stopped';
    }
  });

  function reset() {
    window.clearInterval(timeInterval);
    seconds = 60;
    minutes = 14;

    if (timerStatus == 'started') {
      startPause.innerText = `Start`;
      timerStatus = 'stopped';
    }
  }
}

longBreakBtn.addEventListener('click', function (e) {
  e.preventDefault();

  longBreakSpl();
  initialTime.innerText = '15:00';
});

const resetPomodoro = document.getElementById('reset-pomodoro');

resetPomodoro.addEventListener('click', () => {
  location.reload();
});
