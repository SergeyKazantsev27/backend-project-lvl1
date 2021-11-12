#!/usr/bin/env node

import readlineSync from 'readline-sync';

const sayMyName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};
const getRandomNumber = () => Math.floor(Math.random() * 100);
const isEven = (num) => !(num % 2);

const runGame = () => {
  const name = sayMyName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let result = 0;
  do {
    const currentRandomNumber = getRandomNumber();
    console.log(`Question: ${currentRandomNumber}`);

    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = (isEven(currentRandomNumber) === true) ? 'yes' : 'no';

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      result += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }

    if (result === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  } while (result < 3);
};

runGame();
