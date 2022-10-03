#!/usr/bin/env node

import randomNumber from '../utils.js';
import startGame from '../index.js';

const MAX_ARRAY_NUMBER = 10;
const MIN_ARRAY_NUMBER = 5;
const gameRule = 'What number is missing in the progression?';

const createProgression = (number, increment) => {
  const tempArray = [];
  const progressionLength = randomNumber(MIN_ARRAY_NUMBER, MAX_ARRAY_NUMBER);
  for (let i = number; tempArray.length < progressionLength; i += increment) {
    tempArray.push(i);
  }
  return tempArray;
};

const MAX_NUMBER = 100;
const MIN_NUMBER = 1;
const MAX_INCREMENT_NUMBER = 10;

export default () => {
  const comparisonData = () => {
    const firstNumber = randomNumber(MIN_NUMBER, MAX_NUMBER);
    const increment = randomNumber(MIN_NUMBER, MAX_INCREMENT_NUMBER);
    const tempArray = createProgression(firstNumber, increment);
    const passNumber = randomNumber(MIN_NUMBER, tempArray.length);
    const result = String(tempArray[passNumber - 1]);
    tempArray[passNumber - 1] = '..';
    return {
      result,
      question: `${tempArray.join(' ')}`,
    };
  };
  startGame(comparisonData, gameRule);
};
