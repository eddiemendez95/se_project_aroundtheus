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
const profileEditForm = editProfileModal.querySelector(".modal__form");
const addCardForm = addCardModal.querySelector(".modal__form");
const previewImageModal = document.querySelector("#preview-image-modal");
const previewImage = previewImageModal.querySelector(".modal__preview-image");
const previewDescription = previewImageModal.querySelector(
  ".modal__preview-description"
);

//                                                                            //
//                              Buttons                                       //
//                                                                            //

const openEditModalButton = document.querySelector(".profile__edit-button");
const closeEditModalButton = editProfileModal.querySelector(".modal__close");
const addNewCardButton = document.querySelector(".profile__add-button");
const closeNewCardModalButton = addCardModal.querySelector(".modal__close");
const cardImageElement = document.querySelector(".card__image");
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
  const likeButton = cardElement.querySelector(".card__like-button");
  const deleteButton = cardElement.querySelector(".card__trash-button");

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });

  deleteButton.addEventListener("click", deleteCard);

  cardImageElement.addEventListener("click", () => {
    openImageModal(cardData);
  });

  cardImageElement.src = cardData.link;
  cardImageElement.alt = cardData.name;
  cardTitleElement.textContent = cardData.name;

  return cardElement;
}

function renderCard(cardData, wrap) {
  const cardElement = getCardElement(cardData);
  wrap.prepend(cardElement);
}

function deleteCard(event) {
  event.target.closest(".card").remove();
}

function openImageModal(cardData) {
  previewImage.src = cardData.link;
  previewImage.alt = cardData.name;
  previewDescription.textContent = cardData.name;

  openPopup(previewImageModal);
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

closePreviewModalButton.addEventListener("click", () =>
  closePopup(previewImageModal)
);

profileEditForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const titleValue = profileTitleInput.value;
  const descriptionValue = profileDescriptionInput.value;

  profileTitleElement.textContent = titleValue;
  profileDescriptionElement.textContent = descriptionValue;

  closePopup(editProfileModal);
});

addCardForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  renderCard({ name, link }, cardListElement);
  cardTitleInput.value = "";
  cardUrlInput.value = "";
  closePopup(addCardModal);
});

initialCards.forEach((cardData) => renderCard(cardData, cardListElement));
