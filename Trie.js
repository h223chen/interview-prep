const LL = require('./LinkedList.js')
const Node = LL.Node;

class TrieNode extends Node {
  constructor(value) {
    super(value);
    this.next = {};
    this.isEnd = false;
  }

  /**
   * @params s - string or remaining substring of word being added
   * @return void
   */
  add(s) {
    if (s && s.length) {
      let first = s[0];
      if (!this.next[first]) {    
        this.next[first] = new TrieNode(first);
      }    
      
      this.next[first].add(s.slice(1));    
    } else {
      this.isEnd = true;
    }
  }

  /**
   * @param s - string or substring of word being checked
   * @return boolean - if given word is a valid word in this Trie
   */
  isWord(s) {
    let first = s[0];
    if (s.length) {
      if (this.next[first]) {
        return this.next[first].isWord(s.slice(1));
      } else {
        return false;
      }
    } else {
      return this.isEnd;
    }
  }
}

let trie = new TrieNode();

trie.add('test');
trie.add('tess');
trie.add('break');
trie.add('kirito');
trie.add('kirit');

trie.isWord('kirito');
