//Anagram Detection codewars challenge
// write the function isAnagram

var isAnagram = function(test, original) {
  if(test.length !== original.length) return false;
  var testSort = test.toLowerCase().split('').sort();
  var originalSort = original.toLowerCase().split('').sort();
  for(var i = 0; i < originalSort.length; i++) {
   if (originalSort[i] !== testSort[i]) return false;
  }
  return true;
};
