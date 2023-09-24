import { getDataByName } from "./nameSearch.js";
import { getDataByIngredient } from "./ingredientSearch.js";
import { getRandomCoctail } from "./randomSearch.js";
const errorField = document.querySelector('.navigation-input-error');
const inputField = document.querySelector('.navigation-input');

const inputCheck = () => {
    handleInputCheck();
    handleRandomCoctail();
}

const handleInputCheck = () => { 
    const buttons = document.querySelector('.navigation-buttons');

    buttons?.addEventListener('click', (e) => {
        const target = e.target;
        let inputValue =  inputField.value;

        if(!target.classList.contains('navigation-button--name')
        && !target.classList.contains('navigation-button--ingredient')) return;

        if(inputField.value === '') {
            errorField.classList.add('navigation-input-error--active')
            return;
        }

        if(target.classList.contains('navigation-button--name')){
            errorField.classList.remove('navigation-input-error--active')
            getDataByName(inputValue)
        }else if(target.classList.contains('navigation-button--ingredient')) {
            errorField.classList.remove('navigation-input-error--active')
            getDataByIngredient(inputValue)
        }
    })
}

const handleRandomCoctail = () => {
    const randomBtn = document.querySelector('.navigation-button--random');

    randomBtn?.addEventListener('click', () => {
        errorField.classList.remove('navigation-input-error--active')
        inputField.value === '';
        getRandomCoctail();
    });
}


export default inputCheck;