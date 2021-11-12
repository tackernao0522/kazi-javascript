// Object Maipulation(操作)

const user = {
    name: 'Kazi',
    age: 40,
    isMarried: true
};
// Add
user.email = "kazi@gmail.com";

let key = '1-asd phone'
user[key] = 'asdfdgdsaddff';
user['phone'] = '09061500317';

// UPDATE
user.isMarried = false;
user.age = user.age + 5;

// DELETE
delete user.age;

console.log(user);