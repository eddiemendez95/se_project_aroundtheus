class Popup {
  constructor({ popupSelector }) {
    this._popupSelector = document.querySelector(popupSelector);
    this._closeButton = this._popupSelector.querySelector(".modal__close");
  }

  open() {
    this._popupSelector.classList.add("modal_opened");
    this.setEventListeners();
  }

  close() {
    this._popupSelector.classList.remove("modal_opened");
    this.removeEventListener();
  }

  _handleEscClose(e) {
    if (e.key === "Escape") {
      this.close();
    }
  }

  _handleOverlay(e) {
    if (e.target.classList.contains("modal_opened")) {
      this.close();
    }
  }

  setEventListeners() {
    document.addEventListener("keydown", this._handleEscClose);
    document.addEventListener("mousedown", this._handleOverlay);
    this._closeButton.addEventListener("click", () => {
      this.close();
    });
  }

  removeEventListener() {
    document.removeEventListener("keydown", this._handleEscClose);
    document.removeEventListener("mousedown", this._handleOverlay);
  }
}

export default Popup;
