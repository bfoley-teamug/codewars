//Rotate to the max codewars challenge

const rotateToMax = n => {
var num = n + '';
return parseInt(num.split('').sort((a, b) => b - a).join(''));
}
