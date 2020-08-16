const stringhash = require('string-hash');
const LL = require('./LinkedList.js');
const Node = LL.Node;

class HashNode extends Node {
  constructor(key, value) {
    super(value);
    this.key = key;
  }

  add(key, value) {
    super.add(value);
    this.next.key = key;
  }
}

class DumbHash {
  constructor() {
    this.table = new Array(1000);
  }

  __hashIdx (k) {
    const hashCode = stringhash(k+'');
    const idx = hashCode % this.table.length;

    return idx;
  }

  set (k, s) {
    const idx = this.__hashIdx(k);
    let node = this.table[idx];
    if (node) { // collision
      if (node.key == k) {
        node.value = s;
        return;
      }

      while (node.next)  {
        node = node.next;
      }

      node.next = new HashNode(k, s);
    } else {
      this.table[idx] = new HashNode(k, s);
    }
  }

  get (k) {
    const idx = this.__hashIdx(k);
    let node = this.table[idx];

    while (node) {
      if (node.key == k) {
        return node.value;
      }

      node = node.next;
    }
  }
}

let hash = new DumbHash();

hash.set(1, 'test');
hash.set(1, 'tester');
hash.set(2, 'testers');

console.log(hash.get(2));
console.log(hash);