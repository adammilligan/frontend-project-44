#!/usr/bin/env node

import readlineSync from 'readline-sync';
import randomNumber from './utils.js';
import { doCountAnswer } from './index.js';

export default () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const doComparison = (checkNumber) => {
    if (checkNumber % 2 === 0) {
      return 'yes';
    }
    return 'no';
  };

  const checkNumber = randomNumber(1, 100);
  console.log(`Question: ${checkNumber}`);
  const result = doComparison(checkNumber);
  const answer = readlineSync.question('Your answer: ');

  doCountAnswer(result, answer);
};
