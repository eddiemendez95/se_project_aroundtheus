import Popup from "./Popup";

export default class PopupImage extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });
  }

  open(name, link) {
    this._popupSelector.querySelector(
      ".modal__preview-description"
    ).textContent = name;
    this._popupSelector.querySelector(".modal__preview-image").src = link;
    this._popupSelector.alt = name;
    super.open();
  }
}
