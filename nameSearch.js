 import { animate } from "./animate.js";
 const getDataByName = async (name) => {
    try {
        const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
        const data = await res.json()

        if(!data.drinks) {
            const errorField = document.querySelector('.navigation-input-error');
            errorField.classList.add('navigation-input-error--active')
            errorField.innerText = 'No cocktail with that name'
        }else {
            const contentWrap = document.querySelector('.content-wrap');

            const randomDrink = data.drinks.map((item, index) => {
                return  `<div class='drink-card drink-card--name'>
                    <img class='drink-card-img' src=${item.strDrinkThumb} alt=${item.strDrink}>
                    <div class="drink-card-text">
                        <span class='drink-card-name'>Cocktail name: ${item.strDrink}</span>
                        <span class='drink-card-alcohol'>Type: ${item.strAlcoholic}</span>
                        <span class='drink-card-glass'>Served in: ${item.strGlass}</span>
                    </div>
                    <span class='drink-card-instructions'>Instructions: ${item.strInstructions}</span>
                </div>`
            })
            
            contentWrap.innerHTML = randomDrink.join('');
            animate(contentWrap, 'name')

            const click = document.querySelector('.navigation-click');
            click.classList.add('navigation-click--active')
        }
    } catch (error) {
        console.log('error: ' + error.message);
    }
}

export  { getDataByName }

