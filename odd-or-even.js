arr = [3, 5, 7, 9];

function oddOrEven(arr) {
  if (!arr.length) {
   return 'even';
  }
  var total = arr.reduce(function(sum, value) {
     return sum + value;
   }, 0);
  if (total%2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

console.log(oddOrEven(arr));
