//Pizza Payments codewars challenge

function michaelPays(costs) {
  if (costs < 5) return costs;
  if (costs > 30) return costs - 10;
  else return Math.round((costs - (costs / 3)) * 100) / 100;
}

//or this

function michaelPays(costs) {
  let price = costs < 5 ? costs : costs * 2 / 3;
  return Math.round(Math.max(price, costs - 10) * 100) / 100;

}
