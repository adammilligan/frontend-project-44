#!/usr/bin/env node

import randomNumber from './utils.js';
import { answerYesNoEven, doIterations, youAnswer } from './index.js';
import hello from './cli.js';

export default () => {
  const name = hello();
  answerYesNoEven();
  const doComparison = (checkNumber) => {
    if (checkNumber % 2 === 0) {
      return 'yes';
    }
    return 'no';
  };
  const callback = () => {
    const checkNumber = randomNumber(1, 100);
    console.log(`Question: ${checkNumber}`);
    const result = doComparison(checkNumber);
    const answer = (youAnswer()).toLowerCase();
    return {
      result,
      answer,
    };
  };
  doIterations(name, callback);
};
