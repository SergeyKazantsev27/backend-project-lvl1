import game from '../index.js';

const runGame = () => {
  game.run(
    'What is the result of the expression?',
    (() => {
      const operands = ['+', '-', '*'];
      const randomOperand = operands[Math.floor(Math.random() * operands.length)];
      const questionParam = [Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        randomOperand];
      const question = `${questionParam[0]} ${questionParam[2]} ${questionParam[1]}`;
      // eslint-disable-next-line consistent-return
      const answer = () => {
        if (randomOperand === '+') {
          return `${questionParam[0] + questionParam[1]}`;
        }
        if (randomOperand === '-') {
          return `${questionParam[0] - questionParam[1]}`;
        }
        if (randomOperand === '*') {
          return `${questionParam[0] * questionParam[1]}`;
        }
      };
      return [question, answer()];
    }),
  );
};

export default runGame;
