  var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.first = 0;
  someInstance.last = 0;

  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.last] = value;
  this.last += 1;
}

queueMethods.dequeue = function(value) {
  if(this.size() <= 0) {
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