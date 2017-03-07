var LinkedList = function(value) {
  var list = {};
  list.value = value;
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
  /*
  create a new node

  if list head is null
    point head and tail to newNode
  else
    point the tail's next property to the newNode
    point tail to the new node
  */
    var newNode = new LinkedList(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  };

  list.removeHead = function() {
    /*
      if the list is empty
        (the head is already pointing to null)
        return
      else if there is only one node
        save it's value in formerHead
        point head to null
        point tail to null
        return formerHead
      else (if there is more than one node)
        (head.next property is a node)
        save head's value in formerHead
        point head to the next node
        return formerHead
    */
    if (this.head === null) {
      return;
    }
    else if (this.head.next === null) {
      var formerHead = this.head;

      this.head = null;
      this.tail = null;

      return formerHead.value;
    }
    else {
      var formerHead = this.head.value;
      this.head = this.head.next;
      return formerHead;
    }

  };

  list.contains = function(target) {
  /*
    if the head's value matches the target
      return true
    else
      check the head's next node's value

  */
    if (this.head.value === null) {
      return false;
    }
    else if (this.head.value === target) {
      return true;
    }
    else {
      return this.head.next.contains(target);
    }
  };

  return list;
};

// var Node = function(value) {
//   var node = {};

//   node.value = value;
//   node.next = null;

//   return node;
// };

/*
 * Complexity: What is the time complexity of the above functions?
 */

/*
Singly LinkedList -

Each node knows about the node that comes after it in the list (the next node in the list)
Iterate over a linked list:

1. Look at the current node
  - Have a "current" pointer/variable set to a current node
  - Start the "current" pointer at the head of the list
  - To move on to the next node, set the "current" pointer to the current node's next property
  - We know we're finished when current.next is null


Doubly LinkedList -

Each node knows about the node that comes before and after it in the list (the previous and next nodes in the list)
*/
