//Don't Give Me Five codewars challenge

function dontGiveMeFive(start, end)
{
  var newArr = [];
for (var i = start; i <= end; i++) {
    newArr.push(i);
  }
  return newArr.map(String).filter((num) => {
    return !num.match(/5/);
   }).length;
}
