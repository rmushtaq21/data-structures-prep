var BinarySearchTree = function(value) {
  var tree = Object.create(nodeMethods);
  tree.value = value;
  tree.left = null;
  tree.right = null;


  return tree;
};

var nodeMethods = {};

nodeMethods.insert = function(nodeVal) {
  /*
  create a new node and assign it's value the nodeVal

  if the new node value is greater than the current value
    if the right property is null
    insert the new node to the right property
  if the new node value is less than or equal to the current value
    if the left property is null
    insert the new node to the left property
  */
  var newNode = new Node(nodeVal);

  if (this.value === null) {
    this.value = newNode.value;
    this.left = newNode.left;
    this.right = newNode.right;
  }

  if (this.value < newNode.value) {
    if (this.right === null) {
      this.right = newNode;
    } else {
      this.right.insert(nodeVal);
    }
  }
  if (this.value >= newNode.value) {
    if (this.left === null) {
      this.left = newNode;
    } else {
      this.left.insert(nodeVal);
    }
  }


};

nodeMethods.contains = function(target) {
/*
if the tree is null
  return false
if the current tree value matches the target
  return true
 else if the current tree value doesnt match the target
    if the target value is greater than the current tree value
      call contains on the right property
    else if the target value is less than or equal to the current tree value
      call contains on the left property
*/
  if (this.value === null) {
    return false;
  }

  if ( this.value === target ) {
    return true;
  }

  if (this.value < target) {
    if (this.right !== null) {
      if (this.right.contains(target) ) {
        return true;
      }
    }
  }
  else if (this.value >= target) {
    if (this.left !== null) {
      if (this.left.contains(target)) {
        return true;
      }
    }
  }

  return false;

};

nodeMethods.depthFirstLog = function(callback) {
  callback(this.value);

  if (this.left) {
    this.left.depthFirstLog(callback);
  }

  if (this.right) {
    this.right.depthFirstLog(callback);
  }
};

var Node = function(value) {

  var node = {};
  var node = Object.create(nodeMethods);
  node.value = value;
  node.right = null;
  node.left = null;

  return node;
};


/*
 * Complexity: What is the time complexity of the above functions? // log2n
 */

/*
create a newNode and assign its value the input value

if the treeValue matches the newNode's value and if left value is null
  assign the left property the newNode
else if left value is not null
  if it's left property is null
    assign it the newNode

if the treeValue does not match the newNode's value
  if the newNode's value is greater than the treeValue
    if treeValue's right property is null
      assign it's right property the newNode
    // use recursion

  else if the newNode's value is less than the treeValue
    if treeValue's left property is null
      assign it's left property the newNode
    // use recursion
*/