// #WpkK0ZH1
// –створити масив з:
//     – з 5 числових значень
let arr_num=[2,45,31,5.6,-25];

// – з 5 стічкових значень
let arr_str=['hello','world','okten','is','cool'];

// – з 5 значень стрічкового, числового та булевого типу
let arr_mix=['okten',25,'is',true,0];

// – та вивести його в консоль
console.log(arr_num);
console.log(arr_str);
console.log(arr_mix);

// -----------------------------------------------------------

// #4aDbSgh
// — Створити пустий масив. Наповнити його будь-якими значеннями, звертаючись до конкретного індексу. Вивести в консоль
let empty_arr=[]
empty_arr[0] = 'hello';
empty_arr[1] = 'world';
empty_arr[2] = true;
empty_arr[3] = 345;
empty_arr[4] = undefined;
empty_arr[5] = 0.259443;
empty_arr[6] = NaN;
console.log(empty_arr);

//----------------------------------------

// #qLQLJSeN7i
let arr=[2,17,13,6,22,31,45,66,100,-18];

// 1. перебрати його циклом while
let index=0;
while (index < arr.length){
    console.log(arr[index]);
    index++;
}

// 2. перебрати його циклом for
for (const number of arr) {
    console.log(number);
}

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
let i=1;
while (i < arr.length){
    console.log(arr[i]);
    i+=2;
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let j = 1; j < arr.length; j+=2) {
    console.log(arr[j]);
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення
let q=0;
while (q < arr.length){
    if (!(arr[q]%2)) console.log(arr[q]);
    q++;
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (const number of arr) {
    if (!(number%2)) console.log(number);
}

// 7. замінити кожне число, кратне 3, на слово “okten”
for (let number of arr) {
    if (!(number%3)) number='okten';
}

// 8. вивести масив у зворотньому порядку.
for (let j = arr.length-1; j >= 0; j--) {
    console.log(arr[j]);
}








