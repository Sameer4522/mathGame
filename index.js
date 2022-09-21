let operators = ["+", "-", "*"];
let answerValue;
let operatorQuestion;
const startBtn = document.getElementById("start-btn");
const question = document.getElementById("question");
const controls = document.querySelector(".controls-container");
const result = document.getElementById("result");
const submitBtn = document.getElementById("submit-btn");
const errorMessage = document.getElementById("error-msg");

// Random Value Generator
const randomValue = (min, max) => Math.floor(Math.random() * (max - min) + min);

// Question Generator
const questionGenerator = () => {
  // two random values between 1 to 20
  let [num1, num2] = [randomValue(1, 20), randomValue(1, 20)];

  // Random Operator
  let randomOperator = operators[Math.floor(Math.random() * operators.length)];

  if (randomOperator == "-" && num2 > num1) {
    [num1, num2] = [num2, num1];
  }

  // Solution
  let solution = eval(`${num1}${randomOperator}${num2}`);
  console.log(num1, randomOperator, num2, solution);
};

// Start the Game

startBtn.addEventListener("click", () => {
  questionGenerator();
});
