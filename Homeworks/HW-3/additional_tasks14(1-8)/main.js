// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
let arr = [];
for (let i = 0; i < 50; i++) {
    arr[i] = i * 2;
}

// b. заповнити його 50 непарними числами за допомоги циклу.
for (let i = 0; i < 50; i++) {
    arr[i] = i * 2 + 1;
}

// c. Заповнити масив 20-ма рандомними числами. (Google: Generate random number JS)
arr = [];
for (let i = 0; i < 20; i++) {
    arr[i] = Math.floor(Math.random() * 100);
}

// d. Заповнити масив 20-ма рандомними числами в діапазоні від 8 до 732 (Google: Generate random number JS)
arr = [];
for (let i = 0; i < 20; i++) {
    arr[i] = Math.floor(Math.random()  * (732-8+1) + 8);
}

// 2. Вивести за допомогою console.log кожен третій елемент
for (let i = 2; i < 20; i+=3) {
    console.log(arr[i]);
}

// 3. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним.
for (let i = 2; i < 20; i+=3) {
    if(!(arr[i]%2)) {
        console.log(arr[i]);
    }
}

// 4. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним, та записати їх в новий масив

let arr1=[];
for (let i = 2; i < 20; i+=3) {
    if(!(arr[i]%2)) {
        console.log(arr[i]);
        arr1.push(arr[i]);
    }
}

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
for(let i = 0; i < arr.length-1; i++) {
    if(!(arr[i+1]%2)) {
        console.log(arr[i]);
    }
}

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

let prices=[100,250,50,168,120,345,188];
let sum=0;
let average=0;
for (const price of prices) {
    sum += price;
}
average = sum/prices.length;

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

let arr_random = [];
let new_arr =[];
for (let i = 0; i < 20; i++) {
    arr_random[i] = Math.floor(Math.random() * 100);
}
for (const element of arr_random) {
    new_arr.push(element*5);
}

// 8. Створити масив з будь-якими значеннями (стрінги, числа, і тд…). пройтись по ньому, і, якщо елемент є числом, додати його в інший масив.
 arr=[42, "hello", 3.14, true, NaN, [1, 2, 3], {"key": "value"}, 5, 6, false, "world"];
let arr_Num=[];
for (const element of arr) {
    if(typeof(element) === "number") {
        arr_Num.push(element);
    }
}
