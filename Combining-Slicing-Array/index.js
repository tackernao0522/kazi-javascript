// Array Method - concat, slice

const num1 = [1, 2, 3];
const num2 = [4, 5, 6, 7];

const num = num1.concat(num2);
console.log(num); // [1, 2, 3, 4, 5, 6, 7]

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sliceArray = numbers.slice(3, 6); // インデックス3〜インデックス6の前まで指定
console.log(sliceArray); //[4, 5, 6]
