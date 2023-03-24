export default class UserInfo {
	constructor({dataName, dataDescription, dataAvatar, _id }) {
		this._nameElement = document.querySelector(dataName);
		this._descriptionElement = document.querySelector(dataDescription);
		this._avatarElement = document.querySelector(dataAvatar);
		this._id = _id;
	}

	getUserInfo() {
		const data = {
			name: this._nameElement.textContent,
			about: this._descriptionElement.textContent,
			avatar: this._avatarElement.src
		}
		return data;
	}

	setUserInfo(data) {
		this._nameElement.textContent = data.name;
		this._descriptionElement.textContent = data.about;
	}

	setUserAvatar(data) {
		this._avatarElement.src = data.avatar;
	}

	getUserId() {
        return this._id;
    }
}