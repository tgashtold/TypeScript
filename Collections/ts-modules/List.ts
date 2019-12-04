import {BasicCollection} from './Collection';
import {NodeElem} from './NodeElem';

export class List<T> extends BasicCollection<T> {
	constructor() {
		super();
		this.length = 0;
	}

	public addToEnd(data: T): NodeElem<T> {
		const newNode: NodeElem<T> = new NodeElem<T>(data);

		if (!this.length) {
			this._addNodeToEmptyList(newNode);
		} else {
			newNode.prev = this.lastNode;
			this.lastNode.next = newNode;
			this.lastNode = newNode;
		}

		++this.length;

		return newNode;
	}

	public addToBegin(data: T): NodeElem<T> {
		const newNode: NodeElem<T> = new NodeElem<T>(data);

		if (!this.length) {
			this._addNodeToEmptyList(newNode);
		} else {
			newNode.next = this.firstNode;
			this.firstNode.prev = newNode;
			this.firstNode = newNode;
		}

		++this.length;

		return newNode;
	}

	public makeArray(): Array<T> {
		let currentNode: NodeElem<T> = this.firstNode;
		const listElementsArr: Array<T> = [];

		while (currentNode) {
			listElementsArr.push(currentNode.value);

			currentNode = currentNode.next;
		}
		return listElementsArr;
	}

	protected _addNodeToEmptyList(nodeElem: NodeElem<T>): void {
		this.lastNode = nodeElem;
		this.firstNode = nodeElem;
	}
}
