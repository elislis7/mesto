import { Popup } from "./Popup.js";

export default class PopupWithImage extends Popup {
	constructor(popupSelector) {
		super(popupSelector);
		this._link = document.querySelector('.popup__place-image');
		this._name = document.querySelector('.popup__title-image');
	}

open(name, link) {
		//передаем параметры карточки (картинка)
		this._link.src = link;
		this._link.alt = name;
		//передаем параметры карточки (название)
		this._name.textContent = name;

		super.open();
	}
}