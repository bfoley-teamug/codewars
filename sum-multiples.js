//Sum of all the multiples of 3 or 5

function findSum(num) {
   var sum = 0;
   for (var i = 0; i <= num; i++) {
     if (i % 3 === 0 || i % 5 === 0) {
       sum += i;
     }
    }
    return sum;
}

console.log(findSum(60)); 
