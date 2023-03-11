import Popup from "./Popup";

export default class PopupImage extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });
  }

  open(name, link) {
    this._image = this._popup.querySelector(".modal__preview-image");

    this._popup.querySelector(".modal__preview-description").textContent = name;
    this._image.src = link;
    this._image.alt = name;
    super.open();
  }
}
