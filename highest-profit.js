var arr = [1, 3, 7, 9];

function minMax(arr){
  var max = Math.max.apply(Math, arr);
  var min = Math.min.apply(Math, arr);
  return [min, max];
}

console.log(minMax(arr));
