#!/usr/bin/env node

import randomNumber from '../utils.js';
import startGame from '../index.js';

const MAX_NUMBER = 100;
const MIN_NUMBER = 1;
const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNum = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export default () => {
  const comparisonData = () => {
    const checkNumber = randomNumber(MAX_NUMBER, MIN_NUMBER);
    const result = isPrimeNum(checkNumber) ? 'yes' : 'no';
    return {
      result,
      question: `${checkNumber}`,
    };
  };
  startGame(comparisonData, gameRule);
};
