// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
//     перевіряє його вміст щодо правильної кількості введених символів.


// Яка кількість символів повинна бути в інпуті,
// зазначається в його атрибуті data - length.
// Якщо введена правильна кількість символів,
//  то border інпуту стає зеленим,
//     якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid,
//  які ми вже додали у вихідні файли завдання.

const input = document.querySelector("#validation-input");

input.addEventListener("blur", function () {
  if (Number(input.dataset.length) === input.value.length) {
       addRemoveClass("valid", "invalid")
  } else {
     addRemoveClass("invalid", "valid")
  }
});

function addRemoveClass(addClass, removeClass) {
   input.classList.remove(removeClass);
    input.classList.add(addClass);
};

