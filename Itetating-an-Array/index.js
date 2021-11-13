// Iterating in Array

const numbers = [1, 2, 3, 4, 5];

for (let index = 0; index < numbers.length; index++) {
    console.log((index + 1) + ' : ' + numbers[index]);
};

for (let num of numbers) {
    console.log(num);
};

numbers.forEach(function (num, index) {
    console.log(num, index);
});
