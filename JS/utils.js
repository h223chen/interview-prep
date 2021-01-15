
const makeTest = function(n) {
    let test = new Array(n);
  
    for (let i = 0; i < n; i++) {
      test[i] = Math.floor(Math.random() * n);
    }
  
    return test;
  }
  
  module.exports = {
    makeTest: makeTest
  }