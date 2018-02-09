//www.codewars.com/kata/shortest-word
//return how many characters in the shortest word of the string

function shortWord(str) {
  return str.split(' ').sort((a, b) => a.length > b.length -1)[0].length;
}
console.log(shortWord("Hey you al bundy")); 
