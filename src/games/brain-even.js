#!/usr/bin/env node

import randomNumber from '../utils.js';
import { doIterations, startGame } from '../index.js';

const MAX_NUMBER = 100;
const MIN_NUMBER = 1;

const isEven = (checkNumber) => checkNumber % 2 === 0;

export default () => {
  const comparisonData = () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    const checkNumber = randomNumber(MAX_NUMBER, MIN_NUMBER);
    const answer = startGame(`${checkNumber}`);
    const result = isEven(checkNumber) ? 'yes' : 'no';
    return {
      result,
      answer,
    };
  };
  doIterations(comparisonData);
};
