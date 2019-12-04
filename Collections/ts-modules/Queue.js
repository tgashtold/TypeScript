"use strict";
exports.__esModule = true;
var List_1 = require("./List");
var Queue = /** @class */ (function () {
    function Queue() {
        this._list = new List_1.List();
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
exports.Queue = Queue;
