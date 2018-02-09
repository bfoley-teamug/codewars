//codewars "counting duplicates"

//Count the number of Duplicates
//
//Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

function duplicateCount (str) {
 const dict = {};

 const strArr = str.toUpperCase().split('');

 let total = 0;

 strArr.forEach(char => {
   if(!dict[char]) {
    dict[char] = 0;
 }
  dict[char]++;
 });

 Object.keys(dict).forEach(key => {
   if(dict[key] > 1) {
     total++;
   }
 });

  return total;
}

console.log(duplicateCount("mississippi"));
