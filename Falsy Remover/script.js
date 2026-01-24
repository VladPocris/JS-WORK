function bouncer(arr) {
  let cleanArr = [];

  for(const element of arr) {
    if(element) {
      cleanArr.push(element);
    }
  }

  return cleanArr;
}

console.log(bouncer([false, 0, null, "hi", 1]));