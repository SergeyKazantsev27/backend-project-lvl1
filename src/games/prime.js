import gameLogic, { userName } from '../index.js';

// game description
const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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
  const question = (Math.floor(Math.random() * 100) + 1);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
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
