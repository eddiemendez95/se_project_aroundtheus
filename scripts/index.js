const initialCards = [
  {
    name: "Dodger Stadium",
    link: "https://unsplash.com/@henrypaulphotography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
  },
  {
    name: "Yankee Stadium",
    link: "https://unsplash.com/@chanan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
  },
  {
    name: "Fenway Park",
    link: "https://unsplash.com/@fotowei?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
  },
  {
    name: "Wrigley Field",
    link: "https://unsplash.com/@ryanarnst?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
  },
  {
    name: "Oracle Park",
    link: "https://unsplash.com/@ruaribell?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
  },
  {
    name: "PNC Park",
    link: "https://unsplash.com/@jcpeacock?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
  },
];

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
const cardListEl = document.querySelector(".card__list");

function closePopup() {
  popupElement.classList.remove("modal_opened");
}

function openPopup() {
  popupElement.classList.add("modal_opened");
}

function getCardElement(data) {}

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

function getCardElement(cardData) {
  //let cardElement = cardTemplate.clonenode(true);
  //let cardText = cardElement.querySelector(".card__text");
  //let cardImage = cardElement.querySelector(".card__image");

  const cardTemplate = cardTemplate.clonenode(true);
  const cardImageEl = cardElement.querySelector("card__image");
  const cardTitleEl = cardElement.querySelector("card__title");

  cardImage.src = data.link;
  cardImage.alt = data.link;
  cardText.textContent = data.name;

  cardTitleEl.textContent = cardData.name;
  return cardElement;
}

initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardListEl.prepend(cardElement);
});
