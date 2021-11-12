// Object Methods and This Keyword

const user = {
    name: 'Kazi',
    age: 40,
    isMarried: true,
    friends: ['Ariyan', 'Jhone'],
    selectColor: null,
    calculateAge: function () {
        console.log(`I am ${this.age} Kazi Ariyan`);
    }
};

user.calculateAge();
