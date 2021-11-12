// Exercise Total Salary

const salaries = {
    kaze: 2000,
    jackma: 3000,
    jon: 4000,
    ariyan: 5000,
    raju: 6000
}

let sum = 0;

// for (let key in salaries) {
//     console.log(key, salaries[key]);
//     sum += salaries[key];
// }
// console.log(sum); // 2000

console.log(Object.values(salaries));

for (let val of Object.values(salaries)) {
    sum += val;
}
console.log(sum); // 20000
