//codewars
//Break camelCase
str = "YouAreTheEggman";

function solution(str) {
     return str.replace(/([a-z])([A-Z])/g, "$1 $2")
}

console.log(solution(str));
