function spinalCase(str) {
  const regexSpaces = /\s/g;
  const regexCapital = /([a-z])([A-Z])/g;
  const regexHypens = /_/g;
  let regexContainer = [regexSpaces, regexCapital, regexHypens];
  regexContainer.forEach(regex => {
    (regex === regexCapital)
    ? str = str.replace(regex, "$1-$2")
    : str = str.replace(regex, "-");
  })
  console.log(str.toLowerCase());
  
  return str.toLowerCase();
}

spinalCase("AllThe-small Things");