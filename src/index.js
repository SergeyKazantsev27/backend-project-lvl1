import readlineSync from 'readline-sync';
import sayMyName from './cli.js';

export const userName = sayMyName();

const runGameLogic = (description, question, correctAnswer) => {
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${userName}!`);
  return false;
};

export default runGameLogic;
