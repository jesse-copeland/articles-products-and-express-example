class Articles {
  constructor(seed) {
    this._collection = seed || [];
  }

  create(data) {
    if (data) {
      data.urlTitle = encodeURIComponent(data.title);
      this._collection.push(data);
      return true;
    }
    return false;
  }

  findAll() {
    return this._collection;
  }

  find(title) {
    if (title) {
      const foundItem = findItem(this._collection, title);
      if (foundItem) {
        return foundItem;
      }
    }
    return false;
  }

  update(title, data) {
    if (title && data) {
      const foundItem = findItem(this._collection, title);
      if (foundItem) {
        for(let prop in data) {
          if (data.hasOwnProperty(prop)) {
            foundItem[prop] = data[prop];
          }
        }
        return true;
      }
    }
    return false;
  }

  delete(title) {
    if (title) {
      const foundItem = findItem(this._collection, title);
      if (foundItem) {
        this._collection = this._collection.filter(item => {
          return item !== foundItem
        });
        return true;
      }
    }
    return false;
  }

}

module.exports = Articles;

function findItem(array, title) {
  return array.find(item => {
    return item.title === title;
  });
}
