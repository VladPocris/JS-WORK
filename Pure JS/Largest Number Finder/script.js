function largestOfAll(arr) {
  let largestNumbersArray = [];

  for(let array of arr) {
    for(const number of array){
      if (array[0] < number) {
        array = [number];
      } else {
        array = [array[0]];
      }
    }
    largestNumbersArray.push(Number(array));
  }


  return largestNumbersArray;
}
//After getting feedback from AI, I realised I shouldve worked with the numbers itself rather than creating and using local array and objects.

console.log(largestOfAll([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));