#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { hello } from '../src/cli.js';
import {randomNumber} from "../src/index.js";

const name = hello ();

let doSolution = (firstNumber, secondNumber, operation) => {
    let result;
    if (operation === '+') {
        result = firstNumber + secondNumber;
    } else if (operation === '-') {
        result = firstNumber - secondNumber;
    } else {
        result = firstNumber * secondNumber;
    }
    return result;
}
let i = 0;
while (i < 3) {
    let firstNumber = randomNumber(1, 100);
    let secondNumber = randomNumber(1, 100);
    let operationsArray = ['+', '-', '*'];
    let rand = Math.floor(Math.random()*operationsArray.length);
    let operation = operationsArray[rand];
    console.log(`Question: ${firstNumber} ${operation} ${secondNumber}`);
    let result = doSolution(firstNumber, secondNumber, operation);
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