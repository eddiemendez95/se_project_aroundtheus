import Popup from "../components/Popup.js";

export default class PopupWithConfirm extends Popup {
  setEventListeners() {
    super.setEventListeners();

    this._element
      .querySelector(".modal__confirm-container")
      .addEventListener("submit", (e) => {
        e.preventDefault();
        this._handleSubmit();
      });
  }

  setSubmitAction(callback) {
    this._handleSubmit = callback;
  }
}
