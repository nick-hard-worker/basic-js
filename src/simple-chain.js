const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chainString: '',
  getLength() {
    // throw new CustomError('Not implemented');
    if (this.chainString === '') return 0;

    return this.chainString
      .split('~~')
      .length;
  },
  addLink(value) {
    // throw new CustomError('Not implemented');
    if (value === undefined) value = '';

    if (this.chainString === '') this.chainString = '( ' + value + ' )'
    else this.chainString += '~~( ' + value + ' )';
    return this;
  },
  removeLink(position) {
    // throw new CustomError('Not implemented');
    if (position < 1 || position > this.getLength()) {
      this.chainString = '';
      throw new Error();
    }

    const arr = this.chainString.split('~~');
    arr.splice(position - 1, 1);
    this.chainString = arr.join('~~');

    return this;
  },
  reverseChain() {
    // throw new CustomError('Not implemented');
    this.chainString = this.chainString
      .split('~~')
      .reverse()
      .join('~~');
    return this;
  },
  finishChain() {
    // throw new CustomError('Not implemented');
    const result = this.chainString;
    this.chainString = '';
    return result;
  }
};

module.exports = chainMaker;