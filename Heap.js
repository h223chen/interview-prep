// WIP
const utils = require('./utils.js')
const list = utils.makeTest(10);

class Heap {
  constructor(list) {
    this.list = list;
    this.n = this.list.length;
  }

  swap(i, j) {
    let temp = this.list[i];
    this.list[i] = this.list[j];
    this.list[j] = temp;
  }

  buildMaxHeap(list)  {
    for (let i = Math.floor(this.n / 2); i >= 0; i--) {
      heapify(list, i);
    }
  }

  heapify(i) {
    let left = (2 * i) + 1;
    let right = (2 * i) + 2;
    let max = i;

    if (left < this.n && this.list[left] > this.list[max]) {
      max = left;
    }

    if (right < this.n && this.list[right] > this.list[max]) {
      max = right;    
    }

    if (max != i) {
      swap(this.list, i, max);
      heapify(this.list, max);
    }
  }

  heapSort(list)  {
    n = list.length
    buildMaxHeap(list);

    for (let i=list.length - 1; i>0; i--) {
      swap(list, 0, i);
      n --;
      heapify(list, 0);
    }

    return list;
  }
}

console.log(list);

console.log(res1, res2);
console.log(JSON.stringify(res1) === JSON.stringify(res2));