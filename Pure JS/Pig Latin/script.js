function translatePigLatin(str) {
  const regexPattern = /^[^aeiou]+/i;
  let processedStr = str;
  let consonantCluster = str.match(regexPattern);

  if(consonantCluster) {
    processedStr = processedStr.replace(regexPattern, "");
    processedStr += `${consonantCluster}ay`;
  } else {
    processedStr += `way`;
  }

  return processedStr.trim();
}

console.log(translatePigLatin("california"));