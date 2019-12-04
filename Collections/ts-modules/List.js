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
var Collection_1 = require("./Collection");
var NodeElem_1 = require("./NodeElem");
var List = /** @class */ (function (_super) {
    __extends(List, _super);
    function List() {
        var _this = _super.call(this) || this;
        _this.length = 0;
        return _this;
    }
    List.prototype.addToEnd = function (data) {
        var newNode = new NodeElem_1.NodeElem(data);
        if (!this.length) {
            this._addNodeToEmptyList(newNode);
        }
        else {
            newNode.prev = this.lastNode;
            this.lastNode.next = newNode;
            this.lastNode = newNode;
        }
        ++this.length;
        return newNode;
    };
    List.prototype.addToBegin = function (data) {
        var newNode = new NodeElem_1.NodeElem(data);
        if (!this.length) {
            this._addNodeToEmptyList(newNode);
        }
        else {
            newNode.next = this.firstNode;
            this.firstNode.prev = newNode;
            this.firstNode = newNode;
        }
        ++this.length;
        return newNode;
    };
    List.prototype.makeArray = function () {
        var currentNode = this.firstNode;
        var listElementsArr = [];
        while (currentNode) {
            listElementsArr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return listElementsArr;
    };
    List.prototype._addNodeToEmptyList = function (nodeElem) {
        this.lastNode = nodeElem;
        this.firstNode = nodeElem;
    };
    return List;
}(Collection_1.BasicCollection));
exports.List = List;
