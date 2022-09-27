#!/usr/bin/env node

import { randomNumberOneToOneHundred, randomNumberOneToTen } from '../utils.js';
import { doIterations, convertUserAnswerToNumber, doProgression } from '../index.js';
import hello from '../cli.js';

export default () => {
  const name = hello();
  console.log('What number is missing in the progression?');
  const toGenerateResults = () => {
    const firstNumber = randomNumberOneToOneHundred();
    const increment = randomNumberOneToTen();
    const passNumber = randomNumberOneToTen();
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
