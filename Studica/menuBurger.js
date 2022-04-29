"use strict"

if (window.innerWidth <= 360) {

    let burger = document.querySelector('.header__burger');
    let menu = document.querySelector('.header__menu');

    burger.addEventListener('click', (e) => {
        e.preventDefault();
        menu.classList.toggle('show');
    })
    
    burger.addEventListener('click', function(){
        burger.classList.toggle('active');
    })
    
}