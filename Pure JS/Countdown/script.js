function countdown(n) {
  if(n < 1) return [];

  let countArray = countdown(n-1);
  countArray.unshift(n);

  return countArray;
}

console.log(countdown(5));