const { RedBlackTree } = require('data-structure-typed');
const { getRandomIntArray } = require('../utils/array');

const MILLION = 1000000;
const randomArray = getRandomIntArray(MILLION, 0, MILLION - 1, true);
const rbTree = new RedBlackTree();

console.time(`${MILLION.toLocaleString()} add randomly`);
rbTree.clear();
for (let i = 0; i < randomArray.length; i++)
    rbTree.add(randomArray[i]);
console.timeEnd(`${MILLION.toLocaleString()} add randomly`);

console.time(`${MILLION.toLocaleString()} add`);
rbTree.clear();
for (let i = 0; i < randomArray.length; i++)
    rbTree.add(i);
console.timeEnd(`${MILLION.toLocaleString()} add`);

console.time(`${MILLION.toLocaleString()} get`);
for (let i = 0; i < randomArray.length; i++)
    rbTree.get(randomArray[i]);
console.timeEnd(`${MILLION.toLocaleString()} get`);

console.time(`${MILLION.toLocaleString()} getNode`);
for (let i = 0; i < randomArray.length; i++)
    rbTree.getNode(randomArray[i]);
console.timeEnd(`${MILLION.toLocaleString()} getNode`);
