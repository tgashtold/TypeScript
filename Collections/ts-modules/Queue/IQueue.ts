import { ICollection } from '../Collection/ICollection';

export interface IQueue<T> extends ICollection<T> {
	queue(data: T): T;
	dequeue(): T;
}
