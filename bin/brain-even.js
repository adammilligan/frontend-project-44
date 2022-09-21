#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { hello } from '../src/cli.js';

const name = hello();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const doComparison = (checkNumber) => {
    if (checkNumber % 2 === 0) {
        return 'yes';
    } else {
        return 'no';
    }
};

let i = 0;
while (i < 3) {
    let checkNumber = Math.round(Math.random() * 100);
    console.log(`Question: ${checkNumber}`);
    let result = doComparison(checkNumber);
    const answer = readlineSync.question('Your answer: ');
    if (result === answer.toLowerCase()) {
        i += 1;
        console.log('Correct!');
    } else {
        console.log(`'${answer.toLowerCase()}' is wrong answer ;(. Correct answer was '${result}'
Let's try again, ${name}!`);
        break;
    };
}
if (i === 3) {
    console.log(`Congratulations, ${name}!`);
};



