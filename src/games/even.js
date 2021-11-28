import runGameLogic, { userName } from '../index.js';
import generateNumber from '../utils.js';

// game description
const description = 'Answer "yes" if the number is even, otherwise answer "no".';

// round rules
let currentRound = 0;
const maxRound = 3;

// game logic
const isEven = (num) => num % 2 === 0;

// generate rounds
const generateRound = () => {
  const question = `${generateNumber(1, 100)}`;
  const correctAnswer = isEven(question) ? 'yes' : 'no';
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
