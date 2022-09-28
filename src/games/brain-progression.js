#!/usr/bin/env node

import randomNumber from '../utils.js';
import { doIterations, doYouAnswer, runQuestion } from '../index.js';
import getUser from '../cli.js';

const createProgression = (number, increment) => {
  const MAX_NUMBER = 10;
  const MIN_NUMBER = 4;
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
  const name = getUser();
  console.log('What number is missing in the progression?');
  const comparisonData = () => {
    const firstNumber = randomNumber(MIN_NUMBER, MAX_NUMBER);
    const increment = randomNumber(MIN_NUMBER, MAX_INCREMENT_NUMBER);
    const tempArray = createProgression(firstNumber, increment);
    const passNumber = randomNumber(MIN_NUMBER, tempArray.length);
    const result = String(tempArray[passNumber - 1]);
    tempArray[passNumber - 1] = '..';
    runQuestion(`${tempArray.join(' ')}`);
    const answer = doYouAnswer();
    return {
      result,
      answer,
    };
  };
  doIterations(name, comparisonData);
};
