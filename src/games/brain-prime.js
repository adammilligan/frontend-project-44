import createRandomNumber from '../utils.js';
import startGame from '../index.js';

const maxNumber = 100;
const minNumber = 1;
const gameRule = "Answer 'yes' if given number is prime. Otherwise answer 'no'.";

const isPrimeNum = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export default () => {
  const generateCondition = () => {
    const randomNumber = createRandomNumber(maxNumber, minNumber);
    const result = isPrimeNum(randomNumber) ? 'yes' : 'no';
    return {
      result,
      question: `${randomNumber}`,
    };
  };
  startGame(generateCondition, gameRule);
};
