"use strict"

//! Меню бургер 
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}

//! При скролле
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            if (iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}


//! Инициализируем Swiper
new Swiper('.features__swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    // Количество слайов для показа
    slidesPerView: 3,
    speed: 600,
    // Отключение функционала
    // ecлu слайдов меньше чем нужно 
    watchOverflow: true,

    // Omcmyn между слайдами
    spaceBetween: 45,

    // Бесконечный слайдер
    //loop: true,

    // Брейк поинты (адаптив) 
    // ширина экрана 
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        796: {
            slidesPerView: 2,
        },
        1120: {
            slidesPerView: 3,
        }
    },
});