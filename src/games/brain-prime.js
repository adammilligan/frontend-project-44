#!/usr/bin/env node

import randomNumber from '../utils.js';
import { doIterations, doYouAnswer, runQuestion, declareConditionYesOrNo } from '../index.js';
import getUser from '../cli.js';

const MAX_NUMBER = 100;
const MIN_NUMBER = 1;

const isPrimeNum = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export default () => {
  const name = getUser();
  declareConditionYesOrNo();
  const comparisonData = () => {
    const checkNumber = randomNumber(MAX_NUMBER, MIN_NUMBER);
    runQuestion(`${checkNumber}`);
    const result = isPrimeNum(checkNumber) ? 'yes' : 'no';
    const answer = doYouAnswer();
    return {
      result,
      answer,
    };
  };
  doIterations(name, comparisonData);
};
