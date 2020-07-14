const startRef = document.querySelector('[data-action = "start"]');
const stopRef = document.querySelector('[data-action = "stop"]');

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const colorSwitchFn = () => {
  document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
};

let intervalId = null;

//=====

const intervalStart = function () {
  stopRef.addEventListener("click", intervalStop);
  startRef.removeEventListener("click", intervalStart);
  intervalId = setInterval(() => {
    colorSwitchFn();
  }, 1000);
};

const intervalStop = () => {
  stopRef.removeEventListener("click", intervalStop);
  startRef.addEventListener("click", intervalStart);
  clearInterval(intervalId);
};

startRef.addEventListener("click", intervalStart);
stopRef.addEventListener("click", intervalStop);
