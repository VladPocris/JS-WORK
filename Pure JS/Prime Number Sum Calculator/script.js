function sumPrimes(number) {
  if(number < 2) return 0;
  let sum = 0;

  function isPrime(number) {
    for(let i = 2; i < number; i++) {
      if(number % i === 0) {
        return false;
      }
    }
    return true;
  }

  for(let i = 2; i <= number; i++) {
    if(isPrime(i)) {
      sum += i;
    }
  }

  return sum;
}

console.log(sumPrimes(5));