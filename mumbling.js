function accum(str) {
  newArr = [];
  for (var i = 0; i < str.length; i++) {
    newArr.push(format(str[i], i + 1));
  }
  return newArr.join('-');
}

function format(str, num) {
  var letter = str.toUpperCase();
  while (letter.length !== num) {
    letter += str.toLowerCase();
  }
  return letter;
}
