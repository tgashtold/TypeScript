"use strict";
exports.__esModule = true;
var NodeElem_1 = require("./NodeElem");
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.length = 0;
    }
    LinkedList.prototype.addToEnd = function (data) {
        var newNode = this.createNode(data);
        if (!this.length) {
            this._addNodeToEmptyList(newNode);
        }
        else {
            newNode.prev = this.lastNode;
            this.lastNode.next = newNode;
            this.lastNode = newNode;
        }
        ++this.length;
        return newNode.value;
    };
    LinkedList.prototype.addToBegin = function (data) {
        var newNode = this.createNode(data);
        if (!this.length) {
            this._addNodeToEmptyList(newNode);
        }
        else {
            newNode.next = this.firstNode;
            this.firstNode.prev = newNode;
            this.firstNode = newNode;
        }
        ++this.length;
        return newNode.value;
    };
    LinkedList.prototype.deleteFromEnd = function () {
        if (this.length) {
            var nodeToDelete = this.lastNode;
            this.lastNode.prev.next = null;
            this.lastNode = this.lastNode.prev;
            --this.length;
            return nodeToDelete.value;
        }
        return null;
    };
    LinkedList.prototype.deleteFromBegin = function () {
        if (this.length) {
            var nodeToDelete = this.firstNode;
            this.firstNode = nodeToDelete.next;
            this.firstNode.prev = null;
            --this.length;
            return nodeToDelete.value;
        }
        return null;
    };
    LinkedList.prototype.getLength = function () {
        return this.length;
    };
    LinkedList.prototype.setLength = function (length) {
        this.length = length;
    };
    LinkedList.prototype.createNode = function (data) {
        return new NodeElem_1.NodeElem(data);
    };
    LinkedList.prototype._addNodeToEmptyList = function (nodeElem) {
        this.lastNode = nodeElem;
        this.firstNode = nodeElem;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
