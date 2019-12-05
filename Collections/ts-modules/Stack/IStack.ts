import { ICollection } from '../Collection/ICollection';

export interface IStack<T> extends ICollection<T> {
	push(data: T): T;
	pop(): T;
}
