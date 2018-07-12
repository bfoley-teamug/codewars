//Bumps in the Road codewars challenge

function bump(x){
 var bumps = x.replace(/_/g,'').length;
    if (bumps > 15) {
      return "Car Dead";
    }
    return "Woohoo!";
}
