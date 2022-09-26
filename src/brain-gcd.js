#!/usr/bin/env node

import randomNumber from './utils.js';
import { answerDivisorNumber, doIterations, youAnswer } from './index.js';
import hello from './cli.js';

export default () => {
  const name = hello();
  answerDivisorNumber();
  const doDivisionArray = (number) => {
    const divisorArray = [];
    for (let j = 0; j <= number; j += 1) {
      if ((number / j) === Math.round(number / j)) {
        divisorArray.push(j);
      }
    }
    return divisorArray;
  };
  const callback = () => {
    const firstNumber = randomNumber(1, 100);
    const secondNumber = randomNumber(1, 100);
    const firstDivisorArray = doDivisionArray(firstNumber);
    const secondDivisorArray = doDivisionArray(secondNumber);
    const tempArray = firstDivisorArray.filter((x) => secondDivisorArray.indexOf(x) !== -1);
    const result = Math.max(...tempArray);
    console.log(`Question: ${firstNumber} ${secondNumber}`);
    const answer = Number(youAnswer());
    return {
      result,
      answer,
    };
  };
  doIterations(name, callback);
};
