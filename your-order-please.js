function order(str) {
  str.split('');
  for (var i = 0; i < str.length; i++) {
    if(str[i].includes(/[0-9]/g)) {
      return str.sort(function(a, b) {
              if (a > b) {
                return -1;
              }
      });
    }
  }
  return str.join('');
}
