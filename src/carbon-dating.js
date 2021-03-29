const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
	if(sampleActivity === undefined || typeof sampleActivity !== 'string' 
  || isNaN(sampleActivity) || +sampleActivity > MODERN_ACTIVITY || +sampleActivity <= 0) {
  return false;
}
  let result = (Math.log( MODERN_ACTIVITY / +sampleActivity ) * HALF_LIFE_PERIOD) / 0.693;  
  return Math.ceil(result);  
}
