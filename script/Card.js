export class Card {
  constructor(data, templateSelector, openImageBig) {
      this._name = data.name;
      this._link = data.link;

      this._templateSelector = templateSelector;
      this._openImageBig = openImageBig;
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
      this._heartButton = this._element.querySelector('.element__heart');
      this._trashButton = this._element.querySelector('.element__trash');
      this._elementImage = this._element.querySelector('.element__image');
      this._elementName = this._element.querySelector('.element__title');
      
      this._setEventListeners();

      //передаем параметры карточки (картинка)
      this._elementImage.src = this._link;
      this._elementImage.alt = this._name;
      //передаем параметры карточки (название)
      this._elementName.textContent = this._name;

      return this._element;
  }

  _setEventListeners() {
    this._heartButton.addEventListener('click', () => {
      this._toggleLike();
    });
      
    this._trashButton.addEventListener('click', () => {
      this._deleteCard();
    });

    this._elementImage.addEventListener('click', () => {
      this._openImageBig(this._name, this._link);
    });
  };

  //реакция на кнопку сердца
  _toggleLike() {
    this._heartButton.classList.toggle('element__heart_active');
  }

  //удаление карточки
  _deleteCard() {
    this._element.remove();
  }
}