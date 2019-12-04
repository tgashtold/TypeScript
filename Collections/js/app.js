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
var NodeElem = /** @class */ (function () {
    function NodeElem(data) {
        this.value = data;
    }
    return NodeElem;
}());
var BasicCollection = /** @class */ (function () {
    function BasicCollection() {
    }
    BasicCollection.prototype.getLength = function () {
        return this.length;
    };
    return BasicCollection;
}());
var List = /** @class */ (function (_super) {
    __extends(List, _super);
    function List() {
        var _this = _super.call(this) || this;
        _this.length = 0;
        return _this;
    }
    List.prototype.addToEnd = function (data) {
        var newNode = new NodeElem(data);
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
        var newNode = new NodeElem(data);
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
}(BasicCollection));
var Stack = /** @class */ (function () {
    function Stack() {
        this._list = new List();
    }
    Stack.prototype.makeArray = function () {
        return this._list.makeArray();
    };
    Stack.prototype.getLength = function () {
        return this._list.getLength();
    };
    Stack.prototype.add = function (data) {
        return this._list.addToBegin(data);
    };
    return Stack;
}());
var Queue = /** @class */ (function () {
    function Queue() {
        this._list = new List();
    }
    Queue.prototype.makeArray = function () {
        return this._list.makeArray();
    };
    Queue.prototype.getLength = function () {
        return this._list.getLength();
    };
    Queue.prototype.add = function (data) {
        return this._list.addToEnd(data);
    };
    return Queue;
}());
var listSample = new List();
listSample.addToBegin(23);
listSample.addToBegin(34);
listSample.addToEnd(555);
listSample.addToBegin(11111);
console.log(listSample.getLength());
console.log(listSample.makeArray());
var stackSample = new Stack();
stackSample.add('a');
stackSample.add('b');
stackSample.add('c');
console.log(stackSample.getLength());
console.log(stackSample.makeArray());
var queueSample = new Queue();
queueSample.add('a');
queueSample.add('b');
queueSample.add('c');
console.log(queueSample.getLength());
console.log(queueSample.makeArray());
