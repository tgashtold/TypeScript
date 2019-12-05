"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var BasicCollection_1 = require("../Collection/BasicCollection");
var List = /** @class */ (function (_super) {
    __extends(List, _super);
    function List() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    List.prototype.append = function (data) {
        return this.linkedList.addToEnd(data);
    };
    List.prototype.insert = function (index, elem) {
        var listLength = this.getLength();
        if ((!index && index != 0) || index > listLength + 1 || index < 0 || !listLength) {
            throw new Error('Indicated index is beyond list range');
        }
        else if (index === 0) {
            return this.linkedList.addToBegin(elem);
        }
        else if (index === listLength + 1) {
            return this.linkedList.addToEnd(elem);
        }
        else {
            var nodeAfterElem = this.getNodeByIndex(index);
            var nodeToAdd = this.linkedList.createNode(elem);
            var prevNodeForNewEl = nodeAfterElem.prev;
            nodeAfterElem.prev.next = nodeToAdd;
            nodeAfterElem.prev = nodeToAdd;
            nodeToAdd.next = nodeAfterElem;
            nodeToAdd.prev = prevNodeForNewEl;
            this.linkedList.setLength(++listLength);
            return nodeToAdd.value;
        }
    };
    List.prototype.sort = function () {
        var listLength = this.getLength();
        for (var i = 0; i < listLength - 1; i++) {
            var startNode = this.linkedList.firstNode;
            for (var j = 0; j < listLength - 1 - i; j++) {
                if (startNode.value > startNode.next.value) {
                    var temp = startNode.value;
                    startNode.value = startNode.next.value;
                    startNode.next.value = temp;
                }
                startNode = startNode.next;
            }
        }
    };
    List.prototype.index = function (requestedValue, startIndex, endIndex) {
        var listLength = this.getLength();
        var nodeValue = requestedValue;
        var startLimit = startIndex;
        var endLimit = endIndex;
        if (startLimit > endLimit || endLimit == 0 || endLimit > listLength - 1 || startLimit < 0) {
            throw new Error('Indicated index is beyond list range');
        }
        if ((!startLimit && !endLimit) || (startLimit == 0 && !endLimit && endLimit != 0)) {
            return this.findNodeIndexByValue(nodeValue, this.linkedList.firstNode, listLength);
        }
        if (startLimit && endLimit) {
            return (this.findNodeIndexByValue(nodeValue, this.getNodeByIndex(startLimit), endLimit - startLimit) +
                startLimit);
        }
        if (startLimit && !endLimit && startLimit != 0) {
            return (this.findNodeIndexByValue(nodeValue, this.getNodeByIndex(startLimit), listLength - startLimit) +
                startLimit);
        }
        if (!startLimit && endLimit && endLimit != 0) {
            return this.findNodeIndexByValue(nodeValue, this.linkedList.firstNode, endLimit);
        }
    };
    List.prototype.getNodeByIndex = function (index) {
        var count = 0;
        var nodeWithRequestedIndex = this.linkedList.firstNode;
        while (count < index) {
            nodeWithRequestedIndex = nodeWithRequestedIndex.next;
            count++;
        }
        return nodeWithRequestedIndex;
    };
    List.prototype.findNodeIndexByValue = function (nodeValue, startNode, searchRange) {
        var startNodeElem = startNode;
        for (var i = 0; i < searchRange; i++) {
            if (startNodeElem.value === nodeValue) {
                return i;
            }
            startNodeElem = startNodeElem.next;
        }
        throw new Error('The List doesn`t contain such element');
    };
    return List;
}(BasicCollection_1.BasicCollection));
exports.List = List;
