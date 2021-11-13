// Array

const numbers = [12, 13, 14, 17, 18];

// numbers.unshift(9, 10, 11); // [9, 10, 11, 12, 13, 14, 17, 18]
// numbers.push(19, 20, 21); // [9, 10, 11, 12, 13, 14, 17, 18, 19, 20, 21]
numbers.splice(3, 0, 15, 16); // [12, 13, 14, 15, 16, 17, 18] 第二引数はいくつ削除するカウント

console.log(numbers);
