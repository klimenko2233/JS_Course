// #whXxOBlYS0H
// – взяти https://dummyjson.com/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути списком під час відображення.
fetch('https://dummyjson.com/recipes')
.then(res => res.json())
.then(recipesObj => {
    let {recipes} = recipesObj;
    for (const recipe of recipes) {
        const dishDiv = document.createElement('div');
        const title = document.createElement('h2');
        title.innerText = recipe.name;
        dishDiv.appendChild(title);
        let image = document.createElement('img');
        image.src = recipe.image;
        image.style.width = '300px';
        image.style.height = 'auto';
        dishDiv.appendChild(image);
        const h4 = document.createElement('h4');
        h4.innerText = 'Ingredients:';
        dishDiv.appendChild(h4);
        const ingredientsUl = document.createElement('ul');
        for (const ingredient of recipe.ingredients) {
            const li = document.createElement('li');
            li.textContent = ingredient;
            ingredientsUl.appendChild(li);
        }
        dishDiv.appendChild(ingredientsUl);
        const otherInfo = document.createElement('div');
        otherInfo.innerText = `
        id: ${recipe.id},
        Instructions: ${recipe.instructions},
        PrepTimeMinutes: ${recipe.prepTimeMinutes},
        CookTimeMinutes: ${recipe.cookTimeMinutes},
        Servings: ${recipe.servings},
        Difficulty: ${recipe.difficulty},
        Cuisine: ${recipe.cuisine},
        CaloriesPerServing: ${recipe.caloriesPerServing},
        Tags: ${recipe.tags},
        UserId: ${recipe.userId},
        Rating: ${recipe.rating},
        ReviewCount: ${recipe.reviewCount},
        MealType: ${recipe.mealType}
        `;
        dishDiv.appendChild(otherInfo);
        const hr = document.createElement('hr');
        document.body.append(dishDiv,hr);
    }
})