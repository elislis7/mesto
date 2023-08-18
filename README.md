<h1 align="center">"Место"</h1>
<h3 align="center">Третья проектная работа</h3>

<p align="center"><img src="./src/images/readme_images/главная.png" width="80%"></p>

## Описание проекта

Учебный проект от [Я.Практикум](https://practicum.yandex.ru/web/) предтставляет собой интерактивную страницу, куда можно добавлять фотографии, удалять их и ставить лайки.

<p align="center">Данный проект был разделен на 6 основных частей:</p>
<p align="left">1. Вёрстка сайта и написание части логики на JavaScript</p>
<p align="left">2. Доработка функционала на JavaScript</p>
<p align="left">3. Разработка валидации всех форм, а также улучшение UX при работе с popup</p>
<p align="left">4. Рефакторинг кода</p>
<p align="left">5. Рефакторинг кода и сборка проекта Вебпаком</p>
<p align="left">6. Подключение проекта к серверу</p>


<h3 align="center">1. Вёрстка сайта и написание части логики на JavaScript</h3>

<p align="center"><img src="./src/images/readme_images/попап профиля.png" width="80%"></p>

К вёрстке основными требованиями были:
- Вёрстка по [макету](https://www.figma.com/file/2cn9N9jSkmxD84oJik7xL7/JavaScript.-Sprint-4?type=design&node-id=0-1&mode=design&t=Rpvinq2OjHnumSG0-0);
- Адаптивность;
- Файловая структура организована по БЭМу;
- При переполнение содержимого в блоке должно появляться многоточие;
  <details><summary><b>Демонстрация</b></summary>
  <p align="center"><img src="./src/images/readme_images/карточка с длинным именем.jpg" width="80%"></p>
  </details>

К логике на JavaScript основными требованиями были:
- Открытие popup при нажатии на кнопку ✎ и его закрытие при нажатии на кнопку ☒;
- При открытии popup поля формы должны быть заполнены значениями, которые отображены на странице;
- При редактировании формы и нажатии кнопки "Сохранить", popup должен автоматически закрыться, а значения на странице измениться на сохраненые;
  <details><summary><b>Демонстрация</b></summary>
  <p align="center"><img src="./src/images/readme_images/профиль.gif" width="80%"></p>
  </details>

<h3 align="center">2. Доработка функционала на JavaScript</h3>

<p align="center"><img src="./src/images/readme_images/добавление функционала.png" width="80%"></p>

К доработке функционала относится:
- Вёрстка по [макету](https://www.figma.com/file/bjyvbKKJN2naO0ucURl2Z0/JavaScript.-Sprint-5?type=design&node-id=0-1&mode=design&t=zLPzA7nNYKKA9tGK-0);
- Плавное открытие и закрытие popup;
- Открытие popup при нажатии на кнопку ✚ и его закрытие при нажатии на кнопку ☒;
- Можно написать название карточки и дать ссылку на картинку;
- При нажатии на кнопку "Создать", popup должен автоматически закрыться, а новая карточка становится первой на странице;
  <details><summary><b>Демонстрация</b></summary>
  <p align="center"><img src="./src/images/readme_images/новая-карточка.gif" width="80%"></p>
  </details>
- Реализовать функционал удаление карточки при клике на кнопку 🗑;
- Реализовать функционал постановки лайка карточки (при нажатии на кнопку 🤍, лайк закрашивается чёрным 🖤);
  <details><summary><b>Демонстрация</b></summary>
  <p align="center"><img src="./src/images/readme_images/лайк.gif" width="80%"></p>
  </details>
- Открытие popup с картинкой для режима просмотра;
  <details><summary><b>Демонстрация</b></summary>
  <p align="center"><img src="./src/images/readme_images/просмотр.gif" width="80%"></p>
  </details>

<h3 align="center">3. Разработка валидации всех форм, а также улучшение UX при работе с popup</h3>

<p align="center"><img src="./src/images/readme_images/валидация форм.png" width="80%"></p>

К разработке валидации форм относятся следующие пункты:
- Вёрстка элементов ошибок по [макету](https://www.figma.com/file/kRVLKwYG3d1HGLvh7JFWRT/JavaScript.-Sprint-6?type=design&node-id=0-1&mode=design&t=MM8BkcPe4woBpLlW-0);
- Текст ошибок стандартные браузерные;
- Валидация формы «Редактировать профиль»:
  * оба поля обязательные;
  * в поле «Имя» должно быть от 2 до 40 символов;
  * в поле «О себе» должно быть от 2 до 200 символов;
- Кнопка "Сохранить" активна только при прохождении валидации всех полей;
  <details><summary><b>Демонстрация</b></summary>
  <p align="center"><img src="./src/images/readme_images/валидация-редактирования.gif" width="80%"></p>
  </details>
- Валидация формы «Новое место»:
  * оба поля обязательные;
  * в поле «Название» должно быть от 2 до 30 символов;
  * в поле «Ссылка на картинку» должен быть URL;
- Кнопка "Создать" активна только при прохождении валидации всех полей;
  <details><summary><b>Демонстрация</b></summary>
  <p align="center"><img src="./src/images/readme_images/валидация-добавления.gif" width="80%"></p>
  </details>
- Закрытие popup кликом на оверлей;
- Закрытие popup нажатием на 'Esc';
  <details><summary><b>Демонстрация</b></summary>
  <p align="center"><img src="./src/images/readme_images/закрытие.gif" width="80%"></p>
  </details>

  <h3 align="center">4. Рефакторинг кода</h3>

Необходимо было провести рефакторинг кода, а именно:
- Создать классы Card и FormValidator;

  <h3 align="center">5. Продолжение рефакторинга кода и сборка проекта Вебпаком</h3>
  <p align="center">Итоговая структура проекта</p>
  <p align="center"><img src="./src/images/readme_images/структура проекта.png" width="80%"></p>
  </details>

К продолжению рефакторинга относится:
- Создание классов Section, Popup, PopupWithImage, PopupWithForm, UserInfo;
- Создание файла .gitignore;
- Настройка сборки проекта Webpack-ом, а именно:
  * Инициализация пакета;
  * Установка webpack, webpack-cli и webpack-dev-server;
  * Настройка минификации и транспиляции JS бабелем;
  * Настройка обработки CSS Webpack-ом;
  * Настройка минификации CSS и автоматического добавления вендорных префиксов;
  * Настройка обработки изображений и шрифтов;
  * Настройка обработки HTML;

  <h3 align="center">6. Подключение проекта к серверу</h3>

<p align="center"><img src="./src/images/readme_images/попап автара с сохранением.png" width="80%"></p>

К выполнению данной части проектной работы необходимо было:
- Сформировать запросы API к серверу: https://mesto.nomoreparties.co;
- Запросы GET, PATCH, POST, PUT, DELETE;
- Вёрстка popup подтверждения удаления карточки, обновления автара и отображение количество поставленных лайков по [макету](https://www.figma.com/file/PSdQFRHoxXJFs2FH8IXViF/JavaScript.-Sprint-9?type=design&node-id=0-1&mode=design&t=nVsn7FHArrx3pzTw-0);
- Добавление функционала подтверждения удаления карточки;
- Реализация возможности удаления карточек только созданных вами;
  <details><summary><b>Демонстрация</b></summary>
  <p align="center"><img src="./src/images/readme_images/удаление.png" width="80%"></p>
  </details>
- Постановка и снятие лайка;
  <details><summary><b>Демонстрация</b></summary>
  <p align="center"><img src="./src/images/readme_images/лайки.gif" width="80%"></p>
  </details>
- Обновление аватара пользователя: 
  * При наведении на иконку аватара появляется иконка редактирования;
  * При клике на иконку редактирования, открывается popup "Обновление аватара";
  * Валидация формы на URL;
  * При нажатии на кнопку "Сохранить" popup автоматически закрывается, а значения на странице меняется на сохраненное;
  <details><summary><b>Демонстрация</b></summary>
  <p align="center"><img src="./src/images/readme_images/изменение-аватара.gif" width="80%"></p>
  </details>
- Уведомление пользователя о процессе загрузки, поменяв текст кнопки на: «Сохранение...», пока данные загружаются;

## Используемые технологии

* HTML5 | 
* БЭМ / файловая структура в соответствии с Nested БЭМ | 
* CSS3:
  * Flexbox;
  * Grid Layout;
  * Positioning;
  * Adaptive UI;
  * Media Queries
* JavaScript:
  * Объектно-ориентированное программирование;
  * Асинхронность и оптимизация;
  * API (Application Programming Interface);
  * Стиль CamelCase;
* Webpack |

## Установка и запуск проекта:

Клонировать репозиторий:

    git clone git@github.com:elislis7/mesto.git

Установить зависимости:

    npm install

Собрать проект:

    npm run build

Запустить проект:

    npm run dev

## Ссылки на макеты Figma
1. [Макет 1](https://www.figma.com/file/2cn9N9jSkmxD84oJik7xL7/JavaScript.-Sprint-4?type=design&node-id=0-1&mode=design&t=Rpvinq2OjHnumSG0-0)
2. [Макет 2](https://www.figma.com/file/bjyvbKKJN2naO0ucURl2Z0/JavaScript.-Sprint-5?type=design&node-id=0-1&mode=design&t=zLPzA7nNYKKA9tGK-0)
3. [Макет 3](https://www.figma.com/file/kRVLKwYG3d1HGLvh7JFWRT/JavaScript.-Sprint-6?type=design&node-id=0-1&mode=design&t=MM8BkcPe4woBpLlW-0)
4. [Макет 4](https://www.figma.com/file/PSdQFRHoxXJFs2FH8IXViF/JavaScript.-Sprint-9?type=design&node-id=0-1&mode=design&t=nVsn7FHArrx3pzTw-0)


## [Ссылка на сайт](https://elislis7.github.io/mesto/)


<h4 align="center">План по доработке проекта</h4>

-[x]
