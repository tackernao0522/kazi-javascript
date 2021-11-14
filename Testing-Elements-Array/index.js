// Array Method - every(配列内の全ての要素に対してテストを行い、その全ての要素に該当すればtrue。そうでない場合はfalseを返す) , some(配列の中で中で1つでも指定条件に該当するものがあればtrue。そうでない場合はfalseを返す。)

const numbers = [6,8,7,-2,1,9];

const data = numbers.every(function (num) {
    return num > 0;
});
console.log(data); // false

const data2 = numbers.some(function (num) {
    return num > 0;
});
console.log(data2); // true
