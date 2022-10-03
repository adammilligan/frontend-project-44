import createRandomNumber from '../utils.js';
import startGame from '../index.js';

const maxNumber = 100;
const minNumber = 1;
const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (checkNumber) => checkNumber % 2 === 0;

export default () => {
  const toCompareData = () => {
    const checkNumber = createRandomNumber(maxNumber, minNumber);
    const result = isEven(checkNumber) ? 'yes' : 'no';
    return {
      result,
      question: String(checkNumber),
    };
  };
  startGame(toCompareData, gameRule);
};
