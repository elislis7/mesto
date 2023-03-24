import {Popup} from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, { handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;

    this._popupForm = this._popup.querySelector('.popup__form');
    this._popupInput = this._popup.querySelectorAll('.popup__input');
    this._submitButton = this._popupForm.querySelector('.popup__submit-button');
  }

  setInputValues(data) {
    this._popupInput.forEach((input) => {
      input.value = data[input.name];
    });
  }

  _getInputValues() {
    const inputValue = {};
    this._popupInput.forEach((input) => {
      inputValue[input.name] = input.value;
    });
    return inputValue;
  }

  setButtonText(text) {
    this._submitButton.textContent = text;
  }

  setEventListeners() {

    this._popupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
    super.setEventListeners();
  }

  close() {
    super.close();
    this._popupForm.reset();
  }
}