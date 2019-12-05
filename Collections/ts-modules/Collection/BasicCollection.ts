import { LinkedList } from '../LinkedList/LinkedList';
import { NodeElem } from '../LinkedList/NodeElem';
import { ICollection } from './ICollection';

export abstract class BasicCollection<T> implements ICollection<T> {
	protected linkedList: LinkedList<T>;

	public getLength(): number {
		return this.linkedList.getLength();
	}

	public makeArray(): Array<T> {
		let currentNode: NodeElem<T> = this.linkedList.firstNode;
		const listElementsArr: Array<T> = [];

		while (currentNode) {
			listElementsArr.push(currentNode.value);

			currentNode = currentNode.next;
		}

		return listElementsArr;
	}
}
