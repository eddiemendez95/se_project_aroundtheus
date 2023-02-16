// enabling validation by calling enableValidation()
// pass all the settings on call

function showInputError(formEl, inputEl, { inputErrorClass, errorClass }) {
  const errorElement = formEl.querySelector(`#${inputEl.id}-error`);
  inputEl.classList.add(inputErrorClass);
  errorElement.textContent = inputEl.validationMessage;
  errorElement.classList.add(errorClass);
}

function hideInputError(formEl, inputEl, { inputErrorClass, errorClass }) {
  const errorElement = formEl.querySelector(`#${inputEl.id}-error`);
  inputEl.classList.remove(inputErrorClass);
  errorElement.textContent = " ";
  errorElement.classList.remove(errorClass);
}

function checkInputValidity(formEl, inputEl, options) {
  if (!inputEl.validity.valid) {
    showInputError(formEl, inputEl, options);
  } else {
    hideInputError(formEl, inputEl, options);
  }
}

const checkFormValidity = (inputs) =>
  inputs.every((input) => input.validity.valid);

function toggleButtonState(
  inputEls,
  submitButtonSelector,
  { inactiveButtonClass }
) {
  const isFormValid = checkFormValidity(inputEls);

  if (!isFormValid) {
    submitButtonSelector.classList.add(inactiveButtonClass);
    submitButtonSelector.disabled = true;
    return;
  }
  submitButtonSelector.classList.remove(inactiveButtonClass);
  submitButtonSelector.disabled = false;
}

function setEventListener(formEl, options) {
  const { inputSelector } = options;
  const inputEls = [...formEl.querySelectorAll(inputSelector)];
  const submitButtonSelector = formEl.querySelector(
    options.submitButtonSelector
  );

  inputEls.forEach((inputEl) => {
    inputEl.addEventListener("input", (e) => {
      checkInputValidity(formEl, inputEl, options);
      toggleButtonState(inputEls, submitButtonSelector, options);
    });
  });
}

function enableValidation(options) {
  const formEls = [...document.querySelectorAll(options.formSelector)];
  formEls.forEach((formEl) => {
    formEl.addEventListener("submit", (e) => {
      e.preventDefault();
    });

    setEventListener(formEl, options);
  });
}

const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

enableValidation(config);
