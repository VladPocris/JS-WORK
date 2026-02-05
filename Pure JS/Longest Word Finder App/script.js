function findLongestWordLength(sentence) {
  const punctuations = ".,!?;:-()[]{}\"'–";
  let newSentence = "";
  let longestWord = "";

  for (const char of sentence.toLowerCase()) {
    if (!punctuations.includes(char)) {
      newSentence += char;
    }
  }

  for (const word of newSentence.split(" ")) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord.length;  
}

console.log(findLongestWordLength("Hello World"));
console.log(findLongestWordLength("The quick brown fox jumps over the lazy dog!"));
console.log(findLongestWordLength("A journey of a thousand miles begins with a single step."));