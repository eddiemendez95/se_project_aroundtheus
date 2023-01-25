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

//                                                                            //
//                              Elements                                      //
//                                                                            //
const editProfileModal = document.querySelector("#edit-modal");
const addCardModal = document.querySelector("#add-card-modal");

const openEditModalButton = document.querySelector(".profile__edit-button");
const closeEditModalButton = editProfileModal.querySelector(".modal__close");
const profileEditForm = document.querySelector(".modal__form");
const addNewCardButton = document.querySelector(".profile__add-button");
const closeNewCardModalButton = addCardModal.querySelector(".modal__close");

const profileTitleElement = document.querySelector(".profile__title");
const profileDescriptionElement = document.querySelector(
  ".profile__description"
);

const profileTitleInput = document.querySelector(".modal__input_title");
const profileDescriptionInput = document.querySelector(
  ".modal__input_description"
);

const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

const cardListElement = document.querySelector(".cards__list");

//                                                                        //
//                                Functions                               //
//                                                                        //

function openPopup(modal) {
  modal.classList.add("modal_opened");
}

function closePopup(modal) {
  modal.classList.remove("modal_opened");
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageElement = cardElement.querySelector(".card__image");
  const cardTitleElement = cardElement.querySelector(".card__description-name");

  cardImageElement.src = cardData.link;
  cardImageElement.alt = cardData.name;
  cardTitleElement.textContent = cardData.name;

  return cardElement;
}

//                                                                          //
//                            Event Listener                                //
//                                                                         //

addNewCardButton.addEventListener("click", () => openPopup(addCardModal));
closeNewCardModalButton.addEventListener("click", () =>
  closePopup(addCardModal)
);

openEditModalButton.addEventListener("click", () =>
  openPopup(editProfileModal)
);
{
  profileTitleInput.value = profileTitleElement.textContent;
  profileDescriptionInput.value = profileDescriptionElement.textContent;
}

closeEditModalButton.addEventListener("click", () =>
  closePopup(editProfileModal)
);

profileEditForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const titleValue = profileTitleInput.value;
  const descriptionValue = profileDescriptionInput.value;

  profileTitleElement.textContent = titleValue;
  profileDescriptionElement.textContent = descriptionValue;

  closePopup();
});

initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);

  cardListElement.append(cardElement);
});
