"use strict";
exports.__esModule = true;
var BasicCollection = /** @class */ (function () {
    function BasicCollection() {
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
