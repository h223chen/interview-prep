const LL = require('./LinkedList');
const Node = LL.Node;

class Stack {
  constructor() {
    this.head = null;
    this.top = null;
  }

  push (val) {
    if (this.head) {
      let newNode = new Node(val);
      this.top.add(newNode);
      this.top = this.top.next;
    } else {
      this.head = new Node(val);
      this.top = this.head;
    }
  }

  peek () {
    return this.top;
  }

  pop () {
    if (this.top) {
      let temp = this.top;
      this.top = this.top.prev;

      if (this.top) {
        this.top.next = null;
      } else {
        this.head = null;
        this.top = null;
      }

      return temp;
    }
  }
}


let stack = new Stack();
console.log(stack);
stack.push(1);
stack.push(2);
stack.push(3);

console.log('peek', stack.peek());
console.log('pop', stack.pop());
console.log('peek', stack.peek());
console.log('pop', stack.pop());
console.log('pop', stack.pop());

console.log(stack);
