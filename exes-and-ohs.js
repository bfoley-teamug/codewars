var str = "xxooo";

function XO (str) {
  var x = 0;
  var o = 0;
  str = str.toLowerCase();

  for (var i = 0; i < str.length; i++) {
    var letters = str[i];
    if (letters === 'x') {
      x++;
    } else if (letters === 'o') {
      o++;
    }
  }
  return x === o;
}

console.log(XO(str));
