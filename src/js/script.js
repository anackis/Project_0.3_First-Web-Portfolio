$(document).ready(function() {

// Script for hamburger 
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close'),
    overlay = document.querySelector('.menu__overlay'),
    linkclick = document.querySelectorAll('.menu__link'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('active');
        overlay.classList.toggle('active');
    });

    closeElem.addEventListener('click', () => {
        menu.classList.toggle('active');
        overlay.classList.toggle('active');
    });

    linkclick.forEach(linkclick => {
        linkclick.addEventListener('click', () => {
            menu.classList.toggle('active');
            overlay.classList.toggle('active');
        });
    })


});



$('form').submit(function(e) {
    e.preventDefault();

    // if (!$(this).valid()) {
    // 	return;
    // }

    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        // $('#consultation, #order').fadeOut();
        // $('.overlay, #thanks').fadeIn();

        $('form').trigger('reset');
    });
    return false;
});






});