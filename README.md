# Проектная работа: "Mesto" React. Создана в рамках учёбы в [Яндекс.Практикум](https://practicum.yandex.ru) на факультете ["Веб-разработчик"](https://practicum.yandex.ru/web/). Спринт 10.

## Описание:
Данный проект является версией проекта "Mesto", [выполненного в ходе 4 — 9 спринтов](https://github.com/MikhailSulim/mesto), портированного на JavaScript библиотеку React.

"Место" — сайт о различных туристических местах и достопримечательностях в России и не только. Проектная работа была выполнена на основе макета в Figma с использованием расширенных возможностей HTML и CSS, в том числе с применением адаптивной вёрстки посредством Flexbox, Grid Layout и Media queries.

![Внешний вид сайта Mesto](/readme_img.png)

С помощью скриптов, написанных на JavaScript, реализовано:
- наполнение страницы контентом;
- возможность редактирования профиля;
- возможность смены аватара в профиле пользователя;
- возможность ставить и удалять лайки под выбранными фотографиями;
- возможность добавлять и удалять карточки с фотографиями;
- валидация корректности вводимых пользователем данных в полях редактирования профиля и добавления карточки;
- возможность закрытия модальных окон нажатием кнопки Esc или кликом вне данного модального окна.

Скрипты написаны с использованием ООП. Функционалы добавления новой карточки и валидации на формах добавления новой карточки и редактирования профиля реализованы через соответствующие классы и их методы.

[Проектная работа на GitHub Pages](https://mikhailsulim.github.io/mesto-react/index.html)

## Функционал:

- Адаптивный дизайн
- Трансформация элементов страницы средствами CSS
- Добавление контента на страницу через JS
- Интерактивная форма для редактирования профиля
- Интерактивная форма для добавления новой карточки с фото
- Возможность ставить и удалять лайки выбранным карточкам
- Возможность удалять карточки
- Валидация вводимых пользователем данных в полях форм редактирования профиля и добавления новой карточки

## Технологии:

- Flexbox
- Grid Layout
- БЭМ
- Файловая структура по методологии БЭМ (Nested BEM)
- Git
- GitHub Pages
- JavaScript
- JS-свойство ValidityState
- ООП
- Webpack
- npm
- API
- React.js

## Этапы создания проектной работы:
### Спринт 10
Созданы компоненты Card, App, Header, Main, Footer, компоненты модальных окон.
Функционал проекта ограничен формированием DOM-дерева и наполнением страницы контентом и информацией о пользователе. Модальные окна окрываются при нажатии соответствующих кнопок и закрываются при нажатии кнопки закрытия.  


## Работа с проектом:
### Клонировать репозиторий:

git clone https://github.com/MikhailSulim/mesto-react.git

### Собрать проект:

npm run build

### Задеплоить проект на GitHub Pages:

npm run deploy


## Будущая доработка проекта будет включать в себя:

- Дальнейший рефакторинг кода

## Ссылка на чеклист:

[Чеклист проектной работы. Спринт 10.](https://code.s3.yandex.net/web-developer/checklists-pdf/new-program/checklist-10.pdf)
