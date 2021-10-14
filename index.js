const colors = [
  "#FFFFFF",
  "#2196F3",
 "#4CAF50" ,
  "#FF9800",
  "#009688",
  "#795548"
]

refs = {
    body: document.querySelector('body-js'),
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]')
};


const CHANGE_TIME_COLORS = 1000;
const newColor = colors[randomIntegerFromInterval([0], [length - 1])];

console.log(newColor);

refs.startBtn.addEventListener('click', changeColor);
// refs.stopBtn.addEventListener('click', stopcChangeColor);


function changeColor(e) {
    
    setInterval(() => {

        refs.body.style.backgroundColor = '#009688';
    }, CHANGE_TIME_COLORS);
};


function randomIntegerFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};


// function newColor(colors) {
//     return randomIntegerFromInterval(colors[0],colors[5])
// };


console.log(colors.indexOf(colors))