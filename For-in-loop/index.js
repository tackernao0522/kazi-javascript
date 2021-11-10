'use strict';

// for..in loop


const objs = {
    name: 'Ariyan',
    age: 40
}

for (let key in objs) {
    console.log(key, objs[key]);
    // name Ariyan
    // age 40
}

let numbers = [1, 2, 3, 4, 5];
console.log(numbers); // [1, 2, 3, 4, 5]

for (let index in numbers) {
    console.log(index, numbers[index]);
    // 0 1
    // 1 2
    // 2 3
    // 3 4
    // 4 5
}

let name = ['takaki', 'naomi', 'mieko'];

for(let index in name) {
    console.log(index, name[index]);
}
