#!/usr/bin/env node

import { randomNumberOnoToOneHundred } from '../utils.js';
import { doIterations, convertUserAnswerToNumber, makeGcd } from '../index.js';
import hello from '../cli.js';

export default () => {
  const name = hello();
  console.log('Find the greatest common divisor of given numbers.');
  const toGenerateResults = () => {
    const firstOperand = randomNumberOnoToOneHundred();
    const secondOperand = randomNumberOnoToOneHundred();
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
