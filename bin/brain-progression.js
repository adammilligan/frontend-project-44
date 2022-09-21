#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { hello } from '../src/cli.js';
import {randomNumber} from "../src/index.js";

const name = hello ();
console.log('What number is missing in the progression?');

let doProgression = (number , increment) => {
    let tempArray = [];
    let x = 0;
    while (tempArray.length < 10) {
        tempArray.push(number)
        number = number + increment;
    }
    return tempArray;
}
let i = 0;
while (i < 3) {
    let firstNumber = randomNumber(1, 100);
    let increment = randomNumber(1, 10);
    let passNumber = randomNumber(1, 10);
    let tempArray = doProgression(firstNumber, increment)
    let result = tempArray[passNumber - 1];
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