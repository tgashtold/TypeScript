"use strict";
exports.__esModule = true;
var List_1 = require("./List");
var Stack = /** @class */ (function () {
    function Stack() {
        this._list = new List_1.List();
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
exports.Stack = Stack;
