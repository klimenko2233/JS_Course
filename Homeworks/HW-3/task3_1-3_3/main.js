// #y7crMeFwHcS
// – За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i < 10; i++) {
    document.write('<div>Lorem ipsum dolor sit amet.</div>')
}

// #TYj7ncx
// – За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < 10; i++) {
        document.write(`<div>Lorem ipsum dolor sit amet. index= ${i}</div>`)
}

// #uzkt71dp
// – За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let index = 0;
while (index<20) {
    document.write('<h1>Lorem ipsum dolor sit amet.</h1>')
    index++;
}

