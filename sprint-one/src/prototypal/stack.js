var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance._size = 0;

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this._size] = value;
  this._size += 1;
}

stackMethods.pop = function() {
  if(this._size > 0) {
    this._size -= 1;
  }

  var popped = this.storage[this._size];

  delete this.storage[this._size];

  return popped;
}

stackMethods.size = function() {
  return this._size;
}
