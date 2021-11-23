import gameLogic, { userName } from '../index.js';

// game description
const gameDescription = 'What number is missing in the progression?';

// round rules
let currentRound = 0;
const maxRound = 3;

// game logic
const makeRandomProgression = () => {
  const firstElem = (Math.floor(Math.random() * 10)) + 1;
  const progression = [firstElem];
  const randomNum = (Math.floor(Math.random() * 10)) + 1;

  for (let i = 0; i < 9; i += 1) {
    progression.push(progression[i] + randomNum);
  }
  return progression;
};

// generate rounds
const generateRound = () => {
  const [randomProgression] = [makeRandomProgression()];
  // eslint-disable-next-line max-len
  const randomItemFromProgression = randomProgression[Math.floor(Math.random() * randomProgression.length)];
  const progressionWithHiddenNum = [];

  randomProgression.reduce((acc, rec) => {
    if (rec === randomItemFromProgression) {
      return progressionWithHiddenNum.push('..');
    }
    return progressionWithHiddenNum.push(rec);
  }, []);

  const question = `${progressionWithHiddenNum}`.split(',').join(' ');
  const correctAnswer = `${randomItemFromProgression}`;
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
