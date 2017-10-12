class Products {
  constructor(seed) {
    this._collection = seed || [];
    this._productId = 0;
  }

  create(data) {
    if (data) {
      data.id = ++this._productId;
      this._collection.push(data);
      return true;
    }
    return false;
  }

  findAll() {
    return this._collection;
  }

  find(id) {
    if (id) {
      const foundItem = findItem(id);
      if (foundItem) {
        return foundItem;
      }
    }
    return false;
  }

  update(id, data) {
    if (id && data) {
      const foundItem = findItem(id);
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

  delete(id) {
    if (id) {
      const foundItem = findItem(id);
      if (foundItem) {
        this._collection = this._collection.filter(item => item !== foundItem);
        return true;
      }
    }
    return false;
  }
}

module.exports = Products;

function findItem(id) {
  return this._collection.find(item => {
    return item.id === parseInt(id);
  });
}
