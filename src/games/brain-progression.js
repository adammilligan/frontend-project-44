#!/usr/bin/env node

import randomNumber from '../utils.js';
import { doIterations,startGame } from '../index.js';

const createProgression = (number, increment) => {
  const MAX_NUMBER = 10;
  const MIN_NUMBER = 5;
  const progressionLength = randomNumber(MIN_NUMBER, MAX_NUMBER);
  const tempArray = [];
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
    console.log('What number is missing in the progression?');
    const firstNumber = randomNumber(MIN_NUMBER, MAX_NUMBER);
    const increment = randomNumber(MIN_NUMBER, MAX_INCREMENT_NUMBER);
    const tempArray = createProgression(firstNumber, increment);
    const passNumber = randomNumber(MIN_NUMBER, tempArray.length);
    const result = String(tempArray[passNumber - 1]);
    tempArray[passNumber - 1] = '..';
    const answer = startGame(`${tempArray.join(' ')}`);
    return {
      result,
      answer,
    };
  };
  doIterations(comparisonData);
};
