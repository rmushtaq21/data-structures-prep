var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  /*
    create a new child
    add child to the children array
  */
  var child = new Tree(value);
  this.children.push(child);

};

treeMethods.contains = function(target) {
/*
  if the current tree's value matches the target
    return true
  iterate over the children array
    check if the trees in the children array contain the target
    call contains on each tree passing in the target
  return false
*/
  if (this.value === target) {
    return true;
  }
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) {
      return true;
    }
  }
  return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */