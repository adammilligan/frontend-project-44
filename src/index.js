#!/usr/bin/env node

import readlineSync from 'readline-sync';

export const answerYesNoEven = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');
export const answerDivisorNumber = () => console.log('Find the greatest common divisor of given numbers.');
export const youAnswer = () => readlineSync.question('Your answer: ');
export const answerProgression = () => console.log('What number is missing in the progression?');
export const answerYesNoPrime = () => console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

export const doIterations = (name, callback) => {
  let i = 0;

  while (i < 3) {
    const { result, answer } = callback();
    if (result === answer) {
      i += 1;
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'
Let's try again, ${name}!`);
      break;
    }
  }

  if (i === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
