export class FormValidator {
  constructor(settings, formElement) {
    this._settings = settings;
    this._formElement = formElement;

    //ищем все инпуты
    this._inputList = Array.from(this._formElement.querySelectorAll(this._settings.inputSelector));
    //находим кнопку 'Отправить/Создать' 
    this._buttonElement = this._formElement.querySelector(this._settings.submitButtonSelector);
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.add(this._settings.inputErrorClass);
    errorElement.classList.add(this._settings.errorClass);
    errorElement.textContent = errorMessage;
  };

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.remove(this._settings.inputErrorClass);
    errorElement.classList.remove(this._settings.errorClass);
    errorElement.textContent = "";
  };

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._settings.inactiveButtonClass);
      this._buttonElement.setAttribute('disabled', 'disabled');
    } else {
      this._buttonElement.classList.remove(this._settings.inactiveButtonClass);
      this._buttonElement.removeAttribute('disabled');
    }
  };

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  _setEventListeners() {
    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  };

  enableValidation() {
    this._setEventListeners();
  };

  resetValidation() {
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
    this._toggleButtonState();
  };
}

/* Если код:
buttonElement.classList.add(settings.inactiveButtonClass);
buttonElement.setAttribute('disabled', 'disabled');
и
buttonElement.classList.remove(settings.inactiveButtonClass);
buttonElement.removeAttribute('disabled');
вынести в две функции, например enableSubmitButton и disableSubmitButton, 
то их можно будет использовать внутри toggleButtonState, 
а функцию disableSubmitButton можно будет переиспользовать еще 
и при создании карточки пользователем или при открытии.

Обращаю ваше внимание, при использовании disableSubmitButton из файла index.js 
в неё следует передавать объект настроек валидации (или данные из него) */