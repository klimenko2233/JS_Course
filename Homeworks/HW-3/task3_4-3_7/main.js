// #OeT7t3uUMFi
// – За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let index = 0;
while (index < 20) {
    document.write(`<h1>Lorem ipsum dolor sit amet. index = ${index}</h1>`)
    index++;
}

// #vLSZKMlO
// – Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру за шаблоном
// Масив: let listOfItems = [‘html’, ‘css’, ‘javascript’, ‘mysql’, ‘mongodb’, ‘react’, ‘angular’, ‘node.js’];

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write(`<ul>`)
for (let listOfItem of listOfItems) {
    document.write(`<li>${listOfItem}</li>`)
}
document.write(`</ul>`)

// #Hdjws7E
// Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру по шаблону
// Великими літерами прописанні властивості об’єкту які потрібно впровадити в шаблон
// ШАБЛОН
// <div class=”product-card”>
//
// <h3 class=”product-title”>TITLE. Price – PRICE</h3>
//
// <img src=”IMAGE” alt=”” class=”product-image”>
//
// </div>
//
// Замість TITLE PRICE IMAGE – підставити відповідні поля з об’єкту

let products = [
    {
        title: 'Milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300×300-3.jpg'
    },
    {
        title: 'Juice',
        price: '27',
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'Tomato',
        price: '47',
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'Tea',
        price: '15',
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    }
]
for (const product of products) {
    document.write(`
    <div class=”product-card”>
        <h3 class=”product-title”>${product.title}. Price – ${product.price}</h3>
        <img src=”${product.image}” alt=”${product.title}” class=”product-image”>
    </div>`)
}


// #4WrHwFTEop0
// є масив let users = []
//  за допомогою циклу вивести:
//  – користувачів зі статусом true
//  – користувачів зі статусом false
//  – користувачів, які старші за 30 років


let users = [
    {name: `vasya`, age: 31, status: false},
    {name: `petya`, age: 30, status: true},
    {name: `kolya`, age: 29, status: true},
    {name: `olya`, age: 28, status: false},
    {name: `max`, age: 30, status: true},
    {name: `anya`, age: 31, status: false},
    {name: `oleg`, age: 28, status: false},
    {name: `andrey`, age: 29, status: true},
    {name: `masha`, age: 30, status: true},
    {name: `olya`, age: 31, status: false},
    {name: `max`, age: 31, status: true}
]
for (const user of users) {
    if (user.status) {
    console.log(user)
    }
}
for (const user of users) {
    if(!user.status) {
    console.log(user)
    }
}
for (const user of users) {
    if(user.age > 30){
        console.log(user)
    }
}

