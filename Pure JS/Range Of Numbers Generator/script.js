function rangeOfNumbers(startNum, endNum) {
  if(endNum === startNum) return [startNum];

  let rangeArray = rangeOfNumbers(startNum, endNum - 1);
  rangeArray.push(endNum);

  return rangeArray;
}

console.log(rangeOfNumbers(2, 5));