import runGameLogic, { userName } from '../index.js';
import generateNumber from '../utils.js';

// game description
const description = 'What is the result of the expression?';

// round rules
let currentRound = 0;
const maxRound = 3;

// game logic
const operations = '+-*';
const randomIndexOperator = () => operations[generateNumber(0, operations.length - 1)];
const getRandomNumber = () => generateNumber(1, 10);

const getOperationResult = (operation, firstOperand, secondOperand) => {
  switch (operation) {
    case '+':
      return `${firstOperand + secondOperand}`;
    case '-':
      return `${firstOperand - secondOperand}`;
    case '*':
      return `${firstOperand * secondOperand}`;
    default:
      throw new Error(`Unknown operation: '${operation}'!`);
  }
};

// generate rounds
const generateRound = () => {
  const firstOperand = getRandomNumber();
  const secondOperand = getRandomNumber();
  const randomOperation = randomIndexOperator();
  const question = `${firstOperand} ${randomOperation} ${secondOperand}`;
  const correctAnswer = getOperationResult(randomOperation, firstOperand, secondOperand);
  return runGameLogic(description, question, correctAnswer);
};

// run rounds
const runGame = () => {
  console.log(description);

  while (currentRound < maxRound) {
    if (generateRound()) {
      currentRound += 1;
    } else {
      break;
    }
  }

  if (currentRound === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default runGame;
