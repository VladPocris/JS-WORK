function titleCase(string) {
  let resultString = "";

  for(const element of string.split(" ")) {
    resultString += element[0].toUpperCase();
    resultString += element.slice(1).toLowerCase();
    resultString += " ";
  };
  return resultString.trim();
}

console.log(titleCase("sHoRt AnD sToUt"));