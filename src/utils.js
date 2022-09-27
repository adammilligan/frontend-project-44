export const randomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);
export const randomNumberOnoToTen = () => randomNumber(0, 10);
export const randomNumberOnoToOneHundred = () => randomNumber(0, 100);
