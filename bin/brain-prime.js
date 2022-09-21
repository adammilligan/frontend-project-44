#!/usr/bin/env node

import readlineSync from 'readline-sync';
import hello from '../src/cli.js';
import randomNumber from '../src/index.js';

const name = hello();

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const isPrimeNum = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

let i = 0;
while (i < 3) {
  const checkNumber = randomNumber(1, 100);
  console.log(`Question: ${checkNumber}`);
  const result = isPrimeNum(checkNumber);
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
