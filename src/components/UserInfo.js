class UserInfo {
  constructor({ nameSelector, jobSelector, avatarSelector }) {
    this._nameElement = document.querySelector(nameSelector);
    this._jobElement = document.querySelector(jobSelector);
    this._avatarSelector = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      about: this._jobElement.textContent,
    };
  }

  getAvatar() {
    return { avatar: this._avatarSelector.src };
  }

  setUserInfo(value) {
    this._nameElement.textContent = value.name;
    this._jobElement.textContent = value.about;
  }

  setAvatar(value) {
    this._avatarSelector.src = value.avatar;
    this._avatarSelector.alt = value.name;
  }
}

export default UserInfo;
