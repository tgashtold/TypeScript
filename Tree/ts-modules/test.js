"use strict";
exports.__esModule = true;
var Tree_1 = require("./Tree");
console.log('*****Create tree with 4 children per node');
var treeSample = new Tree_1.Tree(4);
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
function findNodeTest1(value) {
    return value > 10;
}
function findNodeTest2(value) {
    return value === 2;
}
function findNodeTest3(value) {
    console.log(value);
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
