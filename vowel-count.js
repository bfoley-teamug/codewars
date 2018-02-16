var str = "Heeeeyou";

function getCount(str) {

  str = str.split('');

for (var i = 0; i < str.length; i++) {
  var vowels = 0;
  for (var i = 0; i < str.length; i++) {
       if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
         vowels++;
    }
  }
   return vowels;
 }
}

  console.log(getCount(str));  
