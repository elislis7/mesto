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

  addItem(e) {
      this._containerSelector.append(e);
    }

  addItemPrepend(e) {
    this._containerSelector.prepend(e);
  }
}