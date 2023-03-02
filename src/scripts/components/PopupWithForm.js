import { Popup }from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._popupForm = this._popup.querySelector('.popup__form');
    this._popupInput = this._popup.querySelectorAll('.popup__input');
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

  setEventListeners() {
    super.setEventListeners();

    this._popupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      this._submitForm(this._getInputValues());
      this._popupForm.reset();
      super.close();
    });
  }
}