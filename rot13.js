//Rot13 codewars

var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXWZ";
var rot   = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXWZABCDEFGHIJKLM";
var message = "Hey Jude"

function rot13(message){
  return message.split('').map(function(c) {
    var i = alphabet.indexOf(c);
    if (i < 0) {
      // if not in the alphabet, return char
      return c;
    }
    return rot[i];
  }).join('');
}

console.log(rot13(message));
