import { BST } from 'data-structure-typed';

const bst = new BST<number>();
bst.add(11);
bst.add(3);
bst.addMany([15, 1, 8, 13, 16, 2, 6, 9, 12, 14, 4, 7, 10, 5]);
bst.size === 16;                // true
bst.has(6);                     // true
const node6 = bst.getNode(6);   // BSTNode
bst.getHeight(6) === 2;         // true
bst.getHeight() === 5;          // true
bst.getDepth(6) === 3;          // true

bst.getLeftMost()?.key === 1;   // true

bst.delete(6);
bst.get(6);                     // undefined
bst.isAVLBalanced();            // true
bst.bfs()[0] === 11;            // true
bst.print()
//       ______________11_____
//      /                     \
//   ___3_______            _13_____
//  /           \          /        \
//  1_     _____8____     12      _15__
//    \   /          \           /     \
//    2   4_       _10          14    16
//          \     /
//          5_    9
//            \
//            7

const objBST = new BST<number, { name: string, size: number }>();

objBST.add(11, { "name": "Pablo", "size": 15 });
objBST.add(3, { "name": "Kirk", "size": 1 });

objBST.addMany([15, 1, 8, 13, 16, 2, 6, 9, 12, 14, 4, 7, 10, 5], [
        { "name": "Alice", "size": 15 },
        { "name": "Bob", "size": 1 },
        { "name": "Charlie", "size": 8 },
        { "name": "David", "size": 13 },
        { "name": "Emma", "size": 16 },
        { "name": "Frank", "size": 2 },
        { "name": "Grace", "size": 6 },
        { "name": "Hannah", "size": 9 },
        { "name": "Isaac", "size": 12 },
        { "name": "Jack", "size": 14 },
        { "name": "Katie", "size": 4 },
        { "name": "Liam", "size": 7 },
        { "name": "Mia", "size": 10 },
        { "name": "Noah", "size": 5 }
    ]
);

objBST.delete(11);