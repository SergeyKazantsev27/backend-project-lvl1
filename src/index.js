import readlineSync from 'readline-sync';
import sayMyName from './cli.js';

let score = 0;

const game = {
  run(title, callback) {
    game.userName = sayMyName();
    console.log(title);

    for (score; score <= 3; score += 1) {
      if (score === 3) {
        console.log(`Congratulations, ${game.userName}!`);
        break;
      }

      const [gameQuestion, correctAnswer] = callback();

      console.log(`Question: ${gameQuestion}`);
      const userAnswer = readlineSync.question('Your answer: ');

      if (userAnswer === correctAnswer) {
        console.log('Correct!');
      } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        console.log(`Let's try again, ${game.userName}!`);
        break;
      }
    }
  },
};

export default game;
