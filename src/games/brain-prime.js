#!/usr/bin/env node

import { randomNumberOnoToOneHundred } from '../utils.js';
import { doIterations, doYouAnswer, isPrimeNum } from '../index.js';
import hello from '../cli.js';

export default () => {
  const name = hello();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const toGenerateResults = () => {
    const checkNumber = randomNumberOnoToOneHundred();
    console.log(`Question: ${checkNumber}`);
    const result = isPrimeNum(checkNumber) ? 'yes' : 'no';
    const answer = (doYouAnswer()).toLowerCase();
    return {
      result,
      answer,
    };
  };
  doIterations(name, toGenerateResults);
};
