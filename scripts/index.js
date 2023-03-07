import FormValidator from "./formvalidator.js";
import Card from "./card.js";
import PopupWithForm from "./popupwithform.js";
import Section from "./section.js";
import PopupImage from "./popupwithimage.js";

const initialCards = [
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

const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButton: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

//                                                                            //
//                              Elements                                      //
//                                                                            //
const editProfileModal = document.querySelector("#edit-modal");
const addCardModal = document.querySelector("#add-card-modal");
const profileEditForm = editProfileModal.querySelector(".modal__form");
const addCardForm = addCardModal.querySelector(".modal__form");
const addCardInputs = [...addCardForm.querySelectorAll(".modal__input")];
const cardFormSubmitButton = addCardForm.querySelector(".modal__button");
const previewImageModal = document.querySelector("#preview-image-modal");
// const previewImage = previewImageModal.querySelector(".modal__preview-image");
// const previewDescription = previewImageModal.querySelector(
//   ".modal__preview-description"
// );

//                                                                            //
//                              Buttons                                       //
//                                                                            //

const openEditModalButton = document.querySelector(".profile__edit-button");
const closeEditModalButton = editProfileModal.querySelector(".modal__close");
const addNewCardButton = document.querySelector(".profile__add-button");
const closeNewCardModalButton = addCardModal.querySelector(".modal__close");
// const cardImageElement = document.querySelector(".card__image");
const profileTitleElement = document.querySelector(".profile__title");
const profileDescriptionElement = document.querySelector(
  ".profile__description"
);
const closePreviewModalButton =
  previewImageModal.querySelector(".modal__close");

//                                                                          //
//                             Form Data                                    //
//                                                                          //

const profileTitleInput = profileEditForm.querySelector(".modal__input_title");
const profileDescriptionInput = profileEditForm.querySelector(
  ".modal__input_description"
);

const cardTitleInput = addCardForm.querySelector(".modal__input_place");
const cardUrlInput = addCardForm.querySelector(".modal__input_url");

// const cardTemplate =
//   document.querySelector("#card-template").content.firstElementChild;

const cardListElement = document.querySelector(".cards__list");

//                                                                        //
//                                Functions                               //
//                                                                        //

// function openPopup(modal) {
//   modal.classList.add("modal_opened");
//   document.addEventListener("keydown", closeByEscape);
//   document.addEventListener("mousedown", handleOverlay);
// }

// function closePopup(modal) {
//   modal.classList.remove("modal_opened");
//   document.removeEventListener("keydown", closeByEscape);
//   document.removeEventListener("mousedown", handleOverlay);
// }

// function getCardElement(cardData) {
//   const cardElement = cardTemplate.cloneNode(true);
//   const cardImageElement = cardElement.querySelector(".card__image");
//   const cardTitleElement = cardElement.querySelector(".card__description-name");
//   const likeButton = cardElement.querySelector(".card__like-button");
// const deleteButton = cardElement.querySelector(".card__trash-button");

// likeButton.addEventListener("click", () => {
//   likeButton.classList.toggle("card__like-button_active");
// });

// deleteButton.addEventListener("click", deleteCard);

// cardImageElement.addEventListener("click", () => {
//   openImageModal(cardData);
// });

//   cardImageElement.src = cardData.link;
//   cardImageElement.alt = cardData.name;
//   cardTitleElement.textContent = cardData.name;

//   return cardElement;
// }

// function renderCard(cardData, wrap) {
//   const cardElement = getCardElement(cardData);
//   wrap.prepend(cardElement);
// }

function fillProfileForm() {
  profileTitleInput.value = profileTitleElement.textContent;
  profileDescriptionInput.value = profileDescriptionElement.textContent;
}

// function deleteCard(event) {
//   event.target.closest(".card").remove();
// }

// function openImageModal(cardData) {
//   previewImage.src = cardData.link;
//   previewImage.alt = cardData.name;
//   previewDescription.textContent = cardData.name;

//   openPopup(previewImageModal);
// }

// function closeByEscape(e) {
//   if (e.key === "Escape") {
//     const openedPopup = document.querySelector(".modal_opened");
//     closePopup(openedPopup);
//   }
// }

// function handleOverlay(e) {
//   if (e.target.classList.contains("modal_opened")) {
//     closePopup(e.target);
//   }
// }

openEditModalButton.addEventListener("click", () => {
  openProfileEditForm();
});

addNewCardButton.addEventListener("click", () => {
  addFormPopup.open(addCardModal);
});

function editPopup() {
  profileTitle.textContent = modalEditTitleInput.value;
  profileSubtitle.textContent = modalEditSubtitleInput.value;
  editFormPopup.close(profileEditForm);
}

function addPopup() {
  const name = profileTitleElement.value;
  const link = profileDescriptionElement.value;
  renderCard({ name, link }, cardListEl);
  cardPopup.close(addCardModal);
}

function openProfileEditForm() {
  profileTitleElement.value = profileTitleInput.textContent;
  profileDescriptionElement.value = profileDescriptionInput.textContent;
  editFormPopup.open(profileEditForm);
}

function renderCard(cardData) {
  const card = new Card(cardData, "#card-Template").renderCard();
  cardListElement.prepend(card);
}

function handleImageClick(name, link) {
  imagePopup.open(name, link);
}

//                                                                          //
//                            Event Listener                                //
//                                                                         //

// addNewCardButton.addEventListener("click", () => {
//   // toggleButtonState(addCardInputs, cardFormSubmitButton, config);
//   addFormValidation.toggleSubmitBtn();
//   openPopup(addCardModal);
// });

// closeNewCardModalButton.addEventListener("click", () =>
//   closePopup(addCardModal)
// );

// openEditModalButton.addEventListener("click", () => {
//   fillProfileForm();
//   openPopup(editProfileModal);
// });

// closeEditModalButton.addEventListener("click", () =>
//   closePopup(editProfileModal)
// );

// closePreviewModalButton.addEventListener("click", () =>
//   closePopup(previewImageModal)
// );

profileEditForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const titleValue = profileTitleInput.value;
  const descriptionValue = profileDescriptionInput.value;

  profileTitleElement.textContent = titleValue;
  profileDescriptionElement.textContent = descriptionValue;

  editFormPopup.close(profileEditForm);
});

addCardForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  renderCard({ name, link }, cardListElement);
  cardTitleInput.value = "";
  cardUrlInput.value = "";
  addFormPopup.close(addCardModal);
});

// initialCards.forEach((cardData) => renderCard(cardData, cardListElement));

//
//

const editFormValidation = new FormValidator(config, editProfileModal);
const addFormValidation = new FormValidator(config, addCardModal);
// const editPopup = new Popup("#edit-modal");
// const addCardPopup = new Popup("#add-card-modal");
// const imagePopup = new Popup("#preview-image-modal");

editFormValidation.enableValidation();
addFormValidation.enableValidation();
// editPopup.setEventListeners();
// addCardPopup.setEventListeners();
// imagePopup.setEventListeners();

const editFormPopup = new PopupWithForm("#edit-modal", addCardForm);
const addFormPopup = new PopupWithForm("#add-card-modal", profileEditForm);
const imagePopup = new PopupImage("#preview-image-modal");

editFormPopup._setEventListeners();
addFormPopup._setEventListeners();
imagePopup.setEventListeners();

const section = new Section(
  {
    items: initialCards,
    renderer: renderCard,
  },
  cardListElement
);
section.renderItems();
