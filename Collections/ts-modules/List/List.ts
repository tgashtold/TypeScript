import { BasicCollection } from '../Collection/BasicCollection';
import { IList } from '../List/IList';
import { LinkedList } from '../LinkedList/LinkedList';
import { NodeElem } from '../LinkedList/NodeElem';

export class List<T> extends BasicCollection<T> implements IList<T> {
	protected linkedList: LinkedList<T> = new LinkedList();

	public append(data: T): T {
		return this.linkedList.addToEnd(data);
	}

	public insert(index: number, elem: T): T {
		let listLength: number = this.getLength();

		if ((!index && index != 0) || index > listLength + 1 || index < 0 || !listLength) {
			throw new Error('Indicated index is beyond list range');
		} else if (index === 0) {
			return this.linkedList.addToBegin(elem);
		} else if (index === listLength + 1) {
			return this.linkedList.addToEnd(elem);
		} else {
			let nodeAfterElem = this.getNodeByIndex(index);
			const nodeToAdd = this.linkedList.createNode(elem);
			const prevNodeForNewEl = nodeAfterElem.prev;

			nodeAfterElem.prev.next = nodeToAdd;
			nodeAfterElem.prev = nodeToAdd;
			nodeToAdd.next = nodeAfterElem;
			nodeToAdd.prev = prevNodeForNewEl;

			this.linkedList.setLength(++listLength);

			return nodeToAdd.value;
		}
	}

	public pop(index?: number | void): T {
		let listLength: number = this.getLength();

		if (index > listLength || index < 0 || !listLength) {
			throw new Error('Indicated index is beyond list range');
		} else if (index === 0) {
			return this.linkedList.deleteFromBegin();
		} else if (!index) {
			return this.linkedList.deleteFromEnd();
		} else {
			let nodeToDelete = this.getNodeByIndex(index);

			nodeToDelete.next.prev = nodeToDelete.prev;
			nodeToDelete.prev.next = nodeToDelete.next;

			this.linkedList.setLength(--listLength);

			return nodeToDelete.value;
		}
	}

	public sort(): void {
		let listLength: number = this.getLength();
		for (let i: number = 0; i < listLength - 1; i++) {
			let startNode = this.linkedList.firstNode;

			for (let j: number = 0; j < listLength - 1 - i; j++) {
				if (startNode.value > startNode.next.value) {
					let temp = startNode.value;
					startNode.value = startNode.next.value;
					startNode.next.value = temp;
				}
				startNode = startNode.next;
			}
		}
	}

	public index(requestedNodeValue: T, startIndex?: number, endIndex?: number): number {
		let listLength: number = this.getLength();
		const nodeValue = requestedNodeValue;
		const startLimit = startIndex;
		const endLimit = endIndex;

		if (startLimit > endLimit || endLimit == 0 || endLimit > listLength - 1 || startLimit < 0) {
			throw new Error('Indicated index is beyond list range');
		}

		if ((!startLimit && !endLimit) || (startLimit == 0 && !endLimit && endLimit != 0)) {
			return this.findNodeIndexByValue(nodeValue, this.linkedList.firstNode, listLength);
		}

		if (startLimit && endLimit) {
			return (
				this.findNodeIndexByValue(nodeValue, this.getNodeByIndex(startLimit), endLimit - startLimit) +
				startLimit
			);
		}

		if (startLimit && !endLimit && startLimit != 0) {
			return (
				this.findNodeIndexByValue(nodeValue, this.getNodeByIndex(startLimit), listLength - startLimit) +
				startLimit
			);
		}

		if (!startLimit && endLimit && endLimit != 0) {
			return this.findNodeIndexByValue(nodeValue, this.linkedList.firstNode, endLimit);
		}
	}

	protected getNodeByIndex(index: number): NodeElem<T> {
		let count: number = 0;
		let nodeWithRequestedIndex = this.linkedList.firstNode;

		while (count < index) {
			nodeWithRequestedIndex = nodeWithRequestedIndex.next;
			count++;
		}

		return nodeWithRequestedIndex;
	}

	protected findNodeIndexByValue(nodeValue: T, startNode: NodeElem<T>, searchRange: number): number {
		let startNodeElem = startNode;

		for (let i: number = 0; i < searchRange; i++) {
			if (startNodeElem.value === nodeValue) {
				return i;
			}

			startNodeElem = startNodeElem.next;
		}

		throw new Error('The List doesn`t contain such element');
	}
}
