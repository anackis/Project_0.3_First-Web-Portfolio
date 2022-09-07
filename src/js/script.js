// Script for hamburger 
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close'),
    overlay = document.querySelector('.menu__overlay'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('active');
        overlay.classList.toggle('active');
    });

    closeElem.addEventListener('click', () => {
        menu.classList.toggle('active');
        overlay.classList.toggle('active');
    });
});