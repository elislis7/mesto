<h1 align="center">"Место"</h1>
<h3 align="center">Третья проектная работа</h3>

<p align="center"><img src="./src/images/readme_images/главная.png" width="80%"></p>

## Описание проекта

Учебный проект от [Я.Практикум](https://practicum.yandex.ru/web/) предтставляет собой интерактивную страницу, куда можно добавлять фотографии, удалять их и ставить лайки.

Данный проект был разделен на 3 основных части:
  1. Вёрстка сайта и написание части логики на JavaScript
  2. Доработка функционала на JavaScript
  3. Разработка валидации всех форм, а также улучшение UX при работе с popup
  4. Рефакторинг кода
  5. Рефакторинг кода и сборка проекта Вебпаком
  6. Подключение проекта к серверу

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
- Открытие popup при нажатии на кнопку ✎ (редактирования профиля) и его закрытие при нажатии на кнопку ✖;
- При открытии popup поля формы должны быть заполнены значениями, которые отображены на странице;
- При редактировании формы и нажатии кнопки "Сохранить", popup должен автоматически закрыться, а значения на странице измениться на сохраненые;
  <details align="center"><summary><b>Демонстрация</b></summary>
  <p align="center"><img src="./src/images/readme_images/профиль.gif" width="80%"></p>
  </details>

<h3 align="center">2. Доработка функционала на JavaScript</h3>

К доработке функционала относится:
- Вёрстка по [макету](https://www.figma.com/file/bjyvbKKJN2naO0ucURl2Z0/JavaScript.-Sprint-5?type=design&node-id=0-1&mode=design&t=zLPzA7nNYKKA9tGK-0);
- Плавное открытие и закрытие popup;
- Открытие popup при нажатии на кнопку ✚ (добавление новой карточки) и его закрытие при нажатии на кнопку ✖;
- Можно написать название карточки и дать ссылку на картинку;
- При нажатии на кнопку "Сохранить", popup должен автоматически закрыться, а новая карточка становится первой на странице;
  <details align="center"><summary><b>Демонстрация</b></summary>
  <p align="center"><img src="./src/images/readme_images/новая-карточка.gif" width="80%"></p>
  </details>
- Реализовать функционал удаление карточки при клике на кнопку 🗑 (корзины);
- Реализовать функционал постановки лайка карточки (при нажатии на кнопку ♡ (сердечка), лайк закрашивается чёрным ♥);
  <details align="center"><summary><b>Демонстрация</b></summary>
  <p align="center"><img src="./src/images/readme_images/лайк.gif" width="80%"></p>
  </details>
- Открытие popup с картинкой для режима просмотра;
  <details align="center"><summary><b>Демонстрация</b></summary>
  <p align="center"><img src="./src/images/readme_images/просмотр.gif" width="80%"></p>
  </details>

<h3 align="center">3. Разработка валидации всех форм, а также улучшение UX при работе с popup</h3>

К Разработке валидации форм относится:
- Вёрстка элементов ошибок по [макету](https://www.figma.com/file/kRVLKwYG3d1HGLvh7JFWRT/JavaScript.-Sprint-6?type=design&node-id=0-1&mode=design&t=MM8BkcPe4woBpLlW-0);
- Текст ошибок стандартные браузерные;
- Валидация формы «Редактировать профиль»:
  * оба поля обязательные;
  * в поле «Имя» должно быть от 2 до 40 символов;
  * в поле «О себе» должно быть от 2 до 200 символов;
  <details align="center"><summary><b>Демонстрация</b></summary>
  <p align="center"><img src="./src/images/readme_images/валидация-редактирования.gif" width="80%"></p>
  </details>
- Валидация формы «Новое место»:
  * оба поля обязательные;
  * в поле «Название» должно быть от 2 до 30 символов;
  * в поле «Ссылка на картинку» должен быть URL;
- Кнопка "Сохранить" активна только при прохождении валидации всех полей;
  <details align="center"><summary><b>Демонстрация</b></summary>
  <p align="center"><img src="./src/images/readme_images/валидация-добавления.gif" width="80%"></p>
  </details>
- Закрытие popup кликом на оверлей;
- Закрытие popup нажатием на 'Esc';
  <details align="center"><summary><b>Демонстрация</b></summary>
  <p align="center"><img src="./src/images/readme_images/закрытие.gif" width="80%"></p>
  </details>

## Используемые технологии

HTML5 | БЭМ / файловая структура в соответствии с Nested БЭМ | CSS3 | Grid Layout | Flexbox | JavaScript

## [Ссылка на макет Figma](https://www.figma.com/file/2cn9N9jSkmxD84oJik7xL7/JavaScript.-Sprint-4?type=design&node-id=0-1&mode=design&t=Rpvinq2OjHnumSG0-0)

## [Ссылка на сайт](https://elislis7.github.io/mesto/)


<h4 align="center">План по доработке проекта</h4>

- [x]
- [ ]
- [ ]