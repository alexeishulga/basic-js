const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    return (arr.filter((i) => Array.isArray(i)).length == 0) ? 1 : 1 + this.calculateDepth(arr.flat());
  }
}