const startingArray = document.getElementById("starting-array");
const arrayContainer = document.getElementById("array-container");
const generateBtn = document.getElementById("generate-btn");
const sortBtn = document.getElementById("sort-btn");

function generateElement() {
  return Math.floor(Math.random() * 100) + 1;
}

function generateArray() {
  return Array.from({ length: 5 }, generateElement);
}

function generateContainer() {
  const div = document.createElement("div");
  arrayContainer.appendChild(div);
  return div;
}

function fillArrContainer(el, arr) {
  el.innerHTML = "";
  arr.forEach((num) => {
    const span = document.createElement("span");
    span.textContent = num;
    el.appendChild(span);
  });
}

function isOrdered(a, b) {
  return a <= b;
}

function swapElements(arr, index) {
  if (!isOrdered(arr[index], arr[index + 1])) {
    [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]];
  }
}

function highlightCurrentEls(el, index) {
  const first = el.children[index];
  const second = el.children[index + 1];

  if (first) first.style.border = "2px dashed red";
  if (second) second.style.border = "2px dashed red";
}

let currentArray = [];

function clearExtraSteps() {
  arrayContainer.querySelectorAll("div:not(#starting-array)").forEach((div) => div.remove());
}

function getLastChildren() {
  return arrayContainer.querySelector("div:last-child");
}

function getLastArr() {
  return Array.from(getLastChildren().children).map((span) => Number(span.textContent));
}

generateBtn.addEventListener("click", () => {
  currentArray = generateArray();
  clearExtraSteps();
  fillArrContainer(startingArray, currentArray);
});

sortBtn.addEventListener("click", () => {
  if (!currentArray.length) return;

  clearExtraSteps();
  fillArrContainer(startingArray, currentArray);

  let swapped;
  let arrayLength = currentArray.length;

  do {
    swapped = false;

    currentArray.forEach((_, i) => {
      if (i + 1 < arrayLength) {
        highlightCurrentEls(getLastChildren(), i);

        const arr = getLastArr();
        const beforeSwap = [...arr];

        swapElements(arr, i);

        if (beforeSwap[i] !== arr[i] || beforeSwap[i + 1] !== arr[i + 1]) {
          swapped = true;
        }

        fillArrContainer(generateContainer(), arr);
      }
    });
  } while (swapped);

  getLastChildren().style.borderColor = "#00ff00";
  currentArray = getLastArr();
});