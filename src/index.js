//ДОМ элементы
const bodyEl = document.querySelector('body');
const buttonStartEl = document.querySelector('[data-action="start"]');
const buttonStoptEl = document.querySelector('[data-action="stop"]');


// Массив цветов 
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

//Подключаем слушателей событий
buttonStartEl.addEventListener('click', onChangeColor);
buttonStoptEl.addEventListener('click', onCancel);

//Переменная для Интервала
let timerId = null;

//Функция рандомного числа
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

//Функция старта изменения цветов
function onChangeColor() {
    timerId = setInterval(RandomColor, 1000);
    buttonStartEl.setAttribute("disabled", true);
};

//Функция остановки смены цветов
function onCancel() {
    clearTimeout(timerId);
    buttonStartEl.removeAttribute("disabled");
};

//Функция выбора случайного цвета
function RandomColor() {
    const number = randomIntegerFromInterval(0, colors.length - 1);
        bodyEl.style.backgroundColor = colors[number];
}
