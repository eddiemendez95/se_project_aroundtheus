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
});

const editFormValidation = new FormValidator(config, editProfileModal);
const addFormValidation = new FormValidator(config, addCardModal);
const editFormPopup = new PopupWithForm("#edit-modal", submitEditProfile);
// const addFormPopup = new PopupWithForm("#add-card-modal", submitAddCard);
const imagePopup = new PopupImage("#preview-image-modal", handleImageClick);
const deleteCardConfirm = new PopupWithConfirm("#delete-confirm-modal");

let userId;
let cardSection;

//
//
//

editFormValidation.enableValidation();
addFormValidation.enableValidation();

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

// function submitAddCard(inputValues) {
//   renderCard({ name: inputValues.place, link: inputValues.url });
// }

// function submitAddCard({ name, link }) {
//   return api.addNewCard(name, link).then((res) => {
//     renderCard(res, cardListEl);
//     addCardPopup.close();
//   });
// }

api
  .getAPIInfo()
  .then(([userData, userCards]) => {
    userId = userData._id;
    userInfo.setUserInfo(userData);
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

// function renderCard(cardData) {
//   const card = new Card(
//     cardData,
//     "#card-template",
//     handleImageClick
//   ).renderCard();
//   section.addItem(card);
// }

const addCardPopup = new PopupWithForm("#add-card-modal", (values) => {
  addCardPopup.isLoadingButtonState(true);
  api
    .addNewCard(values)
    .then((data) => {
      const addCard = createCard(data);
      addCardPopup.close();
      cardSection.addItem(addCard.renderCard());
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      addCardPopup.isLoadingButtonState(false, "Create");
    });
});

addCardPopup.setEventListeners();

function createCard(cardData) {
  const card = new Card(
    cardData,
    userId,
    "#card-template",
    //handleCardClick
    (cardName, cardLink) => {
      addCardPopup.open(cardName, cardLink);
    },
    //handleDeleteClick with callback function to remove specified user card only
    (cardId) => {
      deleteCardConfirm.open();
      deleteCardConfirm.setSubmitAction(() => {
        api
          .deleteUserCard(cardId)
          .then(() => {
            card.deleteCard();
            deleteCardConfirm.close();
          })
          .catch((err) => {
            console.log(err);
          });
      });
    },
    (cardId) => {
      if (card.checkLikeButtonState()) {
        api
          .removeCardLikes(cardId)
          .then((data) => {
            card.removeCardLike();
            card.setLikesCounter(data.likes.length);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        api
          .addCardLikes(cardId)
          .then((data) => {
            card.addCardLike();
            card.setLikesCounter(data.likes.length);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    //loadingLikeCheck - loops through cards and renders server likes on page
    (cardData) => {
      cardData.forEach((cardObj) => {
        if (cardObj._id === userId) {
          card.addCardLike();
        }
      });
    }
  );
  return card;
}

function handleImageClick(name, link) {
  imagePopup.open(name, link);
}

// const addFormPopup = new PopupWithForm("#add-card-modal", submitAddCard);
