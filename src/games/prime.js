import game from '../index.js';

const runGame = () => {
  game.run(
    'Answer "yes" if given number is prime. Otherwise answer "no".',
    (() => {
      // eslint-disable-next-line consistent-return
      const isPrime = (num) => {
        if (num === 1) {
          return true;
        }

        for (let i = 2; i < num; i += 1) {
          if ((num % i) === 0) {
            return false;
          }
        }
        return true;
      };

      const question = (Math.floor(Math.random() * 100) + 1);
      const answer = (isPrime(question) === true) ? 'yes' : 'no';
      return [question, answer];
    }),
  );
};

export default runGame;
