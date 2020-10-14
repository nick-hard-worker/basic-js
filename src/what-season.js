const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  // const springDate = new Date(2020, 02, 31)
  //example getSeason(springDate) => 'spring'
  if (date === undefined) return 'Unable to determine the time of year!'
  if (!(date instanceof Date && !isNaN(date.valueOf()))) throw new Error()

  const month = date.getMonth();
  switch (month) {
    case 11:
    case 0:
    case 1: return 'winter';
    case 2:
    case 3:
    case 4: return 'spring';
    case 5:
    case 6:
    case 7: return 'summer';
    case 8:
    case 9:
    case 10: return 'autumn';
  }
};
