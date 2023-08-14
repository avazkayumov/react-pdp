let appendMinutes = document.querySelector(".minutes");
let appendSeconds = document.querySelector(".seconds");
let appendHours = document.querySelector(".hours");

const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");

let minutes = 00;
let seconds = 00;
let hours = 00;
let interval;

function start() {
  interval = setInterval(startTimer, 1000);
}

function startTimer() {
  stopBtn.style.display = "block";
  // startBtn.style.display = "none";
  resetBtn.style.display = "block";

  seconds++;

  if (seconds >= 60) {
    minutes++;
    seconds = 0;
  }

  if (minutes >= 60) {
    hours++;
    minutes = 0;
  }
  
  appendSeconds.innerHTML = String(seconds).padStart(2, 0)
  appendMinutes.innerHTML = String(minutes).padStart(2, 0)
  appendHours.innerHTML = String(hours).padStart(2, 0)
}

function stop() {
  clearInterval(interval);
}

function reset() {
  minutes = 0;
  hours = 0;
  seconds = 0;
  appendSeconds.innerHTML = String(seconds).padStart(2, 0)
  appendMinutes.innerHTML = String(minutes).padStart(2, 0)
  appendHours.innerHTML = String(hours).padStart(2, 0)

  startBtn.style.display = "block";
  stopBtn.style.display = "none";
  resetBtn.style.display = "none";

  stop();
}
