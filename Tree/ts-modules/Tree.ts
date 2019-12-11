import { TreeNode } from './TreeNode';

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

	public delete(value: T): T | null {
		if (!this.root) return null;

		const nodeToDelete: TreeNode<T> | null = !this.root
			? null
			: this.searchInDepth((treeNodeValue: T): boolean => {
					return treeNodeValue === value;
				}, this.root);

		if (nodeToDelete) {
			if (!nodeToDelete.parent) {
				this.root = null;
			} else {
				nodeToDelete.parent.children = nodeToDelete.parent.children.filter(
					(child: TreeNode<T>) => child.value != nodeToDelete.value
				);
			}
		}

		return nodeToDelete.value || null;
	}

	public search(callback: Function): T | null {
		if (!this.root) return null;

		const resultNode: TreeNode<T> | null = this.searchInDepth(callback, this.root);

		return resultNode ? resultNode.value : null;
	}

	public searchAllMatches(callback: Function): Array<T> {
		const resultNodesArr: Array<TreeNode<T>> = [];
		let resultValueArr: Array<T> = [];

		if (!this.root) return resultValueArr;

		resultValueArr = this.searchInDepthAll(callback, this.root, resultNodesArr).map((treeNode) => treeNode.value);

		return resultValueArr;
	}

	protected searchInDepthAll(
		callback: Function,
		startNode: TreeNode<T>,
		resultArr: Array<TreeNode<T>>
	): Array<TreeNode<T>> | null {
		const result: Array<TreeNode<T>> = resultArr;

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
