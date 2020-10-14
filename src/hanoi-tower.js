const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  // turnsSpeed is the speed of moving discs (in turns per hour).
  // calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
  const turns = 2 ** disksNumber - 1;
  const sec = Math.floor((3600 * turns) / turnsSpeed);
  return { turns: turns, seconds: sec }
};
