// Sorting & Reversing an Array

const numbers = [6, 8, 7, 2, 1, 9];

numbers.sort(); // [1, 2, 6, 7, 8, 9]
numbers.reverse(); // [9, 8, 7, 6, 2, 1]

console.log(numbers);

let doctors = [
    { name: 'Kazi', age: 40 },
    { name: 'Ariyan', age: 30 },
];

doctors.sort(function (d1, d2) {
    if (d1.age > d2.age) return +1;
    if (d1.age === d2.age) return 0;
    if (d1.age < d2.age) return -1;
    // {name: 'Ariyan', age: 30}
    // {name: 'Kazi', age: 40}
}).reverse(); // reversにすると元に戻る
console.log(doctors);

