//Maximum Multiple codewars challenge

function maxMultiple(divisor, bound){
  var arr = [];
  if(divisor > bound) return 0;
  for (var i = divisor; i <= bound; i++) {
    if (i % divisor === 0) {
    arr.push(i);
   }
  }
 return arr.pop();
}
