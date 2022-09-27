#!/usr/bin/env node

import { randomNumberOneToOneHundred } from '../utils.js';
import { doIterations, doYouAnswer, doEven } from '../index.js';
import hello from '../cli.js';

export default () => {
  const name = hello();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const toGenerateResults = () => {
    const checkNumber = randomNumberOneToOneHundred();
    console.log(`Question: ${checkNumber}`);
    const result = doEven(checkNumber) ? 'yes' : 'no';
    const answer = (doYouAnswer());
    return {
      result,
      answer,
    };
  };
  doIterations(name, toGenerateResults);
};
