// Problem : FizzBuzz
// Take a Number
// If it is divisible by 3, Print Fizz
// If it is divisible by 5 Print Buzz
// If it is divisible by both 3 & 5 print Fizzbuzz
// otherwise, print Nothing

let number = 16;
if (number % 3 === 0 && number % 5 === 0) {
    console.log('Fizzbuzz');
} else if (number % 3 === 0) {
    console.log('Fizz');
} else if (number % 5 === 0) {
    console.log('Buzz');
} else {
    console.log('Nothing');
}
