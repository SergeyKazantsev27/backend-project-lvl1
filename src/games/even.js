import game from '../index.js';

const isEven = (num) => (num % 2) === 0;

const runGame = () => {
  game.run(
    'Answer "yes" if the number is even, otherwise answer "no".',
    (() => {
      const question = Math.floor(Math.random() * 100);
      const answer = (isEven(question) === true) ? 'yes' : 'no';
      return [question, answer];
    }),
  );
};

export default runGame;
