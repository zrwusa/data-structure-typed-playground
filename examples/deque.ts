import {Deque, LinkedListQueue} from 'data-structure-typed';


const dq = new Deque<number>([5,3,1,2,4]);
dq.indexOf(1)
console.log([...dq.sort((a, b) => a - b)]);
console.log([...dq.reverse()]);
const llq = new LinkedListQueue<number>([5,3,1,2,4]);
llq.indexOf(1);
// console.log([...llq.sort((a, b) => a - b)]);
console.log([...llq.reverse()]);
