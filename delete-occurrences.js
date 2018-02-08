//Delete occurrences of an element if it occurs more than n times

var arr = [1, 2, 2, 2, 2, 4, 6, 8, 9];
n = 2;

function deleteNth(arr,n){

var newArr= [];

for (var i = 0; i < arr.length; i++) {
 if (newArr.filter(function(hey) {
    return hey == arr[i];
   }).length <= (n-1)) {
     newArr.push(arr[i]);
   }
  }
 return newArr;
}

console.log(deleteNth(arr, n));
