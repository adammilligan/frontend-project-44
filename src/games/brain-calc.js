#!/usr/bin/env node

import createRandomNumber from '../utils.js';
import startGame from '../index.js';

const MAX_NUMBER = 100;
const MIN_NUMBER = 1;
const operationsArray = ['+', '-', '*'];
const gameRule = 'What is the result of the expression?';

const calc = (firstNumber, secondNumber, operation) => {
  switch (operation) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      throw new Error('Недопустимая операция');
  }
};

export default () => {
  const doCalcExpression = () => {
    const firstOperand = createRandomNumber(MAX_NUMBER, MIN_NUMBER);
    const secondOperand = createRandomNumber(MAX_NUMBER, MIN_NUMBER);
    const randomIndex = createRandomNumber(0, operationsArray.length - 1);
    const operation = operationsArray[randomIndex];
    const result = String(calc(firstOperand, secondOperand, operation));
    return {
      question: `${firstOperand} ${operation} ${secondOperand}`,
      result,
    };
  };
  startGame(doCalcExpression, gameRule);
};
