import runGameLogic, { userName } from '../index.js';
import generateNumber from '../utils.js';

// game description
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// round rules
let currentRound = 0;
const maxRound = 3;

// game logic
const isPrime = (num) => {
  if (num === 1) {
    return true;
  }

  for (let i = 2; i < num; i += 1) {
    if ((num % i) === 0) {
      return false;
    }
  }
  return true;
};

// generate rounds
const generateRound = () => {
  const question = generateNumber(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
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
