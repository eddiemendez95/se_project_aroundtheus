class FormValidator {
  constructor(config, formElement) {
    this._inputSelector = config.inputSelector;
    this._submitButton = config.submitButton;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._formElement = formElement;
  }

  _setEventListeners() {
    this._inputEls = [
      ...this._formElement.querySelectorAll(this._inputSelector),
    ];
    this.buttonElement = this._formElement.querySelector(this._submitButton);
    this._inputEls.forEach((inputEl) => {
      inputEl.addEventListener("input", () => {
        this._checkInputValidity(inputEl);
        this.toggleSubmitBtn(this._inputEls, this.buttonElement);
      });
    });
  }

  _checkInputValidity(inputEl) {
    if (!inputEl.validity.valid) {
      this._showInputError(inputEl);
    } else {
      this._hideInputError(inputEl);
    }
  }

  _showInputError(inputEl) {
    const errorElement = this._formElement.querySelector(
      `#${inputEl.id}-error`
    );
    inputEl.classList.add(this._inputErrorClass);
    errorElement.textContent = inputEl.validationMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideInputError(inputEl) {
    const errorElement = this._formElement.querySelector(
      `#${inputEl.id}-error`
    );
    inputEl.classList.remove(this._inputErrorClass);
    errorElement.textContent = "";
    errorElement.classList.remove(this._errorClass);
  }

  // toggleSubmitBtn() {
  //   if (this._checkFormValidity(this._inputEls)) {
  //     this._disableSubmitBtn(this._submitButton);
  //   } else {
  //     this._enableSubmitBtn(this._submitButton);
  //   }
  // }

  // _checkFormValidity = () =>
  //   this._inputEls.every((input) => input.validity.valid);

  // _enableSubmitBtn() {
  //   this._submitButton.classList.remove(this._inactiveButtonClass);
  //   this._submitButton.disabled = false;
  // }
  // _disableSubmitBtn() {
  //   this._submitButton.classList.add(this._inactiveButtonClass);
  //   this._submitButton.disabled = true;
  // }

  _hasInvalidInput = () =>
    this._inputEls.some((input) => !input.validity.valid);

  toggleSubmitBtn() {
    if (this._hasInvalidInput(this._inputEls)) {
      this.buttonElement.classList.add(this._inactiveButtonClass);
      this.buttonElement.disabled = true;
    } else {
      this.buttonElement.classList.remove(this._inactiveButtonClass);
      this.buttonElement.disabled = false;
    }
  }

  enableValidation() {
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}

export default FormValidator;
