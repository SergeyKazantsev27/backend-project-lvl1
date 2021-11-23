import gameLogic, { userName } from '../index.js';

// game description
const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

// round rules
let currentRound = 0;
const maxRound = 3;

// game logic
const isEven = (num) => (num % 2) === 0;

// generate rounds
const generateRound = () => {
  const question = Math.floor(Math.random() * 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
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
