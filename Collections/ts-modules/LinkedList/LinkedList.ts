import { NodeElem } from './NodeElem';

export class LinkedList<T> {
	public lastNode: NodeElem<T>;
	public firstNode: NodeElem<T>;
	protected length: number = 0;

	public addToEnd(data: T): T {
		const newNode: NodeElem<T> = this.createNode(data);

		if (!this.length) {
			this._addNodeToEmptyList(newNode);
		} else {
			newNode.prev = this.lastNode;
			this.lastNode.next = newNode;
			this.lastNode = newNode;
		}

		++this.length;

		return newNode.value;
	}

	public addToBegin(data: T): T {
		const newNode: NodeElem<T> = this.createNode(data);

		if (!this.length) {
			this._addNodeToEmptyList(newNode);
		} else {
			newNode.next = this.firstNode;
			this.firstNode.prev = newNode;
			this.firstNode = newNode;
		}

		++this.length;

		return newNode.value;
	}

	public deleteFromEnd(): T {
		if (this.length) {
			const nodeToDelete: NodeElem<T> = this.lastNode;

			this.lastNode.prev.next = null;
			this.lastNode = this.lastNode.prev;

			--this.length;

			return nodeToDelete.value;
		}

		return null;
	}

	public deleteFromBegin(): T {
		if (this.length) {
			const nodeToDelete: NodeElem<T> = this.firstNode;

			this.firstNode = nodeToDelete.next;
			this.firstNode.prev = null;

			--this.length;

			return nodeToDelete.value;
		}

		return null;
	}

	public getLength(): number {
		return this.length;
	}

	public setLength(length: number): void {
		this.length = length;
	}

	public createNode(data: T) {
		return new NodeElem<T>(data);
	}

	protected _addNodeToEmptyList(nodeElem: NodeElem<T>): void {
		this.lastNode = nodeElem;
		this.firstNode = nodeElem;
	}
}
