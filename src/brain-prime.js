#!/usr/bin/env node

import readlineSync from 'readline-sync';
import randomNumber from './utils.js';
import { doCountAnswer } from './index.js';

export default () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  const isPrimeNum = (num) => {
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  };

  const checkNumber = randomNumber(1, 100);
  console.log(`Question: ${checkNumber}`);
  const result = isPrimeNum(checkNumber);
  const answer = readlineSync.question('Your answer: ');

  doCountAnswer(result, answer);
};
