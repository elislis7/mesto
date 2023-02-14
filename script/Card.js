export class Card {
  constructor(data, templateSelector, openImageClick) {
      this._name = data.name;
      this._link = data.link;

      this._templateSelector = templateSelector;
      this._openImageClick = openImageClick;
  }

  // клонируем разметку из HTML и возврат содержимого тега темплейт
  _getTemplate() {
      const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.element')
      .cloneNode(true); // клонирование содержимого тега темплейт

      return cardElement; // возвращаем элемент карточки
  }

  //добавляем данные в карточку
  createElement() {
      this._element = this._getTemplate();

      // классовые переменные 
      this._elementHeartButtonClick = this._element.querySelector('.element__heart');
      this._elementTrashButtonClick = this._element.querySelector('.element__trash');
      this._elementLink = this._element.querySelector('.element__image');
      this._elementName = this._element.querySelector('.element__title');
      
      this._setEventListeners();

      //передаем параметры карточки (картинка)
      this._elementLink.src = this._link;
      this._elementLink.alt = this._name;
      //передаем параметры карточки (название)
      this._elementName.textContent = this._name;

      return this._element;
  }

  _setEventListeners() {
    this._elementHeartButtonClick.addEventListener('click', () => {
      this._heartButtonClick();
    });
      
    this._elementTrashButtonClick.addEventListener('click', () => {
      this._trashButtonClick();
    });

    this._elementLink.addEventListener('click', () => {
      this._openImageClick(this._name, this._link);
    });
  };

  //реакция на кнопку сердца
  _heartButtonClick() {
    this._elementHeartButtonClick.classList.toggle('element__heart_active');
  }

  //удаление карточки
  _trashButtonClick() {
    this._element.remove();
  }
}