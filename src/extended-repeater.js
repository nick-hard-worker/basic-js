const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  /*options is an object of options, that contains properties:
   ** repeatTimes sets the number of repetitions of the str;
   ** separator is a string separating repetitions of the str;
   ** addition is an additional string that will be added to each repetition of the str;
   ** additionRepeatTimes sets the number of repetitions of the addition;
   ** additionSeparator is a string separating repetitions of the addition. */

  // const opts = {
  //   repeatTimes: options.repeatTimes || 1,
  //   separator: options.separator || '+',
  //   addition: options.addition || '',
  //   additionRepeatTimes: options.additionRepeatTimes || 1,
  //   additionSeparator: options.additionSeparator || '|',
  // }
  let {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|'
  } = options;

  addition = simpleRepeater(addition,
    additionSeparator,
    additionRepeatTimes);

  str = str + addition;
  return simpleRepeater(str, separator, repeatTimes);

  function simpleRepeater(str, sep, times) {
    str = str + ''; //convert to string any data
    const addArr = [];
    for (let i = 1; i <= times; i++) {
      addArr.push(str)
    }

    return addArr.join(sep);
  }
};