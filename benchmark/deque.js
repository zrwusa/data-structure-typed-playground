const { Deque } = require('data-structure-typed');

const MILLION = 1000000, HUNDRED_THOUSAND = 100000;

console.time(`${MILLION.toLocaleString()} push`);
const deque = new Deque();
for (let i = 0; i < MILLION; i++)
    deque.push(i);
console.timeEnd(`${MILLION.toLocaleString()} push`);

console.time(`${MILLION.toLocaleString()} push & pop`);
deque.clear();
for (let i = 0; i < MILLION; i++)
    deque.push(i);
for (let i = 0; i < MILLION; i++)
    deque.pop();
console.timeEnd(`${MILLION.toLocaleString()} push & pop`);

console.time(`${MILLION.toLocaleString()} push & shift`);
deque.clear();
for (let i = 0; i < MILLION; i++)
    deque.push(i);
for (let i = 0; i < MILLION; i++)
    deque.shift();
console.timeEnd(`${MILLION.toLocaleString()} push & shift`);

console.time(`${HUNDRED_THOUSAND.toLocaleString()} push & shift`);
deque.clear();
for (let i = 0; i < HUNDRED_THOUSAND; i++)
    deque.push(i);
for (let i = 0; i < HUNDRED_THOUSAND; i++)
    deque.shift();
console.timeEnd(`${HUNDRED_THOUSAND.toLocaleString()} push & shift`);

console.time(`Native JS Array ${HUNDRED_THOUSAND.toLocaleString()} push & shift`);
let array = [];
for (let i = 0; i < HUNDRED_THOUSAND; i++)
    array.push(i);
for (let i = 0; i < HUNDRED_THOUSAND; i++)
    array.shift();
console.timeEnd(`Native JS Array ${HUNDRED_THOUSAND.toLocaleString()} push & shift`);

console.time(`${HUNDRED_THOUSAND.toLocaleString()} unshift & shift`);
deque.clear();
for (let i = 0; i < HUNDRED_THOUSAND; i++)
    deque.unshift(i);
for (let i = 0; i < HUNDRED_THOUSAND; i++)
    deque.shift();
console.timeEnd(`${HUNDRED_THOUSAND.toLocaleString()} unshift & shift`);

console.time(`Native JS Array ${HUNDRED_THOUSAND.toLocaleString()} unshift & shift`);
array = [];
for (let i = 0; i < HUNDRED_THOUSAND; i++)
    array.unshift(i);
for (let i = 0; i < HUNDRED_THOUSAND; i++)
    array.shift();
console.timeEnd(`Native JS Array ${HUNDRED_THOUSAND.toLocaleString()} unshift & shift`);
