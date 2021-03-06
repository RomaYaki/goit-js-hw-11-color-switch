const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const body = document.querySelector('body');
const buttonStart = document.querySelector('button[data-action="start"]');
const buttonStop = document.querySelector('button[data-action="stop"]');

let intervalId;

buttonStart.addEventListener('click', () => {
  intervalId = setInterval(() => {
    const randomColor = colors[randomIntegerFromInterval(0, colors.length-1)];
    body.style.backgroundColor = randomColor;
  }, 1000);    
  buttonStart.disabled = true;
})

buttonStop.addEventListener('click', () => {
  clearInterval(intervalId);
  buttonStart.disabled = false;
})
