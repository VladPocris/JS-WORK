const poll = new Map();

function addOption(option) {
  if(!option.trim()) return `Option cannot be empty.`;
  if(!poll.has(option)) 
  {
    poll.set(option, new Set());
    return `Option "${option}" added to the poll.`;
  }
  return `Option "${option}" already exists.`;
}

function vote(option, voterId) {
  if(!poll.has(option)) return `Option "${option}" does not exist.`;
  
  for (const [key, voters] of poll) {
    if (voters.has(voterId)) {
      return `Voter ${voterId} has already voted for "${key}".`;
    }
  }

  const pollOption = poll.get(option);
  pollOption.add(voterId);
  return `Voter ${voterId} voted for "${option}".`;
}

function displayResults() {
  let str = "Poll Results:\n";
  
  for (const [option, voters] of poll) {
    str += `${option}: ${voters.size} votes\n`;
  }

  return str.trim();
}


console.log(addOption("Malaysia"));
console.log(addOption("Kamala"));
console.log(addOption("Biden"));
console.log(addOption("Biden"));
console.log(vote("Malaysi", "traveler1"));
console.log(vote("Malaysia", "traveler2"));
console.log(vote("Malaysia", "traveler3"));
console.log(displayResults());