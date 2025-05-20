// #8Nmt60ZT
// – створити блок,
// – додати йому класи wrap, collapse, alpha, beta
// – додати стилі (довільні значення) : колір фону, колір тексту, розмір тексту
// – додати цей блок в body.
// – клонувати його повністю, та додати клон в body.
const div = document.createElement("div");
div.classList.add("wrap");
div.classList.add("collapse");
div.classList.add("alpha");
div.classList.add("beta");
document.body.appendChild(div);
const cloneNode = div.cloneNode(true);
document.body.appendChild(cloneNode);


// #OPLI89c9G
// – Є масив:
// [‘Main’,’Products’,’About us’,’Contacts’]
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
let arr = ['Main','Products','About us','Contacts'];
const ul = document.createElement("ul");
for (const item of arr) {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
}
document.body.appendChild(ul);



// #jeBqHV525U5
// – Є масив
// Для кожного елементу масиву зробити блок, в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
let coursesAndDurationArray = [
    {title: 'JavaScript Compleх', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const course of coursesAndDurationArray) {
    let div= document.createElement('div');
    div.innerText = `${course.title} - ${course.monthDuration} `;
    document.body.appendChild(div);
}


// #Kx1xgoKy8
// – Є масив (той же, coursesAndDurationArray)
// За допомоги скріпта для кожного елементу масиву зробити <div class=’item’> ,  в якому буде <h1 class=’heading’>  з title  елементу, та <p class=’description’> з monthDuration елементу.
// Завдання робити через цикли.
for (const course of coursesAndDurationArray) {
    let div= document.createElement('div');
    div.className = "item";
    let h2 = document.createElement("h2");
    h2.className = "heading";
    h2.textContent = course.title;
    let p = document.createElement("p");
    p.className = "description";
    p.innerText = course.monthDuration;
    div.append(h2,p);
    document.body.appendChild(div);
}
