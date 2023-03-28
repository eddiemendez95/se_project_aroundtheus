// Token: 6a58fd7e-1eaa-46b8-9bcd-ee0a5e1d932d
// Group ID: group-12

// fetch("https://around.nomoreparties.co/v1/group-42/cards", {
//   headers: {
//     authorization: "c56e30dc-2883-4270-a59e-b2f7bae969c6"
//   }
// })
//   .then(res => res.json())
//   .then((result) => {
//     console.log(result);
//   });

export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error ${res.status}`);
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: "GET",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  getAPIInfo() {
    return Promise.all([this.getUserInfo(), this.getInitialCards()]);
  }

  updateUserInfo(name, about) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name,
        about,
      }),
    }).then(this._checkResponse);
  }

  addNewCard(cardData) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(cardData),
    }).then(this._checkResponse);
  }

  deleteUserCard(cardId) {
    return fetch(`${this._baseUrl}/cards/cardId`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  addLikes(cardId) {
    return fetch(`${this._baseUrl}/cardd/likes/cardId`, {
      method: "PUT",
      headers: this_headers,
    }).then(this._checkResponse);
  }

  deleteLikes(cardId) {
    return fetch(`${this._baseurl}/cards/likes/cardId`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  updateProfileAvatar(avatar) {
    return fetch(`${this._baseUrl}/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(avatar),
    }).then(this._checkResponse);
  }
}
