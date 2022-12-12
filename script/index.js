let buttonProfileEdit = document.querySelector('.profile__edit_button');
let popupOpened = document.querySelector('.popup');

let popupClose = document.querySelector('.popup__close_icon');

buttonProfileEdit.addEventListener('click', (e) => {
  popupOpened.classList.add('popup_opened');

  nameInput.value = popupNameInput.textContent;
  descriptionInput.value = popupDescriptionInput.textContent;
})

popupClose.addEventListener('click', (e) => {
  popupOpened.classList.remove('popup_opened');
})


let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__form_name');
let descriptionInput = document.querySelector('.popup__form_description');
let popupNameInput = document.querySelector('.profile__info_name');
let popupDescriptionInput = document.querySelector('.profile__info_description');


function handleFormSubmit (e) {
  e.preventDefault();
  popupNameInput.textContent = nameInput.value;
  popupDescriptionInput.textContent = descriptionInput.value;
  popupOpened.classList.remove('popup_opened');
}

formElement.addEventListener('submit', handleFormSubmit); 
