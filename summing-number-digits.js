function sumDigits(number) {
    str = number + "";
    sum = 0;
    for (var i = 0; i < str.length; i++) {
       if(str[i] === '-') continue;
        sum += parseInt(str[i]);
    }
  return sum;
}
