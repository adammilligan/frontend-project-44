import randomNumber from './utils.js';

export const calc = (firstNumber, secondNumber, operation) => {
  // TODO: доделать через свитч
  let result;
  if (operation === '+') {
    result = firstNumber + secondNumber;
  } else if (operation === '-') {
    result = firstNumber - secondNumber;
  } else {
    result = firstNumber * secondNumber;
  }
  return result;
};

export const doCalcQuestion = () => {
  const firstNumber = randomNumber(1, 100);
  const secondNumber = randomNumber(1, 100);
  const operationsArray = ['+', '-', '*'];

  const randomIndex = Math.floor(Math.random() * operationsArray.length);
  const operation = operationsArray[randomIndex];

  console.log(`Question: ${firstNumber} ${operation} ${secondNumber}`);

  return {
    firstNumber,
    secondNumber,
    operation,
  };
};
