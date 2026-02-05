function fearNotLetter(str) {
  let tempAscii = 0;

  for(const letter of str) {
    if(tempAscii === 0){
      tempAscii = letter.charCodeAt(0);
    } else {
      if(tempAscii + 1 !== letter.charCodeAt(0)){
        return String.fromCharCode(tempAscii + 1);
      }
      tempAscii = letter.charCodeAt(0);
    }
  }
}

console.log(fearNotLetter("abce"));