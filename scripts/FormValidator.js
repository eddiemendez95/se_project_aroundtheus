const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButton: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

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
    const inputEls = [...formEl.querySelectorAll(this._inputSelector)];
    const submitButton = formEl.querySelector(this._submitButton);
    inputEls.forEach((inputEl) => {
      inputEl.addEventListener("input", () => {
        this._checkValidity(inputEl);
        this._toggleSubmitBtn(inputEls, submitButton);
      });
      // this._formElement.addEventListener("reset", () => {
      //     setTimeout(() => {
      //      this._toggleSubmitBtn(inputEls, buttonEl)
      //     }, 0);
      //   });
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

  _toggleSubmitBtn(inputEls, buttonEl) {
    if (this._hasInvalidInput(inputEls)) {
      this._disableSubmitBtn(buttonEl);
    } else {
      this._enableSubmitBtn(buttonEl);
    }
  }

  _checkFormValidity() {
    (inputs) => inputs.every((input) => input.validity.valid);
  }

  _disableSubmitBtn(buttonEl) {
    buttonEl.classList.add(this._inactiveButtonClass);
    buttonEl.disabled = true;
  }

  _enableSubmitBtn(buttonEl) {
    buttonEl.classList.remove(this._inactiveButtonClass);
    buttonEl.disabled = false;
  }

  enableValidation() {
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}

export default FormValidator;
