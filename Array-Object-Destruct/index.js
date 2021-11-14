// ES6 Feature : Array and Object Destructuring

function greeting(user) {
    const { name, age, address } = user;
    const { long, lat } = address;
    console.log(`Hello ${name} and age ${age} from ${long}, ${lat}`);
    // Hello Ariyan and age 40 from 343.343, 2323.23
}

const user = {
    name: 'Ariyan',
    age: 40,
    address: {
        long: 343.343,
        lat: 2323.23,
    },
};

greeting(user);

let [a, b, c, d] = [1, 2, 3, 4];
console.log(a, b, c, d); // 1 2 3 4
