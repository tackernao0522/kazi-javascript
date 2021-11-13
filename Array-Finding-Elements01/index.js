// Finding Elements(Primitive Type)

const numbers = [1, 2, 3, 2, 5, 6, 2, 8];

console.log(numbers.includes(3)); // true
console.log(numbers.includes(300)); // false
console.log(numbers.indexOf(2)); // 1 (初めに含まれているインデックス番号が表示される)
console.log(numbers.lastIndexOf(2)); // 6 (一番最後に含まれているインデックス番号が表示される)
console.log(numbers.includes(3, 4)); // false (3の要素が5番目の要素を先頭にしてあるかどうか)
console.log(numbers.includes(6, 4)); // true (6の要素が5番目の要素を先頭にしてあるかどうか)
