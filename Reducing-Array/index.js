// ES6 Feature : Array Method : Reduce

let numbers = [10, 20, 30];

let sum = 0;
for (let num of numbers) {
    sum = sum + num;
}
console.log(sum); // 60

const ReduceSum = numbers.reduce(function (sum, num) {
    return sum + num;
}, 0); // 0はsumの初期値
console.log(ReduceSum); // 60
