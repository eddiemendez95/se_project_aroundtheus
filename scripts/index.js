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

//                              Elements                                      //
//                                                                            //

const openEditModalButton = document.querySelector(".profile__edit-button");
const popupElement = document.querySelector(".modal");
const closeEditModalButton = document.querySelector(".modal__close");
const profileEditForm = document.querySelector(".modal__form");

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

//                                Functions                               //
//                                                                        //

function openPopup() {
  popupElement.classList.add("modal_opened");
}

function closePopup() {
  popupElement.classList.remove("modal_opened");
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

//                            Event Listener                                //
//                                                                         //

openEditModalButton.addEventListener("click", openPopup);
{
  profileTitleInput.value = profileTitleElement.textContent;
  profileDescriptionInput.value = profileDescriptionElement.textContent;
}

closeEditModalButton.addEventListener("click", closePopup);

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
