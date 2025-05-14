// #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди можна описати з використанням циклу
// Приклад моделі об’єкту карти:
// {
//     cardSuit: ”, // ‘spade’, ‘diamond’,’heart’, ‘clubs’
//
//     value: ”, // ‘6’-’10’, ‘ace’,’jack’,’queen’,’king’
//
//     color:”, // ‘red’,’black’
// }
let values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
let cardSuits = ['spade', 'diamond', 'heart', 'clubs'];
let colors = {
    spade: 'black',
    clubs: 'black',
    heart: 'red',
    diamond: 'red'
};
let cardsHolder = [];
for (const suit of cardSuits) {
    for (const value of values) {
        cardsHolder.push({
            cardSuit: suit,
            value: value,
            color: colors[suit]
        });
    }
}
console.log(cardsHolder);

 // – знайти піковий туз
console.log(cardsHolder.find(value => value.cardSuit === 'spade' && value.value === 'ace'));

 // – всі шістки
console.log(cardsHolder.filter(value => value.value === '6'));

// – всі червоні карти
console.log(cardsHolder.filter(value => value.color === 'red'));

// – всі буби
console.log(cardsHolder.filter(value => value.cardSuit === 'diamond'));

 // – всі трефи від 9 та більше
let cardsWeight = {
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '10': 10,
    'jack': 11,
    'queen': 12,
    'king': 13,
    'ace': 14
};
console.log(cardsHolder.filter(value => value.cardSuit === 'clubs' && cardsWeight[value.value] > 8 ));


// #EP5I1UUzAX
// Взяти описану колоду карт, та за допомогою reduce “упакувати” всі карти по “мастях” в об’єкт

let cards_by_suit = cardsHolder.reduce((accumulator, card) => {
    if(!accumulator[card.cardSuit]){
        accumulator[card.cardSuit] = [];
    }
    accumulator[card.cardSuit].push(card);
    return accumulator;
},{});
console.log(cards_by_suit);








