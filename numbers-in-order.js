//"Are the numbers in order?" codewars challenge

const inAscOrder = arr => arr.join('') === arr.sort((a, b) => a - b).join('');

//OR

//function order(arr) {
//  var prev = arr.length - 1;
//  for(let i = 0; i < prev; i++) {
//    if(arr[i] > arr[i+1] ) {
//      return false;
//    }
//  }
//  return true;
//}
