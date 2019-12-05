import { NodeElem } from './NodeElem';

export class LinkedList<T> {
	public lastNode: NodeElem<T> | null = null;
	public firstNode: NodeElem<T> | null = null;
	protected length: number = 0;

	public addToEnd(data: T): T {
		const newNode: NodeElem<T> = this.createNode(data);

		if (!this.length) {
			this.addNodeToEmptyList(newNode);
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
			this.addNodeToEmptyList(newNode);
		} else {
			newNode.next = this.firstNode;
			this.firstNode.prev = newNode;
			this.firstNode = newNode;
		}

		++this.length;

		return newNode.value;
	}

	public deleteFromEnd(): T {
		if (this.length === 1) {
			return this.deleteLastNode();
		}

		if (this.length > 1) {
			const nodeToDelete: NodeElem<T> = this.lastNode;

			this.lastNode.prev.next = null;
			this.lastNode = this.lastNode.prev;

			--this.length;

			return nodeToDelete.value;
		}

		return null;
	}

	public deleteFromBegin(): T {
		if (this.length === 1) {
			return this.deleteLastNode();
		}

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

	public createNode(data: T): NodeElem<T> {
		return new NodeElem<T>(data);
	}

	protected addNodeToEmptyList(nodeElem: NodeElem<T>): void {
		this.lastNode = nodeElem;
		this.firstNode = nodeElem;
	}

	protected deleteLastNode(): T {
		const deletedValue: T = this.firstNode.value;

		this.firstNode = this.lastNode = null;

		--this.length;

		return deletedValue;
	}
}
