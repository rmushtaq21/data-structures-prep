var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.storage = {};
  this._size = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this._size] = value;
  this._size += 1;
}

Stack.prototype.pop = function() {
  if(this._size > 0) {
    this._size -= 1;
  }
  var popped = this.storage[this._size];

  delete this.storage[this._size];

  return popped;
}

Stack.prototype.size = function() {
  return this._size;
}