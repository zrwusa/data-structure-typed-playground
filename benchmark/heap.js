const {Heap} = require('data-structure-typed');
const { getRandomIntArray } = require('../utils/array.js');

const MILLION = 100000;
const randomArray = getRandomIntArray(MILLION, 0, MILLION - 1, true);
const heap = new Heap();

console.time(`${MILLION.toLocaleString()} add randomly`);
heap.clear();
for (let i = 0; i < randomArray.length; i++) heap.add(randomArray[i]);
console.timeEnd(`${MILLION.toLocaleString()} add randomly`);

console.time(`${MILLION.toLocaleString()} add`);
heap.clear();
for (let i = 0; i < randomArray.length; i++) heap.add(i);
console.timeEnd(`${MILLION.toLocaleString()} add`);

console.time(`${MILLION.toLocaleString()} get`);
for (let i = 0; i < randomArray.length; i++) heap.poll();
console.timeEnd(`${MILLION.toLocaleString()} get`);

