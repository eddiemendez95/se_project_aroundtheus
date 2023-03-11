import Popup from "./Popup";

export default class PopupImage extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });
  }

  open(name, link) {
    this._popup.querySelector(".modal__preview-description").textContent = name;
    this._popup.querySelector(".modal__preview-image").src = link;
    this._popup.alt = name;
    super.open();
  }
}
