// #dFeorS3m7u
// – Знайти та вивести довжину наступних стрінгових значень
//  ‘hello world’, ‘lorem ipsum’, ‘javascript is cool’
let str1='hello world';
let str2='lorem ipsum';
let str3='javascript is cool';
console.log(str1.length,str2.length,str3.length);


// #8lld9HMxXWB
// – Перевести до великого регістру наступні стрінгові значення
//       ‘hello world’, ‘lorem ipsum’, ‘javascript is cool’
str1 = str1.toUpperCase();
str2 = str2.toUpperCase();
str3 = str3.toUpperCase();


// #ClDsAm7xba7
// – Перевести до нижнього регістру наступні стрінгові значення
//       ‘HELLO WORLD’, ‘LOREM IPSUM’, ‘JAVASCRIPT IS COOL’
str1 = str1.toLowerCase();
str2 = str2.toLowerCase();
str3 = str3.toLowerCase();


// #0b89BkYZwu
// – Є “брудна” стрінга let str = ‘ dirty string   ‘ . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
str = str.trim();


// #bfoJuse4ZzP
// – Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = ‘Ревуть воли як ясла повні’;
// let arr = stringToarray(str); [‘Ревуть’, ‘воли’, ‘як’, ‘ясла’, ‘повні’]
function stringToarray(str){
    return str.split(' ');
}
let str4 = 'Ревуть воли як ясла повні';
let arr = stringToarray(str4);


// #Rbr5kEQ
// – є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об’єкти в масиві на стрінгові.
let arr1 = [10,8,-7,55,987,-1011,0,1050,0];
let arr_str = arr1.map(number => number+'')


// #5hqyKTfmc
// – створити функцію sortNums(array,direction), яка приймає масив чисел, та сортує його від більшого до меншого, або навпаки  – залежно від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,’ascending’) // [3,11,21]
// sortNums(nums,’descending’) // [21,11,3]
let nums = [11,21,3];
function sortNums(array,direction){
    if(direction==='ascending'){
        return array.sort((a,b) => a-b);
    }
    else if(direction==='descending'){
        return array.sort((a,b) => b-a);
    }
}


// #yo06d74c1C
// – є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// — відсортувати його за спаданням за monthDuration
let sort_by_month = coursesAndDurationArray.sort((a,b)=>b.monthDuration-a.monthDuration);
console.log(sort_by_month);

// — відфільтрувати, залишивши тільки курси з тривалістю понад 5 місяців
let filteredCourses = coursesAndDurationArray.filter(value => value.monthDuration>5);
console.log(filteredCourses);

 // — за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let array_with_id = filteredCourses.map((value, index) =>{
    return {...value,id:index+1};
} );
console.log(array_with_id);

// #4LJn7zBx
// взяти з arrays.js масив coursesArray
// –написати пошук всіх об’єктів, в яких в modules є sass
// –написати пошук всіх об’єктів, в яких в modules є docker
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java'
        ]
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
const sassCourses = coursesArray.filter(course => course.modules.includes('sass'));
const dockerCourses = coursesArray.filter(course => course.modules.includes('docker'));

