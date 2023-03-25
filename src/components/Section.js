class Section {
  constructor({ items, renderer }, cardsList) {
    this._items = items;
    this._renderer = renderer;
    this._cardsList = document.querySelector(cardsList);
  }

  renderItems() {
    this._items.forEach((item) => this._renderer(item));
  }

  addItem(item) {
    this._cardsList.prepend(item);
  }
}

export default Section;
