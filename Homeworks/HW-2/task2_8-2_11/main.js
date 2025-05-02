// #UMoNq4biWGe
// – У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину (декаду) місяця потрапляє це число (у першу, другу чи третю).


let day = +prompt("Enter number from 1 to 31");
if (day < 1 || day > 31) {
    console.log("Enter correct number");
} else if (day >= 1 && day <= 10) {
    console.log("It's first decade")
} else if (day > 10 && day <= 20) {
    console.log("It's second decade")
} else {
    console.log("It's third decade")
}

// #KzrtqyQ
// – Скласти розклад на тиждень за домопогою switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа, що заплановано на цей день (можна замість плану на день, назву дня англійською).

let day_num = +prompt("Enter the day number from 1 to 7");
if (day_num < 1 || day_num > 7) {
    console.log("Enter correct number")
} else {
    switch (day_num) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
    }
}

// #uwsz1RnTQJ1
//
// – Користувач вводить або має два числа.
//
//     Потрібно знайти та вивести максимальне число з тих двох .
//
//     Також потрібно врахувати, коли введені рівні числа.

let a=7;
let b = 7;
if (a > b) {
    console.log(a)
}
else if (a === b) {
    console.log('a=b')
}
else {
    console.log(b)
}

// #iBvqtjEm
//
// – є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код, який
//
// буде присвоювати змінній х значення “default”,  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

let x="smth";
if (!x) {
    x='default'
}