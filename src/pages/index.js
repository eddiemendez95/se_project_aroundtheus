import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import PopupWithForm from "../components/PopupWithForm";
import Section from "../components/Section.js";
import PopupImage from "../components/PopupWithImage.js";
import "./index.css";
import UserInfo from "../components/UserInfo.js";
import {
  config,
  initialCards,
  editProfileModal,
  addCardModal,
  openEditModalButton,
  addNewCardButton,
  profileTitleElement,
  profileDescriptionElement,
  profileTitleInput,
  profileDescriptionInput,
  cardTitleInput,
  cardUrlInput,
  cardListElement,
} from "../utils/constant.js";

//
//      Class Constants
//

const userInfo = new UserInfo({
  nameSelector: ".profile__title",
  jobSelector: ".profile__description",
});

const editFormValidation = new FormValidator(config, editProfileModal);
const addFormValidation = new FormValidator(config, addCardModal);
const editFormPopup = new PopupWithForm("#edit-modal", submitEditProfile);
const addFormPopup = new PopupWithForm("#add-card-modal", submitAddCard);
const imagePopup = new PopupImage("#preview-image-modal", handleImageClick);

const section = new Section(
  {
    items: initialCards,
    renderer: renderCard,
  },
  cardListElement
);

//
//
//

editFormValidation.enableValidation();
addFormValidation.enableValidation();

editFormPopup.setEventListeners();
addFormPopup.setEventListeners();
imagePopup.setEventListeners();

section.renderItems();

//
//    Event Listeners
//

openEditModalButton.addEventListener("click", () => {
  openProfileEditForm();
});

addNewCardButton.addEventListener("click", () => {
  addFormValidation.resetValidation();
  addFormPopup.open();
});

//
//    Functions
//

function openProfileEditForm() {
  const profileInfo = userInfo.getUserInfo();
  profileTitleInput.value = profileInfo.name;
  profileDescriptionInput.value = profileInfo.job;
  editFormValidation.resetValidation();
  editFormPopup.open();
}

function submitEditProfile(inputValues) {
  console.log(inputValues);
  userInfo.setUserInfo({
    name: inputValues.title,
    job: inputValues.description,
  });
}

function submitAddCard(inputValues) {
  console.log(inputValues);
  renderCard(
    { name: inputValues.place, link: inputValues.url },
    cardListElement
  );
}

function renderCard(cardData) {
  const card = new Card(
    cardData,
    "#card-template",
    handleImageClick
  ).renderCard();
  cardListElement.prepend(card);
}

function handleImageClick(name, link) {
  imagePopup.open(name, link);
}
