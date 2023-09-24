import { animate } from "./animate.js";

const getRandomCoctail = async () => {
    try {
        const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        const data = await res.json();

        const contentWrap = document.querySelector('.content-wrap');
        console.log(data.drinks);

        const randomDrink = data.drinks.map((item, index) => {
            return  `<div class='drink-card drink-card--solo'>
                <img class='drink-card-img' src=${item.strDrinkThumb} alt=${item.strDrink}>
                <span class='drink-card-name'>Cocktail name: ${item.strDrink}</span>
                <span class='drink-card-alcohol'>Type: ${item.strAlcoholic}</span>
                <span class='drink-card-glass'>Served in: ${item.strGlass}</span>
            </div>`
        })
        

        const click = document.querySelector('.navigation-click');
        click.classList.remove('navigation-click--active')
        contentWrap.innerHTML = randomDrink.join('');
      
        animate(contentWrap, 'solo')

    } catch (error) {
        
        console.log('error: ' + error.message);
    }
}

export { getRandomCoctail }