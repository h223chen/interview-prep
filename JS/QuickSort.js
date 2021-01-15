
const makeTest = function(n) {
    let test = new Array(n);
  
    for (let i = 0; i < n; i++) {
      test[i] = Math.floor(Math.random() * n);
    }
  
    return test;
  }
  
  // const list = makeTest(10);
  const list = [
    8, 6, 4, 6, 6,
    3, 2, 4, 0, 4
  ]
  
  const swap = (list, i, j) => {
    let temp = list[j];
    list[j] = list[i];
    list[i] = temp;
  }
  
  const partition = (list, left, right) => {
    let pivot = list[Math.floor((left + right)/2)];
    let i = left;
    let j = right;
    console.log(pivot, list.slice(i, j+1));
  
    while (i <= j) {
      while (list[i] < pivot) {
        i++;
      }
      while (list[j] > pivot) {
        j--;
      }
  
      if (i <= j) {
        swap(list, i, j);
        i++;
        j--;
      }    
    }
  
    return i;
  }
  
  const quickSort = (list, left, right) => {
    let idx;
    if (list.length > 1) {    
      idx = partition(list, left, right);       
  
      if (left < idx - 1) {
        quickSort(list, left, idx - 1);
      }
      if (right >= idx) {
        quickSort(list, idx, right);
      }
    }
  
    return list;
  };
  
  let listClone = [...list];
  console.log(list);
  // console.log(listClone.sort((a, b) => {
  //   return a-b;
  // }));
  console.log(quickSort(list, 0, list.length-1));