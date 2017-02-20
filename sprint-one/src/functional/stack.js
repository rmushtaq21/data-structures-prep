var Stack = function() {
  var someInstance = {};
  var _size = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[_size] = value;
    _size += 1;
  };

  someInstance.pop = function() {
    if (_size > 0) {
      _size -= 1;
    }

    var popped = storage[_size];

    delete storage[_size];

    return popped;
  };

  someInstance.size = function() {
    return _size;
  };

  return someInstance;
};