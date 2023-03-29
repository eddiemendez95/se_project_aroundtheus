class UserInfo {
  constructor({ nameSelector, jobSelector, userAvatar }) {
    this._nameElement = document.querySelector(nameSelector);
    this._jobElement = document.querySelector(jobSelector);
    this._userAvatar = document.querySelector(userAvatar);
  }

  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      about: this._jobElement.textContent,
      avatar: this._userAvatar.src,
    };
  }

  setUserInfo(value) {
    this._nameElement.textContent = value.name;
    this._jobElement.textContent = value.about;
    this._userAvatar.src = value.avatar;
    this._userAvatar.alt = value.name;
  }
}

export default UserInfo;
