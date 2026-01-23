const num = 5;

function factorialCalculator(num) {
  let result = 1;

  for(let i = 1; i <= num; ++i){
    console.log(`Iteration nr: ${i}\n ${i} * ${result} = ${result * i}`);

    result *= i;
  }

  return result;
}

const factorial = factorialCalculator(num);
const resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);