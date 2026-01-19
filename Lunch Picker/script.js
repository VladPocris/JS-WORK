const lunches = ["Pizza", "Tacos"];

function addLunchToEnd(arr, str) {
  console.log(`${str} added to the end of the lunch menu.`);
  arr.push(str);
  return arr;
}

function addLunchToStart(arr, str) {
  console.log(`${str} added to the start of the lunch menu.`);
  arr.unshift(str);
  return arr;
}

function removeLastLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches to remove.");
    return arr;
  } else {
    console.log(`${arr[arr.length - 1]} removed from the end of the lunch menu.`);
    arr.pop();
    return arr;
  }
}

function removeFirstLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches to remove.");
    return arr;
  } else {
    console.log(`${arr[0]} removed from the start of the lunch menu.`);
    arr.shift();
    return arr;
  }
}

function getRandomLunch(arr) {
  if (arr.length > 0) {
    const randomNumber = Math.round(Math.random() * (arr.length - 1));
    console.log(`Randomly selected lunch: ${arr[randomNumber]}`);
  } else {
    console.log("No lunches available.");
  }
}

function showLunchMenu(arr) {
  if (arr.length > 0) {
    console.log(`Menu items: ${arr.join(", ")}`);
  } else {
    console.log("The menu is empty.");
  }
}

showLunchMenu(lunches);