// Spread Operators

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(...numbers); // 1 2 3 4 5 6 7 8
console.log(numbers[0], numbers[1]); // 1 2
console.log(numbers); // [1, 2, 3, 4, 5, 6, 7, 8]

const copiedArray = [...numbers];
console.log(copiedArray); // [1, 2, 3, 4, 5, 6, 7, 8]

const num1 = [1, 2, 3];
const num2 = [4, 5, 6];

const num = [...num1, ...num2];
console.log(num); // [1, 2, 3, 4, 5, 6]
