class Card {
  constructor(
    data,
    cardTemplate,
    handleImageClick,
    handleLikeClick,
    handleDeleteCard,
    loadingLikeCheck
  ) {
    this._id = data._id;
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._cardTemplate = cardTemplate;
    this._handleImageClick = handleImageClick;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteCard = handleDeleteCard;
    this._loadingLikeCheck = loadingLikeCheck;
    this._userCardOwnerId = data["owner"]._id;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardTemplate)
      .content.querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  _setEventListeners() {
    this._cardImage.addEventListener("click", () =>
      this._handleImageClick(this._name, this._link)
    );
    this._cardDeleteButton.addEventListener("click", this._handleDeleteCard);
    this._likeButton.addEventListener("click", this.handleLikeClick);
  }

  _openImageModal() {
    this._handleImageClick(this._name, this._link);
  }

  _handleLikeIcon = () => {
    this._likeButton.classList.toggle("card__like-button_active");
  };

  deleteCard = () => {
    this._element.remove();
    this._element = null;
  };

  addCardLike() {
    this._likeButton.classList.add("card__like-button_active");
  }

  removeCardLike() {
    this._likeButton.classList.remove("card__like-button_active");
  }

  checkLikeButtonState() {
    if (this._likeButton.contains("card__like-button_active")) {
      return true;
    } else {
      return false;
    }
  }

  setLikesCounter(likes) {
    this._likes = likes;
    this._cardLikes.textContent = likes;
  }

  renderCard() {
    this._element = this._getTemplate();
    this._likeButton = this._element.querySelector(".card__like-button");
    this._cardImage = this._element.querySelector(".card__image");
    const cardTitle = this._element.querySelector(".card__description-name");
    this._cardDeleteButton = this._element.querySelector(".card__trash-button");
    this._cardLikes = this._cardElement.querySelector(".card__likes-counter");

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    cardTitle.textContent = this._name;
    this._cardLikes.textContent = this._likes.length;
    this._loadingLikeCheck(this._likes, this._likeButton);

    if (this._userId != this._userCardOwnerId) {
      this._deleteButton.remove();
    }

    this._setEventListeners();

    return this._element;
  }
}

export default Card;
