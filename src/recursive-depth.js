const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    // if empty array return depth =  1
    if (Array.isArray(arr) && arr.length === 0) return 1

    const mapArr = arr.map(element => {
      if (!Array.isArray(element)) return 1
      else {//element is array
        return this.calculateDepth(element) + 1
      }
    });

    return Math.max(...mapArr);
  }
};