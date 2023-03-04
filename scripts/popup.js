class Popup {
  constructor({ popupSelector }) {
    this._popupSelector = document.querySelector(popupSelector);
  }

  open() {
    modal.classList.add("modal_opened");
    document.addEventListener("keydown", this._handleEscClose);
    document.addEventListener("mousedown", handleOverlay);
  }

  close() {
    modal.classList.remove("modal_opened");
    document.removeEventListener("keydown", closeByEscape);
    document.removeEventListener("mousedown", handleOverlay);
  }

  _handleEscClose(e) {
    if (e.key === "Escape") {
      const openedPopup = document.querySelector(".modal_opened");
      close(openedPopup);
    }
  }

  setEventListeners() {
    this.addNewCardButton.addEventListener("click", () => {
      addFormValidation.toggleSubmitBtn();
      open(addCardModal);
    });
    this.closeNewCardModalButton.addEventListener("click", () =>
      close(addCardModal)
    );

    this.openEditModalButton.addEventListener("click", () => {
      fillProfileForm();
      open(editProfileModal);
    });

    this.closeEditModalButton.addEventListener("click", () =>
      close(editProfileModal)
    );
  }
}

export default Popup;
