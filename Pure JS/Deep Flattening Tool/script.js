function steamrollArray (arr) {
  let flattenedArr = [];
  

  for(let item of arr) {
    if(Array.isArray(item)) {
      let flattened = steamrollArray(item);
      for (let value of flattened) {
        flattenedArr.push(value);
      }
    } else {
      flattenedArr.push(item);
    }
  }

  return flattenedArr;
}

console.log(steamrollArray([1, [1,2,3],[[1,2,3],[3,2,1]],[{name: "vlad"}], {lastname: "pocris"}]));