//Form The Minimum codewars

function minValue(values){
  var num = values.reduce(function(a,b){
    if (a.indexOf(b) < 0 ) a.push(b);
    return a;
  },[]).sort((a, b) => a > b ? 1 : -1).join('');

  return parseInt(num);
}
