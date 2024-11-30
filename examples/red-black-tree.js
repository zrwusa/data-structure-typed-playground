const { RedBlackTree } = require('data-structure-typed');

function getRandomIntArray(length = 1000, min = -1000, max = 1000, unique = true) {
    if (unique) {
        if (max - min + 1 < length) {
            throw new Error('Range too small for unique values with the specified length');
        }
        const allNumbers = Array.from({ length: max - min + 1 }, (_, i) => i + min);
        for (let i = allNumbers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [allNumbers[i], allNumbers[j]] = [allNumbers[j], allNumbers[i]];
        }
        return allNumbers.slice(0, length);
    }
    else {
        return Array.from({ length }, () => Math.floor(Math.random() * (max - min + 1)) + min);
    }
}
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
