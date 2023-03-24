import { Card } from '../scripts/components/Card.js';
import { FormValidator } from '../scripts/components/FormValidator.js';
import { settings, personalData } from '../scripts/utils/constants.js';
import { Section } from '../scripts/components/Section.js';
import Api from '../scripts/components/Api.js';
import UserInfo from '../scripts/components/UserInfo.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupWithConfirmation from '../scripts/components/PopupWithConfirmation.js';
import {
  inputName,
  inputDescription,
  inputAvatar,
  buttonEditProfile,
  buttonAddProfile,
  buttonEditAvatar,
  popupList,
  formElementEdit,
  formElementAdd,
  formElementEditAvatar,
  inputTitle,
  inputLink,
  placeImage,
  titleImage,
} from '../scripts/utils/elements.js';

import './index.css';

// -------------------апи---------------------------------------

const api = new Api(personalData);
let userId;

//______________________________НОВОЕ______________________________________________

Promise.all([api.getUserInfo(), api.getCards()])
  .then(res => {
    const [ userData, cards ] = res;

    userInfo.setUserInfo(userData);
    userInfo.setUserAvatar(userData);
    userInfo.getUserId(userData._id);

    userId = userData._id;
    cardList.renderer(cards);
  })
  .catch(err => console.log(err))

  //получение данных о пользователе
  api.getUserInfo()
  .then((res) => {
    userInfo.getUserInfo(res);
    inputName.value = res.name;
    inputDescription.value = res.about;  
  })
  .catch(err => console.log(err));

const popupEditAvatar = new PopupWithForm('.popup_edit_avatar',
  { handleFormSubmit: (data) => {
    popupEditAvatar.setButtonText('Сохранение...');

    api.editProfileAvatar(data)
    .then(res => {
      userInfo.setUserAvatar(res, { avatar: inputAvatar });
      popupEditAvatar.close();
    })
    .catch(err => console.log(err))
    .finally(() => {
      popupEditAvatar.setButtonText('Сохранить')
    })
  }
});

popupEditAvatar.setEventListeners();

buttonEditAvatar.addEventListener('click', () => {
  popupEditAvatar.open();
  editAvatarFormValidation.resetValidation();
})

// подтверждение удаления карточки
const popupDeleteCard = new PopupWithConfirmation('.popup_delete_card', card => {
  popupDeleteCard.setButtonText('Удаление...');

  api.deleteCard(card._cardId)
  console.log(api.deleteCard())
  .then(() => {
    card.deleteCard();
    popupDeleteCard.close();
  })
  .catch(err => console.log(err))
  .finally(() => {
    popupDeleteCard.setButtonText('Да');
  })
});

popupDeleteCard.setEventListeners();

//открытие попапа с удалением
function handleCardDelete(card, cardId) {
  popupDeleteCard.open(card, cardId);
};

//функция обработки лайков (счет, удаление, добавление)
function handleCardLike(card) {
  if (card.isLike) {
    api.deleteLikes(card._cardId)
    .then((res) => {
      card.getlikesCard(res.likes);
      card.toggleIsLike();
      card.deleteLike();
    })
    .catch(err => console.log(err));
  } else {
    api.addLikes(card._cardId)
    .then((res) => {
      card.getlikesCard(res.likes);
      card.toggleIsLike();
      card.addLike();
    })
    .catch(err => console.log(err));
  }
}

// ------------------------валидация форм--------------------------

const editProfileFormValidation = new FormValidator(settings, formElementEdit);
editProfileFormValidation.enableValidation();

const newCreateCardFormValidation = new FormValidator(settings, formElementAdd);
newCreateCardFormValidation.enableValidation();

const editAvatarFormValidation = new FormValidator(settings, formElementEditAvatar);
editAvatarFormValidation.enableValidation();

// ------------------------окно редактирования--------------------------

const userInfo = new UserInfo({
  dataName: '.profile__info-name',
  dataDescription: '.profile__info-description',
  dataAvatar: '.profile__avatar'
});

const popupEditProfile = new PopupWithForm('.popup_type_edit',
  { handleFormSubmit: (data) => {
    popupEditProfile.setButtonText('Сохранение...');

    api.editProfile(data)
    .then(res => {
      userInfo.setUserInfo(data);
      popupEditProfile.close(res);
    })
    .catch(err => console.log(err))
    .finally(() => {
      popupEditProfile.setButtonText('Сохранить')
    })
  }
});

popupEditProfile.setEventListeners();

// нажатие на кнопку редактирования
buttonEditProfile.addEventListener('click', () => {
  editProfileFormValidation.resetValidation();
  popupEditProfile.open();
});

// ------------------------окно добавления карточки--------------------------

// вызываем функцию 'создания элемента карточки' и вставляем его в HTML
const cardList = new Section({
  renderer: (items) => {
      cardList.addItem(createCard(items));
    }
  },
  '.elements'
);

// создаем элемент карточки и возвращаем саму карточку
function createCard(data) {
  const card = new Card(data, '#element-template', handleCardClick, handleCardDelete, handleCardLike, userId);
  const cardElement = card.createElement(); // создаем карточку

  return cardElement; // возвращаем созданную карточку
};

api.getCards()
  .then((res) => {
    cardList.renderer(res);
  })
  .catch(err => console.log(err));

const createNewCard = new PopupWithForm('.popup_type_add', 
  { handleFormSubmit: (name, link) => {
    createNewCard.setButtonText('Сохранение...');

    api.createCard(name, link)
      .then((res) => {
        const newImage = createCard(res);
        cardList.addItem(newImage);
        createNewCard.close();
      })
      .catch(err => console.log(err))
      .finally(() => {
        createNewCard.setButtonText('Создать');
      })
    }
  }
);

createNewCard.setEventListeners();

// нажатие на кнопку добавления новой карточки
buttonAddProfile.addEventListener('click', () => {
  createNewCard.open();
  newCreateCardFormValidation.resetValidation();
});

//----------------функции открытия/закрытия попапов---------------------

const popupWithImage = new PopupWithImage('.popup_type_image', placeImage, titleImage);

// фун-ция открытия большрй картинки
function handleCardClick() {
  popupWithImage.open(this.getNameImage(), this.getLinkImage());
};

popupWithImage.setEventListeners();