import readlineSync from 'readline-sync';

const game = {
  score: 0,
  sayHello() {
    console.log('Welcome to the Brain Games!');
  },
  getUserName() {
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    game.userName = name;
  },
  run(title, callback) {
    game.sayHello();
    game.getUserName();
    console.log(title);
    do {
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

      if (game.score === 3) {
        console.log(`Congratulations, ${game.userName}!`);
      }
    } while (this.score < 3);
  },
};

export default game;
