#!/usr/bin/env node

import { randomNumber, randomNumberOneToOneHundred } from '../utils.js';
import { doIterations, convertUserAnswerToNumber, toCalc } from '../index.js';
import hello from '../cli.js';

export default () => {
  const name = hello();
  const toGenerateResults = () => {
    const firstOperand = randomNumberOneToOneHundred();
    const secondOperand = randomNumberOneToOneHundred();
    const operationsArray = ['+', '-', '*'];
    const randomIndex = randomNumber(0, operationsArray.length - 1);
    const operation = operationsArray[randomIndex];
    console.log(`Question: ${firstOperand} ${operation} ${secondOperand}`);
    const result = toCalc(firstOperand, secondOperand, operation);
    const answer = convertUserAnswerToNumber();
    return {
      answer,
      result,
    };
  };
  doIterations(name, toGenerateResults);
};
