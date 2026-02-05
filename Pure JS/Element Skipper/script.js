function dropElements(arr, func) {
  let startIndex = 0;

  while (startIndex < arr.length && !func(arr[startIndex])) {
    startIndex++;
  }

  return arr.slice(startIndex);
}

console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3}));

