//Dubstep codewars

function songDecoder(song){
  return song.replace(/(WUB)/g, ' ').replace(/  +/g, ' ').replace(/^ /, '').replace(/ $/, '');
}


//here's a better one

//function songDecoder(song){
//  return song.replace(/(WUB)+/g," ").trim()
//}


console.log(songDecoder("WUBAWUBBWUBCWUB"));
