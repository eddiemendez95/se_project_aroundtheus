class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector("#card-template")
      .content.querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  _setEventListeners() {
    this._cardImage.addEventListener("click", () => this._handlePreview());
    this._cardDeleteButton.addEventListener("click", this._handleDeleteCard);
    this._likeButton.addEventListener("click", this._handleLikeIcon);
  }

  _openImageModal() {
    const previewImage = document.querySelector(".modal__preview-image");
    const previewDescription = document.querySelector(".modal__preview-title");

    previewImage.src = this._link;
    previewImage.alt = this._name;
    previewDescription.textContent = this._name;
  }

  _handleLikeIcon = () => {
    this._likeButton.classList.toggle(".card__like-button-active");
  };

  _handleDeleteCard = () => {
    this._cardElement.remove();
  };

  renderCard() {
    this._element = this._getTemplate();
    this._likeButton = this._element.querySelector(".card__like-button");
    this._cardImage = this._element.querySelector(".card__image");
    this._cardTitle = this._element.querySelector(".card__description-name");
    this._cardDeleteButton = this._element.querySelector(".card__trash-button");

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name;

    this._setEventListeners();

    return this._element;
  }
}

export default Card;
