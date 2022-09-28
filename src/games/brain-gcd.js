#!/usr/bin/env node

import randomNumber from '../utils.js';
import { doIterations, doYouAnswer, runQuestion } from '../index.js';
import getUser from '../cli.js';

const MAX_NUMBER = 100;
const MIN_NUMBER = 1;

const makeGcd = (x, y) => {
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

export default () => {
  const name = getUser();
  console.log('Find the greatest common divisor of given numbers.');
  const comparisonData = () => {
    const firstOperand = randomNumber(MAX_NUMBER, MIN_NUMBER);
    const secondOperand = randomNumber(MAX_NUMBER, MIN_NUMBER);
    runQuestion(`${firstOperand} ${secondOperand}`);
    const result = String(makeGcd(firstOperand, secondOperand));
    const answer = doYouAnswer();
    return {
      result,
      answer,
    };
  };
  doIterations(name, comparisonData);
};
