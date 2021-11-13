// Finding Object in Array

const doctors = [
    {name: 'Kazi', age: 20},
    {name: 'Jack', age: 30},
    {name: 'Ariyan', age: 40},
];

const result = doctors.find(function (doctor) {
    // return doctor.name === 'Kazi'; // {name: 'Kazi', age: 20}
    return doctor.age > 30; // {name: 'Ariyan', age: 40}
});

console.log(result);
