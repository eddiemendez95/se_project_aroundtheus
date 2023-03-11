export const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButton: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

export const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg ",
  },
];

export const editProfileModal = document.querySelector("#edit-modal");
export const addCardModal = document.querySelector("#add-card-modal");
export const profileEditForm = editProfileModal.querySelector(".modal__form");
export const addCardForm = addCardModal.querySelector(".modal__form");

export const openEditModalButton = document.querySelector(
  ".profile__edit-button"
);
export const addNewCardButton = document.querySelector(".profile__add-button");
export const profileTitleElement = document.querySelector(".profile__title");
export const profileDescriptionElement = document.querySelector(
  ".profile__description"
);

export const profileTitleInput = profileEditForm.querySelector("#title-name");
export const profileDescriptionInput =
  profileEditForm.querySelector("#description-name");

export const cardTitleInput = addCardForm.querySelector(".modal__input_place");
export const cardUrlInput = addCardForm.querySelector(".modal__input_url");
export const cardListElement = document.querySelector(".cards__list");
