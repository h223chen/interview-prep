const __checkBounds = (matrix, i, j) => {
    return matrix &&
     matrix[0] && 
     (i >= 0) && (j >= 0) && 
     (i<matrix.length) && j<matrix[0].length;
  }
  
  const __traverse = (matrix, i, j) => {
    if (__checkBounds(matrix, i, j) &&
      matrix[i][j] === 1) {
        matrix[i][j] = -1; // mark as traversed
  
        // traverse in eight directions
        __traverse(matrix, i+1, j);
        __traverse(matrix, i-1, j);
        __traverse(matrix, i, j+1);
        __traverse(matrix, i, j-1);
        __traverse(matrix, i+1, j+1);
        __traverse(matrix, i-1, j+1);
        __traverse(matrix, i+1, j-1);
        __traverse(matrix, i-1, j-1);
    }  
  }
  
  const findIslands = (matrix) => {
    let count = 0;
    for (let i=0; i<matrix.length; i++) {
      for (let j=0; j<matrix[0].length; j++) {
        if (matrix[i][j] === 1) { // found island
          __traverse(matrix, i, j);
          // console.log(matrix);
          count ++;
        }
      }
    }
  
    return count;
  }
  
  let mat = 
        [[1, 1, 0, 0, 0], 
        [0, 1, 0, 0, 1],
        [1, 0, 0, 1, 1],
        [0, 0, 0, 0, 0],
        [1, 0, 1, 0, 1]]
  
  console.log(findIslands(mat));