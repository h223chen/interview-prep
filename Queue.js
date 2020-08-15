const LL = require('./LinkedList');
const Node = LL.Node;

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue (val) {
    if (this.tail) {
      let newNode = new Node(val);
      this.tail.add(newNode);
      this.tail = this.tail.next;
    } else {
      this.head = new Node(val);
      this.tail = this.head
    }
  }

  dequeue () {
    if (this.tail) {
      let temp = this.tail;
      this.tail = this.tail.prev;

      if (this.tail) {   
        this.tail.next = null;      
      } else {
        this.head = null;
        this.tail = null;
      }

      return temp;
    } 
  }
}


let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();
queue.dequeue();
queue.enqueue(4);
queue.dequeue();
queue.dequeue();
queue.enqueue(5);
queue.dequeue();
queue.dequeue();
console.log(queue);
