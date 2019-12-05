"use strict";
exports.__esModule = true;
var LinkedList_1 = require("../LinkedList/LinkedList");
var BasicCollection = /** @class */ (function () {
    function BasicCollection() {
        this.linkedList = new LinkedList_1.LinkedList();
    }
    BasicCollection.prototype.getLength = function () {
        return this.linkedList.getLength();
    };
    BasicCollection.prototype.makeArray = function () {
        var currentNode = this.linkedList.firstNode;
        var listElementsArr = [];
        while (currentNode) {
            listElementsArr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return listElementsArr;
    };
    return BasicCollection;
}());
exports.BasicCollection = BasicCollection;
