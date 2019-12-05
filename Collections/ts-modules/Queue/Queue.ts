import { BasicCollection } from '../Collection/BasicCollection';
import { IQueue } from '../Queue/IQueue';
import { LinkedList } from '../LinkedList/LinkedList';

export class Queue<T> extends BasicCollection<T> implements IQueue<T> {
	queue(data: T): T {
		return this.linkedList.addToEnd(data);
	}

	dequeue(): T {
		return this.linkedList.deleteFromBegin();
	}
}
