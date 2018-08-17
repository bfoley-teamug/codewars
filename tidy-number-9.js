//Tidy Number (Special Numbers Series #9) codewars challenge

function tidyNumber(num){
  var sorted = parseInt(num.toString().split('').sort((a, b) => a - b).join(''));
  if (sorted === num) {
    return true
  }
  return false;
}
