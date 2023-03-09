class Popup {
  constructor({ popupSelector }) {
    this._popupSelector = document.querySelector(popupSelector);
    this._closeButton = this._popupSelector.querySelector(".modal__close");
  }

  open() {
    this._popupSelector.classList.add("modal_opened");
    document.addEventListener("keydown", (e) => this._handleEscClose(e));
    document.addEventListener("mousedown", (e) => this._handleOverlay(e));
    this._closeButton.addEventListener("click", () => {
      this.close();
    });
  }

  close() {
    this._popupSelector.classList.remove("modal_opened");
    document.removeEventListener("keydown", (e) => this._handleEscClose(e));
    document.removeEventListener("mousedown", (e) => this._handleOverlay(e));
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
    this.open();
    this.close();
  }
}

export default Popup;
