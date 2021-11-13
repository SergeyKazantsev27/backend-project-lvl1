import game from '../index.js';

const runGame = () => {
  game.run(
    'What number is missing in the progression?',
    (() => {
      const makeRandomProgression = () => {
        const firstElem = (Math.floor(Math.random() * 10)) + 1;
        const progression = [firstElem];
        const randomNum = (Math.floor(Math.random() * 10)) + 1;

        for (let i = 0; i < 9; i += 1) {
          progression.push(progression[i] + randomNum);
        }
        return progression;
      };
      const randomProgression = makeRandomProgression();

      // eslint-disable-next-line max-len
      const randomItemFromProgression = randomProgression[Math.floor(Math.random() * randomProgression.length)];

      const progressionWithHiddenNum = [];
      randomProgression.reduce((acc, rec) => {
        if (rec === randomItemFromProgression) {
          return progressionWithHiddenNum.push('..');
        }
        return progressionWithHiddenNum.push(rec);
      }, []);

      const questionString = `${progressionWithHiddenNum}`.split(',').join(' ');
      const question = `${questionString}`;
      // eslint-disable-next-line consistent-return
      const answer = () => `${randomItemFromProgression}`;
      return [question, answer()];
    }),
  );
};

export default runGame;
