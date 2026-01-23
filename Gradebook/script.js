function getAverage(arr) {
  return arr.reduce((a, b) => a + b, 0)/arr.length;
}

function getGrade(score) {
  if(score >= 0 && score < 60) {
    return "F";
  } else if (score < 70) {
    return "D";
  } else if (score < 80) {
    return "C";
  } else if (score < 90) {
    return "B";
  } else if (score < 100) {
    return "A"; 
  } else if (score === 100) {
    return "A+";
  } else {
    return "Please pass a score in the range of 0 to 100";
  }
}

function hasPassingGrade(score) {
  if(score < 0) return "Please pass a score in the range of 0 to 100";

  if(getGrade(score) != "F") {
    return true;
  } else {
    return false;
  }

}

function studentMsg(scores, score) {
  if(hasPassingGrade(score)) {
    return `Class average: ${getAverage(scores)}. Your grade: ${getGrade(score)}. You passed the course.`;
  } else {
    return `Class average: ${getAverage(scores)}. Your grade: ${getGrade(score)}. You failed the course.`;
  }
}


console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));