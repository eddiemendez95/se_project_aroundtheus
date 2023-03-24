import Popup from "./Popup.js";

class PopupWithConfirm extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });
    this._popupForm = this._popup.querySelector("#delete-confirm-form");
    this._confirmButton = document.querySelector(".modal__button-confirm");
  }

  setSubmitAction(action) {
    this._handleSubmit = action;
  }

  setEventListeners() {
    super.setEventListeners();
    this._confirmButton.addEventListener("click", (evt) => {
      evt.preventDefault();
      this._handleSubmit();
    });
  }
}

export default PopupWithConfirm;
