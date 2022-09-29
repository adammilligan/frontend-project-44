#!/usr/bin/env node

import readlineSync from 'readline-sync';
import getUser from './cli.js';

export const startGame = (questionString) => {
  console.log(`Question: ${questionString}`);
  return (readlineSync.question('Your answer: ')).toLowerCase();
};

export const doIterations = (comparisonData, gameRules) => {
  const name = getUser();
  console.log(gameRules);
  const numberOfRound = 3;

  for (let i = 0; i < numberOfRound; i += 1) {
    const { result, answer } = comparisonData();
    if (result === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'
Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
