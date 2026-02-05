function smallestCommons(arr) {
  arr.sort((a, b) => a - b);
  let candidate = arr[1];

  while(true) {
    let condition = true;

    for(let i = arr[1]; i >= arr[0]; i--){
      if(candidate % i !== 0) {
        condition = false;
        break;
      }
    }

    if(condition) return candidate;
    candidate += arr[1];
  }

  return candidate;
}

console.log(smallestCommons([1, 5]));