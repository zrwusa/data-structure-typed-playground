const { getRandomIntArray } = require('../utils/array');
const {SinglyLinkedList, DoublyLinkedList, Queue, Deque} = require("data-structure-typed");

const MILLION = 1000000;
const randomArray = getRandomIntArray(MILLION, 0, MILLION - 1, true);
const hit = Math.floor(randomArray.length / 2);
let arr = [];
console.log(`

Array starting`);

console.time(`${MILLION.toLocaleString()} push randomly`);
arr = [];
for (let i = 0; i < randomArray.length; i++)
    arr.push(randomArray[i]);
console.timeEnd(`${MILLION.toLocaleString()} push randomly`);

console.time(`${MILLION.toLocaleString()} push`);
arr = [];
for (let i = 0; i < randomArray.length; i++)
    arr.push(i);
console.timeEnd(`${MILLION.toLocaleString()} push`);

console.time(`${MILLION.toLocaleString()} get`);
for (let i = 0; i < randomArray.length; i++)
    arr[hit];
console.timeEnd(`${MILLION.toLocaleString()} get`);

console.time(`${MILLION.toLocaleString()} indexOf`);
    arr.indexOf(randomArray[hit]);
console.timeEnd(`${MILLION.toLocaleString()} indexOf`);

console.time(`${MILLION.toLocaleString()} lastIndexOf`);
    arr.lastIndexOf(randomArray[hit]);
console.timeEnd(`${MILLION.toLocaleString()} lastIndexOf`);

console.time(`${MILLION.toLocaleString()} slice`);
    arr.slice(hit, hit + 3000);
console.timeEnd(`${MILLION.toLocaleString()} slice`);

console.time(`${MILLION.toLocaleString()} splice`);
    arr.splice(hit, hit + 3000, [1, 1, 1]);
console.timeEnd(`${MILLION.toLocaleString()} splice`);


let queue = new Queue();
console.log(`

Queue starting`);

console.time(`${MILLION.toLocaleString()} push randomly`);
queue.clear();
for (let i = 0; i < randomArray.length; i++)
    queue.push(randomArray[i]);
console.timeEnd(`${MILLION.toLocaleString()} push randomly`);

console.time(`${MILLION.toLocaleString()} push`);
queue.clear();
for (let i = 0; i < randomArray.length; i++)
    queue.push(i);
console.timeEnd(`${MILLION.toLocaleString()} push`);

console.time(`${MILLION.toLocaleString()} get`);
for (let i = 0; i < randomArray.length; i++)
    queue.at(hit);
console.timeEnd(`${MILLION.toLocaleString()} get`);

console.time(`${MILLION.toLocaleString()} indexOf`);
    queue.indexOf(randomArray[hit]);
console.timeEnd(`${MILLION.toLocaleString()} indexOf`);

console.time(`${MILLION.toLocaleString()} lastIndexOf`);
    queue.lastIndexOf(randomArray[hit]);
console.timeEnd(`${MILLION.toLocaleString()} lastIndexOf`);

console.time(`${MILLION.toLocaleString()} slice`);
queue.slice(hit, hit + 3000);
console.timeEnd(`${MILLION.toLocaleString()} slice`);

console.time(`${MILLION.toLocaleString()} splice`);
queue.splice(hit, hit + 3000, [1, 1, 1]);
console.timeEnd(`${MILLION.toLocaleString()} splice`);



let deque = new Deque();
console.log(`

Deque starting`);

console.time(`${MILLION.toLocaleString()} push randomly`);
deque.clear();
for (let i = 0; i < randomArray.length; i++)
    deque.push(randomArray[i]);
console.timeEnd(`${MILLION.toLocaleString()} push randomly`);

console.time(`${MILLION.toLocaleString()} push`);
deque.clear();
for (let i = 0; i < randomArray.length; i++)
    deque.push(i);
console.timeEnd(`${MILLION.toLocaleString()} push`);

console.time(`${MILLION.toLocaleString()} get`);
    deque.at(hit);
console.timeEnd(`${MILLION.toLocaleString()} get`);

console.time(`${MILLION.toLocaleString()} indexOf`);
    deque.indexOf(randomArray[hit]);
console.timeEnd(`${MILLION.toLocaleString()} indexOf`);

console.time(`${MILLION.toLocaleString()} lastIndexOf`);
    deque.lastIndexOf(randomArray[hit]);
console.timeEnd(`${MILLION.toLocaleString()} lastIndexOf`);

console.time(`${MILLION.toLocaleString()} slice`);
deque.slice(hit, hit + 3000);
console.timeEnd(`${MILLION.toLocaleString()} slice`);

console.time(`${MILLION.toLocaleString()} splice`);
deque.splice(hit, hit + 3000, [1, 1, 1]);
console.timeEnd(`${MILLION.toLocaleString()} splice`);


let sl = new SinglyLinkedList();
console.log(`

SinglyLinkedList starting`);

console.time(`${MILLION.toLocaleString()} push randomly`);
sl.clear();
for (let i = 0; i < randomArray.length; i++)
    sl.push(randomArray[i]);
console.timeEnd(`${MILLION.toLocaleString()} push randomly`);

console.time(`${MILLION.toLocaleString()} push`);
sl.clear();
for (let i = 0; i < randomArray.length; i++)
    sl.push(i);
console.timeEnd(`${MILLION.toLocaleString()} push`);

console.time(`${MILLION.toLocaleString()} get`);
    sl.at(hit);
console.timeEnd(`${MILLION.toLocaleString()} get`);

console.time(`${MILLION.toLocaleString()} indexOf`);
    sl.indexOf(randomArray[hit]);
console.timeEnd(`${MILLION.toLocaleString()} indexOf`);

console.time(`${MILLION.toLocaleString()} lastIndexOf`);
sl.lastIndexOf(randomArray[hit]);
console.timeEnd(`${MILLION.toLocaleString()} lastIndexOf`);

console.time(`${MILLION.toLocaleString()} slice`);
sl.slice(hit, hit + 3000);
console.timeEnd(`${MILLION.toLocaleString()} slice`);

console.time(`${MILLION.toLocaleString()} splice`);
sl.splice(hit, hit + 3000, [1, 1, 1]);
console.timeEnd(`${MILLION.toLocaleString()} splice`);


let dl = new DoublyLinkedList();
console.log(`

DoublyLinkedList starting`);

console.time(`${MILLION.toLocaleString()} push randomly`);
dl.clear();
for (let i = 0; i < randomArray.length; i++)
    dl.push(randomArray[i]);
console.timeEnd(`${MILLION.toLocaleString()} push randomly`);

console.time(`${MILLION.toLocaleString()} push`);
dl.clear();
for (let i = 0; i < randomArray.length; i++)
    dl.push(i);
console.timeEnd(`${MILLION.toLocaleString()} push`);

console.time(`${MILLION.toLocaleString()} get`);
dl.at(hit);
console.timeEnd(`${MILLION.toLocaleString()} get`);

console.time(`${MILLION.toLocaleString()} indexOf`);
dl.indexOf(randomArray[hit]);
console.timeEnd(`${MILLION.toLocaleString()} indexOf`);

console.time(`${MILLION.toLocaleString()} lastIndexOf`);
dl.lastIndexOf(randomArray[hit]);
console.timeEnd(`${MILLION.toLocaleString()} lastIndexOf`);

console.time(`${MILLION.toLocaleString()} slice`);
dl.slice(hit, hit + 3000);
console.timeEnd(`${MILLION.toLocaleString()} slice`);

console.time(`${MILLION.toLocaleString()} splice`);
dl.splice(hit, hit + 3000, [1, 1, 1]);
console.timeEnd(`${MILLION.toLocaleString()} splice`);

