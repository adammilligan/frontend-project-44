#!/usr/bin/env node

import readlineSync from 'readline-sync';
import hello from '../src/cli.js';
import randomNumber from '../src/index.js';

const name = hello();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const doComparison = (checkNumber) => {
  if (checkNumber % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

let i = 0;
while (i < 3) {
  const checkNumber = randomNumber(1, 100);
  console.log(`Question: ${checkNumber}`);
  const result = doComparison(checkNumber);
  const answer = readlineSync.question('Your answer: ');
  if (result === answer.toLowerCase()) {
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
