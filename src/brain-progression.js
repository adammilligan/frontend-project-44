#!/usr/bin/env node

import randomNumber from './utils.js';
import { answerProgression, doIterations, youAnswer } from './index.js';
import hello from './cli.js';

export default () => {
  const name = hello();
  answerProgression();
  const doProgression = (number, increment) => {
    const tempArray = [];
    let tempNumber = number;
    while (tempArray.length < 10) {
      tempArray.push(tempNumber);
      tempNumber += increment;
    }
    return tempArray;
  };
  const callback = () => {
    const firstNumber = randomNumber(1, 100);
    const increment = randomNumber(1, 10);
    const passNumber = randomNumber(1, 10);
    const tempArray = doProgression(firstNumber, increment);
    const result = tempArray[passNumber - 1];
    tempArray[passNumber - 1] = '..';
    console.log(`Question: ${tempArray.join(' ')}`);
    const answer = Number(youAnswer());
    return {
      result,
      answer,
    };
  };
  doIterations(name, callback);
};
