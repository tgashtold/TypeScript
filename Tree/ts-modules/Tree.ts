import {TreeNode} from './TreeNode';

export class Tree<T> {
    protected root: TreeNode<T> | null = null;
    protected maxChildrenQtyForEachNode: number;

    constructor(maxChildrenQty: number) {
        this.maxChildrenQtyForEachNode = maxChildrenQty;
    }

    public add(value: T): void {
        const newNode: TreeNode<T> = new TreeNode(value);

        if (!this.root) {
            this.root = newNode;
        } else {
            const parentNodeForNewNode = this.getNodeWithFreeSpace();

            parentNodeForNewNode.children.push(newNode);
            newNode.parent = parentNodeForNewNode;
        }
    }

    public delete(value: T): TreeNode<T> | null {
        if (!this.root) return null;

        const callBack: Function = (treeNodeValue: T): boolean => {
            return treeNodeValue === value;
        };
        const nodeToDelete: TreeNode<T> | null = this.search(callBack);

        if (nodeToDelete) {
            if (!nodeToDelete.parent) {
                this.root = null;
            } else {
                nodeToDelete.parent.children = nodeToDelete.parent.children.filter(
                    (child) => child.value != nodeToDelete.value);
            }
        }

        return nodeToDelete || null;
    }

    public search(callback: Function): TreeNode<T> | null {
        if (!this.root) return null;

        return this.searchInDepth(callback, this.root);
    }

    public searchAllMatches(callback: Function): Array<TreeNode<T>> {
        const resultArr: Array<TreeNode<T>> = [];

        if (!this.root) return resultArr;

        return this.searchInDepthAll(callback, this.root, resultArr);
    }

    protected searchInDepthAll(
        callback: Function,
        startNode: TreeNode<T>,
        resultArr: Array<TreeNode<T>>
    ): Array<TreeNode<T>> | null {
        let result: Array<TreeNode<T>> = resultArr;

        if (callback(startNode.value)) {
            result.push(startNode);
        } else {
            if (!startNode.children.length) return;

            for (let i: number = 0; i < startNode.children.length; i++) {
                this.searchInDepthAll(callback, startNode.children[i], result);
            }
        }

        return result;
    }

    protected searchInDepth(callback: Function, startNode: TreeNode<T>): TreeNode<T> | null {
        let result: TreeNode<T>;

        if (callback(startNode.value)) {
            result = startNode;
        } else {
            if (!startNode.children.length) return;

            for (let i: number = 0; i < startNode.children.length; i++) {
                result = this.searchInDepth(callback, startNode.children[i]);

                if (result) return result;
            }
        }

        return result || null;
    }

    protected hasMaxChildrenQty(treeNode: TreeNode<T>): boolean {
        return treeNode.children.length === this.maxChildrenQtyForEachNode;
    }

    protected getNodeWithFreeSpace(): TreeNode<T> {
        const nodesArr: TreeNode<T>[] = [];

        nodesArr.push(this.root);

        let currentNode: TreeNode<T> = nodesArr.pop();

        while (currentNode) {
            if (!this.hasMaxChildrenQty(currentNode)) {
                return currentNode;
            } else {
                currentNode.children.forEach((child: TreeNode<T>) => nodesArr.push(child));
                currentNode = nodesArr.shift();
            }
        }
    }
}
