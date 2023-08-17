<h1 align="center">"Место"</h1>
<h3 align="center">Третья проектная работа</h3>

<p align="center"><img src="./src/images/readme_images/главная.png" width="80%"></p>

## Описание проекта

Учебный проект от [Я.Практикум](https://practicum.yandex.ru/web/) предтставляет собой интерактивную страницу, куда можно добавлять фотографии, удалять их и ставить лайки.

Данный проект был разделен на 3 основных части выполнения:
  1. Вёрстка сайта и написание части логики на JavaScript
  2. Доработка функционала на JavaScript
  3. Разработка валидации всех форм, а также улучшение UX при работе с popup

<p align="center">Далее подробнее описан каждый из шагов выполнения проекта.</p>

<h3 align="center">Вёрстка сайта и написание части логики на JavaScript</h3>

<p align="center"><img src="./src/images/readme_images/попап профиля.png" width="80%"></p>

К вёрстке основными требованиями были:
- Вёрстка по макету;
- Адаптивность;
- Файловая структура организована по БЭМу;
- При переполнение содержимого в блоке должно появляться многоточие;
<details><summary><b>Развернуть</b></summary>
<p align="center"><img src="./src/images/readme_images/карточка с длинным именем.jpg" width="80%"></p>
</details>

К логике на JavaScript основными требованиями были:
- Открытие и закрытие popup;
- При открытии popup поля формы должны быть заполнены значениями, которые отображены на странице;
- При редактировании формы и нажатии кнопки "Сохранить", popup должен автоматически закрыться, а значения на странице измениться на сохраненые;
<details><summary><b>Развернуть</b></summary>
<p align="center"><img src="./src/images/readme_images/gif.gif" width="80%"></p>
</details>

## Используемые технологии

HTML5 | CSS3 | БЭМ / файловая структура в соответствии с Nested БЭМ | адаптивная верстка | Grid Layout | Flexbox | JavaScript

## [Ссылка на макет Figma](https://www.figma.com/file/2cn9N9jSkmxD84oJik7xL7/JavaScript.-Sprint-4?node-id=0%3A)

## [Ссылка на сайт](https://elislis7.github.io/mesto/)


<h4 align="center">План по доработке проекта</h4>

- Доработка сайта по расширенному [макету](https://www.figma.com/file/hzVjdK04BSlLyQL6Jv6jCD/Russia-%2F-desktop-%2B-mobile-(Copy)-(Copy)?type=design&node-id=0-1&mode=design&t=dzCjQIbYzKHbVGdr-0) |
- Доработка функционала сайта посредством JavaScript:
  - Добавить popup для просмотра изображений полностью | ✅;
  - Добавить закрытие popup на кнопку закрытия, оверлей, а также клавишу на клавиатуре 'Escape' | ✅;
  - Сделать функциональным переключение языка страницы | ;