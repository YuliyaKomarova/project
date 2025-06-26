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

//Объявляем переменную headerMenu и сохраняем в нее header__menu
const headerMenu = document.querySelector('.dropdown-menu');
// Если такой элемент существует
if (headerMenu){
console.log(headerMenu)

//Объявляем переменную headerList и сохраняем в нее header__list, чтобы мы могли добавить новые элементы
        const headerList = headerMenu.querySelector('.dropdown-menu__list');

//Создаем объект menuData, который содержит данные для трех ссылок меню.
        const menuData = {
// Каждая ссылка содержит link (адрес ссылки; если ссылка никуда не ведет, то можно оставить #) и title (текст ссылки).
            link1: {
                link: '#',
                title: 'Главная',
            },
            link2: {
                link: '#',
                title: 'Список курсов',
            },
            link3: {
                link: '#',
                title: 'О школе',
            },
            link4: {
                link: '#',
                title: 'Блог',
            }
        }

//Создаем функцию createLink, которая будет добавлять ссылку в меню. Внутри функции 2 переменные: UrlLink – адрес, а title — текст ссылки.
        const createLink = (UrlLink, title) =>{
// создаем переменную  link, которая будет содержать HTML-код ссылки и вставляем в него 2 переменные
            const link = `
            <li class="header__item"><a class="header__link href="${UrlLink}">${title}</a></li>
            `;
            return link;
        }

// Создаем цикл for и проходим по всем элементам объекта menuData.
        for (const linkItem in menuData) {
//Получаем данные для ссылки и сохраняем в переменную link.
            const link = menuData[linkItem];
//Создаем переменную linkIndex и вызываем функцию createLink, куда передаем адрес и заголовок.
            const linkIndex = createLink(link.link, link.title);
// С помощью метода insertAdjacentHTML добавляем созданный HTML-код в конец списка headerList.
            headerList.insertAdjacentHTML('beforeend', linkIndex);

        }
}
// Preloader страницы
const preloader = document.querySelector('.preloader');
const content = document.querySelector('.content');
if (preloader && content) {
    setTimeout(() => {
        // Скрываем прелоадер
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';

        // Показываем контент
        content.style.display = 'block';

        // Удаляем элемент из DOM
        preloader.remove();
    }, 3000); // Задержка 3 секунды
}
/*
 <div class="swiper-wrapper">
                    <!-- Преподаватель 1 -->
                    <div class="swiper-slide">
                        <div class="teacher-card">
                            <img src="images/teacher1.jpg" alt="Начальный уровень">
                            <div class="teacher-name">Сяо Ли</div>
                            <div class="teacher-info">Преподаватель HSK1-HSK2</div>
                        </div>
                    </div>
                    <!-- Преподаватель 2 -->
                    <div class="swiper-slide">
                        <div class="teacher-card">
                            <img src="images/teacher2.jpg" alt="Средний уровень">
                            <div class="teacher-name">Мин Джу</div>
                            <div class="teacher-info">Преподаватель HSK3-HSK4</div>
                        </div>
                    </div>
                    <!-- Преподаватель 3 -->
                    <div class="swiper-slide">
                        <div class="teacher-card">
                            <img src="images/teacher3.jpg" alt="Высокий уровень">
                            <div class="teacher-name">Ин Юэ</div>
                            <div class="teacher-info">Преподаватель HSK5-HSK6</div>
                        </div>
                    </div>
                </div>

*/

//Объявляем переменную cardsCon и сохраняем в нее элементы секции job
const cardsCon = document.querySelector(".swiper");
//  проверяем существует ли элемент cardsCon, если он существует то переходим далее
if (cardsCon) {
//Объявляем переменную cardList и сохраняем в нее список с классом 
    const cardList = cardsCon.querySelector(".swiper-wrapper");
    // Пример URL для получения данных с сервера (откуда загружаются данные)
    const apiUrl = "data.json";
    // Функция для создания карточки
    const createCard = (
        imageUrl,
        imageAlt,
        title,
        description
    ) => {
        // Шаблонные строки и подстановки
// создается переменная card, которая содержит HTML-код для карточки изображения. Внутри <li> (элемента списка) создаются три элемента <img>(изображение), <h3>  (заголовок с названием вакансии), <p> (описание вакансии):
        const card = `
            <div class="swiper-slide">
                <div class="teacher-card">
                    <img src="${imageUrl}" alt="${imageAlt}">
                    <div class="teacher-name">${title}</div>
                    <div class="teacher-info">${description}</div>
                </div>
            </div>`;
//возвращает строку card, которая содержит HTML-код для карточки изображения
        return card;

    };
    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            console.log(data); // Данные
            console.log(typeof data); // Тип полученных данных

            data.forEach((item) => {
                const cardElement = createCard(
                    item.image,
                    item.iconAlt,
                    item.title,
                    item.description
                );
                cardList.insertAdjacentHTML("beforeend", cardElement);
            });
        })
        .catch((error) => {
            console.error("Ошибка при загрузке данных:", error);
        });
 

}
