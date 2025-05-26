// #sH8c4er
// – Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id=”text”.
let button = document.getElementById('btn');
let div = document.getElementById('text');
button.addEventListener('click', (e) => {
    div.remove()
});


// #j693ca8
// – створити інпут, який приймає вік людини, та кнопку, яка підтверджує дію. При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік, чи менше він за 18, та повідомити про це користувача
let form = document.getElementById('ageForm');
let ageInput = document.getElementById('age');
let message = document.getElementById('message');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    let age = parseInt(ageInput.value);
    if (age >= 18) {
        message.innerText = 'Вік підтверджено.';
    } else {
        message.innerText = 'Вам ще не виповнилося 18 років.';
    }
});


// #ymAmN2xJ
// Створити форму з трьома полями для name, surname, age та кнопкою. При натисканні на кнопку зчитати дані з полів, та вивести об’єкт в документ. Іншими словами : заповнили форму, натиснули кнопку, під формою з’явився блок з вашим об’єктом
const form1 = document.forms.Form;
const target = document.getElementById('target');
form1.addEventListener('submit', function (e) {
    e.preventDefault();
    const nameValue = form1.name.value;
    const surnameValue = form1.surname.value;
    const ageValue = form1.age.value;
    let user = {nameValue, surnameValue, ageValue};
    console.log(user)
    target.innerText = user.nameValue + ' ' + user.surnameValue + ' ' + user.ageValue;
})


// #2VaLt4vDczH
// є сторінка, на якій є блок, в кому знаходиться цифра. Написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
let currentNumber = +localStorage.getItem('number');
currentNumber++;
localStorage.setItem('number', currentNumber);
let divIncr = document.getElementById('incrementation');
divIncr.innerText = currentNumber;


// #LhSfdhM3
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховище, в масив sessionsList зберігається інформація про дату та час відвідування сторінки. Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM
let sessionsList = JSON.parse(localStorage.getItem('sessions')) || [];
sessionsList.push(new Date());
localStorage.setItem('sessions', JSON.stringify(sessionsList));