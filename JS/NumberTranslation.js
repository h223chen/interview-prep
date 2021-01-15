var readline = require('readline');
var assert = require('assert');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

var constantMap = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety'
};
var denominations = {
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion'
}

function translateSection(num) {
  var result = '';
  var ones, tens, hundreds;

  ones = num % 10;
  tens = parseInt(num / 10) % 10 * 10;
  teens = (num % 100);
  hundreds = parseInt(num / 100);

  // first check if there are hundreds
  result += hundreds ? constantMap[hundreds] + ' hundred ' : '';

  if (teens <= 19) { // check for teens (special cases like twelve, thirteen, etc)
    result += constantMap[teens];
  } else { // deal with tens and ones separately
    result += (tens ? constantMap[tens] : ' ')
           + ' '
           + (ones ? constantMap[ones] : ' ');
  }

  return result.trim();
}

/**
 * separate number (up to int max) into chunks of 3 digits,
 * translate them individually and put them together
 */
function translateNumToWords(num) {
  assert(num >=0);
  if (num === 0) {
    return 'zero';
  } else if (constantMap[num]) {
    return constantMap[num];
  } else {
    var result = '';
    var denomination = 0;

    while (num) {


      var section = parseInt(num%1000);
      result = translateSection(section)
        + ' '
        + (denomination ? denominations[Math.pow(1000, denomination)] : '')
        + ' '
        + result;

      denomination ++;
      num = parseInt(num/1000);
    }
  }

  return result;
}


rl.on('line', function (line) {
  console.log(translateNumToWords(parseInt(line)));
})
