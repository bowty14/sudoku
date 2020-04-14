export function ColCheck(userInput) {
  this.userInput = userInput;
}


ColCheck.prototype = function () {
  var numStr = (this.userInput).split("");
  if (numStr.sort().join("") !== "123456789") {
    return ("not a legal column")
  } else {
    return ("this is a legal column")
  }
};
