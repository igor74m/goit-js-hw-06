// Напиши скрипт створення і очищення колекції елементів.
//  Користувач вводить кількість елементів в input і натискає
//   кнопку Створити, після чого рендериться колекція.
//   Натисненням на кнопку Очистити, колекція елементів очищається.\

// Створи функцію createBoxes(amount),
//  яка приймає один параметр - число.
//  Функція створює стільки < div >,
//     скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від
//  попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.
//  Використовуй готову функцію getRandomHexColor для отримання кольору.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

input.addEventListener('input', onInputChang);
createBtn.addEventListener('click',  onClickCreateBtn);
destroyBtn.addEventListener('click', onClickDestroyBtn);

let amount = 0;
let boxEl = '';

function onInputChang(e) {
  amount = input.value;
  return amount;
};

function onClickCreateBtn(e) {

  for (let i = 0; i < amount; i += 1){
     boxEl = document.createElement('div');
   boxEl.style.width = `${30 + 10 * i}px`;
    boxEl.style.height = `${30 + 10 * i}px`;
    boxEl.style.backgroundColor = getRandomHexColor();
      boxes.append(boxEl);
    }
  
  return boxes;
};

function onClickDestroyBtn() {
  amount = 0;
  input.value = '';
  boxes.innerHTML = '';
};
 

