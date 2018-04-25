//Is n divisible by x and y? codewars challenge

function isDivisible(n, x, y) {
  if(n % x !== 0 || n % y !== 0) {
     return false;
    }
  return true;
}
