import createRandomNumber from '../utils.js';
import startGame from '../index.js';

const maxNumber = 100;
const minNumber = 1;
const gameRule = 'Find the greatest common divisor of given numbers.';

const findGcd = (x, y) => {
  let temporaryX = x;
  let temporaryY = y;
  if (temporaryX === 0) {
    return temporaryY;
  }
  while (temporaryY !== 0) {
    if (temporaryX > temporaryY) {
      temporaryX -= temporaryY;
    } else {
      temporaryY -= temporaryX;
    }
  }
  return temporaryX;
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
