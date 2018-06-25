//Price is Right codewars challenge

function priceIsRight(numbers, target) {
  return numbers.filter((n) => n <= target).sort((a,b) => b - a)[0];
}
