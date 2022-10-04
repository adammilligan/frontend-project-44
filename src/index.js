import readlineSync from 'readline-sync';
import getUser from './cli.js';

export default (generateCondition, gameRule) => {
  const name = getUser();
  const numberOfRound = 3;
  console.log(gameRule);
  for (let i = 0; i < numberOfRound; i += 1) {
    const { result, question } = generateCondition();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ').toLowerCase();
    if (result === answer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${result}"`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
