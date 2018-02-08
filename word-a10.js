// Word a10n (abbreviation)

str = "Hey Jude don't make it bad take a sad song";

function abbreviate(str) {
  return str.replace(/\w{4,}/g, function(word) {
    return word.charAt(0) + (word.length - 2) + word.charAt(word.length - 1);
  });
}

console.log(abbreviate(str)); 
