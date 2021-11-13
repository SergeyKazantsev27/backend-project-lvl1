import game from '../index.js';

const runGame = () => {
  game.run(
    'Find the greatest common divisor of given numbers.',
    () => {
      const questionParam = [Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100)];
      const question = `${questionParam[0]} ${questionParam[1]}`;
      const answer = () => {
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

        return gcd(questionParam[0], questionParam[1]);
      };
      return [question, answer()];
    },
  );
};

export default runGame;
