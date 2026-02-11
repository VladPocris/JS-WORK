const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");
const caseInsensitiveFlag = document.getElementById("i");
const globalFlag = document.getElementById("g");

function getFlags() {
  return `${globalFlag.checked? "g":""}${caseInsensitiveFlag.checked? "i":""}`
}

function regexTest() {
  const flags = getFlags();
  const expresion = regexPattern.value;
  const string = stringToTest.textContent;
  let regex;

  try {
    regex = new RegExp(expresion, flags);
  } catch (e) {
    console.error("Invalid regex:", e);
    return null;
  }

  return flags.includes("g")
  ? [...string.matchAll(regex)]
  : (string.match(regex) ? [string.match(regex)] : []);
}

function resultProcessing(result){
  let indexFound;
  let lengthFound;
  let processedResult = [];

  if(!result || result.length === 0) {
    return [];
  }

  result.forEach(arr => {
    processedResult.push([arr.index, arr[0].length, arr[0]]);
  });

  return processedResult;
}

function uiUpdates() {
  const matches = regexTest();
  const result = resultProcessing(matches);
  const string = stringToTest.textContent;

  testResult.textContent = "";
  stringToTest.textContent = "";

  if (!result || result.length === 0) {
    testResult.textContent = "no match";
    stringToTest.textContent = string;
    return;
  }

  testResult.textContent = result.map(r => r[2]).join(", ");

  let lastIndex = 0;

  result.forEach(([start, length]) => {
    const end = start + length;

    const beforeText = string.slice(lastIndex, start);
    if (beforeText) {
      stringToTest.appendChild(document.createTextNode(beforeText));
    }

    const span = document.createElement("span");
    span.className += "highlight";
    span.textContent = string.slice(start, end);
    stringToTest.appendChild(span);
    
    lastIndex = end;
  })

  

  const remainingText = string.slice(lastIndex);
  if (remainingText) {
    stringToTest.appendChild(document.createTextNode(remainingText));
  }

  return;
}

testButton.addEventListener("click", () => {
  uiUpdates();
})