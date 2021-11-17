import readlineSync from 'readline-sync';
import sayMyName from './cli.js';

const game = {
  score: 0,
  run(title, callback) {
    game.userName = sayMyName();
    console.log(title);

    for (game.score; game.score <= 4; game.score += 1) {
      if (game.score === 3) {
        console.log(`Congratulations, ${game.userName}!`);
        break;
      }

      const [gameQuestion, correctAnswer] = callback();

      console.log(`Question: ${gameQuestion}`);
      const userAnswer = readlineSync.question('Your answer: ');

      if (userAnswer === correctAnswer) {
        console.log('Correct!');
        game.score += 1;
      } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        console.log(`Let's try again, ${game.userName}!`);
        break;
      }
    }
  },
};

export default game;
