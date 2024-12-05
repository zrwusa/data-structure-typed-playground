const { Deque } = require('data-structure-typed');


const deque = new Deque([0,1,2,3,4,5,6]);
deque.deleteAt(1)
console.log([...deque])