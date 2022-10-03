#!/usr/bin/env node

import createRandomNumber from '../utils.js';
import startGame from '../index.js';

const maxNumber = 100;
const minNumber = 1;
const maxIncrementNumber = 10;
const minProgressionLength = 5;
const gameRule = 'What number is missing in the progression?';

const createProgression = (number, increment, maxProgressionLength) => {
  const tempArray = [];
  const progressionLength = createRandomNumber(minProgressionLength, maxProgressionLength);
  for (let i = number; tempArray.length < progressionLength; i += increment) {
    tempArray.push(i);
  }
  return tempArray;
};

export default () => {
  const toCompareData = () => {
    const firstNumber = createRandomNumber(minNumber, maxNumber);
    const increment = createRandomNumber(minNumber, maxIncrementNumber);
    const tempArray = createProgression(firstNumber, increment, 10);
    const passNumber = (createRandomNumber(minNumber, tempArray.length) - 1);
    const result = String(tempArray[passNumber]);
    tempArray[passNumber] = '..';
    return {
      result,
      question: `${tempArray.join(' ')}`,
    };
  };
  startGame(toCompareData, gameRule);
};
