var Queue = function() {
  var someInstance = {};
  var first = 0;
  var last = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[last] = value;
    last += 1;
  };

  someInstance.dequeue = function() {
    if (someInstance.size() <= 0) {
      return;
    }

    var dequeued = storage[first];

    delete storage[first];

    first += 1;

    return dequeued;
  };

  someInstance.size = function() {
    return last - first;
  };

  return someInstance;
};
