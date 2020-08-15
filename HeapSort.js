const utils = require('./utils.js')
const list = utils.makeTest(10);

let n;

const swap = (list, i, j) => {
  let temp = list[i];
  list[i] = list[j];
  list[j] = temp;
}

const heapify = (list, i) => {
  let left = (2 * i) + 1;
  let right = (2 * i) + 2;
  let max = i;

  if (left < n && list[left] > list[max]) {
    max = left;
  }

  if (right < n && list[right] > list[max]) {
    max = right;    
  }

  if (max != i) {
    swap(list, i, max);
    heapify(list, max);
  }
}

const buildMaxHeap = (list) => {
  for (let i = Math.floor(n / 2); i >= 0; i--) {
    heapify(list, i);
  }
}

const heapSort = (list) =>  { 
  n = list.length
  buildMaxHeap(list);

  for (let i=list.length - 1; i>0; i--) {
    swap(list, 0, i);
    n --;
    heapify(list, 0);
  }

  return list;
}

let listClone = [...list];
console.log(list);
let res1 = listClone.sort((a, b) => {
  return a-b;
});
let res2 = heapSort(list);
console.log(res1, res2);
console.log(JSON.stringify(res1) === JSON.stringify(res2));