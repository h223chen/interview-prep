var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})
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

var tree = new TreeNode(2, [new TreeNode(1, null), new TreeNode(3, null)]);



rl.on('line', (line) => {
  console.log(findInTree(parseInt(line), tree) || false);
});
