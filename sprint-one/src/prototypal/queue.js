var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.first = 0;
  someInstance.last = 0;

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.last] = value;
  this.last += 1;
}

queueMethods.dequeue = function() {
  if (queueMethods.size() <= 0) {
    return;
  }

  var dequeued = this.storage[this.first];

  delete this.storage[this.first];

  this.first += 1;

  return dequeued;
}

queueMethods.size = function() {
  return this.last - this.first;
}
