function threeSum (numbers) {
  const sets = [];

  for (let i = 0; i < numbers.length - 2; i++) { //minus 2 is to make room for j and k
   for (let j = i + 1; j < numbers.length - 1; j++) { //minus 1 to make room for k
    for (let k = j + 1; k < numbers.length; k++) {
      const a = numbers[i];
      const b = numbers[j];
      const c = numbers[k];
      const set = `${a} ${b} ${c}`;

      //the indexOf is to prevent duplicate counts of combos in array
      if (a + b + c === 0 && sets.indexOf(set) === -1) {
        sets.push(set);
      }
    }
   }
  }
  return sets;
}

console.log(threeSum([-8, -7, 5, 2, -6, 7, 9, -5, -4, 3, -2, 1, -1]));  
