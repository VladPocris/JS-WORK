function uniteUnique(...arrays) {
  let unitedArray = [];

  for (const array of arrays) {
    for (const element of array) {
      if(unitedArray.includes(element)) {
        continue;
      } else {
        unitedArray.push(element);
      }
    }
  }

  return unitedArray;
}

console.log(uniteUnique([1,3,2], [1,3,5]));