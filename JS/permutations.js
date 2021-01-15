/**
 * For a string str, find all permutations of this string
 *
 */
var readline = require('readline');
var assert = require('assert');

results = [];
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})

function permutations(acc, rem) {
  if (rem === '') {
    results.push(results);
    console.log(acc);
  }

  // console.log('debug: acc=' + acc + ', rem=' + rem);
  for (var i=0; i<rem.length; i++) {
    var char = rem[i];
    permutations(acc+char, rem.substring(0, i) + rem.substring(i+1, rem.length));
  }
}

function factorial(num) {
  var product=num;
  for (var i=num-1; i>0; i--) {
    product *= i;
  }

  return product
}

rl.on('line', function (line) {
  results = [];
  permutations('', line);

  assert(results.length === factorial(line.length));
})
