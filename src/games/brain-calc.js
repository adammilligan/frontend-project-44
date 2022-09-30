#!/usr/bin/env node

import randomNumber from '../utils.js';
import startGame from '../index.js';

const MAX_NUMBER = 100;
const MIN_NUMBER = 1;
const gameRules = 'What is the result of the expression?';

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
  const expressionResult = () => {
    const firstOperand = randomNumber(MAX_NUMBER, MIN_NUMBER);
    const secondOperand = randomNumber(MAX_NUMBER, MIN_NUMBER);
    const operationsArray = ['+', '-', '*'];
    const randomIndex = randomNumber(0, operationsArray.length - 1);
    const operation = operationsArray[randomIndex];
    const result = String(calc(firstOperand, secondOperand, operation));
    return {
      questionString: `${firstOperand} ${operation} ${secondOperand}`,
      result,
    };
  };
  startGame(expressionResult, gameRules);
};
