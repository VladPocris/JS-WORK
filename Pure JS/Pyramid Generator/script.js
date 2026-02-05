function pyramid(string, rows, downVertex) {
  if(string.length !== 1) return 0;

  let pyramidString = "\n";

  if(!downVertex) {
    for(let i = 1; i <= rows; ++i){
      pyramidString += " ".repeat(rows-i);
      pyramidString += string.repeat(2 * i - 1);
      pyramidString += "\n";
    }
  } else {
    for(let i = rows; i >= 1; --i){
      pyramidString += " ".repeat(rows-i);
      pyramidString += string.repeat(2 * i - 1);
      pyramidString += "\n";
    }
  }

  return pyramidString;
}

console.log(pyramid("p", 5, false));