function reverseByCenter(str){

var n = str.length;
var half = n / 2;
var lastHalf = str.slice(half);
var firstHalf = str.slice(0, half);

  if (n%2!==0) {
     return lastHalf.substring(1) + str.charAt(half) + firstHalf;
  }
 return lastHalf + firstHalf;
}
