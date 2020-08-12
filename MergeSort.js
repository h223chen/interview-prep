const utils = require('./utils.js')
const list = utils.makeTest(10);

const merge = (list1, list2) => {
  let idx1 = 0, idx2 = 0;
  let sorted = [];

  while ((idx1 < list1.length) && (idx2 < list2.length)) {
    if (list1[idx1] < list2[idx2]) {
      sorted.push(list1[idx1]);
      idx1 ++;
    } else {
      sorted.push(list2[idx2]);      
      idx2 ++; 
    }
  }

  while (idx1 < list1.length) {
    sorted.push(list1[idx1]);
    idx1 ++;
  }

  while (idx2 < list2.length) {
    sorted.push(list2[idx2]);
    idx2 ++;
  }

  return sorted;
}

const mergeSort = (list) => {
  if (list.length <= 1) { 
    return list; 
  }

  let mid = Math.floor(list.length/2);
  return merge(
    mergeSort(list.slice(0, mid)),
    mergeSort(list.slice(mid))
  );
};

let listClone = [...list];
console.log(list);
let res1 = listClone.sort((a, b) => {
  return a-b;
});
let res2 = mergeSort(list);
console.log(res1);
console.log(res2);
console.log(JSON.stringify(res1) === JSON.stringify(res2));

