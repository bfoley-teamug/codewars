//Grasshopper - Summation codewars challenge

var summation = function (num) {
  var sum = 0;
  while(num >= 1) {
    sum += num;
    num--;
  }
  return sum;
}
