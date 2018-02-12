str = "myCamelHas3Humps";

function kebabize(str) {
  return str.replace(/([A-Z])/g, "-$1").replace(/[0-9]/g, '').toLowerCase().replace(/^-/, '');
}

console.log(kebabize(str));
