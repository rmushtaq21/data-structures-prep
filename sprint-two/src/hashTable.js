var HashTable = function() {
  this._limit = 8;
  this._count = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, value) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  /*
  retrieve a bucket
    if the bucket doesn't exist
    create a bucket
  create a found variable and set it to false
  for storing a key value pair in the bucket
    iterate over the bucket
    if the key exists
      update it
      update found
      break
    if no key is found
      insert a new tuple using the key and value inputs
  */
  var bucket = this._storage.get(index);

  if ( !bucket ) {
    bucket = [];
    this._storage.set(index, bucket);
  }

  var found = false;

  for ( var i = 0; i < bucket.length; i++ ) {
    var tuple = bucket[i];
    if ( tuple[0] === key ) {
      tuple[1] = value;
      found = true;
      break;
    }
  }

  if ( !found ) {
    bucket.push([key, value])
    this._count++;
    if ( this._count > this._limit * 0.75 ) {
      this.resize( this._limit * 2 );
    }
  }

};

HashTable.prototype.retrieve = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);

  var bucket = this._storage.get(index);
  /*
  if the key doesn't exist
    return null

  iterate over the bucket
    if the key exists
      return the associated value

  if no key is found
    return null
  */

  if ( !bucket ) {
    return null;
  }

  for ( var i = 0; i < bucket.length; i++ ) {
    var tuple = bucket[i];
    if ( tuple[0] === key ) {
      return tuple[1];
    }
  }
  return null;
};

HashTable.prototype.remove = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);

  // retrieve a bucket
  var bucket = this._storage.get(index);

  if ( !bucket ) {
    return null;
  }

  /*
  iterate over the bucket
  for each tuple in the bucket
    if the key is found
      remove that tuple using splice
      return the value deteled
  */

  for ( var i = 0; i < bucket.length; i++ ) {
    var tuple = bucket[i];
    if ( tuple[0] === key ) {
      bucket.splice(i, 1);
      this._count--;
      if ( this._count < this._limit * 0.25 ) {
        this.resize( this._limit / 2 );
      }
      return tuple[1];
    }
  }
  return null;
};

HashTable.prototype.resize = function(newLimit) {
  var oldHash = this._storage;

  this._limit = newLimit;
  this._storage = LimitedArray(newLimit);
  this._count = 0;

  /*
  create a context this or use bind(this)

  use forEach(bucket) on oldhash with a callback and input value of bucket
    iterate over bucket
    create variable tuple
    call insert with tuple[0] and tuple[1]
    bind
  */

  var context = this;

  oldHash.each(function(bucket) {
    if ( !bucket ) {
      return;
    }
    for ( var i = 0; i < bucket.length; i++ ) {
      var tuple = bucket[i];
      context.insert(tuple[0], tuple[1]);
    }
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


