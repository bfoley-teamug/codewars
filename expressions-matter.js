//Expressions Matter codewars challenge

function expressionMatter(a, b, c) {
 var d = a * (b + c);
 var e = a * b * c;
 var f = a + b * c;
 var g = (a + b) * c;
 var h = a + b + c;

var hey = [d, e, f, g, h].sort((x, y) => x > y ? 1 : - 1).pop();
return hey;
}
