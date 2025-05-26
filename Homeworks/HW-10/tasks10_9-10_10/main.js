// #bq1zkx7WP
// *** (подібне було вище, але…будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення “100грн”
// при перезавантаженні сторінки до значення додається по 10грн, але !!! зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд, нічого не відбувається

const div = document.getElementById('price');
let price = +localStorage.getItem('price');
let lastUpdate = +localStorage.getItem('updateTime');
const now = Date.now();
if (!price){
    price = 100;
    localStorage.setItem('price', price);
    localStorage.setItem('updateTime' , now);
}
else {
    if (now - lastUpdate >= 10000) {
        price += 10;
        localStorage.setItem('price', price);
        localStorage.setItem('updateTime', now);
    }
}
div.innerText = price + ' грн';


// #NKB0tgWIK1G
// ***PAGINATION
// зробити масив на 100 об’єктів та дві кнопки prev next
// при завантаженні сторінки з’являються перші 10 об’єктів.
// При натисканні next виводяться наступні 10 об’єктів
// При натисканні prev виводяться попередні 10 об’єктів

const users = [];
for (let i = 1; i <= 100; i++) {
    users.push({
        id: i,
        name: `User ${i}`,
        email: `user${i}@gmail.com`
    });
}
let page = 0;
let pageSize = 10;
const items = document.getElementById('item');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

function pagination() {
    const start = page * pageSize;
    const end = start + pageSize;
    const currentItems = users.slice(start, end);
    items.innerHTML = '';
    currentItems.forEach(user => {
        const div = document.createElement('div');
        div.innerText = `${user.id}. ${user.name} — ${user.email}`;
        items.appendChild(div);
    });
}
pagination();
prev.addEventListener('click', (event) => {
    if(page > 0) page--;
    pagination();
});
next.addEventListener('click', (event) => {
    if((page+1) * pageSize < users.length) page++;
    pagination();
});


