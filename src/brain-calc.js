#!/usr/bin/env node

import readlineSync from 'readline-sync';
import hello from './cli.js';
import { calc, doCalcQuestion } from './index.js';

export default () => {
  const name = hello();

  let i = 0;

  while (i < 3) {
    const {
      firstNumber,
      secondNumber,
      operation,
    } = doCalcQuestion();

    const answer = readlineSync.question('Your answer: ');

    const result = calc(firstNumber, secondNumber, operation);

    if (result === answer) {
      i += 1;
      console.log('Correct!');
    } else {
      console.log(`'${answer.toLowerCase()}' is wrong answer ;(. Correct answer was '${result}'
Let's try again, ${name}!`);
      break;
    }
  }

  if (i === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
