import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import PopupWithForm from "../components/PopupWithForm";
import Section from "../components/Section.js";
import PopupImage from "../components/PopupWithImage.js";
import "./index.css";
import UserInfo from "../components/UserInfo.js";

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

const userInfo = new UserInfo({
  nameSelector: ".profile__title",
  jobSelector: ".profile__description",
});

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

const profileTitleInput = profileEditForm.querySelector("#title-name");
const profileDescriptionInput =
  profileEditForm.querySelector("#description-name");

const cardTitleInput = addCardForm.querySelector(".modal__input_place");
const cardUrlInput = addCardForm.querySelector(".modal__input_url");

// const cardTemplate =
//   document.querySelector("#card-template").content.firstElementChild;

const cardListElement = document.querySelector(".cards__list");

//                                                                        //
//                                Functions                               //
//                                                                        //

function fillProfileForm() {
  profileTitleInput.value = profileTitleElement.textContent;
  profileDescriptionInput.value = profileDescriptionElement.textContent;
}

openEditModalButton.addEventListener("click", () => {
  openProfileEditForm();
});

addNewCardButton.addEventListener("click", () => {
  addFormValidation.resetValidation();
  addFormPopup.open(addCardModal);
});

function openProfileEditForm() {
  const profileInfo = userInfo.getUserInfo();
  profileTitleInput.value = profileInfo.name;
  profileDescriptionInput.value = profileInfo.job;
  editFormValidation.resetValidation();
  editFormPopup.open();
}

function submitEditProfile() {
  userInfo.setUserInfo({
    name: (profileTitleElement.textContent = profileTitleInput.value),
    job: (profileDescriptionElement.textContent =
      profileDescriptionInput.value),
  });
  // editFormPopup.close(profileEditForm);
}

function submitAddCard() {
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  renderCard({ name, link }, cardListElement);
  // cardPopup.close(addCardModal);
}

function renderCard(cardData) {
  const card = new Card(
    cardData,
    "#card-template",
    handleImageClick
  ).renderCard();
  cardListElement.append(card);
}

function handleImageClick(name, link) {
  imagePopup.open(name, link);
}

//                                                                          //
//                            Event Listener                                //
//                                                                         //

// profileEditForm.addEventListener("submit", function (event) {
//   event.preventDefault();
//   const titleValue = profileTitleInput.value;
//   const descriptionValue = profileDescriptionInput.value;

//   profileTitleElement.textContent = titleValue;
//   profileDescriptionElement.textContent = descriptionValue;

//   editFormPopup.close(profileEditForm);
// });

// addCardForm.addEventListener("submit", function (event) {
//   event.preventDefault();
//   const name = cardTitleInput.value;
//   const link = cardUrlInput.value;
//   renderCard({ name, link }, cardListElement);
//   cardTitleInput.value = "";
//   cardUrlInput.value = "";
//   addFormPopup.close(addCardModal);
// });

//
//

const editFormValidation = new FormValidator(config, editProfileModal);
const addFormValidation = new FormValidator(config, addCardModal);

editFormValidation.enableValidation();
addFormValidation.enableValidation();

const editFormPopup = new PopupWithForm("#edit-modal", submitEditProfile);
const addFormPopup = new PopupWithForm("#add-card-modal", submitAddCard);
const imagePopup = new PopupImage("#preview-image-modal", handleImageClick);

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
