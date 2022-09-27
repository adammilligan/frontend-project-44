export const randomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);
export const randomNumberOneToTen = () => randomNumber(1, 10);
export const randomNumberOneToOneHundred = () => randomNumber(1, 100);
