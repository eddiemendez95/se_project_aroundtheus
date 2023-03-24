class Section {
  constructor({ items, renderer }, cardsList) {
    this._items = items;
    this._renderer = renderer;
    this._cardsList = cardsList;
  }

  renderItems() {
    this._items.forEach((item) => this._renderer(item));
  }

  addItem(item) {
    const newItem = this._renderer(item);
    this._cardsList.prepend(newItem);
  }
}

export default Section;
