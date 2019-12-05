import { ICollection } from '../Collection/ICollection';

export interface IList<T> extends ICollection<T> {
	insert(index: number, elem: T): T;
	index(nodeValue: T, startLimit?: number, endLimit?: number): number;
	sort(): void;
	append(data: T): T;
}
