document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const dropdownMenu = document.getElementById('dropdownMenu');

    menuToggle.addEventListener('click', function () {
        dropdownMenu.classList.toggle('show');
    });

    // Закрытие меню при клике вне его области
    document.addEventListener('click', function (event) {
        if (!menuToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove('show');
        }
    });
});

// Инициализация Swiper
const swiper = new Swiper('.mySwiper', {
    slidesPerView: 1, // Количество слайдов на экране
    spaceBetween: 20, // Расстояние между слайдами
    loop: true, // Бесконечная прокрутка
    direction: 'horizontal',
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Возможность кликать на пагинацию
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // Настройки для разных размеров экрана
        640: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 2,
        },
    },
});
