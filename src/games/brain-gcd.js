import createRandomNumber from '../utils.js';
import startGame from '../index.js';

const maxNumber = 100;
const minNumber = 1;
const gameRule = 'Find the greatest common divisor of given numbers.';

const findGcd = (x, y) => {
  const max = x > y ? x : y;
  const min = x < y ? x : y;
  if (max % min === 0) {
    return min;
  }
  return findGcd(min, max % min);
};

export default () => {
  const generateCondition = () => {
    const firstOperand = createRandomNumber(maxNumber, minNumber);
    const secondOperand = createRandomNumber(maxNumber, minNumber);
    const result = String(findGcd(firstOperand, secondOperand));
    return {
      result,
      question: `${firstOperand} ${secondOperand}`,
    };
  };
  startGame(generateCondition, gameRule);
};
