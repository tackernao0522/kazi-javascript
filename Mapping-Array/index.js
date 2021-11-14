// ES6 Features : Map

let numbers = [1, 2, 3, 4, 5];
let mulByTwo = [];

for (let num of numbers) {
    mulByTwo.push(num * 2);
}
console.log(mulByTwo); //  [2, 4, 6, 8, 10]

let numbers1 = [1, 2, 3, 4, 5];

const mulByTwo2 = numbers1.map(number => number * 2);
console.log(mulByTwo2); // [2, 4, 6, 8, 10]

let doctor = [
    {name: 'Kazi', age: 40},
    {name: 'Ariyan', age: 30},
    {name: 'Raju', age: 20},
];

const docName = doctor.map(doc => doc.name);
console.log(docName); // ['Kazi', 'Ariyan', 'Raju']

const docName2 = doctor.map(doc => doc.age);
console.log(docName2); // [40, 30, 20]
