//Format a string of names like 'Bart, Lisa & Maggie' codewars challenge

function list(names){
  var str='';

if(names.length >= 2) {
  str = names.map((item) => {
    return item.name;
   }).join(', ').replace(/,(?=[^,]*$)/, ' &');
 } else {
  str = names.map((item) => {
    return item.name;
   }).join('');

}
  return str;
}
