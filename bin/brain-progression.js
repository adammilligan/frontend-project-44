#!/usr/bin/env node

import readlineSync from 'readline-sync';
import hello from '../src/cli.js';
import randomNumber from '../src/index.js';

const name = hello();
console.log('What number is missing in the progression?');

const doProgression = (number, increment) => {
  const tempArray = [];
  let tempNumber = number;
  while (tempArray.length < 10) {
    tempArray.push(tempNumber);
    tempNumber += increment;
  }
  return tempArray;
};
let i = 0;
while (i < 3) {
  const firstNumber = randomNumber(1, 100);
  const increment = randomNumber(1, 10);
  const passNumber = randomNumber(1, 10);
  const tempArray = doProgression(firstNumber, increment);
  const result = tempArray[passNumber - 1];
  tempArray[passNumber - 1] = '..';
  console.log(`Question: ${tempArray.join(' ')}`);
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
