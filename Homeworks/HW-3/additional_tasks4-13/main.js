// #yHAwJOyiC
// – Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let arr_num = [7, 12, 3, 9, 21, 4, 18, 0, 6, 15];
for (const number of arr_num) {
    console.log(number);
}

// #GamKju89ob
// – Створити масив з 10 строкових елементів. Вивести в консоль всі його елементи в циклі.
let arr_str = ["cloud", "river", "stone", "paper", "dream", "light", "forest", "apple", "window", "flame"];
for (const word of arr_str) {
    console.log(word);
}

// #Bm76xmg
// – Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let arr_mix = [42, "hello", 3.14, true, NaN, [1, 2, 3], {"key": "value"}, 6, false, "world"];
for (const value of arr_mix) {
    console.log(value)
}

// #u3vmD0YJXh
// – Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
for (const value of arr_mix) {
    if (typeof value === "boolean") {
        console.log(value)
    }
}

// #9stMq2ou
// – Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
for (const value of arr_mix) {
    if (typeof value === "number") {
        console.log(value)
    }
}

// #mK4pmM4
// – Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
for (const value of arr_mix) {
    if (typeof value === "string") {
        console.log(value)
    }
}

// #0pm3EyTKy9
// – Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let empty_Arr=[]
empty_Arr[0] = 'hello';
empty_Arr[1] = 'world';
empty_Arr[2] = true;
empty_Arr[3] = 345;
empty_Arr[4] = undefined;
empty_Arr[5] = 0.259443;
empty_Arr[6] = NaN;
empty_Arr[7] = 3.14;
empty_Arr[8] = {"key": "value"};
empty_Arr[9] = false;
empty_Arr[10] = [1,2,3];
for (const element of empty_Arr) {
    console.log(element)
}

// #mDMWMW5a
// – Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 10; i++) {
    console.log(i);
    document.write(`${i} `)
}

// #4sXhaa5YMM
// – Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i++) {
    console.log(i);
    document.write(`${i} <br>`);
}

// #s24slNyz7
// – Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i+=2) {
    console.log(i);
    document.write(`${i} <br>`);
}