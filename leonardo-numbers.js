//Leonardo numbers codewars challenge

function leo(n, L0, L1, add) {
  let newArr = [L0, L1];
  for(let i = 2; i < n; i++) {
    newArr.push(newArr[i - 2] + newArr[i - 1] + add)
  }

  return newArr;
}

console.log(leo(n, L0, L1, add));
