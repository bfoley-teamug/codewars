//Boiled Eggs codewars challenge

function cookingTime(eggs) {
  return Math.round(eggs / 8 + .4) * 5;
}

//OR

function cookingTime(eggs) {
  return Math.ceil(eggs/8) * 5;
}
