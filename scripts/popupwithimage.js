import Popup from "./popup.js";

export default class PopupImage extends Popup {
  open(name, link) {
    this._popupElement.querySelector(
      ".modal__preview-description-image"
    ).textContent = name;
    this._popupElement.querySelector(".modal__preview-image").src = link;
    this._popupElement.alt = name;
    super.open();
  }
}
