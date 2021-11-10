// do.. while loop

let index = 100;
while (index <= 5) {
    console.log('Hi Kazi', index); // 出力されない
    index++;
}

let service = 100;
do {
    console.log('Hi udemy', service); // Hi udemy 100と出力される
    service++;
} while (service <= 5);
console.log(service); // 101
