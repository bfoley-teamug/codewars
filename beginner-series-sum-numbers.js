function GetSum( a,b ) {
   var add = 0;
   if (a === b) {
     return a;
     } else if (a < b) {
   for (var i = a; i <= b; i++) {
     add += i;
     }
    } else if (a > b) {
    for (var i = b; i <= a; i++) {
     add += i;
     }
    }
   return add;
}

console.log(GetSum(-50, 5));
