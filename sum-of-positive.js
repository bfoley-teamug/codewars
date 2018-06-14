//Sum of positive codewars challenge


var newArr = arr.filter(num => num > 0)

if(newArr.length === 0) return 0;

return newArr.reduce((a, b) => {
   return a+b
}, 0);
