//Number of People in the Bus codewars challenge

const number = function(arr){

//flatten array
  const newArr = arr.reduce((acc, curr) => {
    return acc.concat(curr);
  }, []);
//

  for(let i = 1; i < newArr.length; i+=2) {
       newArr[i] *= -1;
   }
  return newArr.reduce((a, b) => a + b);
}
