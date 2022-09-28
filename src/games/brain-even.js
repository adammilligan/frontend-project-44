#!/usr/bin/env node

import randomNumber from '../utils.js';
import {
  doIterations, doYouAnswer, runQuestion, declareConditionYesOrNo,
} from '../index.js';
import getUser from '../cli.js';

const MAX_NUMBER = 100;
const MIN_NUMBER = 1;

const isEven = (checkNumber) => checkNumber % 2 === 0;

export default () => {
  const name = getUser();
  declareConditionYesOrNo();
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
