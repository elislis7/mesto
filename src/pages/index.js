import { Card } from '../scripts/components/Card.js';
import { FormValidator } from '../scripts/components/FormValidator.js';
import { initialCards, settings } from '../scripts/utils/constants.js';
import { Section } from '../scripts/components/Section.js';
import UserInfo from '../scripts/components/UserInfo.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import {
  inputName,
  inputDescription,
  buttonEditProfile,
  buttonAddProfile,
  popupList,
  formElementEdit,
  formElementAdd,
  inputTitle,
  inputLink,
  placeImage,
  titleImage,
} from '../scripts/utils/elements.js';

import './index.css';

//валидация форм
const editProfileFormValidation = new FormValidator(settings, formElementEdit);
editProfileFormValidation.enableValidation();

const newCreateCardFormValidation = new FormValidator(settings, formElementAdd);
newCreateCardFormValidation.enableValidation();

const userInfo = new UserInfo({
  dataName: '.profile__info-name',
  dataDescription: '.profile__info-description'
});

const popupWithImage = new PopupWithImage('.popup_type_image', placeImage, titleImage);
popupWithImage.setEventListeners();

const popupEditProfile = new PopupWithForm('.popup_type_edit', handleProfileFormSubmit);

//функция отправки на сервер редактированного профиля
function handleProfileFormSubmit () {
  userInfo.setUserInfo({ name: inputName.value, description: inputDescription.value });
  popupEditProfile.close();
};

popupEditProfile.setEventListeners();

// нажатие на кнопку редактирования
buttonEditProfile.addEventListener('click', () => {
  editProfileFormValidation.resetValidation();
  const { name, description } = userInfo.getUserInfo();

  inputName.value = name;
  inputDescription.value = description;

  popupEditProfile.open();
});

const createNewCard = new PopupWithForm('.popup_type_add', () => {
  const newCard = createCard({ name: inputTitle.value, link: inputLink.value });
  cardList.addItem(newCard);
});

createNewCard.setEventListeners();

// фун-ция открытия большрй картинки
function handleCardClick() {
  popupWithImage.open(this.getNameImage(), this.getLinkImage())
};

// создаем элемент карточки и возвращаем саму карточку
function createCard(data) {
  const card = new Card(data, '#element-template', handleCardClick); // экземпляр карточки
  const cardElement = card.createElement(); // создаем карточку

  return cardElement; // возвращаем созданную карточку
};

// вызываем функцию 'создания элемента карточки' и вставляем его в HTML
const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
      const newCard = createCard(item);
      cardList.addItem(newCard);
    }
  },
  '.elements'
);

cardList.renderer();

// нажатие на кнопку добавления новой карточки
buttonAddProfile.addEventListener('click', () => {
  newCreateCardFormValidation.resetValidation();
  createNewCard.open();
});


// ------------------------окно редактирования--------------------------



// ------------------------окно добавления карточки--------------------------



//----------------функции открытия/закрытия попапов---------------------



// --------------- заново -------------------

