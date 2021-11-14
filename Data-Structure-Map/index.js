// ES6 Data Structure : Map

let map = new Map();

map.set('Mango', 'Ame');
map.set('Banana', 'Kola');
map.set('Score', 100);

console.log(map); // {'Mango' => 'Ame', 'Banana' => 'Kola', 'Score' => 100}

for (let el of map) {
    console.log(el);
}

console.log(map.has('Mango')); // true
console.log(map.has('dsdfs')); // false

map.delete('Banana');
console.log(map); // {'Mango' => 'Ame', 'Score' => 100}

console.log(map.values()); // {'Ame', 100}
console.log(map.keys()); // {'Mango', 'Score'}

map.clear();
console.log(map); // {size: 0}
