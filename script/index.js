import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { initialCards } from './cards.js';

const popupEdit = document.querySelector('.popup_type_edit'); //окно редактирования
const popupAdd = document.querySelector('.popup_type_add'); //окно добавления
const popupImage = document.querySelector('.popup_type_image'); //окно картинки
const profile = document.querySelector('.profile'); // переменная для поиска кнопок по секции профайла 
const buttonEditProfile = profile.querySelector('.profile__edit-button'); //кнопка редактирования
const buttonAddProfile = profile.querySelector('.profile__add-button'); //кнопка добавления
const formElementEdit = document.querySelector('.popup__form'); //форма в окне редактировная
const profilePopupNameInput = document.querySelector('.profile__info-name'); //имя
const profilePopupDescriptionInput = document.querySelector('.profile__info-description'); //род занятия
const inputName = document.querySelector('.popup__input_type_name'); //место куда будем подставлять значение имени
const inputDescription = document.querySelector('.popup__input_type_description'); //место куда будем подставлять значение род занятия
const formElementAdd = document.querySelector('.popup__form_area_add');
const inputTitle = document.querySelector('.popup__input_type_title'); //место куда будем подставлять значение названия картинки
const inputLink = document.querySelector('.popup__input_type_image'); //место куда будем подставлять значение ссылки на картинку 
const placeImage = popupImage.querySelector('.popup__place-image'); // находим карточку
const titleImage = popupImage.querySelector('.popup__title-image'); // находим имя карточки
const elementsContainer = document.querySelector('.elements');
const popupList = Array.from(document.querySelectorAll('.popup')); // найдем все попапы на странице

const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_inactive',
  inputErrorClass: '.popup__input-type_error',
  errorClass: 'popup__input-error_visible'
};

//валидация форм
const editProfileFormValidation = new FormValidator(settings, formElementEdit);
const newCreateCardFormValidation = new FormValidator(settings, formElementAdd);

editProfileFormValidation.enableValidation();
newCreateCardFormValidation.enableValidation();

// ------------------------окно редактирования--------------------------

// нажатие на кнопку редактирования
buttonEditProfile.addEventListener('click', () => {
  openPopup(popupEdit);

  inputName.value = profilePopupNameInput.textContent;
  inputDescription.value = profilePopupDescriptionInput.textContent;

  editProfileFormValidation.resetValidation();
});

//функция отправки на сервер редактированного профиля
function handleProfileFormSubmit (e) {
  e.preventDefault();

  profilePopupNameInput.textContent = inputName.value;
  profilePopupDescriptionInput.textContent = inputDescription.value;
  closePopup(popupEdit);
};

// отправка данных на сервер 
formElementEdit.addEventListener('submit', handleProfileFormSubmit);

// ------------------------окно добавления карточки--------------------------

// создаем элемент карточки и возвращаем саму карточку
function createCard(item) {
  const card = new Card(item, '#element-template', openPopupImage); // экземпляр карточки
  const cardElement = card.createElement(); // создаем карточку

  return cardElement; // возвращаем созданную карточку
}

// вызываем функцию 'создания элемента карточки' и вставляем его в HTML
function renderCard(item) {
  const cardElement = createCard(item); // создаем карточку
  elementsContainer.prepend(cardElement); // добавляем карточку в HTML
};

initialCards.forEach(renderCard);

// нажатие на кнопку добавления новой карточки
buttonAddProfile.addEventListener('click', () => {
  openPopup(popupAdd);
  formElementAdd.reset();
  newCreateCardFormValidation.resetValidation();
});

//функция отправки на сервер добавления карточки
function handleAddFormSubmit (e) {
  e.preventDefault();

  const name = inputTitle.value;
  const link = inputLink.value;
  const item = {name: name, link: link}
  renderCard(item);
  closePopup(popupAdd);
  e.target.reset();
};

// отправка данных на сервер на добавление карточки
formElementAdd.addEventListener('submit', handleAddFormSubmit);

//----------------функции открытия/закрытия попапов---------------------

// фун-ция открытия большрй картинки
function openPopupImage (name, link) {
  openPopup(popupImage);

  titleImage.textContent = name;
  placeImage.alt = `${name}.`;
  placeImage.src = link;
};

//функция открытия поп-апов
function openPopup (popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
};

//функция закрытия поп-апов
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
};

//функция закрытия поп-апов по escape
function closePopupEsc(e) {
    if (e.key === 'Escape') {
      const popup = document.querySelector('.popup_opened');
      closePopup(popup);
    };
};

//функция закрытия поп-апов по нажатию на overlay
popupList.forEach((popup) => {
  popup.addEventListener('mouseup', (e) => {
    const targetClassList = e.target.classList;
    if (targetClassList.contains('popup') || targetClassList.contains('popup__close-icon')) {
      closePopup(popup);
    }
  });
});


