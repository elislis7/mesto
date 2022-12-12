let buttonProfileEdit = document.querySelector('.profile__edit-button');
let popupOpened = document.querySelector('.popup');

let popupClose = document.querySelector('.popup__close-icon');

buttonProfileEdit.addEventListener('click', (e) => {
  popupOpened.classList.add('popup_opened');

  nameInput.value = popupNameInput.textContent;
  descriptionInput.value = popupDescriptionInput.textContent;
})

popupClose.addEventListener('click', (e) => {
  popupOpened.classList.remove('popup_opened');
})


let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__form-name');
let descriptionInput = document.querySelector('.popup__form-description');
let popupNameInput = document.querySelector('.profile__info-name');
let popupDescriptionInput = document.querySelector('.profile__info-description');


function handleFormSubmit (e) {
  e.preventDefault();
  popupNameInput.textContent = nameInput.value;
  popupDescriptionInput.textContent = descriptionInput.value;
  popupOpened.classList.remove('popup_opened');
}

formElement.addEventListener('submit', handleFormSubmit); 
