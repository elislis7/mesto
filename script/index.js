let buttonProfileEdit = document.querySelector('.profile__edit-button');
let popupOpened = document.querySelector('.popup');
let popupClose = document.querySelector('.popup__close-icon');

let formElement = document.querySelector('.popup');
let nameInput = document.querySelector('.popup__input-name');
let descriptionInput = document.querySelector('.popup__input-description');
let popupNameInput = document.querySelector('.profile__info-name');
let popupDescriptionInput = document.querySelector('.profile__info-description');

function buttonOpen () {
  popupOpened.classList.add('popup_opened');

  nameInput.value = popupNameInput.textContent;
  descriptionInput.value = popupDescriptionInput.textContent;
}

function buttonClose () {
  popupOpened.classList.remove('popup_opened');
}

function handleFormSubmit (e) {
  e.preventDefault();
  popupNameInput.textContent = nameInput.value;
  popupDescriptionInput.textContent = descriptionInput.value;
  buttonClose();
}

formElement.addEventListener('submit', handleFormSubmit);
buttonProfileEdit.addEventListener('click', buttonOpen);
popupClose.addEventListener('click', buttonClose);