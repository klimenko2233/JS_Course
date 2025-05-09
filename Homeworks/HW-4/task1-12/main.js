// #I2XsG6f
// – створити функцію, яка обчислює та повертає площу прямокутника зі сторонами  а і б
function square(a, b) {
    return a * b;
}


// #ETGAxbEn8l
// – створити функцію, яка обчислює та повертає площу кола з радіусом r
function circleS(r) {
    return Math.PI * r * r;
}


// #Mbiz5K4yFe7
// – створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r
function cylinder(h, r) {
    return 2 * Math.PI * r * h + r;
}


// #SIdMd0hQ
// – створити функцію, яка приймає масив та виводить кожен його елемент
function element_of_arr(array) {
    for (const element of array) {
        console.log(element);
    }
}


// #59g0IsA
// – створити функцію, яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
function writer(text) {
    document.write(`<p>${text}</p>`);
}


// #hOL6126
// – створити функцію, яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий
function create_ul(li) {
    document.write(`
    <ul>
        <li>${li}</li>
        <li>${li}</li>
        <li>${li}</li>
    </ul>`);
}


// #0Kxco1edSN
// – створити функцію, яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
function create_Ul(li, index) {
    document.write(`<ul>`)
    for (let i = 0; i < index; i++) {
        document.write(`<li>${li}</li>`)
    }
    document.write(`</ul>`)
}


// #gEFoxMMO
// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write
function ul_elements_of_array(array) {
    document.write(`<ul>`)
    for (let i = 0; i < array.length; i++) {
        document.write(`<li>${array[i]}</li>`)
    }
    document.write(`</ul>`)
}


// #bovDJDTIjt
// – створити функцію, яка приймає масив об’єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об’єкту окремий блок.
function objects_writer(array) {
    for (let i = 0; i < array.length; i++) {
        document.write(`<div>
        ${array[i].id}.${array[i].name} - ${array[i].age} years old
        </div<br>`)
    }
}


// #pghbnSB
// – створити функцію яка повертає найменьше число з масиву
function min_num(array) {
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
function sum(array) {
    let result=0;
    for (const arrayElement of array) {
        result += arrayElement;
    }
    return result;
}


// #kpsbSQCt2Lf
// – створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr,index1,index2) {
    let x=arr[index1];
    arr[index1]=arr[index2];
    arr[index2]=x;
    return arr;
}



