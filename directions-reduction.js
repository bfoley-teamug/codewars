var arr = ["NORTH", "SOUTH", "EAST", "WEST", "NORTH", "NORTH", "SLEEP"];

function how(arr) {

  var dir = 0;
  while(dir < arr.length) {
    if ((arr[dir] === "NORTH" && arr[dir+1] === "SOUTH") || (arr[dir] === "SOUTH" && arr[dir+1] === "NORTH") || (arr[dir] === "EAST" && arr[dir+1] === "WEST") || (arr[dir] === "WEST" && arr[dir+1] === "EAST")) {
        arr.splice(dir, 2);
        dir--;
      } else {
        dir++;
      }
    }
  return arr;
 }

console.log(how(arr)); 
