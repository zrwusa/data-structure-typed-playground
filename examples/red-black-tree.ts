import {RedBlackTree} from 'data-structure-typed';
import {CostOfLiving, costOfLiving} from '../data/cost-of-living-by-country';



const indexedByRank = new RedBlackTree<CostOfLiving, any,any>(costOfLiving, {
    specifyComparable: node => node.Rank,
    toEntryFn: raw => [raw, undefined]
});

console.log(indexedByRank.size)
console.log('Eggs price', indexedByRank.dfs(node => node?.key?.Country));

