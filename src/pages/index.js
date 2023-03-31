import Api from "../components/Api.js";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import PopupWithForm from "../components/PopupWithForm";
import Section from "../components/Section.js";
import PopupImage from "../components/PopupWithImage.js";
import "./index.css";
import UserInfo from "../components/UserInfo.js";
import PopupWithConfirm from "../components/PopupwithConfirm.js";
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
  avatarEditModal,
  profileAvatar,
  avatarButton,
} from "../utils/constant.js";

//
//      Class Constants
//

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-12",
  headers: {
    authorization: "6a58fd7e-1eaa-46b8-9bcd-ee0a5e1d932d",
    "Content-Type": "application/json",
  },
});

const userInfo = new UserInfo({
  nameSelector: ".profile__title",
  jobSelector: ".profile__description",
  avatarSelector: ".profile__image",
});

const editFormValidation = new FormValidator(config, editProfileModal);
const addFormValidation = new FormValidator(config, addCardModal);
const avatarFormValidation = new FormValidator(config, avatarEditModal);
const editFormPopup = new PopupWithForm("#edit-modal", submitEditProfile);
const imagePopup = new PopupImage("#preview-image-modal", handleImageClick);
const deleteCardConfirm = new PopupWithConfirm("#delete-confirm-modal");

let userId;
let cardSection;

//
//
//

editFormValidation.enableValidation();
addFormValidation.enableValidation();
avatarFormValidation.enableValidation();
editFormPopup.setEventListeners();
imagePopup.setEventListeners();
deleteCardConfirm.setEventListeners();

//
//    Event Listeners
//

openEditModalButton.addEventListener("click", () => {
  openProfileEditForm();
});

addNewCardButton.addEventListener("click", () => {
  addFormValidation.resetValidation();
  addCardPopup.open();
});

//
//    Functions
//

function openProfileEditForm() {
  const profileInfo = userInfo.getUserInfo();
  profileTitleInput.value = profileInfo.name;
  profileDescriptionInput.value = profileInfo.about;
  editFormValidation.resetValidation();
  editFormPopup.open();
}

// function submitEditProfile(value) {
//   userInfo.setUserInfo({
//     name: value.name,
//     job: value.about,
//   });
//   editFormPopup.close();
// }

function submitEditProfile(inputValues) {
  editFormPopup.isLoadingButtonState(true);
  return api
    .updateUserInfo(inputValues.title, inputValues.subtitle)
    .then(() => {
      userInfo.setUserInfo({
        name: inputValues.title,
        about: inputValues.subtitle,
      });
      editFormPopup.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      editFormPopup.isLoadingButtonState(false, "Save");
    });
}

api
  .getAPIInfo()
  .then(([userData, userCards, avatar]) => {
    userId = userData._id;
    userInfo.setUserInfo(userData);
    userInfo.getAvatar(avatar);
    cardSection = new Section(
      {
        items: userCards,
        renderer: (cardData) => {
          const newCard = createCard(cardData);
          cardSection.addItem(newCard.renderCard());
        },
      },
      ".cards__list"
    );
    cardSection.renderItems();
  })
  .catch((err) => {
    console.log(err);
  });

const addCardPopup = new PopupWithForm("#add-card-modal", (values) => {
  addCardPopup.isLoadingButtonState(true);
  api
    .addNewCard(values)
    .then((data) => {
      const card = createCard(data);
      addCardPopup.close();
      cardSection.addItem(card.renderCard());
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      addCardPopup.isLoadingButtonState(false, "Create");
    });
});

addCardPopup.setEventListeners();

const avatarPopup = new PopupWithForm("#profileimage-edit-modal", (values) => {
  avatarPopup.isLoadingButtonState(true);
  api
    .updateProfileAvatar(values.avatar)
    .then((response) => {
      userInfo.setUserInfo(response);
      userInfo.setAvatar(response);
      avatarPopup.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      avatarPopup.isLoadingButtonState(false, "Save");
    });
});

avatarButton.addEventListener("click", () => avatarPopup.open());

avatarPopup.setEventListeners();

function createCard(cardData) {
  const cardElement = new Card(
    cardData,
    userId,
    "#card-template",
    (cardName, cardLink) => {
      imagePopup.open(cardName, cardLink);
    },
    (cardId) => {
      deleteCardConfirm.open();
      deleteCardConfirm.setSubmitAction(() => {
        deleteCardConfirm.renderLoading(true);
        api
          .deleteUserCard(cardId)
          .then(() => {
            cardElement.deleteCard();
            deleteCardConfirm.close();
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            deleteCardConfirm.renderLoading(false, "Save");
          });
      });
    },
    (cardId) => {
      if (cardElement.isLiked()) {
        api
          .deleteLikes(cardId)
          .then((res) => {
            cardElement.updateLikes(res.likes);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        api
          .addLikes(cardId)
          .then((res) => {
            cardElement.updateLikes(res.likes);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  );
  return cardElement;
}

function handleImageClick(name, link) {
  imagePopup.open(name, link);
}
