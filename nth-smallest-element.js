//Nth Smallest Element codewars challenge

function smallest(arr, pos) {
  var sorted = arr.sort((a, b) => a > b ? 1 : -1);
  return sorted[pos - 1];
}
