function pairElement(string) {
  const stringToUpperCase = string.toUpperCase();
  let pairs = [];

  for(const base of stringToUpperCase) {
    switch(base){
      case("A"):
        pairs.push([base, "T"]);
        break;
      case("T"):
        pairs.push([base, "A"]);
        break;
      case("C"):
        pairs.push([base, "G"]);
        break;
      case("G"):
        pairs.push([base, "C"]);
        break;
      default:
        console.log(`Wrong base passed => ${base}`);
        break;
    }
  }
  return pairs;
}

console.log(pairElement("ATCG"));