Simple Fun #37: House Numbers Sum

function houseNumbersSum(arr) {
  const index = arr.indexOf(0);
  return arr.splice(0, index).reduce((a, b) => {
    return a + b
  }, 0);
}
