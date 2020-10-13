const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(activityStr) {
  // dateSample('1') => 22387 (or 22392 depending on formula used)
  const natLog2 = 0.693;
  const activity = +activityStr;

  if (activityStr || typeof (activityStr) !== 'string') return false;
  if (isNaN(activity) || activity > MODERN_ACTIVITY || activity <= 0)
    return false;

  return Math.ceil(
    Math.log(MODERN_ACTIVITY / activity)
    / (natLog2 / HALF_LIFE_PERIOD)
  );
};
