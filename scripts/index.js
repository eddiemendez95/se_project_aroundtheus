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

function closePopup() {
  popupElement.classList.remove("modal__opened");
}

function openPopup() {
  popupElement.classList.add("modal__opened");
}

openEditModalButton.addEventListener("click", openPopup);
{
  profileTitleInput.value = profileTitleElement.textContent;
  profileDescriptionInput.value = profileDescriptionElement.textContent;
}

closeEditModalButton.addEventListener("click", closePopup);

profileEditForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const titleValue = event.target.title.value;
  const descriptionValue = event.target.description.value;

  profileTitleElement.textContent = titleValue;
  profileDescriptionElement.textContent = descriptionValue;

  closePopup();
});
