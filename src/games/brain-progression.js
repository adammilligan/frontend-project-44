#!/usr/bin/env node

import { randomNumberOnoToOneHundred, randomNumberOnoToTen } from '../utils.js';
import { doIterations, convertUserAnswerToNumber, doProgression } from '../index.js';
import hello from '../cli.js';

export default () => {
  const name = hello();
  console.log('What number is missing in the progression?');
  const toGenerateResults = () => {
    const firstNumber = randomNumberOnoToOneHundred();
    const increment = randomNumberOnoToTen();
    const passNumber = randomNumberOnoToTen();
    const tempArray = doProgression(firstNumber, increment);
    const result = tempArray[passNumber - 1];
    tempArray[passNumber - 1] = '..';
    console.log(`Question: ${tempArray.join(' ')}`);
    const answer = convertUserAnswerToNumber();
    return {
      result,
      answer,
    };
  };
  doIterations(name, toGenerateResults);
};
