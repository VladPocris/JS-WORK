function mutation(arr) {
  if (arr.length > 1){
    for (const char of arr[1].split("")) {
      
      /* Another approach, more straight-forward and easy to follow.
      if(!tempArr.includes(char.toLowerCase())) {
        tempArr.push(char);
      };
      */
      if(!arr[0].toLowerCase().includes(char.toLowerCase())){
        console.log(char);
        return false;
      };
    }
  }

  return true;
}

const arr = ["Mary", "Aarmy"];

console.log(mutation(arr));