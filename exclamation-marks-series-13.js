//Exclamation marks series #13: Count the number of exclamation marks and question marks, return the product

var str = "what!?!??";

function product(str) {
  var qMark = 0;
  var ePoint = 0;
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (char === '?') {
      qMark++;
    } else if (char === '!') {
      ePoint++;
    }
  }
  return qMark * ePoint;
}

console.log(product(str)); //6

//a different & better solution
// function product(s){
//   excs = str.split('!').length - 1
//   ques = str.split('?').length - 1
//   return excs * ques
// }
