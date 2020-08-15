const __prettyPrint = (matrix) => {
    for (let i=0; i<matrix.length; i++) {
      let line = '';
      for (let j=0; j<matrix[0].length; j++) {      
        line += matrix[i][j];
      }
  
      console.log([line]);
    }
  
    console.log();
  }
  
  const __pushToQueue = (matrix, i, j, queue) => {
    if (i>=0 && j>=0 && i<matrix.length && j<matrix[0].length) {
      queue.push([i, j]);
    }
  }
  
  const __pushAdj = (matrix, i, j, queue)  => {  
    __pushToQueue(matrix, i+1, j, queue);
    __pushToQueue(matrix, i-1, j, queue);
    __pushToQueue(matrix, i, j+1, queue);
    __pushToQueue(matrix, i, j-1, queue);
  }
  
  const BFSFloodFill = (matrix, x, y, color) => { 
    if (!matrix || matrix.length == 0) {
      return 0;
    }
  
    let traversed = new Array(matrix.length);
  
    for (let i=0; i<traversed.length; i++) {
      traversed[i] = new Array(matrix[0].length).fill(0);
    }
  
    let queue = [];
    let target = matrix[x][y];
  
    queue.push([x, y]);
    
    while (queue.length) {
      let coords = queue.shift();
      var i=coords[0];
      var j=coords[1];
      
      if (!traversed[i][j] && matrix[i][j] === target) {
        matrix[i][j] = color;
        traversed[i][j] = 1;
        __pushAdj(matrix,i,j, queue);
      }    
    }
  
    __prettyPrint(matrix);   
  }
  
  
  let test = [
    [ 'Y', 'Y', 'Y', 'G', 'G', 'G', 'G', 'G', 'G', 'G' ],
    [ 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'G', 'X', 'X', 'X' ],
    [ 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'X', 'X', 'X' ],
    [ 'W', 'W', 'W', 'W', 'W', 'G', 'G', 'G', 'G', 'X' ],
    [ 'W', 'R', 'R', 'R', 'R', 'R', 'G', 'X', 'X', 'X' ],
    [ 'W', 'W', 'W', 'R', 'R', 'G', 'G', 'X', 'X', 'X' ],
    [ 'W', 'B', 'W', 'R', 'R', 'R', 'R', 'R', 'R', 'X' ],
    [ 'W', 'B', 'B', 'B', 'B', 'R', 'R', 'X', 'X', 'X' ],
    [ 'W', 'B', 'B', 'X', 'B', 'B', 'B', 'B', 'X', 'X' ],
    [ 'W', 'B', 'B', 'X', 'X', 'X', 'X', 'X', 'X', 'X' ]
  ];
  
  BFSFloodFill(test, 3, 9, 'C');
  BFSFloodFill(test, 3, 9, 'X');
  BFSFloodFill(test, 3, 9, 'C');
  BFSFloodFill(test, 0, 0, 'C');
  