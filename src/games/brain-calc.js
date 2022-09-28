#!/usr/bin/env node

import randomNumber from '../utils.js';
import { doIterations, doYouAnswer, runQuestion } from '../index.js';
import getUser from '../cli.js';

const MAX_NUMBER = 100;
const MIN_NUMBER = 1;

const toCalc = (firstNumber, secondNumber, operation) => {
  switch (operation) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      throw console.log('Недопустимая операция');
  }
};

export default () => {
  const name = getUser();
  const comparisonData = () => {
    const firstOperand = randomNumber(MAX_NUMBER, MIN_NUMBER);
    const secondOperand = randomNumber(MAX_NUMBER, MIN_NUMBER);
    const operationsArray = ['+', '-', '*'];
    const randomIndex = randomNumber(0, operationsArray.length - 1);
    const operation = operationsArray[randomIndex];
    runQuestion(`${firstOperand} ${operation} ${secondOperand}`);
    const result = String(toCalc(firstOperand, secondOperand, operation));
    const answer = doYouAnswer();
    return {
      answer,
      result,
    };
  };
  doIterations(name, comparisonData);
};
