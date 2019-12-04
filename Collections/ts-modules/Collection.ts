import {NodeElem} from './NodeElem';

export interface Collection<T> {
	makeArray(): Array<T>;
	getLength(): number;
	add?(data?: T): NodeElem<T>;
}

export abstract class BasicCollection<T> implements Collection<T> {
	protected lastNode: NodeElem<T>;
	protected firstNode: NodeElem<T>;
	protected length: number;
	public getLength(): number {
		return this.length;
	}
	abstract makeArray(): Array<T>;
}
