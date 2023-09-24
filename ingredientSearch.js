import { animate } from "./animate.js";
const getDataByIngredient = async (ingredient) => {
    try {
        const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`) ;
        const data = await res.json();

        const contentWrap = document.querySelector('.content-wrap');

        const randomDrink = data.drinks.map((item, index) => {
            return  `<div class='drink-card drink-card--ingredient'>
                <img class='drink-card-img' src=${item.strDrinkThumb} alt=${item.strDrink}>
                <span class='drink-card-name'>Cocktail name: ${item.strDrink}</span>
            </div>`
        })
        
        contentWrap.innerHTML = randomDrink.join('');
        animate(contentWrap, 'ingredient')

        const click = document.querySelector('.navigation-click');
        click.classList.remove('navigation-click--active')
    } catch (error) {
        const errorField = document.querySelector('.navigation-input-error');
        errorField.classList.add('navigation-input-error--active')
        errorField.innerText = 'No cocktail with that ingredient'
    }
}

export { getDataByIngredient }