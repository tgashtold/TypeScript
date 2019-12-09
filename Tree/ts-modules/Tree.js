"use strict";
exports.__esModule = true;
var TreeNode_1 = require("./TreeNode");
var Tree = /** @class */ (function () {
    function Tree(maxChildrenQty) {
        this.root = null;
        this.maxChildrenQtyForEachNode = maxChildrenQty;
    }
    Tree.prototype.add = function (value) {
        var newNode = new TreeNode_1.TreeNode(value);
        if (!this.root) {
            this.root = newNode;
        }
        else {
            var parentNodeForNewNode = this.getNodeWithFreeSpace();
            parentNodeForNewNode.children.push(newNode);
            newNode.parent = parentNodeForNewNode;
        }
    };
    Tree.prototype["delete"] = function (value) {
        if (!this.root)
            return null;
        var callBack = function (treeNodeValue) {
            return treeNodeValue === value;
        };
        var nodeToDelete = this.search(callBack);
        if (nodeToDelete) {
            if (!nodeToDelete.parent) {
                this.root = null;
            }
            else {
                nodeToDelete.parent.children = nodeToDelete.parent.children.filter(function (child) { return child.value != nodeToDelete.value; });
            }
        }
        return nodeToDelete || null;
    };
    Tree.prototype.search = function (callback) {
        if (!this.root)
            return null;
        return this.searchInDepth(callback, this.root);
    };
    Tree.prototype.searchAllMatches = function (callback) {
        var resultArr = [];
        if (!this.root)
            return resultArr;
        return this.searchInDepthAll(callback, this.root, resultArr);
    };
    Tree.prototype.searchInDepthAll = function (callback, startNode, resultArr) {
        var result = resultArr;
        if (callback(startNode.value)) {
            result.push(startNode);
        }
        else {
            if (!startNode.children.length)
                return;
            for (var i = 0; i < startNode.children.length; i++) {
                this.searchInDepthAll(callback, startNode.children[i], result);
            }
        }
        return result;
    };
    Tree.prototype.searchInDepth = function (callback, startNode) {
        var result;
        if (callback(startNode.value)) {
            result = startNode;
        }
        else {
            if (!startNode.children.length)
                return;
            for (var i = 0; i < startNode.children.length; i++) {
                result = this.searchInDepth(callback, startNode.children[i]);
                if (result)
                    return result;
            }
        }
        return result || null;
    };
    Tree.prototype.hasMaxChildrenQty = function (treeNode) {
        return treeNode.children.length === this.maxChildrenQtyForEachNode;
    };
    Tree.prototype.getNodeWithFreeSpace = function () {
        var nodesArr = [];
        nodesArr.push(this.root);
        var currentNode = nodesArr.pop();
        while (currentNode) {
            if (!this.hasMaxChildrenQty(currentNode)) {
                return currentNode;
            }
            else {
                currentNode.children.forEach(function (child) { return nodesArr.push(child); });
                currentNode = nodesArr.shift();
            }
        }
    };
    return Tree;
}());
exports.Tree = Tree;
