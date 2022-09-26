#!/usr/bin/env node

import randomNumber from './utils.js';
import { answerYesNoPrime, doIterations, youAnswer } from './index.js';
import hello from './cli.js';

export default () => {
  const name = hello();
  answerYesNoPrime();
  const isPrimeNum = (num) => {
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  };
  const callback = () => {
    const checkNumber = randomNumber(1, 100);
    console.log(`Question: ${checkNumber}`);
    const result = isPrimeNum(checkNumber);
    const answer = (youAnswer()).toLowerCase();
    return {
      result,
      answer,
    };
  };
  doIterations(name, callback);
};
