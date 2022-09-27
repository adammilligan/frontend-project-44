#!/usr/bin/env node

import readlineSync from 'readline-sync';

export const doYouAnswer = () => (readlineSync.question('Your answer: ')).toLowerCase();
export const convertUserAnswerToNumber = () => Number(readlineSync.question('Your answer: '));

export const doIterations = (name, toGenerateResults) => {
  const winCondition = 3;
  let i = 0;
  for (i; i < winCondition; i += 1) {
    const { result, answer } = toGenerateResults();
    if (result === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'
Let's try again, ${name}!`);
      break;
    }
  }
  if (i === winCondition) {
    console.log(`Congratulations, ${name}!`);
  }
};

export const toCalc = (firstNumber, secondNumber, operation) => {
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
      result = console.log('Недопустимая операция');
  }
  return result;
};

export const doEven = (checkNumber) => checkNumber % 2 === 0;

export const isPrimeNum = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export const doProgression = (number, increment) => {
  const progressionLength = 10;
  const tempArray = [];
  for (let i = number; tempArray.length < progressionLength; i += increment) {
    tempArray.push(i);
  }
  return tempArray;
};

export const makeGcd = (x, y) => {
  let temporaryX = x;
  let temporaryY = y;
  if (temporaryX === 0) {
    return temporaryY;
  }
  while (temporaryY !== 0) {
    if (temporaryX > temporaryY) {
      temporaryX -= temporaryY;
    } else {
      temporaryY -= temporaryX;
    }
  }
  return temporaryX;
};
