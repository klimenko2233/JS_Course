// #Jg0gPO00
// створити конвертор ваги з кг в фунти. дані заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок
const input = document.getElementById('input');
const result = document.getElementById('result');
input.oninput = function (){
    result.innerText = +input.value*2.2;
}


// #RbQGnH5DuC
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об’єкт
// сигнатура функції – addToLocalStorage(arrayName:string,objToAdd:any{}):void
function addToLocalStorage(arrayName,objToAdd){
    const lsItem = localStorage.getItem(arrayName);
    if(!lsItem){
        throw new Error('non-existent array');
    }
    const array = JSON.parse(lsItem);
    if(typeof objToAdd === 'object'){
        array.push(objToAdd);
    }
    localStorage.setItem(arrayName, JSON.stringify(array));
}
addToLocalStorage("sessions", {name:'vasya',age:365});


// #kUSgFqWY
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий – кількість ячеєк, третій – вміст ячеєк.
//     При натисканні кнопки вся ця інформація зчитується і формується табличка з відповідним вмістом.
const tableGenerator = document.getElementById('tableGenerator');
const table = document.getElementById('table');
tableGenerator.onsubmit = function (event) {
    table.innerText = '';
    event.preventDefault();
    const rows = +tableGenerator.rows.value;
    const columns = +tableGenerator.columns.value;
    const filling = tableGenerator.filling.value;
    for (let i = 0; i < rows; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < columns; j++) {
            const td = document.createElement('td');
            td.innerText = filling;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}
