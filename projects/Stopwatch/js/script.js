const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const pauseBtn = document.querySelector(".pause");
const resumeBtn = document.querySelector(".resume");

const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

startBtn.onclick = function () {
  this.classList.add("hidden");
  stopBtn.classList.remove("hidden");
  pauseBtn.classList.remove("hidden");
  staratStopwatch();
};

stopBtn.onclick = function () {
  this.classList.add("hidden");
  startBtn.classList.remove("hidden");
  pauseBtn.classList.add("hidden");
  resumeBtn.classList.add("hidden");
  stopStopwatch();
};

pauseBtn.onclick = function () {
  this.classList.add("hidden");
  resumeBtn.classList.remove("hidden");
  clearInterval(interval);
};
resumeBtn.onclick = function () {
  this.classList.add("hidden");
  pauseBtn.classList.remove("hidden");
  staratStopwatch();
};

let interval;
function staratStopwatch() {
  interval = setInterval(startTimer, 1000);
}

function startTimer() {
  let completeSec, completeMinute, completeHour;

  completeSec = updateTime(sec, 59);
  if (completeSec) completeMinute = updateTime(min, 59);
  if (completeMinute) completeHour = updateTime(hour, 23);
  if (completeHour) clearInterval(interval);
}

function updateTime(timeName, maxTime) {
  let getTime = parseInt(timeName.innerText);
  if (getTime >= maxTime) {
    timeName.innerText = "00";
    return true;
  } else
    getTime < 9
      ? (timeName.innerText = "0" + ++getTime)
      : (timeName.innerText = ++getTime);
}

function stopStopwatch() {
  hour.innerText = "00";
  min.innerText = "00";
  sec.innerText = "00";
  clearInterval(interval);
}
