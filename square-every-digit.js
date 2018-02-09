var num = 235;

function squareMe(num) {
  var newStr = String(num);
  var result = "";
  for (var i = 0; i < newStr.length; i++) {
    var square = parseInt(newStr[i]) * parseInt(newStr[i]);
    result = result + String(square);
  }
  return parseInt(result);

}
console.log(squareMe(num));

  
