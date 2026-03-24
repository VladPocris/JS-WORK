function permuteString(string, prefix = "", arr = []) {
  if(string.length === 0) {
    arr.push(prefix);
    return arr;
  }

  for (let i = 0; i < string.length; i++) {
    let newPrefix = prefix + string[i];
    let remaining = string.slice(0, i) + string.slice(i + 1);
    permuteString(remaining, newPrefix, arr);
  }

  return [...new Set(arr)];
}

console.log(permuteString("hello"));