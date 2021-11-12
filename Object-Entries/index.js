// Traversing Object Entries

const user = {
    name: 'Kazi',
    age: 40,
    gender: 'Male',
    phone: '343434',
    email: 'kazi@gmail.com'
};

// one way
for (let key in user) {
    console.log(key, user[key]);
    // name Kazi
    // age 40
    // gender Male
    // phone 343434
    // email kazi@gmail.com
}

// two way
console.log(Object.keys(user));
// ['name', 'age', 'gender', 'phone', 'email']
console.log(Object.values(user))
// ['Kazi', 40, 'Male', '343434', 'kazi@gmail.com']

for (let val of Object.values(user)) {
    console.log(val);
    // Kazi
    // 40
    // Male
    // 343434
    // kazi@gmail.com
}