var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  // only add a value to a storage if it doesnt already exist
  if (_.indexOf(this._storage, item) === -1) {
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) {
  // if the index of item is not -1
    // return true
  if (_.indexOf(this._storage, item) !== -1) {
    return true;
  }
  return false;
};

setPrototype.remove = function(item) {
  this._storage.splice(item, 1);
};