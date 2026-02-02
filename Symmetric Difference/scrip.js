function diffArray(arr1, arr2) {
  let arr;
    arr = arr1.filter(value => !arr2.includes(value));
    arr = arr.concat(arr2.filter(value => !arr1.includes(value)));
  return arr;
}

console.log(diffArray(["pen", "book"], ["book", "pencil", "notebook"]))