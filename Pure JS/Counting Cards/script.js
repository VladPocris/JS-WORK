/*

User Stories:

You should use let to declare a global variable named count and set it to 0.
You should have a function called cardCounter.
The cardCounter function should receive a card parameter which can either be a number or string.
For values between 2 to 10, the card parameter will be a number.
For all other values, the card parameter will be a string.
The cardCounter function should modify the global count variable based on certain criteria.
The global count variable should be increased by 1 for the cards 2, 3,4, 5, or 6
The global count variable should remain unchanged for the cards 7, 8, 9.
The global count variable should be decreased by 1 for the cards 10, "J", "Q", "K", "A"
The cardCounter function should return a string with current count and the string Bet if the count is positive.
The cardCounter function should return a string with current count and the string Hold if the count is less than or equal to 0.
In the function output, the current count and the player's decision (Bet or Hold) should be separated by a space. For example, -3 Hold.

*/

let count = 0;

function cardCounter(card) {
  if (card >= 2 && card <= 10) {
    card = parseInt(card);
  } else {
    card = String(card);
  }

  if (card >= 2 && card <= 6) {
    ++count;
  } else if (card === 10 || typeof card === typeof String()) {
    --count;
  }

  if (count > 0) {
    return `${count} Bet`
  } else if (count <= 0) {
    return `${count} Hold`
  }

}

console.log(cardCounter(Infinity));