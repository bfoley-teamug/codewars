//Flatten and Sort an Array codewars challenge

function flattenAndSort(array) { 
   return [].concat.apply([], array).sort((a, b) => a > b ? 1 : -1);
}
