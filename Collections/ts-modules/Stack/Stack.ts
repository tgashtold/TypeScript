import { BasicCollection } from '../Collection/BasicCollection';
import { IStack } from '../Stack/IStack';
import { LinkedList } from '../LinkedList/LinkedList';

export class Stack<T> extends BasicCollection<T> implements IStack<T> {
	protected linkedList: LinkedList<T> = new LinkedList();

	push(data: T): T {
		return this.linkedList.addToBegin(data);
	}

	pop(): T {
		return this.linkedList.deleteFromBegin();
	}
}
