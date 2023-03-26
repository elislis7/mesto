export default class Api {
  constructor(data) {
    this._url = data.url;
    this._headers = data.headers;
  }

  //получаем инфо пользователя
  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers,
      method: 'GET',
      })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .catch(err => console.log(err));
  }

  //получаем карточки
  getCards() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers,
      method: 'GET',
      })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .catch(err => console.log(err));
  }

  //редактирование профиля
  editProfile(data) {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify({name: data.name, about: data.about}),
      })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .catch(err => console.log(err));
  }

  //редактирование аватара
  editProfileAvatar(data) {
    return fetch(`${this._url}/users/me/avatar`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify({ avatar: data.avatar }),
      })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .catch(err => console.log(err));
  }

  //создание карточки
  createCard(item) {
    return fetch(`${this._url}/cards`, {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify({name: item.name, link: item.link}),
      })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .catch(err => console.log(err));
  }

  //удаление карточки
  deleteCardApi(id) {
    return fetch(`${this._url}/cards/${id}`, {
      headers: this._headers,
      method: "DELETE",
      })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .catch(err => console.log(err));
  }

  // добавление лайка
  addLikes(id) {
    return fetch(`${this._url}/cards/${id}/likes`, {
      headers: this._headers,
      method: "PUT",
      })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .catch(err => console.log(err));
  }

  //удаление лайка
  deleteLikes(id) {
    return fetch(`${this._url}/cards/${id}/likes`, {
      headers: this._headers,
      method: "DELETE",
      })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .catch(err => console.log(err));
  }
}