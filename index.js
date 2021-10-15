const colors = [
  "#FFFFFF",
  "#2196F3",
 "#4CAF50" ,
  "#FF9800",
  "#009688",
  "#795548"
]

refs = {
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]')
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const CHANGE_TIME_COLORS = 1000;
 let timerId = null;
  

  refs.startBtn.addEventListener("click", () => {
    timerId = setInterval(() => {
        let color = colors[Math.floor(Math.random()*colors.length-1)];
        document.body.style.backgroundColor = color;
        refs.startBtn.disabled = true;
    }, CHANGE_TIME_COLORS);
  });
  
  refs.stopBtn.addEventListener("click", () => {
    clearInterval(timerId);
    refs.startBtn.disabled = false;
  });

