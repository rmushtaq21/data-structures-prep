var Queue = function() {
  var someInstance = {};
  var start = 0;
  var end = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[end++] = value;
  };

  someInstance.dequeue = function() {
    var dequeued = storage[start];

    delete storage[start];

    someInstance.size() && start++;

    return dequeued;
  };

  someInstance.size = function() {
    return end - start;
  };

  return someInstance;
};
