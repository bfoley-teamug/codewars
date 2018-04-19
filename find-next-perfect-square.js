//Find the next perfect square codewars challenge

function findNextSquare(sq) {
 var num = Math.sqrt(sq);
   if (Number.isInteger(num)) {
    return Math.pow(num+1,2)
   }
 return -1;
}
