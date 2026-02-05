function truthCheck(collection, pre) {

  for(let key in collection) {
    if(Boolean(collection[key][pre]) === false) return false;
  }

  return true;
}

console.log(truthCheck(
  [
  {name: "Quincy", role: "Founder", isBot: false},
  {name: "Naomi", role: "", isBot: false}, 
  {name: "Camperbot", role: "Bot", isBot: true}
], 
"role"));