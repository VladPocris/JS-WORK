function destroyer (arr, ...values) {
  return arr.filter(val => !values.includes(val));
}

console.log(destroyer([1, 2, 3], 1, 2));