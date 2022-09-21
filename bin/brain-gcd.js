#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { hello } from '../src/cli.js';
import {randomNumber} from "../src/index.js";

const name = hello ();
console.log('Find the greatest common divisor of given numbers.');

let doDivisionArray = (number) => {
    let divisorArray = [];
    for (let j = 0; j <= number; j += 1) {
        if ((number / j) === Math.round(number / j)) {
            divisorArray.push(j);
        }
    }
    return divisorArray;
}

let i = 0;
while (i < 3) {
    let firstNumber = randomNumber(1, 100);
    let secondNumber = randomNumber(1, 100);
    let firstDivisorArray = doDivisionArray(firstNumber);
    let secondDivisorArray = doDivisionArray(secondNumber);
    let tempArray = firstDivisorArray.filter(x => secondDivisorArray.indexOf(x) !== -1);
    let result = Math.max(...tempArray);
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