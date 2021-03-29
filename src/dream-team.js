const CustomError = require('../extensions/custom-error')

module.exports = function createDreamTeam(members) {
  if(Array.isArray(members)) {
    members = members.filter(item => typeof item == 'string');
    if(members.length !== 0) {
      return members.map(item => item.trim()[0].toUpperCase()).sort().join('')
    } 
    else { return false } 
  } 
  else {return false;
  }
  
} 