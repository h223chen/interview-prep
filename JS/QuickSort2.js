
const makeTest = function(n) {
    let test = new Array(n);
  
    for (let i = 0; i < n; i++) {
      test[i] = Math.floor(Math.random() * n);
    }
  
    return test;
  }
  
  const list = makeTest(100000);
  // const list = [
  //   8, 6, 4, 6, 6,
  //   3, 2, 4, 0, 4
  // ]
  
  const quickSort = (list) => {
    if (list.length == 0) { 
      return list; 
    }
  
    let left = [], right = [], pivot = list[0];
  
    for (let i=1; i<list.length; i++) {
      if (list[i] < pivot) {
        left.push(list[i]);
      } else {
        right.push(list[i]);
      }    
    }
  
    return quickSort(left).concat([pivot]).concat(quickSort(right));
  };
  
  let listClone = [...list];
  // console.log(list);
  let res1 = listClone.sort((a, b) => {
    return a-b;
  });
  let res2 = quickSort(list);
  console.log(JSON.stringify(res1) === JSON.stringify(res2));