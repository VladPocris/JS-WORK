const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(parCourse, strokesMade) {
  if(strokesMade === 1) {
    return names[0];
  } else if (strokesMade <= (parCourse - 2)) {
    return names[1];
  } else if (strokesMade === (parCourse - 1)) {
    return names[2];
  } else if (strokesMade === parCourse) {
    return names[3];
  } else if (strokesMade === (parCourse + 1)) {
    return names[4];
  } else if (strokesMade === (parCourse + 2)) {
    return names[5];
  } else {
    return names[6];
  }
}

console.log(golfScore(1,1));