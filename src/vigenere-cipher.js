const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direct) {
    this.direct = (direct === undefined || direct) ? true : false;
  }
  encrypt(msg, key) {
    if (!this.#isOptionsPresent(msg, key)) throw new Error();
    key = this.#filterKey(key);

    let result = this.#crypt(msg, key);
    if (this.direct) return result;

    return result
      .split('')
      .reverse()
      .join('');
  }

  decrypt(msg, key) {
    if (!this.#isOptionsPresent(msg, key)) throw new Error();
    key = this.#filterKey(key);

    // transform key for decryption:
    for (var i = 0; i < key.length; i++)
      key[i] = (26 - key[i]) % 26;

    let result = this.#crypt(msg, key);
    if (this.direct) return result;

    return result
      .split('')
      .reverse()
      .join('');
  }

  #isOptionsPresent = (msg, key) => {
    if (msg === undefined || key === undefined) return false;
    return true;
  }


  // use code from https://www.nayuki.io/res/vigenere-cipher-javascript/vigenere-cipher.js
  /* 
* Returns an array of numbers, each in the range [0, 26), representing the given key.
* The key is case-insensitive, and non-letters are ignored.
* Examples:
* - filterKey("AAA") = [0, 0, 0].
* - filterKey("abc") = [0, 1, 2].
*/
  #filterKey = (key) => {
    var result = [];
    for (var i = 0; i < key.length; i++) {
      var c = key.charCodeAt(i);
      // if (isLetter(c))
      result.push((c - 65) % 32);
    }
    return result;
  }

  #crypt = (input, key) => {
    input = input
      .split('')
      .map(elem => {
        if (/^[a-z]$/.test(elem)) return elem.toUpperCase();
        return elem;
      })
      .join('');

    var output = "";
    for (var i = 0, j = 0; i < input.length; i++) {
      var charCode = input.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        output += String.fromCharCode((charCode - 65 + key[j % key.length]) % 26 + 65);
        j++;
      } else {
        output += input.charAt(i);
      }
    }
    return output;
  }
}

module.exports = VigenereCipheringMachine;
