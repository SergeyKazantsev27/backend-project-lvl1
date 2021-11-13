import game from '../index.js';

const runGame = () => {
  game.run(
    'Answer "yes" if the number is even, otherwise answer "no".',
    (() => {
      const isEven = (num) => !(num % 2);

      const question = Math.floor(Math.random() * 100);
      const answer = (isEven(question) === true) ? 'yes' : 'no';
      return [question, answer];
    }),
  );
};

export default runGame;
