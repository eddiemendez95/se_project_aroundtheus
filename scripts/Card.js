class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data._link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardEl = document
      .querySelector("#card-template")
      .content.querySelector(".card")
      .cloneNode();
  }

  _setEventListeners() {
    this._cardElement
      .querySelector(".card__like-button")
      .addEventListener("click", () => {
        this._handleLikeIcon();
      });

    this._cardElement
      .querySelector(".card__delete-button")
      .addEventListener("click", () => {
        this._handleDeleteCard();
      });
  }

  _openImageModal() {
    previewImage.src = this._link;
    previewImage.alt = this._name;
    previewDescription.textContent = this._name;

    openImageModal();
  }

  _handleLikeIcon() {
    this._cardElement
      .querySelector(".card__like-button")
      .classList.toggle(".card__like-button-is-active");
  }

  _handleDeleteCard() {
    this._cardElement.remove();
  }

  getView() {
    this._card = this._getTemplate();
    this._setEventListeners();

    this._card.querySelector(".card__image").src = this._link;
    this._card.querySelector(".card__title").textContent = this._name;
    this._card.querySelector(".card__image").alt = this._name;

    return this._card;
  }
}

export default Card;
