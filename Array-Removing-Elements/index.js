// Removing Elements

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// numbers.shift(); // [2, 3, 4, 5, 6, 7, 8]
// numbers.shift(); // [3, 4, 5, 6, 7, 8]

// numbers.pop(); // [3, 4, 5, 6, 7]
// numbers.pop(); // [3, 4, 5, 6]

numbers.splice(2, 3); // [1, 2, 6, 7, 8]

console.log(numbers);
