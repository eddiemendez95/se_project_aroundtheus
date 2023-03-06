import Popup from "./popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector });
    this._popupForm = popupSelector.querySelector("modal__form");
    this._handleFormSubmit = handleFormSubmit;
    this._formInputs = this._popupForm.querySelectorAll(".modal__input");
    this._closeButton = this._popupSelector.querySelector(".modal__close");
  }

  close() {
    this._popupForm.reset();
    super.close();
  }

  _setEventListeners() {
    super.setEventListeners;
    this._closeButton.addEventListener("click", () => {
      this.close();
    });

    this._popupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      this._handleFormSubmit();
      this.close();
    });
  }
}

export default PopupWithForm;
