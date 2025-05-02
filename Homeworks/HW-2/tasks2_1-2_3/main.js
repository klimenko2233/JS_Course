// #67kfznmiMl

let arr = [12, 45, `sksmdfkm`, 0.234, {age: 25}, 76, undefined, null, [21, 45, 13], NaN]
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])
console.log(arr[5])
console.log(arr[6])
console.log(arr[7])
console.log(arr[8])
console.log(arr[9])


// #LARqoUj5I
// – Створити 3 об’єкти які описують книги. Поля об’єкту : title ,pageCount, genre.

let books = [{
    title: `The Lord of the Rings`, pageCount: 185, genre: `Fantasy`
}, {
    title: `Dracula`, pageCount: 96, genre: `Horror`
}, {
    title: `Sinners`, pageCount: 115, genre: `Thriller`
}]



// #sA3Gg1sCp
// – Створити 3 об’єкти, які описують книги. Поля об’єкту : title ,pageCount, genre, authors. Поле “автори” – являється  масивом. Кожен автор має поля name та age.

let book1 = {
    title: `The Lord of the Rings`,
    pageCount: 185,
    genre: `Fantasy`,
    authors: [
        {name: 'J.R.R. Tolkien', age: 133},
        {name: 'J.R. Tolkien', age: 33}]
}
let book2 = {
    title: `Dracula`,
    pageCount: 96,
    genre: `Horror`,
    authors: [
        {name: 'Bram Stoker', age: 178},
        {name: 'J.R. Tolkien', age: 33}]
}
let book3 = {
    title: `Sinners`,
    pageCount: 115,
    genre: `Thriller`,
    authors: [
        {name: 'Ryan Coogler', age: 178},
        {name: 'Bram Stoker', age: 33}]
}







