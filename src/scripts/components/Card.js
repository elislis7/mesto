export class Card {
  constructor(data, templateSelector, handleCardClick, handleCardDelete, handleCardLike, userId) {
      this._userId = userId; // айди пользователя
      this._ownerId = data.owner._id; // айди владелеца, добавившего карточку
      this._cardId = data._id; // айди самой карточки
    
      this._name = data.name; // имя карточки
      this._link = data.link; // ссылка карточки
      this._isLike = false;
      this._likes = data.likes; // лайк карточки

      this._templateSelector = templateSelector;
      this._element = this._getTemplate();

      // классовые переменные 
      this._heartButton = this._element.querySelector('.element__heart');
      this._likeCounter = this._element.querySelector('.element__heart-numbers');
      this._trashButton = this._element.querySelector('.element__trash');
      this._elementImage = this._element.querySelector('.element__image');
      this._elementName = this._element.querySelector('.element__title');

      this._handleCardClick = handleCardClick; // обработать карточку
      this._handleCardDelete = handleCardDelete; // обработать удаление карточки
      this._handleCardLike = handleCardLike; // обработать добавление лайка 
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

  _setEventListeners() {
    this._heartButton.addEventListener('click', () => {
      this._handleCardLike(this, this._cardId);
    });
      
    this._trashButton.addEventListener('click', () => {
      this._handleCardDelete(this, this._cardId);
    });

    this._elementImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  };

  _clickLikeButton() {
    this._likeButton.classList.toggle('element__heart_active');
  }

  get isLike() {
    return this._isLike;
  }

  // считаем количество лайков
  getlikesCard(likes) {
    this._likes = likes;
    this._likeCounter.textContent = this._likes.length;
  }
  
  // проверка лайка от пользователя 
  toggleIsLike() {
    this._isLike = !this._isLike;
  }

  //добавить / убрать лайк
  toggleLike() {
    this._heartButton.classList.toggle('element__heart_active');
  }

  // удаление карточки
  deleteCard() {
    this._element.remove();
  }

  //добавляем данные в карточку
  createElement() {
    this._setEventListeners();

    this._elementImage.src = this._link; //передаем параметры карточки (картинка)
    this._elementImage.alt = this._name; //передаем параметры карточки (название картинки)
    this._elementName.textContent = this._name; //передаем параметры карточки (название)
    this._likeCounter.textContent = this._likes.length; //передаем параметр карточки (лайк)

    // убираем кнопку удаления карточки, если добавил карточку другой пользователь
    if (this._userId !== this._ownerId) {
      this._trashButton.remove();
    };

    if (this._likes.some(item => item._id === this._userId)) {
      this._heartButton.classList.add('element__heart_active');
      this._isLike = true;
    };

    return this._element;
  }
}