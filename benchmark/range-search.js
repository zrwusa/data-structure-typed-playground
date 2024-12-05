const { AVLTree, RedBlackTree } = require('data-structure-typed');
const { getRandomIntArray } = require('../utils/array');

const MILLION = 1000000;
const randomArray = getRandomIntArray(MILLION, 0, MILLION - 1, false);
const avlTree = new AVLTree();
const rbTree = new RedBlackTree();

console.time(`AVL Tree ${MILLION.toLocaleString()} add randomly`);
avlTree.clear();
for (let i = 0; i < randomArray.length; i++)
    avlTree.add(randomArray[i]);
console.timeEnd(`AVL Tree ${MILLION.toLocaleString()} add randomly`);

console.time(`Red-black Tree ${MILLION.toLocaleString()} add randomly`);
rbTree.clear();
for (let i = 0; i < randomArray.length; i++)
    rbTree.add(randomArray[i]);
console.timeEnd(`Red-black Tree ${MILLION.toLocaleString()} add randomly`);

console.time(`AVL Tree ${MILLION.toLocaleString()} rangeSearch`);
console.log(avlTree.getHeight() - avlTree.getMinHeight());
console.log(`isAVLTree ${avlTree.isAVLBalanced()}`);
// for (let i = 0; i < 1000; i++)
    const res = avlTree.rangeSearch([69900, 70000]);
    console.log(res);
console.timeEnd(`AVL Tree ${MILLION.toLocaleString()} rangeSearch`);

console.time(`Red-black Tree ${MILLION.toLocaleString()} rangeSearch`);
console.log(rbTree.getHeight() - rbTree.getMinHeight());
console.log(`isAVLTree ${rbTree.isAVLBalanced()}`);
// for (let i = 0; i < 1000; i++)
    const res1 = rbTree.rangeSearch([69900, 70000])
console.log(res1);
console.timeEnd(`Red-black Tree ${MILLION.toLocaleString()} rangeSearch`);


