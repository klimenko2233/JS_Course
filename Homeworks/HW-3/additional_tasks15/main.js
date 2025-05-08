// – Дано 2 масиви з рівною кількістю об’єктів.
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
    ];
let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
    ];
// З’єднати в один об’єкт користувача та місто з відповідними “id” та “user_id” .
// Записати цей об’єкт в новий масив

let usersWithCities = [];

for (const user of usersWithId) {
    for (const city of citiesWithId) {
        if (user.id === city.user_id) {
            let userWithCity = { ...user, address: city };
            usersWithCities.push(userWithCity);
        }
    }
}
console.log(usersWithCities);

// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу for зібрати всі букви в слово.
let arr = [ 'a', 'b', 'c'];
let str="";
for (const element of arr) {
    str += element;
}
console.log(str);

