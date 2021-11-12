// Cloning an Object

const user = {
    name: 'Kazi',
    age: 40
};

// const copiedUser = {};
// copiedUser.name = user.name;
// copiedUser.age = user.age


// for (let key in user) {
//     console.log(key, user[key]);
//     // name Kazi
//     // age 40
//     copiedUser[key] = user[key];
// }
const copiedUser = Object.assign({}, user);

console.log(copiedUser); // {name: 'Kazi', age: 40}
console.log(copiedUser === user); // false
