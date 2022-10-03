#!/usr/bin/env node

import readlineSync from 'readline-sync';
import getUser from './cli.js';

export default (comparisonData, gameRules) => {
  const name = getUser();
  const numberOfRound = 3;
  console.log(gameRules);
  for (let i = 0; i < numberOfRound; i += 1) {
    const { result, questionString } = comparisonData();
    console.log(`Question: ${questionString}`);
    const answer = readlineSync.question('Your answer: ').toLowerCase();
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
