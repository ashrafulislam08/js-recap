const numbers = [10, 20, 30, 40, 50];
console.log(numbers);

// Array Indexing - start from 0 and array length - 1
console.log(numbers[0]);
console.log(numbers[3]);
console.log(numbers[2]);

// Push - add a element in the last index of a array

numbers.push(12);
numbers.push(16);
console.log(numbers);

// Pop - remove last element from a array
numbers.pop();
numbers.pop();
console.log(numbers);

// Concatenation
const fruits = ["aam", "jam", "kathal"];
const flowers = ["golap", "sapla", "beli"];
const numbers2 = [121, 223, 412, 41, 23, 64, 11];

const mixedArray = fruits.concat(flowers, numbers2);
console.log(mixedArray);
console.log(mixedArray.includes("sapla"));
console.log(mixedArray.indexOf(412));

// String to Array
let str = "golap, joba, beli, sapla";
console.log(str.split(","));

// Array to String
const fruits2 = ["aam", "jam", "kathal"];
console.log(fruits2.join(", "));
