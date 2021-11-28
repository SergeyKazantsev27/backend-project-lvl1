import runGameLogic, { userName } from '../index.js';
import generateNumber from '../utils.js';

// game description
const description = 'Find the greatest common divisor of given numbers.';

// round rules
let currentRound = 0;
const maxRound = 3;

// game logic
const getRandomNumber = generateNumber(1, 100);

const gcd = (num1, num2) => {
  const num1Dividers = [];
  const num2Dividers = [];

  for (let i = 0; i <= num1; i += 1) {
    if (num1 % i === 0) {
      num1Dividers.push(i);
    }
  }
  for (let i = 0; i <= num2; i += 1) {
    if (num2 % i === 0) {
      num2Dividers.push(i);
    }
  }

  const commonDividers = [];

  num1Dividers.reduce(
    // eslint-disable-next-line max-len
    (acc, num1Element) => num2Dividers.reduce((acc2, num2Element) => ((num1Element === num2Element) ? commonDividers.push(num1Element) : false), []),
    [],
  );

  return `${commonDividers[commonDividers.length - 1]}`;
};

// generate rounds
const generateRound = () => {
  const [firstRandomNumber, secondRandomNumber] = [getRandomNumber(), getRandomNumber()];

  const question = `${firstRandomNumber} ${secondRandomNumber}`;
  const correctAnswer = gcd(firstRandomNumber, secondRandomNumber);
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
