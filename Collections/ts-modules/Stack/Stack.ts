import { BasicCollection } from '../Collection/BasicCollection';
import { IStack } from '../Stack/IStack';
import { LinkedList } from '../LinkedList/LinkedList';

export class Stack<T> extends BasicCollection<T> implements IStack<T> {
	push(data: T): T {
		return this.linkedList.addToEnd(data);
	}

	pop(): T {
		return this.linkedList.deleteFromEnd();
	}
}
