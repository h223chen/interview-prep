class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

function prettyPrint(node) {
  if (!node) {
    return;
  }

  console.log(node.value + ' -> ');

  prettyPrint(node.next);
}


prettyPrint(new Node(1, new Node(2, new Node(3, null))));
