// JSON Data Format JSON.stringify() = JSONに変換 JSON.parse() = オブジェクトに変換

const user = {
    name: 'Kazi',
    age: 40,
};

const jsonData = JSON.stringify(user);
console.log(JSON.parse(jsonData)); // {name: 'Kazi', age: 40}
console.log(jsonData); // {"name":"Kazi","age":40}
