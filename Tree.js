class TreeNode {
  constructor(value, children) {
    this.value = value;
    this.children = children || [];
  }

  function addChild(treeNode) {
    this.children.append(treeNode);
  }

  this.getValue = function() {
    return this.value;
  }

  this.getChildren = function() {
    return this.children;
  }
}

function findInTree(value, treeNode) {
  if (value === treeNode.value) {
    return true;
  }

  var results = [];
  if (treeNode.children) {
    treeNode.children.forEach(function (childNode) {
      results.append(findInTree(value, childNode));
    });

    return results.reduce(function (a, b) {
      return a || b;
    });
  }

}

var tree = new TreeNode(2, [new TreeNode(1, null), new TreeNode(3, null)]);

console.log(findInTree(1));
