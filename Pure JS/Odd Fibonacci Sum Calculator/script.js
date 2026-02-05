function sumFibs(number) {
  let firstNumber = 0;
  let secondNumber = 1;
  let tempNumber = 0;
  let sum = 1;

  for(let i = 0; i <= number; ++i) {
    tempNumber = secondNumber + firstNumber;
    firstNumber = secondNumber;
    secondNumber = tempNumber;
    
    if(tempNumber % 2 !== 0 && tempNumber <= number) {
      sum += tempNumber;
    }
  }

  return sum;
}

console.log(sumFibs(75025));