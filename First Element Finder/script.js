function findElement(arr, func) {

  for(const number of arr) {
    if(func(number)) {
      return number;
    }
  }

  return undefined;
}

console.log(findElement([1, 3, 5, 8, 9, 10], function(num) {return num % 2 === 0;}))