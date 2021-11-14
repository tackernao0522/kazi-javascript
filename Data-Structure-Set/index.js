// ES6 Data Structure : Set (重複している値は除かれる)

let set = new Set();

set.add(100);
set.add(200);
set.add(300);
set.add(100);
console.log(set); // {100, 200, 300}
console.log(set.size); // 3

set.delete(200);
console.log(set); // {100, 300}
console.log(set.size); // 2

for (let el of set) {
    console.log(el);
    // 100
    // 300
}

set.forEach(el => console.log(el));
// 100
// 300

set.clear();
console.log(set); // {size: 0}
