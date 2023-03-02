import { Popup }from "./Popup.js";

export default class PopupWithImage extends Popup {
	constructor(popupSelector, placeImage, titleImage) {
		super(popupSelector);
		this._placeImage = placeImage;
		this._titleImage = titleImage;
	}

open(name, link) {
		//передаем параметры карточки (картинка)
		this._placeImage.src = link;
		this._placeImage.alt = name;
		//передаем параметры карточки (название)
		this._titleImage.textContent = name;

		super.open();
	}
}