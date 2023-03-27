export class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;

    this._containerSelector = document.querySelector(containerSelector);
  }

  renderer(items) {
    items.forEach((item) => {
        this._renderer(item);
      });
    }

  addItem(item) {
      this._containerSelector.append(item);
    }

  addItemPrepend(item) {
    this._containerSelector.prepend(item);
  }
}