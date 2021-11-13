'use strict';
console.log(calcSum(10, 50)); // 可能
function calcSum(number1, number2) {
    let sum = number1 + number2;
    return sum;
}


// Function Expression

// console.log(calSumExp(50, 60)); // エラー
const calSumExp = function(number1, number2) {
    let sum = number1 + number2;
    return sum;
}
console.log(calSumExp(50, 60));
