// #XjJuucOMR0
// – Створити функцію конструктор для об’єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об’єктами new User(….)
function User(id,name,surname,email,phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let users = [
    new User(1,'Petro','Petrenko','petpet@gmail.com','+380501925141'),
    new User(2,'Mariia','Sydorenko','sydor@gmail.com','+380951925547'),
    new User(3,'Olena','Holub','holub@gmail.com','+380931875527'),
    new User(4,'Mykola','Zakharchenko','kolyamba@gmail.com','+380632536547'),
    new User(5,'Oksana','Moroz','oymoroz@gmail.com','+380669975347'),
    new User(6,'Petro','Petrenko','petpet@gmail.com','+380501925141'),
    new User(7,'Mariia','Sydorenko','sydor@gmail.com','+380951925547'),
    new User(8,'Olena','Holub','holub@gmail.com','+380931875527'),
    new User(9,'Mykola','Zakharchenko','kolyamba@gmail.com','+380632536547'),
    new User(10,'Oksana','Moroz','oymoroz@gmail.com','+380669975347')
];


// #2ikXsE2WiKZ
// – Взяти масив з  User[] з попереднього завдання, та відфільтрувати, залишивши тільки об’єкти з парними id (filter)
users.filter(user => !(user.id % 2));


// #pOeHKct
// – Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(users.sort((a, b) => a.id - b.id));


// #nkMXISv
// – створити конструктор для об’єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об’єктами Client
function Client(id,name,surname,email,phone,order){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}
let clients = [
    new Client(1,'Petro','Petrenko','petpet@gmail.com','+380501925141',['orange','potato','cucumber']),
    new Client(2,'Mariia','Sydorenko','sydor@gmail.com','+380951925547',['apple','potato','cucumber']),
    new Client(3,'Olena','Holub','holub@gmail.com','+380931875527',['apple','orange','cucumber']),
    new Client(4,'Mykola','Zakharchenko','kolyamba@gmail.com','+380632536547',['apple','orange','potato']),
    new Client(5,'Oksana','Moroz','oymoroz@gmail.com','+380669975347',['apple','orange','potato','cucumber']),
    new Client(6,'Petro','Petrenko','petpet@gmail.com','+380501925141',['apple','orange','potato','cucumber']),
    new Client(7,'Mariia','Sydorenko','sydor@gmail.com','+380951925547',['apple','potato','cucumber']),
    new Client(8,'Olena','Holub','holub@gmail.com','+380931875527',['apple','orange','potato','cucumber']),
    new Client(9,'Mykola','Zakharchenko','kolyamba@gmail.com','+380632536547',['apple','orange','potato','cucumber']),
    new Client(10,'Oksana','Moroz','oymoroz@gmail.com','+380669975347',['apple','orange','cucumber'])
];


// #8abtVjRv
// – Взяти масив (Client [] з попереднього завдання). Відсортувати його за кількістю товарів в полі order по зростанню. (sort)
clients.sort((a, b) => a.order.length - b.order.length);


// #vV9a6584I5
// – Створити функцію конструктор, яка дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
//     — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//     — addDriver (driver) – приймає об’єкт який “водій” з довільним набором полів, і додає його в поточний об’єкт car
function Car(model, manufacturer, year_of_release, maxSpeed, engineCapacity){
    this.model = model;
    this.manufacturer = manufacturer;
    this.year_of_release = year_of_release;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.drive = function (){console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)};
    this.info = function (){
        for (const key in this) {
            console.log(key, this[key]);
        }
    };
    this.increaseMaxSpeed = function(newSpeed){
        this.maxSpeed += newSpeed;
    };
    this.changeYear = function(newValue){
        this.year_of_release = newValue;
    };
    this.addDriver = function(driverObj){
        this.driver = driverObj;
    }
}


// #5kla3yMpgp
// – (Те саме, тільки через клас)
// Створити клас, який дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
//     — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//     — addDriver (driver) – приймає об’єкт, який “водій” з довільним набором полів, і додає його в поточний об’єкт car
class car{
    constructor(model, manufacturer, year_of_release, maxSpeed, engineCapacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year_of_release = year_of_release;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }
    drive(){console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)};
    info(){
        for (const key in this) {
            console.log(key, this[key]);
        }
    };
    increaseMaxSpeed(newSpeed){
        this.maxSpeed += newSpeed;
    };
    changeYear(newValue){
        this.year_of_release = newValue;
    };
    addDriver(driverObj){
        this.driver = driverObj;
    }
}


// #zg6Fifnqig
// – створити клас/функцію конструктор попелюшка з полями ім’я, вік, розмір ноги. Створити масив з 10 попелюшок.
//     Створити об’єкт класу “принц” за допомоги класу який має поля ім’я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти, яка попелюшка повинна бути з принцом.
// ! Додатково, знайти необхідну попелюшку за допомогою функції масиву find та відповідного колбеку
class Cinderella{
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
let shoeless_ladies =[
    new Cinderella('Julia',19,37),
    new Cinderella('Elizabeth',21,39),
    new Cinderella('Adel',20,38),
    new Cinderella('Mishel',18,37.5),
    new Cinderella('Emma',23,39),
    new Cinderella('Elena',21,37),
    new Cinderella('Kate',24,36),
    new Cinderella('Viktoria',18,36.5),
    new Cinderella('Anna',25,37),
    new Cinderella('Mary',21,40),
];
class Prince{
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}
let prince = new Prince('Stepan',25,36);
for (const princess of shoeless_ladies) {
    if (princess.footSize === prince.shoe){
        console.log(`${prince.name} має бути з ${princess.name}`);
    }
}

console.log(shoeless_ladies.find(value => value.footSize === prince.shoe));


// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter

Array.prototype.ownForEach = function(foo) {
    for (let i = 0; i < this.length; i++) {
        foo(this[i], i, this);
    }
};

Array.prototype.ownFilter = function(foo) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (foo(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};

let arr = [9,8,7,6,5,4,3,2,1];
arr.ownForEach(function(num){ console.log(num) });
console.log(arr.ownFilter(value => value % 2));
