const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  // throw new CustomError('Not implemented');
  if (!Array.isArray(arr)) throw new Error();
  if (arr.length === 0) return [];

  const resultArr = [];
  let i = 0;
  while (i <= (arr.length - 1)) {

    switch (arr[i]) {
      case '--discard-next': i++;
        break;
      case '--discard-prev':
        if (i === 0) { i++; continue; }
        //discardDiscarded:
        if (arr[i - 2] === '--discard-next') { i++; continue };
        resultArr.pop();
        break;
      case '--double-next':
        if (i === arr.length - 1) { i++; continue; }
        resultArr.push(arr[i + 1]);
        break;
      case '--double-prev':
        //doubleDiscarded or first item
        if (arr[i - 2] === '--discard-next' || i === 0) { i++; continue };

        resultArr.push(arr[i - 1]);
        break;
      default:
        resultArr.push(arr[i]);
        break;
    }

    i++
  }
  return resultArr;

};
