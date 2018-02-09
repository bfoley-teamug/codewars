str = "Hey Jude, don't make it bad, take a sad song and make it better"

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}

console.log(disemvowel(str)); 
