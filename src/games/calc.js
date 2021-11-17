import game from '../index.js';

const operations = ['+', '-', '*'];

const getRandomOperation = () => operations[Math.floor(Math.random() * operations.length)];

const getOperationResult = (firstOperand, secondOperand, operation) => {
  switch (operation) {
    case '+':
      return `${firstOperand + secondOperand}`;
    case '-':
      return `${firstOperand - secondOperand}`;
    case '*':
      return `${firstOperand * secondOperand}`;
    default:
      throw new Error(`Unknown operation: '${operation}'!`);
  }
};

const runGame = () => {
  game.run(
    'What is the result of the expression?',
    (() => {
      const randomOperation = getRandomOperation();
      const questionParam = [Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        randomOperation];

      const question = `${questionParam[0]} ${questionParam[2]} ${questionParam[1]}`;
      const answer = () => getOperationResult(questionParam[0], questionParam[1], questionParam[2]);
      return [question, answer()];
    }),
  );
};

export default runGame;
