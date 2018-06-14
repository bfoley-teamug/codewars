//Row Weights codewars challenge

var arr = [6, 3, 15, 8]

function split(arr) {
  var arr1 = [];
  var arr2 = [];
  var arr4=[]

  if(arr.length===1) {
    arr4=[arr[0], 0]
    return arr4;
  }

  for(var i = 0; i < arr.length; i++) {
    if((i+2) % 2 === 0) {
      arr1.push(arr[i]);
    } else {
      arr2.push(arr[i]);
    }
  }
  var val1 = arr1.reduce((a, b) => a + b);
  var val2 = arr2.reduce((a, b) => a + b);
  var arr3 = [val1, val2];
  return arr3;
}
console.log(split(arr))
