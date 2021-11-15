// Weak Set , Weak Map

const ws = new WeakSet();

const object1 = {};
const object2 = {};

ws.add(object1, 123);
ws.add(object2);

console.log(ws);
// 0: Object
// 1: Object

console.log(ws.has(object1)); // true
console.log(ws.has(object2)); // true

ws.delete(object1);
console.log(ws.has(object1)); // false

const wm = new WeakMap();

wm.set(object1, 123456);
console.log(wm.has(object1)); // true
console.log(wm.get(object1)); //123456
wm.delete(object1);
console.log(wm.has(object1)); // false
