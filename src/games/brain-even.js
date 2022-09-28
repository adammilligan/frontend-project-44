#!/usr/bin/env node

import randomNumber from '../utils.js';
import { doIterations, doYouAnswer, runQuestion } from '../index.js';
import getUser from '../cli.js';

const MAX_NUMBER = 100;
const MIN_NUMBER = 1;

const isEven = (checkNumber) => checkNumber % 2 === 0;

export default () => {
  const name = getUser();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const comparisonData = () => {
    const checkNumber = randomNumber(MAX_NUMBER, MIN_NUMBER);
    runQuestion(`${checkNumber}`);
    const result = isEven(checkNumber) ? 'yes' : 'no';
    const answer = (doYouAnswer());
    return {
      result,
      answer,
    };
  };
  doIterations(name, comparisonData);
};
