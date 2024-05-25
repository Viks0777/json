document.addEventListener('DOMContentLoaded', () => {
    const books = [
        {
            "платформа": "Goodreads",
            "id": "1",
            "название": "Убить пересмешника",
            "автор": "Харпер Ли",
            "описание": "Роман о серьезных проблемах изнасилования и расового неравенства.",
            "изображение": "https://images.gr-assets.com/books/1361975680l/2657.jpg",
            "ссылка": "https://www.goodreads.com/book/show/2657.To_Kill_a_Mockingbird",
            "жанр": "Роман"
        },
        {
            "платформа": "Goodreads",
            "id": "2",
            "название": "1984",
            "автор": "Джордж Оруэлл",
            "описание": "Дистопический роман, действие которого происходит в тоталитарном обществе, управляемом Большим Братом.",
            "изображение": "https://images.gr-assets.com/books/1348990566l/5470.jpg",
            "ссылка": "https://www.goodreads.com/book/show/5470.1984"
        },
        {
            "платформа": "Goodreads",
            "id": "3",
            "название": "Гордость и предубеждение",
            "автор": "Джейн Остин",
            "описание": "Роман о романтическом развитии главной героини Элизабет Беннет.",
            "изображение": "https://images.gr-assets.com/books/1320399351l/1885.jpg",
            "ссылка": "https://www.goodreads.com/book/show/1885.Pride_and_Prejudice"
        },
        {
            "платформа": "Goodreads",
            "id": "4",
            "название": "Великий Гэтсби",
            "автор": "Фрэнсис Скотт Фицджеральд",
            "описание": "Роман о молодом и загадочном миллионере Джее Гэтсби и его страсти к прекрасной Дэйзи Бьюкенен.",
            "изображение": "https://images.gr-assets.com/books/1490528560l/4671.jpg",
            "ссылка": "https://www.goodreads.com/book/show/4671.The_Great_Gatsby"
        },
        {
            "платформа": "Goodreads",
            "id": "5",
            "название": "Преступление и наказание",
            "автор": "Федор Достоевский",
            "описание": "Роман о молодом студенте Раскольникове, который совершает убийство и пытается оправдать свои действия.",
            "изображение": "https://images.gr-assets.com/books/1382846449l/7144.jpg",
            "ссылка": "https://www.goodreads.com/book/show/7144.Crime_and_Punishment"
        },
        {
            "платформа": "Goodreads",
            "id": "6",
            "название": "Мастер и Маргарита",
            "автор": "Михаил Булгаков",
            "описание": "Роман о визите дьявола в атеистический Советский Союз и его последствиях для жителей Москвы.",
            "изображение": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrz-xX2snHh-Y0lg_UPPpnJt0UkkudNRl1KhRSJDUChg&s",
            "ссылка": "https://www.goodreads.com/book/show/117833.The_Master_and_Margarita"
        },
        {
            "платформа": "Goodreads",
            "id": "7",
            "название": "Анна Каренина",
            "автор": "Лев Толстой",
            "описание": "Роман о трагической судьбе Анны Карениной, замужней женщины, которая влюбляется в графа Вронского.",
            "изображение": "https://upload.wikimedia.org/wikipedia/ru/5/5a/Anna_Karenina_poster.jpg",
            "ссылка": "https://www.goodreads.com/book/show/15823480.Anna_Karenina"
        },
        {
            "платформа": "Goodreads",
            "id": "8",
            "название": "Сто лет одиночества",
            "автор": "Габриэль Гарсия Маркес",
            "описание": "Роман о многопоколенной семье Буэндиа в вымышленном городе Макондо.",
            "изображение": "https://s.f.kz/prod/543/542279_550.jpg",
            "ссылка": "https://www.goodreads.com/book/show/320.One_Hundred_Years_of_Solitude"
        },
        {
            "платформа": "Goodreads",
            "id": "9",
            "название": "Братья Карамазовы",
            "автор": "Федор Достоевский",
            "описание": "Философский роман, исследующий вопросы веры, сомнения и причины человеческого страдания.",
            "изображение": "https://images.gr-assets.com/books/1427728126l/4934.jpg",
            "ссылка": "https://www.goodreads.com/book/show/4934.The_Brothers_Karamazov"
        },
        {
            "платформа": "Goodreads",
            "id": "10",
            "название": "О дивный новый мир",
            "автор": "Олдос Хаксли",
            "описание": "Дистопический роман о будущем обществе, где люди живут в условиях массового потребления и полного контроля.",
            "изображение": "https://img3.labirint.ru/rc/f62d20e11db99bce4d17cc6360a0af6f/363x561q80/books73/722707/cover.jpg?1571905510",
            "ссылка": "https://www.goodreads.com/book/show/5129.Brave_New_World"
        },
        {
            "платформа": "Goodreads",
            "id": "12",
            "название": "Шерлок Холмс",
            "автор": "Артур Конан Дойл",
            "описание": "Коллекция детективных рассказов о знаменитом сыщике Шерлоке Холмсе и его друге докторе Ватсоне.",
            "изображение": "https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/244e2847-f426-4c60-86ba-34cde7db695f/600x900",
            "ссылка": "https://www.goodreads.com/book/show/18490.The_Complete_Sherlock_Holmes",
            "жанр": "Детектив"
        },
        {
            "платформа": "Goodreads",
            "id": "13",
            "название": "Маленькие убийства Агаты Кристи",
            "автор": "Агата Кристи",
            "описание": "Сборник коротких детективных рассказов от Агаты Кристи.",
            "изображение": "https://avatars.mds.yandex.net/get-kinopoisk-image/10809116/1fa89114-e55d-4cfc-be81-7102deed3897/600x900",
            "ссылка": "https://www.goodreads.com/book/show/15796718-agatha-christie",
            "жанр": "Детектив"
        },
        {
            "платформа": "Goodreads",
            "id": "14",
            "название": "Маленькие ложи",
            "автор": "Агата Кристи",
            "описание": "Детективный роман об убийстве в загородном доме.",
            "изображение": "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/9d5dc11f-1313-4e1a-986a-25aa48bc8aa7/600x900",
            "ссылка": "https://www.goodreads.com/book/show/13854.And_Then_There_Were_None",
            "жанр": "Детектив"
        }
    ];

    const bookList = document.getElementById('book-list');
    const searchInput = document.getElementById('search');
    const shuffleBtn = document.getElementById('shuffleBtn');
    const romanceBtn = document.getElementById('romanceBtn');
    const detectiveBtn = document.getElementById('detectiveBtn');
    const allBtn = document.getElementById('allBtn');

    const displayBooks = (booksToDisplay) => {
        bookList.innerHTML = '';
        booksToDisplay.forEach(book => {
            const bookItem = document.createElement('li');
            bookItem.className = 'book-item';
            bookItem.innerHTML = `
                <img src="${book.изображение}" alt="${book.название}" class="book-image">
                <div>
                    <h2>${book.название}</h2>
                    <p><strong>Автор:</strong> ${book.автор}</p>
                    <p>${book.описание}</p>
                    <a href="${book.ссылка}" target="_blank">Подробнее</a>
                </div>
            `;
            bookList.appendChild(bookItem);
        });
    };

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const filterByGenre = (genre) => {
        const filteredBooks = books.filter(book => book.жанр === genre);
        displayBooks(filteredBooks);
    };

    // Добавление обработчиков событий для кнопок
    shuffleBtn.addEventListener('click', () => {
        displayBooks(shuffleArray([...books]));
    });

    romanceBtn.addEventListener('click', () => {
        filterByGenre('Роман');
    });

    detectiveBtn.addEventListener('click', () => {
        filterByGenre('Детектив');
    });

    allBtn.addEventListener('click', () => {
        displayBooks(books);
    });

    // Поиск книг
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const filteredBooks = books.filter(book => 
            book.название.toLowerCase().includes(query) ||
            book.автор.toLowerCase().includes(query)
        );
        displayBooks(filteredBooks);
    });

    // Изначальное отображение всех книг
    displayBooks(books);
});
