//Get the Middle Character codewars challenge

function getMiddle(s) {
    var halfLetters = s.length / 2;
    var middleLetter = s.charAt(halfLetters);
    var middleLetters = s.charAt(halfLetters-1)+s.charAt(halfLetters);
     if (s.length % 2 === 0) {
        return middleLetters;
     }
  return middleLetter;
}
