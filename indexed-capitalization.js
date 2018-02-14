s = "hey man";
arr = [1, 3];

function capitalize(s,arr){
  var hey = s.split('');
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > hey.length) {
      continue;
    }
    hey[arr[i]] = hey[arr[i]].toUpperCase();
    }
  s = hey.join('');
  return s;
};
