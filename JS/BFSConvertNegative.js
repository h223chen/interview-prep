const __convertToPositive = (matrix, i, j) => {
    if (i>=0 && j>=0 && i<matrix.length && j<matrix[0].length) {
      matrix[i][j] = Math.abs(matrix[i][j]);
    }
  }
  
  const __convertAdj = (matrix, i, j)  => {  
    __convertToPositive(matrix, i+1, j);
    __convertToPositive(matrix, i-1, j);
    __convertToPositive(matrix, i, j+1);
    __convertToPositive(matrix, i, j-1);
  }
  
  const BFSMatrixConvert = (matrix) => {
    if (!matrix || matrix.length == 0) {
      return 0;
    }
  
    let traversed = new Array(matrix.length);
  
    for (let i=0; i<traversed.length; i++) {
      traversed[i] = new Array(matrix[0].length).fill(0);
    }
  
    let queue = [];
    let steps = 0;
    let foundNeg = false;
    do {    
      foundNeg = false;
      while (queue.length) {
        let coords = queue.shift();
        traversed[coords[0]][coords[1]] = 1;
        __convertAdj(matrix, coords[0], coords[1]);           
      }
  
      for (let i=0; i<matrix.length; i++) {
        for (let j=0; j<matrix[0].length; j++) {          
          if (matrix[i][j] > 0 && !traversed[i][j]) {
            queue.push([i, j]);          
          }
  
          if (matrix[i][j] < 0) {
            foundNeg = true;
          }
        }
      }
  
      
      console.log(steps, matrix);   
      console.log(queue); 
      if (foundNeg) {
        steps ++;
      }
    } while (foundNeg);
  
    return steps;
  }
  
  
  let test = [
    [-1, -9, 0, -1, 0],
    [-8, -3, -2, 9, -7],
    [2, 0, 0, -6, 0],
    [0, -7, -3, 5, -4]
  ];
  
  BFSMatrixConvert(test);
  