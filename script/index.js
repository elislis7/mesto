const popupEdit = document.querySelector('.popup_type_edit'); //окно редактирования
const popupAdd = document.querySelector('.popup_type_add'); //окно добавления
const popupImage = document.querySelector('.popup_type_image'); //окно картинки
const popupCloseButton = document.querySelectorAll('.popup__close-icon'); //кнопка закрытия в окнах
const popupSubmitEdit = popupEdit.querySelector('.popup__submit-button'); //кнопка сохранения данных в окне редактировная
const popupSubmitAdd = popupAdd.querySelector('.popup__submit-button'); //кнопка сохранения данных в окне добавления
const profile = document.querySelector('.profile'); // переменная для поиска кнопок по секции профайла 
const buttonEditProfile = profile.querySelector('.profile__edit-button'); //кнопка редактирования
const buttonAddProfile = profile.querySelector('.profile__add-button'); //кнопка добавления
const buttonImagePlace = document.querySelector('.popup__place-image'); //кнопка картинки
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
const userTemplate = document.querySelector('#element-template').content.querySelector('.element');

// Массив карточек
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function createElement(name, link) {
  const userElement = userTemplate.cloneNode(true); // клонирование содержимого тега темплейт
  const cardImage = userElement.querySelector('.element__image');

  //находим элементы карточки
  cardImage.src = link;
  cardImage.alt = name;
  userElement.querySelector('.element__title').textContent = name;

  const trashButton = userElement.querySelector('.element__trash');
  trashButton.addEventListener('click', function() {
    userElement.remove(); // находим сначала кнопку удаления дальше задаем реакцию на пользователя, что при нажатии вся карточка удаляется
  });

  const heartButton = userElement.querySelector('.element__heart');
  heartButton.addEventListener('click', function(e) {
    e.target.classList.toggle('element__heart_active'); //сначала находим сердце по классу, а потом задаем реакцию на пользователя (при нажатии на сердце добавляется доп.класс)
  });

  cardImage.addEventListener('click', function() {
    openPopupImage(name, link);
  });

  return userElement;
};

function openPopupImage (name, link) {
  openPopup(popupImage);

  titleImage.textContent = name;
  placeImage.alt = name;
  placeImage.src = link;
};

//функция открытия поп-апов
function openPopup (popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
  popup.addEventListener('click', closePopupOverlay);
};

//функция закрытия поп-апов
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
  popup.removeEventListener('click', closePopupOverlay);
};

//функция отправки на сервер редактированного профиля
function handleProfileFormSubmit (e) {
  e.preventDefault();

  profilePopupNameInput.textContent = inputName.value;
  profilePopupDescriptionInput.textContent = inputDescription.value;
  closePopup(popupEdit);
};

function addElement(name, link) {
  elementsContainer.prepend(createElement(name, link));
} // добавляет карточку на страницу (кнопка "Создать")

function renderElements() {
  [...initialCards].reverse().forEach(card => {
    addElement(card.name, card.link);
  });
};

function handleAddFormSubmit (e) {
  e.preventDefault();

  addElement(inputTitle.value, inputLink.value);
  closePopup(popupAdd);
  e.target.reset();
};

buttonEditProfile.addEventListener('click', function () {
  openPopup(popupEdit);

  inputName.value = profilePopupNameInput.textContent;
  inputDescription.value = profilePopupDescriptionInput.textContent;
});

buttonAddProfile.addEventListener('click', function () {
  openPopup(popupAdd);
});

popupCloseButton.forEach(btn => {
  const popup = btn.closest('.popup');
  btn.addEventListener('click', () => closePopup(popup));
});

formElementEdit.addEventListener('submit', handleProfileFormSubmit);
formElementAdd.addEventListener('submit', handleAddFormSubmit);

renderElements();

//функция закрытия поп-апов по escape
function closePopupEsc(e) {
    if (e.key === 'Escape') {
      const popup = document.querySelector('.popup_opened');
      closePopup(popup);
    };
};

//функция закрытия поп-апов по нажатию на overlay
const closePopupOverlay = function(e) {
  if (e.target === e.currentTarget) {
    return;
  }
  closePopup(e.target);
};

