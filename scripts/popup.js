class Popup {
  constructor({ popupSelector }) {
    console.log(popupSelector);
    this._popupSelector = document.querySelector(popupSelector);
  }

  open() {
    this._popupSelector.classList.add("modal_opened");
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
  }

  removeEventListener() {
    document.removeEventListener("keydown", closeByEscape);
    document.removeEventListener("mousedown", handleOverlay);
  }
}

export default Popup;
