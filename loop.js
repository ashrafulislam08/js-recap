let numbers = [23, 52, 563, 959, 33, 54];

console.log("------------For of-----------");
for (const number of numbers) {
  console.log(number);
}

console.log("-----------------For --------------");
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
console.log("-----------------While--------------");
let init = 0;
while (init < numbers.length) {
  console.log(numbers[init]);
  init += 1;
}
