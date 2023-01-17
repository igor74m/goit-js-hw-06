// Лічильник складається зі спану і кнопок,
// які по кліку повинні збільшувати і зменшувати його значення на одиницю.
// Створи змінну counterValue,
// в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок,
//  всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const decrementEl = document.querySelector("[data-action='decrement']");
const incrementEl = document.querySelector("[data-action= 'increment']");
const counterValue = document.querySelector("#value");
let counter = 0;
decrementEl.addEventListener('click', onDecrementClick);
function onDecrementClick() {
    counter -= 1;
    counterValue.textContent = counter;
};

incrementEl.addEventListener('click', onIncrementClick);
function onIncrementClick() {
     counter += 1;
    counterValue.textContent = counter;

};

