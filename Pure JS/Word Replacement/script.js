function myReplace(str, word, replacement) {
  return str.replace(new RegExp(word, "i"), match =>
    match[0] === match[0].toUpperCase()
      ? replacement[0].toUpperCase() + replacement.slice(1)
      : replacement[0].toLowerCase() + replacement.slice(1)
  );
}

console.log(myReplace("Let us go to the store", "store", "mall"));