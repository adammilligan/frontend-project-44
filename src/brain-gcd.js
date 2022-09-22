#!/usr/bin/env node

import readlineSync from 'readline-sync';
import randomNumber from './utils.js';
import { doCountAnswer } from './index.js';

export default () => {
  console.log('Find the greatest common divisor of given numbers.');

  const doDivisionArray = (number) => {
    const divisorArray = [];
    for (let j = 0; j <= number; j += 1) {
      if ((number / j) === Math.round(number / j)) {
        divisorArray.push(j);
      }
    }
    return divisorArray;
  };

  const firstNumber = randomNumber(1, 100);
  const secondNumber = randomNumber(1, 100);
  const firstDivisorArray = doDivisionArray(firstNumber);
  const secondDivisorArray = doDivisionArray(secondNumber);
  const tempArray = firstDivisorArray.filter((x) => secondDivisorArray.indexOf(x) !== -1);
  const result = Math.max(...tempArray);
  console.log(`Question: ${firstNumber} ${secondNumber}`);
  const answer = readlineSync.question('Your answer: ');

  doCountAnswer(result, answer);
};
