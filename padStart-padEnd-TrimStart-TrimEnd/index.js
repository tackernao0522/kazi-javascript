// pad start , pad End // Trim Start, Trim End

let minute = '4';
let hour = '8';

console.log(minute.padStart(4, '0')); // 0004
console.log(minute.padStart(4));     //     4 (３つ分スペース)
console.log(hour.padEnd(5, '0'));    // 80000

let trimname = '   Ariyan   ';

console.log(trimname.length); // 12

// trimname = trimname.trim();
// console.log(trimname.length); // 6

// trimname = trimname.trimStart();
// console.log(trimname.length); // 9

trimname = trimname.trimEnd();
console.log(trimname.length); // 9
