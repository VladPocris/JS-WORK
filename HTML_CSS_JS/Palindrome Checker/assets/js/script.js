const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const resultMsg = document.getElementById("result");

function isPalindrome(input) {
    const punctRegex = /[^a-z0-9]/gi;
    const cleanInput = input.replace(punctRegex, "").toLowerCase();
    const reversedInput = cleanInput.split("").reverse().join("");

    return reversedInput === cleanInput;
}

function displayResult(wasPalindrome) {
  resultMsg.textContent = "";
  const strongEl = document.createElement("strong");
  strongEl.textContent = textInput.value;
  resultMsg.appendChild(strongEl);
  
  wasPalindrome? 
  resultMsg.append(" is a palindrome."):
  resultMsg.append(" is not a palindrome.");
  return;
}

checkBtn.addEventListener("click", () => {
  const value = textInput.value.trim();
  if(!value) return alert("Please input a value");

  displayResult(isPalindrome(value));
})
