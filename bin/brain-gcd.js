#!/usr/bin/env node

import readlineSync from 'readline-sync';
import hello from '../src/cli.js';
import randomNumber from '../src/index.js';

const name = hello();
console.log('Find the greatest common divisor of given numbers.');

const doDivisionArray = (number) => {
  const divisorArray = [];
  for (let j = 0; j <= number; j += 1) {
    if ((number / j) === Math.round(number / j)) {
      divisorArray.push(j);
    }
  }
  return divisorArray;
};

let i = 0;
while (i < 3) {
  const firstNumber = randomNumber(1, 100);
  const secondNumber = randomNumber(1, 100);
  const firstDivisorArray = doDivisionArray(firstNumber);
  const secondDivisorArray = doDivisionArray(secondNumber);
  const tempArray = firstDivisorArray.filter((x) => secondDivisorArray.indexOf(x) !== -1);
  const result = Math.max(...tempArray);
  console.log(`Question: ${firstNumber} ${secondNumber}`);
  const answer = readlineSync.question('Your answer: ');
  if (Number(result) === Number(answer)) {
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
