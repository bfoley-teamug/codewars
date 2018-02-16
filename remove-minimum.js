//remove the minimum codewars

var numbers = [3, 3, 5, 7, 9];

function removeSmallest(numbers) {
  numbers = numbers.slice();
  numbers.splice( numbers.indexOf(Math.min.apply(null, numbers)),1);
  return numbers;
};

console.log(removeSmallest(numbers)); 
