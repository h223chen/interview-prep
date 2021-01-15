class TreeNode {
  constructor(value, children) {
    this.value = value;
    this.children = children;
  }

  addChild(treeNode) {
    this.children.append(treeNode);
  }

  getValue() {
    return this.value;
  }

  getChildren() {
    return this.children;
  }

  hasChild(value) {
    var result = this.children.filter((child) => {
      return child.value == value;
    });

    return result.length > 0;
  }

  DSP() { // Depth first print

    for (var i=0; i<this.children.length; i++) {
      this.children[i].DSP();
    }

    console.log(this.value);
  }

}

function findInTree(value, treeNode) {
  if (!treeNode) {
    return false;
  }

  if (value === treeNode.value) {
    return true;
  }

  var results = [];
  if (treeNode.children) {
    treeNode.children.forEach(function (childNode) {
      results.push(findInTree(value, childNode));
    });

    return results.reduce(function (a, b) {
      return a || b;
    });
  }

}

var tree = new TreeNode(2, [new TreeNode(1, []), new TreeNode(3, [])]);
// var readline = require('readline');
// var rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
//   terminal: false
// })
// rl.on('line', (line) => {
//   console.log(findInTree(parseInt(line), tree) || false);
//   console.log(tree.hasChild(parseInt(line)));
// });
tree.DSP();

module.exports = TreeNode
