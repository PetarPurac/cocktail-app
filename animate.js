const animate = (wrap,cardItem) => {
    const drinks = wrap.querySelectorAll(`.drink-card--${cardItem}`);

        drinks.forEach(drink => {
            if(drink.classList.contains('drink-card--name')){
                drink.addEventListener('click', ()=> {
                    drink.querySelector('.drink-card-instructions').classList.toggle('drink-card-instructions--active');
                    drink.querySelector('.drink-card-text').classList.toggle('drink-card-text--inactive');
                })
            }
        });

        const tween = gsap.from(drinks, {
            duration: 0.5,
			opacity: 0,
			y: 100,
			stagger: 0.3,
			ease: 'back.in',
        });

}

const animateHeading = () => {
    const tl = gsap.timeline();
    const heading = document.querySelector('.navigation-heading');
    const input = document.querySelector('.navigation-input');

    tl.fromTo(heading, {transform: 'translateY(100px)', opacity: 0 }, {transform: 'translateY(0)', opacity: 1 })
    .fromTo(input,{width: 0, opacity: 0 }, {width: '100%', opacity: 1 })
    .from('.navigation-button', { duration: 0.5,
        opacity: 0,
        y: -100,
        stagger: 0.3,
        ease: 'bounce',
    })
}

animateHeading();

export { animate }