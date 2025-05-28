// #HmvAfRQM
// – взяти https://dummyjson.com/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.

fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then(cartsObj => {
        let {carts} = cartsObj;
        for (const cart of carts) {
            let cartDiv = document.createElement('div');
            cartDiv.innerText = `
               Cart id: ${cart.id},
               total: ${cart.total},
               discountedTotal: ${cart.discountedTotal},
               userId: ${cart.userId},
               totalProducts: ${cart.totalProducts},
               totalQuantity: ${cart.totalProducts},
               products:
            `;
            let productsOl = document.createElement('ol');
            for(const product of cart.products) {
                let img = document.createElement('img');
                img.src = product.thumbnail;
                let li = document.createElement('li');
                li.innerText = `
                   Product id: ${product.id}, 
                   title: ${product.title}, 
                   price: ${product.price}, 
                   quantity: ${product.quantity} ,
                   total: ${product.total}, ,
                   discountPercentage: ${product.discountPercentage} ,
                   discountedTotal: ${product.discountedTotal}
                `;
                li.appendChild(img);
                productsOl.appendChild(li);
            }
            const hr = document.createElement('hr');
            document.body.append(cartDiv, productsOl,hr);
        }
    });