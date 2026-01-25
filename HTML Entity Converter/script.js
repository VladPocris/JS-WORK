function convertHTML(string) {
  let stringHTML = "";

  for(const char of string) {
    switch(char) {
      case("&"):
        stringHTML += "&amp;";
        break;
      case("<"):
        stringHTML += "&lt;";
        break;
      case(">"):
        stringHTML += "&gt;";
        break;
      case(`"`):
        stringHTML += "&quot;";
        break;
      case("'"):
        stringHTML += "&apos;";
        break;
      default:
        stringHTML += char;
    }
  }

  return stringHTML;
}

console.log(convertHTML(`a&s`))
