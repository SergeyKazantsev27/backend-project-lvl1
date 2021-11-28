import runGameLogic, { userName } from '../index.js';
import generateNumber from '../utils.js';

// game description
const description = 'What number is missing in the progression?';

// round rules
let currentRound = 0;
const maxRound = 3;

// game logic
const makeRandomProgression = () => {
  const firstElem = generateNumber(1, 10);
  const progression = [firstElem];
  const randomNum = generateNumber(1, 10);

  for (let i = 0; i < 9; i += 1) {
    progression.push(progression[i] + randomNum);
  }
  return progression;
};

// generate rounds
const generateRound = () => {
  const randomProgression = makeRandomProgression();
  const randomIndex = generateNumber(1, randomProgression.length - 1);
  const randomItemFromProgression = randomProgression[randomIndex];
  const progressionWithHiddenNum = [];

  randomProgression.reduce((acc, rec) => {
    if (rec === randomItemFromProgression) {
      return progressionWithHiddenNum.push('..');
    }
    return progressionWithHiddenNum.push(rec);
  }, []);

  const question = `${progressionWithHiddenNum}`.split(',').join(' ');
  const correctAnswer = `${randomItemFromProgression}`;
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
