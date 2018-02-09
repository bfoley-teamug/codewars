var arr = [-3, -1, 4, 7, 99];

function invert(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
   newArr.push(parseInt(-arr[i]));
  }
  return newArr;
}

console.log(invert(arr));

//you can also do

// function invert(array) {
//    return array.map( x => x === 0 ? x : -x);
// }
