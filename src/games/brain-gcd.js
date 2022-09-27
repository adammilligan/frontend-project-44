#!/usr/bin/env node

import { randomNumberOneToOneHundred } from '../utils.js';
import { doIterations, convertUserAnswerToNumber, makeGcd } from '../index.js';
import hello from '../cli.js';

export default () => {
  const name = hello();
  console.log('Find the greatest common divisor of given numbers.');
  const toGenerateResults = () => {
    const firstOperand = randomNumberOneToOneHundred();
    const secondOperand = randomNumberOneToOneHundred();
    console.log(`Question: ${firstOperand} ${secondOperand}`);
    const result = makeGcd(firstOperand, secondOperand);
    const answer = convertUserAnswerToNumber();
    return {
      result,
      answer,
    };
  };
  doIterations(name, toGenerateResults);
};
