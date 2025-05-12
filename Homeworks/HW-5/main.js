// виконати задачі за допомоги стрілочних функцій

// #I2XsG6f
// – створити функцію, яка обчислює та повертає площу прямокутника зі сторонами а і б
let square = (a, b) => a * b;

// #ETGAxbEn8l
// – створити функцію, яка обчислює та повертає площу кола з радіусом r
let circleS = (r) => Math.PI * r * r;

// #Mbiz5K4yFe7
// – створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r
let cylinder = (h, r) => 2 * Math.PI * r * h + r;

// #SIdMd0hQ
// – створити функцію, яка приймає масив та виводить кожен його елемент
let element_of_arr = (arr) => {
    for (let element of arr) {
        console.log(element);
    }
}

// #59g0IsA
// – створити функцію, яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
let writer = (text) => document.write(`<p>${text}</p>`);

// #hOL6126
// – створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let create_ul = (li) => {
    document.write(`
    <ul>
        <li>${li}</li>
        <li>${li}</li>
        <li>${li}</li>
   </ul>`);
}

// #0Kxco1edSN
// – створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let create_Ul = (li, index) => {
    document.write(`<ul>`)
    for (let i = 0; i < index; i++) {
        document.write(`<li>${li}</li>`)
    }
    document.write(`</ul>`)
}

// #gEFoxMMO
// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let ul_elements_of_array = (array) => {
    document.write(`<ul>`)
    for (let i = 0; i < array.length; i++) {
        document.write(`<li>${array[i]}</li>`)
    }
    document.write(`</ul>`)
}

// #bovDJDTIjt
// – створити функцію, яка приймає масив об’єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об’єкту окремий блок.
let objects_writer = (array) => {
    for (let i = 0; i < array.length; i++) {
        document.write(`<div>
        ${array[i].id}.${array[i].name} - ${array[i].age} years old
        </div<br>`)
    }
}

// #pghbnSB
// – створити функцію, яка повертає найменше число з масиву
let min_num = (array) => {
    let result=array[0];
    for (let i=1 ;i<array.length;i++) {
        if (array[i]<result) {
            result=array[i];
        }
    }
    return result;
}

// #EKRNVPM
// – створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let sum = (array) => {
    let result=0;
    for (const arrayElement of array) {
        result += arrayElement;
    }
    return result;
}

// #kpsbSQCt2Lf
// – створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
let swap = (arr,index1,index2) => {
    let x=arr[index1];
    arr[index1]=arr[index2];
    arr[index2]=x;
    return arr;
}

// – Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:’USD’,value:40},{currency:’EUR’,value:42}],’USD’) // => 250
let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    for (const element of currencyValues) {
        if (element.currency === exchangeCurrency) {
            return  sumUAH/element.value;
        }
    }
    return -Infinity;
}
