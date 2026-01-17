/*
User Stories:

You should have a variable named updatedCounter that correctly produces the value 11 by using the increment operator. Update the expression to use the correct prefix or postfix notation instead of hardcoding the value.
You should have a variable named finalScore that correctly produces the value 8 by using the increment operator. Update the expression to use the correct prefix or postfix notation instead of hardcoding the value.
You should have a variable named updatedCoins that correctly produces the value 2 by using the decrement operator. Update the expression to use the correct prefix or postfix notation instead of hardcoding the value.
You should have a variable named newHealth that correctly produces the value 7 by using the decrement operator. Update the expression to use the correct prefix or postfix notation instead of hardcoding the value.

let counter = 10;
console.log(`Counter is currently ${counter}`);

let updatedCounter = counter++;
console.log(`Counter is now ${updatedCounter}`);

let score = 8;
console.log(`Score is currently ${score}`);

let finalScore = ++score;
console.log(`Score is still ${finalScore}`);

let coins = 3;
console.log(`Coins is currently ${coins}`);

let updatedCoins = coins--;
console.log(`Coins is now ${updatedCoins}`);

let health = 7;
console.log(`Health is currently ${health}`);

let newHealth = --health;
console.log(`Health is still ${newHealth}`);
*/

let counter = 10;
console.log(`Counter is currently ${counter}`);

let updatedCounter = ++counter;
console.log(`Counter is now ${updatedCounter}`);

let score = 8;
console.log(`Score is currently ${score}`);

let finalScore = score++;
console.log(`Score is still ${finalScore}`);

let coins = 3;
console.log(`Coins is currently ${coins}`);

let updatedCoins = --coins;
console.log(`Coins is now ${updatedCoins}`);

let health = 7;
console.log(`Health is currently ${health}`);

let newHealth = health--;
console.log(`Health is still ${newHealth}`);