import readlineSync from 'readline-sync';

const sayMyName = () => {
  const name = readlineSync.question('Your answer: ');
  console.log(`Hello, ${name}!`);
};

export default sayMyName;
