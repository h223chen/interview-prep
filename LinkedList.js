class Node {
  constructor(value) {
    this.value = value;
  }

  add(value) {
    this.next = new Node(value)
    this.next.prev = this;    
  }

  prettyPrint() {
    console.log(this.value);
    if (this.next) {
      this.next.prettyPrint();
    }
  }
}

module.exports = {
  Node: Node
}
