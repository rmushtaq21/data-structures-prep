var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[size++] = value;
  };

  someInstance.pop = function() {
    if(size) {
      size--;
    }

    var popped = storage[size];

    delete storage[size];

    return popped;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
