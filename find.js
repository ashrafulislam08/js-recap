const numbers = [23, 5, 5, 32, 66];
const find = 5;
let countFoundedNumber = 0;

for (const number of numbers) {
  if (number === find) {
    countFoundedNumber++;
  }
}

console.log(countFoundedNumber);
