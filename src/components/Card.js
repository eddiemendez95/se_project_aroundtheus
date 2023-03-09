class Card {
  constructor(data, cardSelector, handleImageClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;

    this._handleImageClick = handleImageClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector("#card-template")
      .content.querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  _setEventListeners() {
    this._cardImage.addEventListener("click", () =>
      this._handleImageClick(this._name, this._link)
    );
    this._cardDeleteButton.addEventListener("click", this._handleDeleteCard);
    this._likeButton.addEventListener("click", this._handleLikeIcon);
  }

  _openImageModal() {
    // const previewImage = document.querySelector(".modal__preview-image");
    // const previewDescription = document.querySelector(
    //   ".modal__preview-description"
    // );

    // previewImage.src = this._link;
    // previewImage.alt = this._name;
    // previewDescription.textContent = this._name;
    console.log("test");

    this._handleImageClick(this._name, this._link);
  }

  _handleLikeIcon = () => {
    this._likeButton.classList.toggle("card__like-button_active");
  };

  _handleDeleteCard = () => {
    this._element.remove();
  };

  renderCard() {
    this._element = this._getTemplate();
    this._likeButton = this._element.querySelector(".card__like-button");
    this._cardImage = this._element.querySelector(".card__image");
    const cardTitle = this._element.querySelector(".card__description-name");
    this._cardDeleteButton = this._element.querySelector(".card__trash-button");

    this._cardImage.src = this._link;
    cardTitle.alt = this._name;
    cardTitle.textContent = this._name;

    this._setEventListeners();

    return this._element;
  }
}

export default Card;
