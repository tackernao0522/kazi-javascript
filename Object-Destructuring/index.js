// Object Destructuring

const user = {
    name: 'Kazi',
    age: 40,
    favBook: {
        bookname: 'Think and Grow Rich',
        bookauthor: 'xyz'
    },
};

const {name, age, favBook} = user;
const {bookname, bookauthor} = favBook;

console.log(name);
console.log(age);
console.log(bookname);
console.log(bookauthor);
