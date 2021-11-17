import readlineSync from 'readline-sync';
import sayMyName from './cli.js';

let score = 0;

const game = {
  askQuestion(callback) {
    if (score === 3) {
      console.log(`Congratulations, ${game.userName}!`);
    }

    if (score < 3) {
      const [gameQuestion, correctAnswer] = callback();

      console.log(`Question: ${gameQuestion}`);
      const userAnswer = readlineSync.question('Your answer: ');

      if (userAnswer === correctAnswer) {
        console.log('Correct!');
        score += 1;
        game.askQuestion(callback);
      } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        console.log(`Let's try again, ${game.userName}!`);
      }
    }
  },
  run(title, callback) {
    game.userName = sayMyName();
    console.log(title);
    game.askQuestion(callback);
  },
};

export default game;
