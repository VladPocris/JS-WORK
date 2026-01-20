const questions = [
  {
    category: "CSS",
    question: "Which of the following is TRUE about the translate() function?",
    choices: ["It is used to scale the size of an element.", 
    "It is used to move an element from its current position.", 
    "It is used to change the shape or size of an element."
    ],
    answer: "It is used to move an element from its current position."
  },
  {
  category: "HTML",
  question: "Which HTML tag is used to create a hyperlink?",
  choices: [
    "<link>",
    "<a>",
    "<href>"
  ],
  answer: "<a>"
  },
  {
    category: "JavaScript",
    question: "Which keyword is used to declare a block-scoped variable in JavaScript?",
    choices: [
      "var",
      "const",
      "let"
    ],
    answer: "let"
  },
  {
    category: "React",
    question: "What hook is used to manage state in a functional component?",
    choices: [
      "useEffect",
      "useState",
      "useRef"
    ],
    answer: "useState"
  },
  {
    category: "Git",
    question: "Which Git command is used to check the status of your working directory?",
    choices: [
      "git log",
      "git status",
      "git commit"
    ],
    answer: "git status"
  },
  {
    category: "Web",
    question: "Which HTTP method is typically used to retrieve data from a server?",
    choices: [
      "POST",
      "PUT",
      "GET"
    ],
    answer: "GET"
  }
]

const getRandomQuestion = arr => arr[Math.floor(Math.random() * arr.length)];

const getRandomComputerChoice = arr => arr[Math.floor(Math.random() * arr.length)];

function getResults(question, choice) {
  if (question.answer === choice) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  }
}

const randomQuestion = getRandomQuestion(questions);
const randomComputerChoice = getRandomComputerChoice(randomQuestion);

console.log(getResults(randomQuestion, randomComputerChoice));
