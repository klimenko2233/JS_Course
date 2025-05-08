// #reLkOkTB29Q
// створити масив книжок (назва, кількість сторінок, автори , жанри).
const books = [
    {
        title: "The Hobbit",
        pages: 310,
        authors: ["J.R.R. Tolkien"],
        genres: ["Fantasy", "Adventure"]
    },
    {
        title: "1984",
        pages: 328,
        authors: ["George Orwell"],
        genres: ["Dystopian", "Science Fiction", "Political Fiction"]
    },
    {
        title: "Pride and Prejudice",
        pages: 279,
        authors: ["Jane Austen","Andy Weir"],
        genres: ["Romance"]
    },
    {
        title: "The Name of the Wind",
        pages: 662,
        authors: ["Patrick Rothfuss"],
        genres: ["Fantasy", "Adventure", "Magic", "Drama"]
    },
    {
        title: "Clean Code",
        pages: 464,
        authors: ["Robert C. Martin"],
        genres: ["Programming", "Education"]
    },
    {
        title: "The Martian",
        pages: 369,
        authors: ["Andy Weir","Jane Austen"],
        genres: ["Science Fiction", "Thriller", "Humor"]
    }
];

// – знайти найбільшу книжку.
let max_pages = 0;
for (const book of books) {
    if (book.pages > max_pages) {
        max_pages = book.pages;
    }
}
for (const book of books) {
    if (book.pages === max_pages) {
        console.log(book);
    }
}
// – знайти книжку/ки з найбільшою кількістю жанрів
let maxGenres = 0;
let booksWithMostGenres = [];
for (const book of books) {
    const genreCount = book.genres.length;
    if (genreCount > maxGenres) {
        maxGenres = genreCount;
        booksWithMostGenres = [book];
    } else if (genreCount === maxGenres) {
        booksWithMostGenres.push(book);
    }
}
console.log(booksWithMostGenres);

// – знайти книжку/ки з найдовшою назвою
let maxLength = 0;
let booksWithLongestTitle = [];

for (const book of books) {
    const titleLength = book.title.length;

    if (titleLength > maxLength) {
        maxLength = titleLength;
        booksWithLongestTitle = [book];
    } else if (titleLength === maxLength) {
        booksWithLongestTitle.push(book);
    }
}
console.log(booksWithLongestTitle);

// – знайти книжку/ки, які писали 2 автори
for (const book of books) {
    if(book.authors.length === 2) {
        console.log(book);
    }
}

// – знайти книжку/ки, які писав 1 автор
for (const book of books) {
    if(book.authors.length === 1) {
        console.log(book);
    }
}





























// is palindrome?
// // let word=['ш','а','л','а','ш'];
// // let reverse = [];
// // let count = 0;
// // for (let i = word.length-1; i >=0; i--) {
// //     reverse[count]=word[i];
// //     count++;
// // }
// // let index = 0;
// // for (let i = 0; i < word.length; i++) {
// //     if (word[i]===reverse[i]) {
// //         index++;
// //     }
// // }
// // if(index===word.length){
// //     console.log('тру');
// // }
// // else{
// //     console.log('фолс');
// // }