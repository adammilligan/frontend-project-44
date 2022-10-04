import createRandomNumber from '../utils.js';
import startGame from '../index.js';

const maxNumber = 100;
const minNumber = 1;
const operationsArray = ['+', '-', '*'];
const gameRule = 'What is the result of the expression?';

const calc = (firstNumber, secondNumber, operation) => {
  switch (operation) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      throw new Error('Недопустимая операция');
  }
};

export default () => {
  const generateCondition = () => {
    const firstOperand = createRandomNumber(maxNumber, minNumber);
    const secondOperand = createRandomNumber(maxNumber, minNumber);
    const randomIndex = createRandomNumber(0, operationsArray.length - 1);
    const operation = operationsArray[randomIndex];
    const result = String(calc(firstOperand, secondOperand, operation));
    return {
      question: `${firstOperand} ${operation} ${secondOperand}`,
      result,
    };
  };
  startGame(generateCondition, gameRule);
};
