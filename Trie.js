const TreeNode = require('./Tree.js')
class TrieNode extends TreeNode {
  constructor(value) {
    super(value);
  }

  addChild(char) {
    if (this.hasChild(char)) {
      return;
    } else {
      super.addChild(char);
    }
  }
}

class Trie {
  constructor() {
    this.start = new TrieNode(*, []);
  }

  /**
   * adds word to Trie if doesn't exist
   */
  addWord(word) {
    var split = word.split('');
    var curNode = this.start;

    split.forEach((char) => {
      // check if next character already exists
      if (this.start.hasChild(char)) {
        curNode =
      }
    });
  }

  /**
   * returns True if word is part of Trie, false otherwise
   */
  isWord(word) {

  }
}

var trie = new TrieNode(*, []);

trie.addChild('a');
