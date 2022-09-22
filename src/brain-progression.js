#!/usr/bin/env node

import readlineSync from 'readline-sync';
import randomNumber from './utils.js';
import { doCountAnswer } from './index.js';

export default () => {
  console.log('What number is missing in the progression?');

  const doProgression = (number, increment) => {
    const tempArray = [];
    let tempNumber = number;
    while (tempArray.length < 10) {
      tempArray.push(tempNumber);
      tempNumber += increment;
    }
    return tempArray;
  };
  const firstNumber = randomNumber(1, 100);
  const increment = randomNumber(1, 10);
  const passNumber = randomNumber(1, 10);
  const tempArray = doProgression(firstNumber, increment);
  const result = tempArray[passNumber - 1];
  tempArray[passNumber - 1] = '..';
  console.log(`Question: ${tempArray.join(' ')}`);

  const answer = readlineSync.question('Your answer: ');

  doCountAnswer(result, answer);
};
