"use strict"

if (window.innerWidth > 360) {

    let position = 0;
    const slidesToShow = 6;
    const slidesToScroll = 3;
    const container = document.querySelector('.slider__container');
    const track = document.querySelector('.slider__track');
    const btnPrev = document.querySelector('.btn-prev');
    const btnNext = document.querySelector('.btn-next');
    const items = document.querySelectorAll('.slider__item');
    const itemsCount = items.length;
    const itemWidth = container.clientWidth / slidesToShow;
    const movePosition = slidesToScroll * itemWidth;
    const slides = itemsCount - slidesToShow;
    
    items.forEach((item) => {
        item.style.minWidth = `${itemWidth}px`;
    });
    
    btnNext.addEventListener("click", function(){
        const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
        if (itemsLeft >= slidesToScroll) {
            position -= movePosition;
        } else {
            position -= itemsLeft * itemWidth;
        }
        removeBtnNext();
        showBtnPrev();
        setPosition();
        checkBtns();
    })
    
    btnPrev.addEventListener("click", function(){
        const itemsLeft = Math.abs(position) / itemWidth;
        if (itemsLeft >= slidesToScroll) {
            position += movePosition;
        } else {
            position += itemsLeft * itemWidth;
        }
        showBtnNext();
        setPosition();
        checkBtns();
        removeBtnPrev();
    })
    
    const setPosition = () => {
        track.style.transform = `translateX(${position}px)`;
    }
    const checkBtns = () => {
        btnPrev.disabled = position === 0;
        btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
    }
    const showBtnPrev = () => {
        btnPrev.classList.remove('disabled');
    }
    const removeBtnPrev = () => {
        if (position === 0) {
            btnPrev.classList.add('disabled');
        }
    }
    const removeBtnNext = () => {
        if (position <= -Math.round((slides - 1) * itemWidth)) {
            btnNext.classList.add('disabled');
        }
    }
    const showBtnNext = () => {
        btnNext.classList.remove('disabled');
    }
    checkBtns();
}

if (window.innerWidth <= 360) {
    let position = 0;
    const slidesToShow = 2;
    const slidesToScroll = 2;
    const track = document.querySelector('.slider__track');
    const btnPrev = document.querySelector('.btn-prev');
    const btnNext = document.querySelector('.btn-next');
    const items = document.querySelectorAll('.slider__item');
    const itemsCount = items.length;
    const itemWidth = 120;
    const movePosition = slidesToScroll * itemWidth;
    const slides = itemsCount - slidesToShow + 1;

    items.forEach((item) => {
        item.style.minWidth = `${itemWidth}px`;
    });

    btnNext.addEventListener("click", function(){
        const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
        if (itemsLeft >= slidesToScroll) {
            position -= movePosition;
        } else {
            position -= itemsLeft * itemWidth;
        }
        removeBtnNext();
        showBtnPrev();
        setPosition();
        checkBtns();
    })

    btnPrev.addEventListener("click", function(){
        const itemsLeft = Math.abs(position) / itemWidth;
        if (itemsLeft >= slidesToScroll) {
            position += movePosition;
        } else {
            position += itemsLeft * itemWidth;
        }
        showBtnNext();
        setPosition();
        checkBtns();
        removeBtnPrev();
    })
    
    const setPosition = () => {
        track.style.transform = `translateX(${position}px)`;
    }
    const checkBtns = () => {
        btnPrev.disabled = position === 0;
        btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
    }
    const showBtnPrev = () => {
        btnPrev.classList.remove('disabled');
    }
    const removeBtnPrev = () => {
        if (position === 0) {
            btnPrev.classList.add('disabled');
        }
    }
    const removeBtnNext = () => {
        if (position <= -Math.round((slides - 1) * itemWidth)) {
            btnNext.classList.add('disabled');
        }
    }
    const showBtnNext = () => {
        btnNext.classList.remove('disabled');
    }
    checkBtns();
}