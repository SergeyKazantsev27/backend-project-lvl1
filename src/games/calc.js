import gameLogic, { userName } from '../index.js';

// game description
const gameDescription = 'What is the result of the expression?';

// round rules
let currentRound = 0;
const maxRound = 3;

// game logic
const operations = ['+', '-', '*'];
const getRandomOperation = () => operations[Math.floor(Math.random() * operations.length)];
const getRandomNumber = () => Math.floor(Math.random() * 10) * 2 + 1;

const getOperationResult = (firstOperand, secondOperand, operation) => {
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
  // eslint-disable-next-line max-len
  const [firstOperand, secondOperand, randomOperation] = [getRandomNumber(), getRandomNumber(), getRandomOperation()];
  const question = `${firstOperand} ${randomOperation} ${secondOperand}`;
  const correctAnswer = getOperationResult(firstOperand, secondOperand, randomOperation);
  return gameLogic(gameDescription, question, correctAnswer);
};

// run rounds
const runGame = () => {
  console.log(gameDescription);

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
