
class MinHeap {
  constructor() {
    this.heap = [null];    
  }

  __swap(i, j) {
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }

  insert (value) {
    this.heap.push(value);

    if (this.heap.length > 1) {
      let current = this.heap.length - 1;

      while (current > 1 && this.heap[Math.floor(current/2)] > this.heap[current]) {
        this.__swap(Math.floor(current/2), current);
        current = Math.floor(current/2);
      }
    }
  }

  remove () {
    let min = this.heap[1];

    if (this.heap.length > 2) {
      this.heap[1] = this.heap[this.heap.length - 1];
      this.heap.splice(this.heap.length - 1);

      if (this.heap.length === 3) {
        if (this.heap[1] > this.heap[2]) {
          this.__swap(1, 2);

          return min;
        }
      }

      var current = 1;
      var leftIdx = current * 2;
      var rightIdx = current * 2 + 1;


      while (this.heap[leftIdx] && this.heap[rightIdx] &&
        (this.heap[current] > this.heap[leftIdx] ||
        this.heap[current] > this.heap[rightIdx])) {
          if (this.heap[leftIdx] < this.heap[rightIdx]) {
            this.__swap(current, leftIdx);
            current = leftIdx;
          } else {
            this.__swap(current, rightIdx);
            current = rightIdx;
          }
        }

        leftIdx = current * 2;
        rightIdx = current * 2 + 1;

        console.log(leftIdx, rightIdx);
    }

    if (this.heap[rightIdx] === undefined && this.heap[leftIdx] < this.heap[current]) {
      this.__swap(current, leftidx);
    } else if (this.heap === 2) {
      this.heap.splice(1, 1);
    } else {
      return null;
    }

    return smallest;
  }
}

let heap = new MinHeap();
heap.insert(10);
heap.insert(23);
heap.insert(36);
heap.insert(18);

console.log(heap.heap);
