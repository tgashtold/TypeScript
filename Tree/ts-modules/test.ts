import {Tree} from './Tree';
import {TreeNode} from './TreeNode';

console.log('*****Create tree with 4 children per node')
const treeSample = new Tree<number>(4);
treeSample.add(1);
treeSample.add(2);
treeSample.add(3);
treeSample.add(4);
treeSample.add(5);
treeSample.add(6);
treeSample.add(7);
treeSample.add(8);
treeSample.add(9);
treeSample.add(10);
treeSample.add(11);
treeSample.add(12);
treeSample.add(13);
treeSample.add(14);
treeSample.add(15);
treeSample.add(16);
console.log(treeSample);

function findNodeTest1(treeNode: TreeNode<number>): boolean {
    return treeNode.value > 10;
}

function findNodeTest2(treeNode: TreeNode<number>): boolean {
    return treeNode.value === 2;
}

function findNodeTest3(treeNode: TreeNode<number>): void {
    console.log(treeNode.value);
}

console.log('*******Nodes searching order (in depth)');
console.log(treeSample.search(findNodeTest3));
console.log('*******Find the node with value = 2');
console.log(treeSample.search(findNodeTest2));
console.log('*******Find the node with value > 10');
console.log(treeSample.search(findNodeTest1));

console.log('*******Find all nodes > 10');
console.log(treeSample.searchAllMatches(findNodeTest1));

console.log('*******Delete node with value 3 (need to uncomment the test code)');
// console.log(treeSample.delete(3));
// console.log(treeSample);