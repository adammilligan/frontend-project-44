#!/usr/bin/env node

import createRandomNumber from '../utils.js';
import startGame from '../index.js';

const MAX_NUMBER = 100;
const MIN_NUMBER = 1;
const gameRule = 'Find the greatest common divisor of given numbers.';

const makeGcd = (x, y) => {
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
  const toCompareData = () => {
    const firstOperand = createRandomNumber(MAX_NUMBER, MIN_NUMBER);
    const secondOperand = createRandomNumber(MAX_NUMBER, MIN_NUMBER);
    const result = String(makeGcd(firstOperand, secondOperand));
    return {
      result,
      question: `${firstOperand} ${secondOperand}`,
    };
  };
  startGame(toCompareData, gameRule);
};
