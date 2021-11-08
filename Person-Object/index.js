// Exercise

let person = {
    name: 'Takaki',
    age: 52,
    isMarried: true,

    homeAddress: {
        long: 44.55,
        lat: 33.44,
    },
    friends: ['Naomi', 'Mieko', 'Kaira'],
}
console.log(person);
console.log(person.name); // Takaki
console.log(person.homeAddress.long); // 44.55
console.log(person.friends[0]); // Naomi
// person.friends.map(v => console.log(v));
person.friends.map(function (v) {
    console.log(v);
});
