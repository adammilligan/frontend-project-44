#!/usr/bin/env node

import randomNumber from './utils.js';
import { doIterations, youAnswer } from './index.js';
import hello from './cli.js';

export default () => {
  const name = hello();
  const calc = (firstNumber, secondNumber, operation) => {
    let result;
    switch (operation) {
      case '+':
        result = firstNumber + secondNumber;
        break;
      case '-':
        result = firstNumber - secondNumber;
        break;
      case '*':
        result = firstNumber * secondNumber;
        break;
      default:
        result = null;
    }
    return result;
  };
  const callback = () => {
    const firstNumber = randomNumber(1, 100);
    const secondNumber = randomNumber(1, 100);
    const operationsArray = ['+', '-', '*'];
    const randomIndex = Math.floor(Math.random() * operationsArray.length);
    const operation = operationsArray[randomIndex];
    console.log(`Question: ${firstNumber} ${operation} ${secondNumber}`);
    const result = calc(firstNumber, secondNumber, operation);
    const answer = Number(youAnswer());
    return {
      answer,
      result,
    };
  };
  doIterations(name, callback);
};
