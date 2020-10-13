const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  // countCats([ [0, 1, '^^'], [0, '^^', 2], ['^^', 1, 2] ]) => 3
  let result = 0;
  matrix.forEach(element => {
    element.forEach(el => { if (el === '^^') result++ })
  });
  return result;
};
