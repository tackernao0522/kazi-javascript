// ES6 : Filtering an Array

let numbers = [1, 2, 3, 4, 5, 6];

let onlyOddNumbers = [];

for (let num of numbers) {
    if (num % 2 === 1) {
        onlyOddNumbers.push(num);
    }
}
console.log(onlyOddNumbers); // [1, 3, 5]

let numbers2 = [1, 2, 3, 4, 5, 6];

let onlyOddNumbers2 = numbers2.filter(num => num % 2 === 1);
console.log(onlyOddNumbers2); // [1, 3, 5]
