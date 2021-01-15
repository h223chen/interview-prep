class BSTNode {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }

  addChild(num) {
    if (num <= this.value) {
      if (this.left) {
        this.left.addChild(num);
      } else {
        console.log(this.value, 'new left', num);
        this.left = new BSTNode(num, null, null);
      }
    } else {
      if (this.right) {
        this.right.addChild(num);
      } else {
        this.right = new BSTNode(num, null, null);
        console.log(this.value, 'new right', num);
      }
    }
  }

  __BSPHelper(queue) {
    var nextQueue = [];

    if (!queue || queue.length == 0) {
      return;
    }

    for (var i=0; i<queue.length; i++) {
      var node = queue[i];
      console.log(node.value);
      node.left && nextQueue.push(node.left);
      node.right && nextQueue.push(node.right);
    }

    this.__BSPHelper(nextQueue);
  }

  BSP() { // Breadth first print
    var levelQueue = [];
    console.log (this.value);
    this.left && levelQueue.push(this.left);
    this.right && levelQueue.push(this.right);

    this.__BSPHelper(levelQueue);
  }

  DSP() { // Depth first print
    this.left && this.left.BSP();
    console.log (this.value);
    this.right && this.right.BSP();
  }
}

// var BST = new BSTNode(4);
// BST.addChild(2);
// BST.addChild(6);
// BST.addChild(1);
// BST.addChild(3);
// BST.addChild(5);
// BST.addChild(7);
//
// BST.BSP();

modules.export = BST
