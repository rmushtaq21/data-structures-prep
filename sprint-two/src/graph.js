// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
/*
declare a new node object with a value property and an edges array
  place the new node in the graph node's array
*/
  var newNode = {};
  newNode.value = node;
  newNode.edges = [];

  this.nodes.push(newNode);

};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
/*
if the nodes length is greater than zero
  if the current node's value matches in the input node
    return true
return false
*/
  if ( this.nodes.length > 0 ) {
    for ( var i = 0; i < this.nodes.length; i++ ) {
      if ( this.nodes[i].value === node ) {
        return true;
      }
    }
  }
  return false;

};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
/*
if the nodes array is not empty
  for each node in the array
    if the current node's value is true (exists)
      check if the current node's edge's length is greater than zero
        iterate over the current node's edge's array
        call removeEdge on the node, current node's current edge
          splice the node
          return
*/
    for (var i = 0; i < this.nodes.length; i++) {
      if (this.nodes[i].value === node) {
        if (this.nodes[i].edges.length > 0) {
          for (var k = 0; k < this.nodes[i].edges.length; k++) {
            this.removeEdge(node, this.nodes[i].edges[k]);
          }
        }
        this.nodes.splice(i, 1);
        return;
      }
    }

};

// Returns a boolean indicating whether two specified nodes are connected.
// Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
/*
for each node in the nodes array
  if the current node matches the fromNode
    if the current node's edges indexes has a toNode
    return true
return false
*/
  for ( var i = 0; i < this.nodes.length; i++ ) {
    if ( this.nodes[i] !== null ) {
      if ( this.nodes[i].value === fromNode ) {
        if ( this.nodes[i].edges.indexOf(toNode) > -1 ) {
          return true;
        }
      }
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
/*
for each node in the node's array
  if the current node's value matches fromNode
    push the toNode to the current node's edges
  if the current node's value matches toNode
    push the fromNode to the current node's edges
*/
  for ( var i = 0; i < this.nodes.length; i++ ) {
    if ( this.nodes[i].value === fromNode ) {
      this.nodes[i].edges.push(toNode);
    }
    if ( this.nodes[i].value === toNode ) {
      this.nodes[i].edges.push(fromNode);
    }
  }

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
/*
for each node in the nodes array
  if the current node's value matches fromNode
    iterate over the edges array
      if the current node's current edge matches toNode
        splice the current node's current edge
  if the current node's value matches toNode
    iterate over the current node's edges
      if the current node's current edge is fromNode
        splice current edge
*/
  for ( var i = 0; i < this.nodes.length; i++ ) {
    if ( this.nodes[i].value === fromNode ) {
      for ( var j = 0; j < this.nodes[i].edges.length; j++ ) {
        if ( this.nodes[i].edges[j] === toNode ) {
          this.nodes[i].edges.splice(j, 1);
        }
      }
    }
    if ( this.nodes[i].value === toNode ) {
      for ( var j = 0; j < this.nodes[i].edges.length; j++ ) {
        if ( this.nodes[i].edges[j] === fromNode ) {
          this.nodes[i].edges.splice(j, 1);
        }
      }
    }
  }

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
/*
iterate over the nodes
  for each node
    if it is not null
    call the callback on the current node's value
*/

  for ( var i = 0; i < this.nodes.length; i++ ) {
    if ( this.nodes[i] !== null ) {
      cb( this.nodes[i].value )
    }
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */


