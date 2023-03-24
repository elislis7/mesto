import {Popup} from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
	constructor(popupSelector, handleFormDeleteSubmit) {
		super(popupSelector);
		this._handleFormDeleteSubmit = handleFormDeleteSubmit.bind(this);

		this._form = this._popup.querySelector('.popup__form');
		this._button = this._form.querySelectorAll('.popup__submit-button');
	}

	setButtonText(text) {
        this._button.textContent = text;
    }

	open(card, cardID) {
        super.open();
        this._card = card; 
        this._cardID = cardID; //данные id карточки
    }

	setEventListeners() {
		this._form.addEventListener('submit', (e) => {
			e.preventDefault();
			this._handleFormDeleteSubmit();
			/* super.close(); */
		});

	super.setEventListeners();
	}
}