import {Popup} from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, { handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;

    this._popupForm = this._popup.querySelector('.popup__form');
    this._popupInput = this._popup.querySelectorAll('.popup__input');
    this._button = this._popupForm.querySelector('.popup__submit-button');
  }
  
  _getInputValues() {
    const inputValue = {};
    this._popupInput.forEach((input) => {
      inputValue[input.name] = input.value;
    });
    return inputValue;
  }

  setInputValues(data) {
    this._popupInput.forEach((input) => {
      input.value = data[input.name];
    });
  }

  setButtonText(text) {
    this._button.textContent = text;
  }

  close() {
    super.close();
    this._popupForm.reset();
  }

  setEventListeners() {
    this._popup.addEventListener('submit', (e) => {
      e.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
    super.setEventListeners();
  }

  
}