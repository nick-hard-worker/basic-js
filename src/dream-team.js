const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  // throw new CustomError('Not implemented');
  // createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
  if (!Array.isArray(members)) return false;

  return members
    .filter(item => typeof (item) === 'string')
    .map(item => item.replace(/^\s+/, ''))
    .map(item => item[0].toUpperCase())
    .sort()
    .join('')
};
