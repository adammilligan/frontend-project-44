import createRandomNumber from '../utils.js';
import startGame from '../index.js';

const maxNumber = 100;
const minNumber = 1;
const maxIncrementNumber = 10;
const maxArrayNumber = 10;
const minArrayNumber = 5;
const gameRule = 'What number is missing in the progression?';

const createProgression = (number, increment, progressionLength) => {
  const tempArray = [];
  for (let i = number; tempArray.length < progressionLength; i += increment) {
    tempArray.push(i);
  }
  return tempArray;
};

export default () => {
  const generateCondition = () => {
    const firstNumber = createRandomNumber(minNumber, maxNumber);
    const increment = createRandomNumber(minNumber, maxIncrementNumber);
    const progressionLength = createRandomNumber(minArrayNumber, maxArrayNumber);
    const tempArray = createProgression(firstNumber, increment, progressionLength);
    const passNumber = createRandomNumber(minNumber, tempArray.length) - 1;
    const result = String(tempArray[passNumber]);
    tempArray[passNumber] = '..';
    return {
      result,
      question: `${tempArray.join(' ')}`,
    };
  };
  startGame(generateCondition, gameRule);
};
