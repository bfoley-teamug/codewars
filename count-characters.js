str = "aba";

function heyYou(str) {
var newArr = str.split('');

return newArr.reduce(function(sum, letter) {
  if (letter in sum) {
    sum[letter]++;
  } else {
    sum[letter] = 1;
  }
  return sum;
}, {});

}
console.log(heyYou(str));
