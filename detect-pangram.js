function isPangram(str) {

var alphabet = "abcdefghijklmnopqrstuvwxyz";
str = str.toLowerCase();

for (var i = 0; i <= str.length; i++) {
  if (!str.includes(alphabet.charAt(i))) {
     return false;
  }
 }
return true;
}

//another possible answer
// function isPangram(string){
//   string = string.toLowerCase();
//   return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
//     return string.indexOf(x) !== -1;
//   });
// }
