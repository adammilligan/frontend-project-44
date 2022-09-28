#!/usr/bin/env node

import readlineSync from 'readline-sync';

export const doYouAnswer = () => (readlineSync.question('Your answer: ')).toLowerCase();
export const runQuestion = (string) => console.log(`Question: ${string}`);

export const doIterations = (name, comparisonData) => {
  const numberOfRound = 3;
  for (let i = 0; i < numberOfRound; i += 1) {
    const { result, answer } = comparisonData();
    if (result === answer) {
      console.log('Correct!');
      if (i === numberOfRound - 1) {
        console.log(`Congratulations, ${name}!`);
      }
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'
Let's try again, ${name}!`);
      return;
    }
  }
};
