// #jCHFnEbdmFd
// – Створити масив з 10 об’єктами, які описують сутніть “користувач”. Поля: name, username,password. Вивести в консоль пароль кожного користувача


let users = [
    {name: "John", username: "Johny", password: "1234"},
    {name: "Pedro", username: "Dro", password: "2345"},
    {name: "Anna", username: "Ann", password: "3456"},
    {name: "Elizabeth", username: "Liz", password: "4567"},
    {name: "Alexandr", username: "Alex", password: "5678"},
    {name: "Georgiy", username: "Gosha2000", password: "6789"},
    {name: "Vyacheslav", username: "Slava", password: "7890"},
    {name: "Vasiliy", username: "turbo", password: "0123"},
    {name: "Sergey", username: "Serj", password: "qwerty"},
    {name: "Miroslava", username: "Mira", password: "pass1234"}
]
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);


// #coYydZuaeEB
// – описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
// Як зробити цей масив – вам потрібно подумати. Нормальних варіантів опису – 2. Варіант, коли в вас буде одновимірний масив з 21 значенням виключаємо одразу

let weekly_temperature = [
    {day:"Monday",temp:{morning:7,day:15,evening:5}},
    {day:"Tuesday",temp:{morning:6,day:13,evening:8}},
    {day:"Wednesday",temp:{morning:9,day:20,evening:7}},
    {day:"Thursday",temp:{morning:8,day:21,evening:9}},
    {day:"Friday",temp:{morning:7,day:16,evening:5}},
    {day:"Saturday",temp:{morning:5,day:13,evening:7}},
    {day:"Sunday",temp:{morning:6,day:16,evening:8}},
]
console.log(weekly_temperature[1].temp.evening);



// #bAUsaq6LI
// – Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть ‘Вірно’, інакше виведіть ‘Невірно’. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x=-3
if (x!==0){
    console.log("Вірно");
}
else {
    console.log("Невірно");
}



// #3ckURgvs
// – Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю або четверту частину години).
let time = +prompt("Enter number from 0 to 59");
if (time<0||time>59){
    console.log("Enter correct number");
}
else if (time>=0 && time<=15){
    console.log("It's first quarter")
}
else if (time>15 && time<=30){
    console.log("It's second quarter")
}
else if (time>30 && time<45){
    console.log("It's third quarter")
}
else {
    console.log("It's fourth quarter")
}